//////////// JavaScript - Код /////////////
'use strict'
/*
let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budjet_value = document.getElementsByClassName('budjet_value')[0],
	goods_value = document.getElementsByClassName('goods_value')[0],
	items_value = document.getElementsByClassName('items_value')[0],
	employers_value = document.getElementsByClassName('employers_value')[0],
	discount_value = document.getElementsByClassName('discount_value')[0],
	isopen_value = document.getElementsByClassName('isopen_value')[0],

	goods_item = document.getElementsByClassName('goods_item')[0],
	goods_btn = document.getElememntsByTagName('button')[1],
	budjet_btn = document.getElememntsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose_item'),
	time_value = document.querySelector('.time_value'),
	count_budjet_value = document.querySelector('.count_budjet_value'),
	hire_employers_item = document.querySelectorAll('.hire_employers_item');

let money, 
 	price

open.addEventListener('click', () => {
 		 money = prompt('Ваш бюджет?', '');
	while(isNan(money) || money == '' || money == null) { 
		 money = prompt('Ваш бюджет?', '');
	}
	 budjet_value.textContent = money;
	 name_value.textContent = prompt('Название Вашего магазина?', '').toUppercase();
});

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++ ) {
			let a = goods_item[i].value;
			if ((typeof(a)) === 'string' && (typeof(a)) === null && a.length < 50) {
					console.log('Данные введены верно!');
				mainList.shopGoods[i] = a;
				goods_value.textContent = mainList.shopGoods;
				} else {
					i = i - 1;
				}
			}
});

choose_item.addEventListener('change', () => {
	let items = choose_item.value;
			if(isNan(items) && items != '') {
				mainList.shopItems = items.split(', ');   // РАЗДЕЛЯЕТ ЭЛЕМЕНТЫ МАССИВА ЧЕРЕЗ ЗАПЯТУЮ.
				mainList.shopItems.sort(); 

				items_value.textContent = mainList.shopItems;
			}
			//	mainList.shopItems.forEach(function(item, i, arr) {
			//		alert('У нас Вы можете купить: ' + (i + 1) + ' - ' + item);
			//});
});

time_value.addEventListener('change', () => {
	let time = time_value.value;
	if (time < 0) {
				console.log('Такого не может быть!');
				mainList.open == false;
			} else if (time > 9 && time < 21) {
				console.log('Магазин работает!');
				mainList.open == true;
			} else if (time < 24) {
				console.log('Магазин закрыт, откроется завтра в 9:00');
				mainList.open == false;
			} else if {
				console.log('Что-то пошло не так!');
				mainList.open == false;
			} ;

	if(mainList.open == true) {
		isopen.value.style.backgroundColor = 'green';
	} else {
		isopen.value.style.backgroundColor = 'red';
	}
});

budjet_btn.addEventListener('click', () => {
	count_budjet_value.value = money / 30//;
});

employers_btn.addEventListener('click', () => {
	for(let i = 0; i < hire_employers_item.length; i++) {
			let name = hire_employers_item[i].value;
			mainList.employers[i] = name;

		employers_value.textContent += mainList.employers[i] + ', ';
		}
});

let mainList = {
		budjet: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: [],
		//chooseGoods: function chooseGoods() {
		//for (let i = 0; i <= 4; i++ ) {
		//	let a = prompt('Какой тип товара будете продавать?', '');
		//	if ((typeof(a)) === 'string' && (typeof(a)) === null && a!= '' && a.length < 50) {
		//			console.log('Данные введены верно!');
		//		mainList.shopGoods[i] = a;
		//		} else {
		//			i = i - 1;
		//		}
		//	}
		//},
		//workTime: function workTime(time) {
		//	if (time < 0) {
		//		console.log('Такого не может быть!');
		//	} else if (time > 9 && time < 21) {
		//		console.log('Магазин работает!');
		//		mainList.open == true;
		//	} else if (time < 24) {
		//		console.log('Магазин закрыт, откроется завтра в 9:00')
		//	} else if {
		//		console.log('Что-то пошло не так!');
		//	} 
		//},
		//dayBudjet: function dayBudjet() {
		//		alert('Ежедневный бюджет ' + mainList.budjet / 30);
		//},
		makeDiscount: function makeDiscount() {
			if(mainList.discount == true) {
				price = (price / 100) * 80;
			}
		}
		//hireEmployers: function hireEmployers() {
		//	for(let i = 0, i < 4. i++) {
		//		let name = prompt('Имя сотрудника', '');
		//		mainList.employers[i] = name;
		//	}

		//chooseShopItems: function() {
			//let items = prompt('Перечислите через запятую Ваши товары', '');
			//while(!isNan(items) || items == '' items == null) {
			//	items = prompt('Неверно! Перечислите товары через запятую', '')
			//}
			//	mainList.shopItems = items.split(',');   // РАЗДЕЛЯЕТ ЭЛЕМЕНТЫ МАССИВА ЧЕРЕЗ ЗАПЯТУЮ.
			//	mainList.shopItems.push(prompt('Подождите, еще ', ' ')); 
			//	mainList.shopItems.sort(); 
			//	mainList.shopItems.forEach(function(item, i, arr) {
			//		alert('У нас Вы можете купить: ' + (i + 1) + ' - ' + item);
			//});
		//},
};

console.log(mainList);

/////// Возведение в степень /////////
//var num = 33721;
//console.log((3 * 3 * 7 * 2 * 1) ** 3);

var timerId = setTimeout(func, delay, arg1, arg2...) {

};
function func (x, y);
////////     Домашние задания с курсов     //////////
/
function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];
  for(var i = 0; i < classes.length; i++) {
    if(classes[i] == cls) return;
  }
  classes.push(cls);
  obj.className = classes.join(' ');
}
var obj = {
  className: 'open menu'
};

  addClass(obj, 'new');
  addClass(obj, 'open');
  addClass(obj, 'me');
  console.log(obj.className);


function toCamelCase(str) {
  var arr = str.split('-');
  for(var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
  }
  return arr.join('');
}
console.log(toCamelCase('background-color')); 
console.log(toCamelCase('list-style-image')); 
console.log(toCamelCase('-webkit-transition'));

function sum(){
  var result = 0;
  for(var i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(45, 46, 47, 48));

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
function getMaxTasks(object) {
  var name = '';
  var value = 0;
  for(var prop in object) {
    if(object[prop] > value) {
      value = object[prop];
      name = prop;
    }
  }
  return ('Больше всего задач решил/решила ' + name + '.' + ' Им/Ей было решено ' + value + ' задач')
}
console.log(getMaxTasks(tasksCompleted));

function task17() {
  var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
  };
 function multiplyNumeric(obj) {
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && isNumeric(obj[key])) {
        obj[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(image);
  console.log(image);
}

 function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
 
  var arr = [];
  var num;
  var result = 0;
  
  do {
    num = prompt('Введите числа для подсчета', '');
    arr.push(+num);
  } while(num !== '' && isNumeric(num) && num != null)
    
  arr.pop();
  
  for(var key in arr) {
    result += arr[key];
  }
  
  console.log(result);

var numbers = [];
while(true) {
  var value = prompt('Введите число', '')
  if(value === '' || value === null || isNan(value) ) break;
  numbers.push(value);
}  
  var sum = 0;
  for(var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
alert(sum);

function removeClass(obj, cls) {
  var classes = obj.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
  }
  obj.className = classes.join(' ');

}

var obj = {
  className: 'open menu menu'
}

removeClass(obj, 'blabla');
removeClass(obj, 'menu')
alert(obj.className) // open

var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = arr.slice().sort();
console.log(arrSorted);
console.log(arr);

var arr = [1, 2, 3, 4, 5];
function compareRandom(a, b) {
  return Math.random() - 0.5;
}
arr.sort(compareRandom);
alert(arr);

function compareAge(personA, personB) {
  return personA.age - personB.age;
}
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];
people.sort(compareAge);
for(var i = 0; i < people.length; i++) {
  alert(people[0].age)
}

console.log(people);


function unique(arr) {
  var obj = {};
  for(var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
}
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
alert( unique(strings) ); // кришна, харе, 8-()

var calculator = {
  a: 0,
  b: 0,
  read: function () {
    this.a = +prompt('a: ');
    this.b = +prompt('b ');
  },
  sum: function() {return this.a + this.b},
  mul: function() {return this.a * this.b}
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

var ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep();

function Calculator() {

  var methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };

  this.calculate = function(str) {

    var split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}
var calc = new Calculator;
calc.addMethod('*', function(a, b) {
  return a * b;
});
calc.addMethod('/', function(a, b) {
  return a / b;
});
calc.addMethod('**', function(a, b) {  
  return Math.pow(a, b);
});
var result = calc.calculate('2 ** 3');
alert(result);

function User(fullName) {
  this.fullName = fullName;
  Object.defineProperties(this, {
    firstName: {
      get: function() {
        return this.fullName.split(' ')[0];
      },
      set: function(newFirstName) {
        this.fullName = newFirstName + ' ' + this.lastName;
      }
    },
    lastName: {
      get: function() {
        return this.fullName.split(' ')[1];
      },
      set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
      }
    }
  });
}
var vasya = new User('Александр Пушкин');
alert(vasya.firstName);
alert(vasya.lastName);
vasya.lastName = 'Достоевский';
alert(vasya.fullName);

function Article() {
  this.created = new Date();
  Article.count++;
  Article.last = this.created;
}
Article.count = 0;
Article.showStats = function() {
  alert('Всего: ' + this.count + ', Последняя: ' + this.last);
};
new Article();
new Article();
Article.showStats();
newArticle();
Article.showStats();

function sumArgs() {
  return [].reduce.call(arguments, function(a, b){
    return a + b;
  });
}
alert(sumArgs(5, 6, 7));

function work(a) {
  function makeLogging(f, log) {
    function wrapper(a) {
      log.push(a);
      return f.call(this, a);
    }
    return wrapper;
  }
  var log = [];
   work = makeLogging(work, log);
    work(1);
    work(5);
  
  for(var i = 0; i < log.length; i++) {
    alert('Лог: ' + log[i]);
  };
}

//Есть объект из чисел, строк и прочих данных.
//Необходимо его превратить в массив состоящий только из чисел или строк.
//Написать метод extractNumber или extractString, который будет возвращать массив.
/*
var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov'
};
function extractNumber(obj) {
  arr = [];
  for(key in obj) {
    if(!isNaN(+obj[key])) arr.push(obj[key]);
  }
  return arr;
}
function extractString(obj) {
  arr = [];
  for(key in obj) {
    if(isNaN(+obj[key])) arr.push(obj[key]);
  }
  return arr;
}
console.log(extractNumber(obj));
console.log(extractString(obj));
//var ages = [20,30,40];
//var names = ['Ivanov', 'Petrov', 'Sidorov'];

//Необходимо написать функцию, которая будет принимать 
//на вход массив чисел и возвращать самое большое.

function getMaxNumber(array) {
  return Math.max.apply(this, array);
}
console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15

//Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Go to the editor
//Example string: webmaster
//Expected Output: abeemrstw
//Assume punctuation and numbers symbols are not included in the passed string.

function alphaOrder(str) {
  return str.split('').sort().join('');
}
console.log(alphaOrder('webmaster'));

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//Go to the editor
//Example string: the quick brown fox
//Expected Output: The Quick Brown Fox

function getLetFirstUpper(str) {
  var splited = str.split(' ');
  return splited.map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}
console.log(getLetFirstUpper('the quick brown fox'));

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//Go to the editor
//Example string: Web Development Tutorial
//Expected Output: Development
function getLongestWord(str) {
  var arr = str.split(' ');
  var longestWord = '';
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
console.log(getLongestWord('Web Development Tutorial'));

//Write a JavaScript function which accepts an argument and returns the type.
//Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(arg) {
  return typeof arg;
}
console.log(getType(null));
console.log(getType('text'));
console.log(getType(2));
console.log(getType(true));
console.log(getType(this.arguments));
console.log(getType(Array));

//Write a function suffle(arr) to shuffle an array.
function suffle(arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = arr[randomIndex];
    
    arr[randomIndex] = arr[i];
    arr[i] = itemAtIndex;
  }
  return arr;
}
var sortArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(suffle(sortArr));

//Имеется массив css классов со старницы.
//var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
//Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по частоте использования (наиболее часто используемые - впереди).
//Если классы используются одинаковое количество раз - между ними не важно какой будет первее.
//result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
var arr = ['link', 'menu', 'menu__item', 'menu__item',
           'header', 'link', 'footer', 'sidebar', 'link'];
var newArr = [];
for(var i = 0; i < arr.length; i++) {
  if(newArr.indexOf(arr[i] === -1)) {
     newArr.push(arr[i]);
   }
}
console.log(newArr.toString());


///////////////////////////CODEWARS(7q)
7.8
//Let's build a calculator that can calculate the average for an arbitrary number of arguments.
//The test expects you to provide a Calculator object with an average method:
//Calculator.average()
//The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
//It expects Calculator.average(3,4,5) to return 4.

var Calculator = {
  average: function() {
    var args = Array.prototype.slice.call(arguments);
    if(args.length !== 0) {
      var sum = args.reduce(function (sum, current) {
        return sum + current;
      });
      return sum / args.length;
    } else {
      return 0;
    }
  }
};
console.log(Calculator.average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
 
7.1
//Write a single function that can be invoked by either(полиморфная функция, которая может работать и в чейне)
function sum (a, b) {
if(arguments[1] === undefined) {
  return function(b) {
    return a + b;
  };
} else {
  return a + b;
}
}
console.log(sum(2, 3));
console.log(sum(2)(3));

//Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.
//Examples:
//Input: 21445 Output: 54421
//Input: 145263 Output: 654321
//Input: 1254859723 Output: 9875543221

var i = 123456789;
function descendingOrder(a, b) {
  return b - a;
}
var arr = String[i].split('');
arr = arr.sort(descendingOrder).join('');
arr =+ arr;
console.log(descendingOrder);

//7.7 
//You have to create a function named reverseIt.
//Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. 
//If the data is any other type, return it as it is.
//Examples of inputs and subsequent outputs:

//"Hello" -> "olleH"

//"314159" -> "951413"

//[1,2,3] -> [1,2,3]

function reverseIt(data){
var argType = typeof data;
if(argType === 'string' || argType === 'number') {
  return (argType === 'string') ? data.split('').reverse().join('') :
    Number(data.toString().split('').reverse().join(''));
} else {
  return data;
}
}
console.log(reverseIt('Hello'));

6.2
//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence
//"The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram.
//Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  var s = string.toLowerCase();
  var letters = 'zyxwvutsrqponmlkjihgfedcba';
  for(var i = 0; i < letters.length; i++) {
    if(s.indexOf(letters.charAt(i)) == -1) {
      return false;
      }
    }
    return true;
}
var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string));

//6.2
//Given a string, swap the case for each of the letters.
//e.g. CodEwArs --> cODeWaRS

//Examples
//swap ""         `shouldBe` ""
//swap "CodeWars" `shouldBe` "cODEwARS"
//swap "abc"      `shouldBe` "ABC"
//swap "ABC"      `shouldBe` "abc"
//swap "123235"   `shouldBe` "123235"

function swap(str){
var arr = str.split('');
var newArr = [];
for(var i = 0; i < arr.length; i++) {
var char = arr[i];
  if(char === char.toUpperCase()) {
  newArr.push(char.toLowerCase());
  }else {
  newArr.push(char.toUpperCase());
  }
}
return newArr.join('');
}
console.log(swap('CodEwArs'))

function printNumbersInterval() {
	var i = 1;
	var timerId = setInterval(function() {
		console.log(i);
		if(i == 25) clearInterval(timerId);
	}, 500);
}
printNUmbersInterval();

// С использование рекурсии //

function printNumbersTimeOut() {
	var i = 1;
	var timerId = setTimeout(function go() {
		console.log(i);
		if(i < 20) setTimeout(go, 200);
	}, 200);
};
printNumbersTimeOut();

function delay(f, ms) {
	return function() {
		var savedThis = this;
		var savedArgs = arguments;
		setTimeout(function() {
			f.apply(savedThis, savedArgs);
		}, ms);
	}
}
function f(x) {
  alert( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

function debounce(f, ms) {
	let timer = null;
	return function(...args) {
		const onComplete = () => {
			f.apply(this, args);
			timer = null;
		}
		if(timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(onComplete, ms);
	};
}
function f(x) { alert(x) }
let f = debounce(f, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду появится alert(2)

setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения появится alert(4)

function throttle (func, ms) {
	var isThrottle = false;
	savedArgs;
	savedThis;
	function wrapper() {
		if(isThrottle) {
			savedArgs = args;
			savedThis = this;
			return;
		}
		func.apply(this, arguments);
		isThrottle = true;
		setTimeout(function() {
			isThrottle = false;
				if(savedArgs) {
					wrapper.apply(savedThis, savedArgs);
					savedArgs = savedThis = null;
				}
		}, ms);
	}
	return wrapper;
};

var expr = prompt('Введите целое число', '2 * (3 + 2)');
alert(eval(expr));

var expr, res;
while(true) {
	expr = prompt('Введите выражение', '2 -');
	if(expr == null) break;

	try {
		res = eval(expr);
		if(isNaN(res)) {
			throw new Error('Результат неопределен');
		}
		break;
	} catch(e) {
		alert('Ошибка: ' + e.message + ', повторите ввод');
	}
}
alert(res);



//Улучшите готовый код кофеварки, который дан ниже: 
//добавьте в кофеварку публичный метод stop(), который будет останавливать кипячение (через clearTimeout).

function coffeeMachine(power) {
  this.waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var timerId;
  var self = this;
  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  function onReady() {
    alert('Кофе готово!');
  }
  this.run = function() {
    timerId = setTimeOut(onReady, getBoilTime());
  }
  this.stop() {
    clearTimeOut(timerId);
  }
};
var coffeeMachine = new coffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop();
function User() {
  var firstName, surname;
  this.setFirstName = function(newFirstName) {
    firstName = newFirstName;
  };
  this.setSurname = function(newSurname) {
    surname = newSurname;
  }
  this.getFullName = function() {
    return firstName + ' ' + surname;
  }
}
var user = new User(); 
user.setFirstName('Петя');
user.setSurname('Иванов');
alert(user.getFullName());

function coffeMachine(power, capacity) {
  this.setWaterAmount = function(amount) {
    if(amount < 0) {
      throw new Error('Значение должно быть положительным');
    }
    if(amount > capacity) {
      throw new Error('Нельзя налить больше чем ' + capacity);
    }
    waterAmount = amount;
  };
  this.getWaterAmount = function() {
    return waterAmount;
  };
  this.addWater = function(amount) {
    this.setWaterAmount(waterAmount + amount);
  };
  function onReady() {
    alert('Кофе готов!');
  }
  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };
  this.run = function() {
    setTimeout(function() {
      onReady();
    }, getTimeToBoil());
  };
  this.getPower = function() {
    return power;
  };
}
//var coffeeMachine = new CoffeeMachine(100000, 400);
//coffeeMachine.addWater(200);
//coffeeMachine.addWater(100);
//coffeeMachine.addWater(300); // Нельзя залить больше..
//coffeeMachine.run();
var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.run();

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Готов кофе: 150 мл
});

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var timerId;

  this.isRunning = function() {
    return !!timerId;
  };

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {
    if(!this._enabled) {
      throw new Error('Кофеварка выключена!')
      };
      setTimeOut(onReady() 1000);
    //timerId = setTimeout(function() {
     // timerId = null;
     // onReady();
    //}, getTimeToBoil());
  };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});
*/
///Полифили для метода remove(), для старых браузеров.
//<div>Текст</div>
//<div>Текст1</div>
//<div>Текст2</div>
//<script>
if (!Element.prototype.remove) {
	Element.prototype.remove = function() {
		if(this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}
var elem = document.body.children[0];
elem.remove();
//</script>


//Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.
function insertAfter(elem, refelem) {
	var parent = refelem.parentNode;
	var next = refelem.nextSibling;
	if(next) {
		return parent.insertBefore(elem, next);
	} else {
		return parent.apeendChild(elem);
	}
}


//Напишите функцию removeChildren, которая удаляет всех потомков элемента.

function removeChild(elem) {
	while(elem.lastChild) {
		elem.removeChild(elem.lastChild);
	}
}
// Вариант 2

function removeChild(elem) {
	elem.innerHTML = '';
}

//Для IE 8-
function removeChild(elem) {
	try {
		elem.innerHTML = '';
	} catch(e) {
		while(elem.firstChild) {
			elem.removeChild(elem.firstChild);
		}
	}
}

















