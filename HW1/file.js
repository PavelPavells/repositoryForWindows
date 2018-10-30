let budjet = prompt("Ваш бюджет в деньгах");
let name = prompt("Название Вашего магазина");

let mainList = {
	money: budjet,
	nameShop: name,
	shopGoods: [],
	employers: {},
	open: true
}

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");
 
alert(mainList.money / 30);
console.log(mainList);

