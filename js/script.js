'use strict'


////////////////65 Скрипты и время их выполнения//////////
/*
//первый вариант таймера перед выполнением
const timerId = setTimeout(function () {
   console.log('(First).......Hey There!');
}, 2000);

//второй вариант таймера перед выполнением
const timerIdSecond = setTimeout(function (text) {
   console.log(text);
}, 3000, '(Second)....Yeeeeeaaap!^^');


//третий вариант
function logger() {
   console.log('(Third)TexT');
}
const timerIdThird = setTimeout(logger, 3500);
let timerIdFourth,
   iterator = 0;

//Сбросить таймер функции:
clearInterval(timerIdSecond);
///

//таймер с кликом
function secondLogger() {
   if (iterator === 1) {
      clearInterval(timerIdFourth);
   }
   console.log('(Fourth) button was clicked');
   iterator++;
}


const btn = document.querySelector('.fblock__btn');
btn.addEventListener('click', () => {
   timerIdFourth = setInterval(secondLogger, 1200);
})
///
//рекурсивный setTimeout
//разница в том, что кода будет ждать строгий промежуток, тогда как на примерах выше, если код тяжелый и долго грузился, время таймера нарушалось

let id = setTimeout(function log() {
   console.log('recurse timer');
   id = setTimeout(log, 500);
}, 7500);

/*
///////68 Работа с датами//////////

const now = new Date();
const notNow = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset());
console.log(now.setHours(18));
console.log(now);
*/

////71 Окно, Документ///////

/*
const box = document.querySelector('.document__item'),
   docBtn = document.querySelector('.document__button-item');


// const width = box.clientWidth;
//const height = box.clientHeight;
//const width = box.offsetWidth;
//const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

docBtn.addEventListener("click", () => {
   box.style.height = box.scrollHeight + 'px'
   //console.log(box.scrollTop);
});
console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box)
//console.log(style);

console.log(document.documentElement.scrollTop);
*/

///////////74 Mutation observer, Resize observer, contenteditable//////////

/*
const box = document.querySelector('.box__item');

let observer = new MutationObserver(mutationRecords => {
   console.log(mutationRecords);
})
observer.observe(box, {
   childList: true
})
*/
/*
///////////75 Функции-конструкторы////////////

   function User(name, id) {
      this.name = name;
      this.id = id;
      this.presone = true;

      this.hello = function () {              //создал метод
         console.log(`Hello ${this.name}`);
      }
   }

   const make = new User('Madiar', '28')
   const alex = new User('Alexander', '20')
   //console.log(make);
   make.hello()

   //Модифицировать функцию-конструктор:
   User.prototype.exit = function () {
      console.log(`Пользователь ${this.name} вышел`);
   }
   make.exit()
})
*/

/////////77 Контекст вызова функции THIS//////////

//This - то что окружает функцию и в каких условиях она вызывается
/*

   function showThis() {
      //console.log(this);
   }
   showThis()



   function showThis(a, b) {
      //console.log(this);
      function sum() {
         //console.log(this);
         return a + b
      }
      //console.log(sum());
   }
   showThis(4, 5)


   const obj = {
      a: 20,
      b: 15,
      count: function () {
         //console.log(this);
      }
   }
   obj.count()


   function User(name, id) {
      this.name = name;
      this.id = id;
      this.presone = true;

      this.hello = function () {
         console.log(`Hello ${this.name} hwru?`);
      }
   }
   const make = new User('Madiar', '28')
   //make.hello()
   //console.log(make);


   //Установил контекст this для функции sayName:
   function sayName(surname) {
      //console.log(this);
      //console.log(this.name + surname);
   }

   const newUser = {
      name: 'Dovakhin'
   }

   sayName.call(newUser, ' Dragonborn') //этот метод мне нравится больше
   sayName.apply(newUser, ['Dragonborn'])

   //Bind - создает НОВУЮ функцию и под нее подвязывает контекст:
   function count(num) {
      return this * num
   }
   const double = count.bind(2)
   //console.log(double(3));
   //console.log(double(11));


   //1) Обычная функция: this = window, но если стоит 'use strict' то будет undefined
   //2) Контекст у методов объекта - сам объект
   //3) This в конструкторах и классах - это новый экземпляр объекта
   //4) Ручная привязка this: call, apply, bind

   //Примеры:
   const thisBtn = document.querySelector('.this-btn__item');

   //в этом случае(функция не стрелочная, а классический синтаксис) контекст вызова будет сам элемент на котором произошло событие:
   //Если надо вызвать контекст вызова This, то использовать стрелочную функцию ()=> НЕ получится
   thisBtn.addEventListener('click', function () {
      console.log(this);
      this.style.backgroundColor = 'rgb(170, 255, 189)';
   })


   //а у стрелочных функций нет контекста, они ссылаются на родителя!
   const newObj = {
      num: 5,
      sayNumber: function () {
         const say = () => {
            //console.log(this);
         }
         say();
      }

   }
   newObj.sayNumber()


   const newDouble1 = (a) => {
      return a * 2
   }
   //короткая версия записи функции выше, если один аргумент, можно без круглых скобок
   const newDouble2 = (a, b) => a + b * 2

   const newDouble3 = a => a * 2

   console.log(newDouble2(1, 1));
   console.log(newDouble3(11));
*/

/////////////////////78 Классы/////////////////

/*
//Классы - это красивая обертка фуннкций конструкторов

//Прототип класса
class Rectangle {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }
   calcArea() {
      return this.height * this.width
   }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100)
//console.log(square.calcArea());
//console.log(long.calcArea());

//Наследуется от прототипа класса
class ColoredRectangleWidthText extends Rectangle {
   constructor(height, width, text, bgColor) {
      super(height, width);    //вызывает строчки в конструкторе у родителя, чтобы их не копипастить (this.height = height;  и  this.width = width;) всегда идет 1-ой строчкой
      this.text = text;
      this.bgColor = bgColor;
   }
   showMyProps() {
      console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
   }
}

const div = new ColoredRectangleWidthText(25, 10, 'Hello World', 'blue')
//div.showMyProps();
//console.log(div.calcArea());
*/

/*
/////////80 Rest оператор////////

const log = function (a, b, ...rest) {
   console.log(a, b, rest);
}
log('basic - a', 'basic-b', 'rest1', 'rest2', 'rest3')

function calcOrDouble(number, basis = 2) {
   console.log(number * basis);
}
calcOrDouble(3)
*/



//////////////86 Promise/////////////////
/*
console.log('Запрос данных....');


//setTimeout(() => {
//  console.log('Идет подготвка данных...');

//  const product = {
//     name: 'TV',
//    price: 2700
// }
//setTimeout(() => {
//     product.status = 'order'
//    console.log(product);
//  }, 2000);

//}, 2000);


const req = new Promise(function (resolve, reject) {
   setTimeout(() => {
      console.log('Идет подготовка данных...');

      const product = {
         name: 'TV',
         price: 2700
      }

      resolve(product);
   }, 2000);
})

req.then((product) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         product.status = 'order'
         resolve(product)
      }, 2000);
   }).then(data => {
      data.modify = true;
      return data

   }).then(data => {
      console.log(data);
   }).catch(() => {
      console.error('Произошла ошибка')
   }).finally(() => {
      console.log('Finally');
   })
})


const test = time => {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve()
      }, time)
   })
}
//test(1000).then(() => console.log('1000ms'))
//test(2000).then(() => console.log('2000ms'))
//test(3000).then(() => console.log('3000ms'))

//метод Promise.all() - ждет выполнение всех промисов и выполняется
//Promise.all([test(1000),test(2000),test(3000)]).then(()=>{
//   console.log('All');
//})

//метод Promise.race() - выполняет первый отработанный промис
Promise.race([test(1000),test(2000),test(3000)]).then(()=>{
   console.log('All');
})
*/

/*
   /////////87 Fetch API////////
   //набор данных и возможностей который предоставляет готовое решение
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify({ name: 'Alex' }),
      headers: {
         'Content-type': 'application/json'
      }
   })
      .then(response => response.json())
      .then(json => console.log(json))
*/

///////////88 Методы перебора массива///////////
/*
//методы перебора массива в этом уроке, возвращают НОВЫЙ массив (foreach() не возвращает, а просто перебирает)

//filter() - фильтровать элементы массива

const names = ['ivan', 'Ann', 'Ksenia', 'Voldemart'];

//отфильтровать имена до 5 символов:
const shortNames = names.filter((name) => {
   return name.length < 5;
});

//console.log(shortNames);

//map() - изменить каждый элемент внутри массива

const answers = ['IvAn', 'AnnA', 'Hello'];

//привести каждый элемент в нижний регистр:
const result = answers.map(item => {
   return item.toLowerCase()
});

//console.log(result);

//every()/some() - возвращает булиновое значение если все/хотя-бы один элемент соответствует требуемым параметрам

const someArr = ['asd', 5, 7]

//проверить, есть ли хоть одно число в массиве:
//console.log(someArr.some(item => typeof (item) === 'number'));

//проверить, все ли элементы массива - числа:
//console.log(someArr.every(item => typeof (item) === 'number'));


//reduce() - служит для схлопывания(собирания) массива в одно целое

const arr = [4, 5, 1, 3, 2, 6];

//первый аргумент - это счетчик(accumulator), который по умолчанию с нуля, второй перебираемый элемент(current)

//задача получить сумму всех элементов массива:

const res = arr.reduce((sum, curr) => {
   return sum + curr
})

//добавил аргумент начального значения - 100, теперь счетчик(acculator) начинается не с нуля, а со 100:
const res100 = arr.reduce((sum, curr) => {
   return sum + curr
}, 100)

//console.log(res);
//console.log(res100);


const arrStr = ['apple', 'pear', 'plum', 'banana'];

//задача получить строку элементов через запятую:
const resStr = arrStr.reduce((sum, curr) => {
   return `${sum}, ${curr}`
})
//console.log(resStr);


const obj = {
   ivan: 'persone',
   ann: 'persone',
   dog: 'animal',
   cat: 'animal'
}

//задача: вытащить имена людей (persone) из объекта:
const newArr = Object.entries(obj)  //объект преобразуется в массив, где каждое ключ-значение будет отдельным массивчиком
   .filter(item => item[1] === 'persone')  //отфильтровать массивчики где каждый второй элемент будет 'persone
   .map(item => item[0])  //вернуть только имена

console.log(newArr);
*/

///////95 Работа с local storage////

/*
//Передать в локальное хранилище ключ-значение:
//localStorage.setItem('number', 5)

//Получить из локального хранилища значение ключа:
//let a = localStorage.getItem('number')
//console.log(a);

//Удалить из локального хранилища значение:
//localStorage.removeItem('number')

//Полностью очистить локальное хранилище
//localStorage.clear();



const checkBox = document.querySelector('#checkbox'),
   form = document.querySelector('form'),
   change = document.querySelector('#color');


if (localStorage.getItem('isChecked')) {
   checkBox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {
   form.style.backgroundColor = 'red'
}
checkBox.addEventListener('change', () => {
   localStorage.setItem('isChecked', true)
})


change.addEventListener('click', () => {
   if (localStorage.getItem('bg') === 'changed') {
      localStorage.removeItem('bg')
      form.style.backgroundColor = '#fff'
   } else {
      localStorage.setItem('bg', 'changed')
      form.style.backgroundColor = 'red'
   }
})


const persone = {
   name: 'Alex',
   age: 25
}

const savePersone = JSON.stringify(persone)
localStorage.setItem(persone.name, savePersone)

console.log(JSON.parse(localStorage.getItem(persone.name)));
*/

