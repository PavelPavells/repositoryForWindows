var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');
chai.use(chaiHttp);
suite('Functional Tests', function() {
    suite('GET /api/stock-prices => stockData object', function() {
      test('1 stock', function(done) {
       chai.request(server)
        .get('/api/stock-prices')
        .query({ stock: 'goog' })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'stockData');
          assert.equal(res.body.stockData.stock, 'GOOG');
          assert.property(res.body.stockData, 'price');
          assert.equal(res.body.stockData.likes, 0);
          done();
        });
      });
      test('1 stock with like', function(done) {
        chai.request(server)
          .get('/api/stock-prices')
          .query({ stock: 'goog', like: true })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.property(res.body, 'stockData');
            assert.equal(res.body.stockData.stock, 'GOOG');
            assert.property(res.body.stockData, 'price');
            assert.equal(res.body.stockData.likes, 1);
            done();
          })
      });
      test('1 stock with like again (ensure likes arent double counted)', function(done) {
        chai.request(server)
          .get('/api/stock-prices')
          .query({ stock: 'goog', like: true })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.property(res.body, 'stockData');
            assert.equal(res.body.stockData.stock, 'GOOG');
            assert.property(res.body.stockData, 'price');
            assert.equal(res.body.stockData.likes, 1);
            done();
          })
      });
      test('2 stocks', function(done) {
        chai.request(server)
          .get('/api/stock-prices')
          .query({ stock: ['goog', 'msft'] })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.property(res.body, 'stockData');
            assert.isArray(res.body.stockData);
            assert.equal(res.body.stockData.length, 2);
            assert.equal(res.body.stockData[0].stock, 'GOOG');
            assert.property(res.body.stockData[0], 'price');
            assert.equal(res.body.stockData[0].rel_likes, '1');
            assert.equal(res.body.stockData[1].stock, 'MSFT');
            assert.property(res.body.stockData[1], 'price');
            assert.equal(res.body.stockData[1].rel_likes, '-1');
            done();
          })
      });   
      test('2 stocks with like', function(done) {
        chai.request(server)
          .get('/api/stock-prices')
          .query({ stock: ['goog', 'msft'], like: true })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.property(res.body, 'stockData');
            assert.isArray(res.body.stockData);
            assert.equal(res.body.stockData.length, 2);
            assert.equal(res.body.stockData[0].stock, 'GOOG');
            assert.property(res.body.stockData[0], 'price');
            assert.equal(res.body.stockData[0].rel_likes, '0');
            assert.equal(res.body.stockData[1].stock, 'MSFT');
            assert.property(res.body.stockData[1], 'price');
            assert.equal(res.body.stockData[1].rel_likes, '0');
            done();
          })
      });   
    });
});