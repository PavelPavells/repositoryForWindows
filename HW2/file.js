let budjet, name, time 
 
function start() {
	 budjet = prompt("Ваш бюджет");

	 while(isNaN(money) || money == " " || money == null) {
	 	budjet = prompt("Ваш бюджет");
	 }

	 name = prompt("Название Вашего магазина").toUpperCase();
	 time = 21;
}

start();

let mainList = {
	money: budjet,
	nameShop: name,
	shopGoods: [],
	employers: {},
	open: true
}

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === "string" && (typeof(a)) !=null && a != undefined ) {
	console.log("Все верно");
	mainList.shopGoods[i] = a;
} else {
	i = i - 1;
}

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");
 
alert(mainList.money / 30);
console.log(mainList);
};
