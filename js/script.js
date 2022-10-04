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

