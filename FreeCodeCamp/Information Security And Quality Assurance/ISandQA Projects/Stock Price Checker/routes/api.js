'use strict';
var expect = require('chai').expect;
var MongoClient = require('mongodb');
var fetch = require('node-fetch');
var dbConnection;
function connectToDb() {
  if (!dbConnection) {
    dbConnection = MongoClient.connect(process.env.DB, { useNewUrlParser: true });
  }
  return dbConnection;
}
module.exports = function (app) {
  app.route('/api/stock-prices')
    .get(function (req, res, next) {
      var { like, stock: stockStr } = req.query;
      if (Array.isArray(stockStr)) {
        stockStr = stockStr.join(',');
      }
      fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stockStr}&types=price`)
        .then(res => res.json())
        .then(json => {
          connectToDb()
            .then((client) => {
              var db = client.db('stock-price-checker');
              Promise.all(Object.keys(json).map((stock) => {
                var { price } = json[stock];
                var update = like
                  ? { $addToSet: { likes: req.ip }, $set: { price } }
                  : { $set: { price } };
                return db.collection('stocks').findOneAndUpdate(
                  { stock },
                  update,
                  { returnOriginal: false, upsert: true },
                )
                  .then((doc) => {
                    var likes = Object.prototype.hasOwnProperty.call(doc.value, 'likes')
                      ? doc.value.likes.length
                      : 0;
                    return { stock, price, likes };
                  })
                  .catch((err) => Promise.reject(err));
              }))
                .then((stocks) => {
                  if (stocks.length === 1) {
                    return res.json({ stockData: stocks[0] });
                  }
                  return res.json({
                    stockData: [
                      { 
                        stock: stocks[0].stock,
                        price: stocks[0].price,
                        rel_likes: stocks[0].likes - stocks[1].likes,
                      },
                      {
                        stock: stocks[1].stock,
                        price: stocks[1].price,
                        rel_likes: stocks[1].likes - stocks[0].likes,
                      },
                    ],
                  });
                })
                .catch((err) => Promise.reject(err));
            })
        })
        .catch(next);
    });  
};