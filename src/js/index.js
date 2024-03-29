//Простейший коллбэк:
/*
function first(lang, callback) {
   console.log(`Hi! Iam learnin ${lang}`);
   callback()
}

function cb() {
   console.log(`I've passed this lesson`);
}

//Здесь записал вызов функцию без скобочек, это из-за того что в функции first указал вызов коллбэка
first('JS', cb)
*/
////////////////////////


//const { response } = require("express");

//Деструктуризация:
/*
const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      background: 'red'
   },
   step1: {
      one: 1,
      step2: {
         uno: 1,
         dos: 2,
         step3: {
            bir: 1,
            eki: 2,
            yush: 3,
            step4: {
               quatro: 4
            }
         }
      }
   },
   makeTest: function () { console.log('Test'); }
}

//КАК ПЕРЕБРАТЬ ОБЪЕКТ В ОБЪЕКТЕ!!!!:
for (let key in options) {
   if (typeof (options[key]) === 'object') {
      for (let i in options[key]) {
         //console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      }
   } else {
      //console.log(`Свойство ${key} имеет значение ${options[key]}`);
   }

}
// Метод Object.keys показывает ключи в массиве (можно например длину объекта так посмотреть)
//console.log(Object.keys(options));

//Методы можно самому в объекте писать, вот пример:
options.makeTest()

//ДЕСТРУКТУРИЗАЦИЯ:
//по сути это присваивание куска объекта в переменные (причем можно не в одну)

const { border, background } = options.colors
//console.log(background);

const { eki, yush } = options.step1.step2.step3
//console.log(yush);

const { quatro } = options.step1.step2.step3.step4
console.log(quatro);
*/

//Передача по ссылке или по значению/Spread оператор
/*

//В этом примере все ок:
let a = 5,
   b = a;

b = b + 5
//console.log(b);
//console.log(a);

//Чуть усложним:
const obj = {
   a: 5,
   b: 1
}

//Таким образом копия не создается, а значение передается по ссылке
const copy = obj;
copy.a = 10

//console.log(copy);
//console.log(obj);

const numbers = {
   a: 1,
   b: 2,
   c: 3
}

const numbers2 = {
   d: 4,
   e: 5,
   f: 6
}

//Object.assign - слияние объектов
//console.log(Object.assign(numbers, numbers2));

const clone = Object.assign({}, numbers)
const clone2 = { ...numbers }
clone.b = 20;

//console.log(numbers);
//console.log(clone);

//Клонирование массива:
const oldArr = ['a', 'b', 'c']
//const newArr = oldArr                  // Это не пойдет, потому что изменяю newArr изменится и oldArr
const newArr = oldArr.slice()    //Копия
const newArr2 = [...oldArr]      //Копия
newArr[1] = 'B2'

//console.log(newArr);
//console.log(oldArr);

const video = ['youtube', 'vimeo', 'tik-tok']
messengers = ['telegram', 'whatsapp', 'signal']
const apps = [...video, ...messengers];

//Оказца Spread оператор еще можно использовать так:

function show(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

let nums = [1, 2, 3]

show(...nums)
*/

/*
const personalPlanPeter = {
   name: "Peter",
   age: "30",
   skills: {
      languages: ['kz', 'eng', 'ua'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month'
   },
   showAgeAndLangs: (plan) => {
      let langs = plan.skills.languages
      let langStr = `Мне ${plan.age} и я владею языками: `
      for (let i of langs) {
         langStr += `${i.toUpperCase()} `
      }
      console.log(langStr)
   }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter)

function showExperience(plan) {
   const { exp } = plan.skills
   console.log(exp);
}
showExperience(personalPlanPeter)


function showProgrammingLangs(plan) {
   const { programmingLangs } = plan.skills
   const arr = Object.keys(programmingLangs)
   let result = ''

   if (arr.length > 0) {
      for (let i in programmingLangs) {
         result += `Язык ${i} изучен на ${programmingLangs[i]}\n`
      }
   } else result = ''
   console.log(result);
}

showProgrammingLangs(personalPlanPeter)
*/

/* Debugger
function hello() {
   console.log('Hello World');
}
hello()

function sayHi() {
   let name = 'Mak'
   console.log(`Hi ${name}!`);
}
sayHi()

const arr = [1, 14, 11, 30, 55, 7, 10, 6]
const sorted = arr.sort(compareNum)

function compareNum(a, b) {
   return a - b
}
console.log(sorted);
*/

////MUTATION OBSERVER & RESIZE:
/*
const box = document.querySelector('.box')

//создаем обсервер
let observer = new MutationObserver(MutationRecords => {
   console.log(MutationRecords);
})

//теперь если что-то изменяется, то надо доложить об этом:
observer.observe(box, {
   childList: true
}, console.log(box.clientHeight))
*/

///ФУНКЦИИ КОНСТРУКТОРЫ:
/*
function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true

   //также можно прописать какие-то методы:
   this.hello = function () {
      console.log(`Hello ${this.name}`);
   }
}

const vano = new User('Ivan', 28)
const alex = new User('Alexander', 58)

console.log(vano);
console.log(alex);

//вызов метода:
alex.hello()

//Также вот, я создал метод вне функции конструктора, с помощью prototype
User.prototype.exit = function () {
   console.log(`Пользователь ${this.name} дал по съебам`);
}
vano.exit()
//Важное замечание! Сейчас функции конструкторы уже не пишут, а пользуются классами (так называемый синтаксический сахар, но под капотом у классов именно Ф.К)
*/

//Контекст вызова THIS:
/*
//Обычная функция. This = window. Но если стоит 'use strict', то undefined
function showThis() {
   console.log(this);
}
//showThis()

function showThis2(a, b) {
   function sum() {
      console.log(this);
      //return this.a + this.b //такой код не сработает пушто даже функция внутри функции даст undefined, надо использовать замыкание 
      return a + b
   }
   console.log(sum());
}
//showThis2(2, 3)


//Если использовать МЕТОД внутри ОБЪЕКТА, то КОНТЕКСТЫ ВЫЗОВА будет ссылаться на ОБЪЕКТ
const obj = {
   a: 20,
   b: 15,
   sum: function () {
      console.log(this);
   }
}

//obj.sum()


//В этом же случае, когда вызываю контекст вызова функции внутри метода НЕ СРАБОТАЕТ, пушто вызываю контекст вызова в простой функции!
const obj2 = {
   a: 20,
   b: 15,
   sum: function () {
      function shout() {
         console.log(this);
      }
      shout()
   }
}

//obj2.sum()

//Внутри функции конструктора и классах THIS ссылается на новый экземпляр объекта!

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;

   //Даже если методы в нем будут, все равно будут ссылаться на только что созданный объект
   this.hello = function () {
      console.log(`Hello ${this.name}`);
   }


}
let make = new User('Makenchlen', 28)

//Ручная привязка контекста вызова:

const obj3 = {
   name: 'John',
   surname: 'Travoltah',
   sex: 'male',
}

//Как отобразить в консоле контекст вызова объекта созданного выше?
function sayName(age) {
   console.log(this);
   console.log(this.name);
   console.log(this.sex + age);
}
//Для этого есть 2 метода! CALL и APPLY
//sayName.call(obj3)
//sayName.apply(obj3)
//Теперь ФУНКЦИЯ приобрела контекст вызова ОБЪЕКТА!

//В чем разница между этими двумя методами? Если использую аргумент в функции, то меняется синтаксис
//sayName.call(obj3, '18')  //здесь, в методе CALL, аргумент через запятую
//sayName.apply(obj3, ['19']) //здесь, в методе APPLY, аргументы в массиве

//Но есть еще 3 метод присвоение контекста функции - BIND

function count(num) {
   console.log(this * num);
}

//BIND - создает новую функцию
const double = count.bind(2)
//Таким образом я забиндил новый контекст ПОД НОВОСОЗДАННУЮ ФУНКЦИЮ double
//double(3)


//Как выглядит на странице все это дело
//обычная кнопка:
const btn = document.querySelector('button')

//КОНТЕКСТОМ ВЫЗОВА на событиях при ОБЫЧНОЙ ФУНКЦИИ будет САМ ЭЛЕМЕНТ (по сути event.target)
btn.addEventListener('click', function () {
   //console.log(this);
   this.style.background = 'red'
})

//У СТРЕЛОЧНОЙ ФУНКЦИИ нет своего КОНТЕКСТА ВЫЗОВА, ОН БЕРЕТСЯ У РОДИТЕЛЯ!

//Разбираем этот пример:
const obj4 = {
   num: 5,
   sayNumber: function () {
      const say = () => {
         console.log(this);
      }
      say()
   }
}
//Стрелочная функция say не имеет своего родителя, идем к родителю
//Родитель - Метод объекта, контекст вызова метода объекта - САМ ОБЪЕКТ
//Соответственно результатом будет сам объект! 

obj4.sayNumber()
*/

//КЛАССЫ
/*
//Классы - это по сути синтаксический сахар для функци конструктора(Функции-Конструкторы разбирал выше на (231 строке)
//Таким образом, можно легко делать "прототипы" для объектов.

//Должен начинаться с большой буквы
class Rectangle {
   constructor(height, width) {
      this.height = height; //Свойство объекта
      this.width = width;  //Свойство объекта
   }
   calcArea() {   //Метод объекта
      return this.width * this.width
   }
}
//Класс готов, попробую его использовать:
const square = new Rectangle(10, 10)
//console.log(square);
console.log(square.calcArea());

const box = document.querySelector('.box')
//box.style.width = square.calcArea() + 'px'


//Также свойства классов, можно наследовать, класс созданный ниже coloredRectangle будет наследовать свойства класса выше Rectangle
class ColoredRectangle extends Rectangle {
   constructor(height, width, color, bgColor) {
      super(height, width); //Вызывает те же свойства что у родителя (класса Rectangle), super() всегда идет первой строчкой
      this.color = color;
      this.bgColor = bgColor
   }

   showMyProps() {
      console.log(`Цвет текста: ${this.color}, Бэкграунд: ${this.bgColor}`);
   }
}

class RectangleText extends ColoredRectangle {
   constructor(height, width, color, bgColor, text) {
      super(height, width, color, bgColor);
      this.text = text
   }
}

const firstVersion = new RectangleText(100, 100, 'red', '#cfffa9', 'imaText')
//Как вижу, методы тоже наследуются:
firstVersion.showMyProps()

box.style.backgroundColor = firstVersion.bgColor
box.innerHTML = firstVersion.text
box.style.height = firstVersion.height + 'px'
box.style.width = firstVersion.width + 'px'
*/

//AJAX. Разбираю XMLHttpRequest на двух инпутах:
const inputKzt = document.getElementById('kzt'),
   inputUsd = document.getElementById('usd');

//Назначаю обработчик события input
inputKzt.addEventListener('input', () => {
   //теперь надо сделать запрос на сервер
   const request = new XMLHttpRequest();
   //Как вижу это тот же самый объект, со своими методами

   //Вызываю метод open, который собирает настройки для запроса, принимает аргументы(метод запроса, урл, 
   //async - отвечает за асинхронный код стоит по умолчанию, login, password (некоторые действия выполняются только при авторизации))
   request.open('GET', 'js/test.json')

   //теперь надо донастроить запрос на сервак, дело в том что когда отправляю запрос, надо четко указать
   //какая это информация, в чем она закодирована и т.п, для этого используются заголовки

   //пока использую заголовок для передачи json файлов:
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8')

   //все приготовления закончены, теперь отпраляю сам запрос:
   request.send()

   //теперь работаю с ответом





   //событие load срабатывает когда запрос готов:
   request.addEventListener('load', () => {
      if (request.status === 200) {  //Если мой статус запроса 200 (Ок!)
         // console.log(request.response);

         //Отлично, в консольке вижу свой джсон файл, теперь эти данные надо преобразовать в обычный объект:
         const data = JSON.parse(request.response)
         //Ну все! Данные для работы с гет-запросом готовы!

         //Теперь напишую простецкую логику для курса валют:
         inputUsd.value = (+inputKzt.value / data.current.usd).toFixed(2)

      } else { //А если что-о пошло не так, надо уведомить пользователя
         inputUsd.value = 'Что-то пошло не так :('
      }
   })
})


//Самостоятельная практика XMLHttpRequest:
const testBtn = document.getElementById('test__button'),
   testInput = document.getElementById('test__input');


testBtn.addEventListener('click', () => {

   const request = new XMLHttpRequest();
   request.open('GET', 'http://localhost:3001/test');
   request.setRequestHeader('Content-type', 'text/html; charset=utf-8');
   request.send();

   request.addEventListener('load', () => {
      if (request.status === 200) testInput.value = request.response;
      else testInput.value = 'Придется сходить нахуй';
   })
})
//Успешно!

//POST запросы в XMLHTTPRequest:

const message = {
   loading: 'Загрузка',
   success: 'Успешно!',
   failure: 'Придется сходить нахуй :('
}
/*
const form = document.querySelector('.ajax-post__form')
let formName, formPhone
function postData(form) {
   form.addEventListener('submit', (e) => {
      e.preventDefault();


      //////////////Блок кода чтоб создать элемент на странице{
      const statusMessage = document.createElement('div')
      statusMessage.textContent = message.loading;
      form.append(statusMessage)
      /////////////////////////////////////}


      const xhr = new XMLHttpRequest();

      //Ну как обычно, два аргумента по дефолту метод запроса и урл:
      xhr.open('POST', 'datapost');

      //Также как и GET запросах, сейчас тоже надо настроить заголовки:
      //Но есть нюансы, если у меня формдата, то заголовок настраивать не обязательно или въебать multipart/form-data
      //Я использую Json и поэтому заголовок для джейсона юзаю
      xhr.setRequestHeader('Content-type', 'application/json')

      //Объект FormData позволяет удобнее работать с формами Html
      //нужен для того чтобы не перебирать все инпуты, и облегчить работу с данными формы
      const formData = new FormData(form);


      //////////////////////Блок кода чтобы данные с FormData в Джейсон ебануть{
      const object = {}

      //Перебор формдаты и помещение ее в объект
      formData.forEach((value, key) => {
         object[key] = value
      })

      //Парсю из ОБЪЕКТА в JSON
      const json = JSON.stringify(object)
      ///////////////////////}

      //Все, отправляю запрос:
      xhr.send(json)

      xhr.addEventListener('load', () => {
         //второе условие это особенность моего сервака, мол если он отправляет hi, то все ок делай что надо!
         if (xhr.status === 200 && xhr.response === 'hi') {
            console.log(object);
            statusMessage.textContent = message.success;
         } else statusMessage.textContent = message.failure;
      })
   })
}
postData(form)
*/
//PROMISES (ПРОМИСЫ)
/*

//Объект Promise помогает с асинхронными вычислениями, асинхронными запросами на сервер

//Напишу пример с асинхронным кодом:
console.log('Запрос данных...');

//setTimeout(() => {
//console.log('Подготовка данных...');

//const product = {
//   name: 'TV',
//   price: 145000
//};

//setTimeout(() => {

// product.status = 'order';
// console.log(product);

//}, 2000);


//}, 2000);
//Пример выше конечно не callback-hell, но пойдет, теперь давай напишу его на промисах



//создаю объект промиса и во внутрь помещаю функцию с двумя аргументами, обычно это resolve и reject
//по простому resolve - когда операция завершилась успешно, reject не успешно
const req = new Promise(function (resolve, reject) {

   setTimeout(() => {
      console.log('Подготовка данных...');

      const product = {
         name: 'TV',
         price: 145000
      };

      //resolve - все успешно
      //И ВАЖНЫЙ МОМЕНТ, теперь данные надо заретёрнить, чтобы в следующих цепочках с ними работать
      //просто нужные данные помещаю в аргумент resolve
      resolve(product)
   }, 2000);

});
//Метод then выполянется, в случае положительного исхода, это функция resolve() которую я написал выше.
req.then((product) => {
   //console.log(`Данные о ${product.name} получены...`);
})

req.then((product) => {
   setTimeout(() => {

      product.status = 'order';
      //console.log(product);

   }, 2000);

})

//А если после тех манипуляций, мне надо сделать еще какие-то действия?
//цепочка then
req.then((product) => {

   return new Promise((res, rej) => {
      product.description = 'new promise';
      res(product);
   })

}).then(data => {
   //также могу замодифицировать данные:
   data.modify = true
   return data
}).then(data => {
   console.log(data);
}).catch(() => {
   //Catch - для отлавливания ошибок, обычно прописывается в конце
   //Если что-то пошло не так, или я прописал прямую ошибку, то все then пропускаются и запускается блок кода catch
   console.error('Произошла ошибка')
}).finally(() => {
   //метод finally - запускается в конце независимо были ошибки или нет
   console.log('Цепочка завершена');
})
*/
/*
//Также есть еще 2 метода, про которые  мало кто знает
const test = time => {
   return new Promise(resolve => {

      setTimeout(() => {
         resolve()
      }, time);

   })
}
//test(1000).then(() => console.log('1000ms'))
//test(2000).then(() => console.log('2000ms'))

//Promise.all принимает в себя массив с промисами, который я могу потом массово обработать
//Он ждет пока все промисы которые указал в массиве выполнятся, а потом выполняет операцию
//Promise.all([test(1000), test(2000)])
//   .then(() => console.log('All'))


//Второй метод Promise.race - какой из промисов выполнится первым, в таком случае и выполняем нужную операцию
//Если Promise.all ждал пока все промисы выполнится, то Promise.race начинает работать когда правильно сработал первый промис
Promise.race([test(1000), test(2000)])
   .then(() => console.log('Первый нах'))
*/

//FETCH API

//fetch('/test')
/////////////////////////////У фетча есть свои методы, и метод .json() аналогичен JSON.parse()
//   .then(response => response.json())
//   .then(json => console.log(json))

const object = {
   name: 'Alex',
   age: '28'
}

//А как настроить собсна запрос?, коллбэком после урла, есть методы еще но 2 основных это method и body
//Ну и заголовки надо прописать

fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: JSON.stringify(object),
   headers: {
      'Content-type': 'application/json'
   }

})
   .then(response => response.json())
//.then(json => console.log(json))

//А теперь, перепишу ка я свой пост запрос с xhr на fetch нахуй и чтоб формдата была!

//ну получаю формочку
const form = document.querySelector('.ajax-post__form')


function postData(form) {
   form.addEventListener('submit', async (e) => {
      e.preventDefault();


      //////////////Блок кода чтоб создать элемент на странице{
      const statusMessage = document.createElement('div')
      statusMessage.textContent = message.loading;
      form.append(statusMessage)
      /////////////////////////////////////}

      const formData = new FormData(form);

      //Объект чтобы формдату в нем перебрать
      const object = {}

      //Перебор формдаты и помещение ее в объект
      formData.forEach((value, key) => {
         object[key] = value
      })


      fetch('/datapost', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify({
            object
         })
      })
         .then(data => data.json())
         .then(data => {
            document.querySelector('.ajax__text').innerHTML = JSON.stringify(data)
            console.log(data);
         })
         .catch(err => console.error(err))
         .finally(form.reset())
   })
}
postData(form)


/////////Еще раз к Promise так как не все понял!
/*
let b = new Promise(function (resolve, reject) {
   //Аргументы resolve и reject по сути являются функциями

   setTimeout(() => {
      resolve(a = 99) //Теперь что конкретно мне нужно дождаться? новое значение переменной a - закинь ее в функцию resolve
   }, 2000)
   //Resolve - это функция когда код выше завершится удачно!

})
b.then(function () {
   //console.log(a);
})



console.log('Request data...');


let simulation = new Promise((resolve, reject) => {

   setTimeout(() => {
      console.log('Preparing data...');

      const backendData = {
         server: 'aws',
         port: 3001,
         status: 'working'
      }

      resolve(backendData)
   }, 2000)

})
simulation.then(data => console.log(`Current Data:`, data))
*/

/*
//ТЕПЕРЬ ТО ЧТО МНЕ БЫЛО НЕПОНЯТНО!!
//Зачем мне второй промис? А то что ответ ко второму промису и первому может быть разный
//Я могу уже с другими данными работать во втором промисе!


//Внутри метода then
simulation.then(data => {

   //я создаю новый промис
   const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
         //изменяю тут какие-то данные
         data.modyfied = true
         //ну и возвращаю их
         resolve(data)
      }, 2000)
   })
   //Теперь могу работать как с измененнымы данными (объекта backendData), так и с первоначальной версией моего объекта!
   p2.then(updateData => {
      console.log('Data has been updated', updateData)
   })

})
*/


//Но все равно ебучие коллбэки! Как их сократить?
//Просто не помещай в переменную свой второй промис, а сразу возвращай его!
//Я пишу тот же код что и выше, просто чутка его переделаю!
/*
simulation.then(data => {

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         data.update = true
         resolve(data)
      }, 2000)
   })
})
   .then(updateData => {
      console.log('Data has been updated', updateData)
      //Также прям тут могу еще поработать с этими данными:
      updateData.newPropertyFrom = 'Promise'
      //И просто возвращаю
      return updateData
   })
   .then(data =>
      //Ну и выведу очередное обновление объекта:
      console.log('New Data Updating!', data)
   )
   //Метод catch который отлавливает ошибки, по сути это то, что передаю в функцию reject()
   .catch(err => console.error(`Error: `, err))

   //Метод finally который срабатывает в конце промисов, независимо были ли ошибки или нет:
   .finally(() => console.log('Finally'))
   */

//Круто, наконе пришло понимание. Теперь напишу собственный промис
/*
console.log('Запрос данных...');

const myPromise = new Promise((resolve, reject) => {

   setTimeout(() => {
      const backendData = {
         server: 'aws',
         port: 3001,
         status: 'working'
      }
      resolve(backendData)
   }, 2000);

})
myPromise.then(data => console.log('Данные получены', data))

myPromise.then(data => {

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         data.update = 1

         resolve(data)
      }, 2000);
   })

}
).then(updateData => {
   console.log('В объект был добавлен новый ключ', updateData)

   updateData.update = 2

   return updateData
}).then(modifiedData => {
   console.log('Обновленный ключ был изменен', modifiedData)
   return modifiedData
})
   .then(data => {
      data.update = 3
      return data
   }).then(data => console.log(data))
   */


//МЕТОДЫ ПЕРЕБОРА МАССИВОВ

//Метод filter()

const names = ['Cucurella', 'Kante', 'Chilwell', 'Mount', 'Arrizabalaga']

const shortNames = names.filter(function (name) {
   return name.length < 9
})

//console.log(shortNames);

//Метод map()

const answers = ['CuCureLLA', 'kante', 'CHILwell', 'Mount', 'ARRIZABALAGA']

const result = answers.map(function (item) {
   return item.toLowerCase()
})

//console.log(result);

//Методы every/some
//Возвращает булиновое значение, every - каждый элемент массива, some - хотяб один элемент массива

const someArr = ['4', 'str', 'asd']
//console.log(someArr.some((i) => typeof (i) === 'number'));
//console.log(someArr.every((i) => typeof (i) === 'string'));

//МЕТОД reduce()

const nums = [4, 5, 1, 3, 5, 6, 7, 11]

const res = nums.reduce((sum, current) => {
   return sum + current
}, 3)
//console.log(res);

const eat = ['apple', 'fish', 'meat', 'watermelon']

const resEat = eat.reduce((sum, current) => {
   return `${sum}, ${current}`
},)
//console.log(resEat);


const obj = {
   ivan: 'persone',
   ann: 'persone',
   dog: 'animal',
   cat: 'animal'
}

const newArr = Object.entries(obj)
   .filter((item) => item[1] === 'persone')
   .map((item) => item[0])
console.log(newArr);
