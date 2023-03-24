/* /////////Упражнения на переборы массива/////////

const films = [
   {
      name: 'Titanic',
      rating: 9
   },
   {
      name: 'Die hard 5',
      rating: 5
   },
   {
      name: 'Matrix',
      rating: 8
   },
   {
      name: 'Some bad film',
      rating: 4
   }
];


function showGoodFilms(arr) {
   const goodFilms = arr.filter(item => item.rating > 7)
   //console.log(goodFilms);
}
showGoodFilms(films)


function showListOfFilms(arr) {
   const strFilms = arr.map((item) => item.name)
      .reduce((acc, curr) => { return `${acc}, ${curr}` })
   //console.log(strFilms);
}
showListOfFilms(films)


function setFilmsIds(arr) {
   const newArr = arr.map((items, index) => {
      items.id = index
      return items
   })
   return newArr
   //console.log(newArr);
}

setFilmsIds(films)

const tranformedArray = setFilmsIds(films);
//console.log(tranformedArray);

function checkFilms(arr) {
   return arr.every(item => item.id !== 'undefined')
}
checkFilms(tranformedArray)


const funds = [
   { amount: -1400 },
   { amount: 2400 },
   { amount: -1000 },
   { amount: 500 },
   { amount: 10400 },
   { amount: -11400 }
];

function getPositiveIncomeAmount(data) {
   const positiveNum = data.filter(n => n.amount > 0)
      .reduce((acc, curr) => acc + curr.amount, 0)

   //console.log(positiveNum);
};




const getTotalIncomeAmount = (data) => {
   const checkData = data.some(n => n.amount < 0)
   const newArr = data.reduce((acc, curr) => acc + curr.amount, 0)
   if (checkData === true) {
      return newArr
   } else {
      getPositiveIncomeAmount(funds)
   }


   console.log(getTotalIncomeAmount);
}

getTotalIncomeAmount(funds)

*/


/*
const users = [
   { id: 1, name: 'Axel', last: 'Johnson', born: 1990, died: 'none' },
   { id: 2, name: 'John', last: 'Kennedy', born: 1917, died: 1963 },
   { id: 3, name: 'Adolf', last: 'Huitler', born: 1889, died: 1945 },
   { id: 4, name: 'Simon', last: 'Brown', born: 1999, died: 'none' },
   { id: 5, name: 'Joshua', last: 'Siemens', born: 1989, died: 'none' },
   { id: 6, name: 'Franklin', last: 'Pierce', born: 1804, died: 1869 }
]

const users2 = [
   [{ id: 1, name: 'asdasd', last: 'Johnson', born: 1990, died: 'none' }],
   [{ id: 2, name: 'John', last: 'Kennedy', born: 1917, died: 1963 }],
   [{ id: 3, name: 'Adolf', last: 'Huitler', born: 1889, died: 1945 }],
   [{ id: 4, name: 'asdasd', last: 'Brown', born: 1999, died: 'none' }],
   [{ id: 5, name: 'Jfdsfsd', last: 'Siemens', born: 1989, died: 'none' }],
   [{ id: 6, name: 'Franklin', last: 'Pierce', born: 1804, died: 1869 }]
]


const users3 = [
   [{ id: 1, name: 'asdasd', last: 'Johnson', born: 1990, died: 'none' },
   { id: '1.1', name: 'INNER', last: 'Dapkunaite', born: 1990, died: 'none' }
   ],
   [{ id: 2, name: 'John', last: 'Kennedy', born: 1917, died: 1963 }],
   [{ id: 3, name: 'Adolf', last: 'Huitler', born: 1889, died: 1945 }],
   [{ id: 4, name: 'asdasd', last: 'Brown', born: 1999, died: 'none' }],
   [{ id: 5, name: 'Jfdsfsd', last: 'Siemens', born: 1989, died: 'none' }],
   [{ id: 6, name: 'Franklin', last: 'Pierce', born: 1804, died: 1869 }]
]


//Показать строку живых юзеров:
const alive = users.filter(i => {
   if (i.died === 'none') {
      //console.log(`${i.name} ${i.last}`);
   }
})

//Показать строку живых юзеров для второго массива:
const alive2 = users2.reduce((acc, el) => [...acc, ...el])
   .filter(i => {
      if (i.died === 'none') {
         // console.log(`${i.name} ${i.last}`);
      }
   })
//console.log(alive2);

//Вариант для третьего массива где массив в котором массивы:
const alive3 = users3.reduce((acc, el) => [...acc, ...el], [])
//console.log(alive3);

//Показать строку мертвых юзеров и в каком году они умерли:
const dead = users.filter(i => {
   if (i.died !== 'none') {
      //console.log(`${i.name} ${i.last} died in ${i.died}`);
   }
})
//Показать строку мертвых юзеров и в каком году они умерли для второго массива:
const dead2 = users2.filter(users2 => {
   if (users2[0].died !== 'none') {
      //console.log(`${users2[0].name} ${users2[0].last} died in ${users2[0].died}`);
   }
})


//Создать массив, который содержит только имя и фамилию юзера
const namesArr = users.map((users) => `${users.name} ${users.last}`)
//console.log(namesArr);

//Вариант для второго массива где массив в котором массивы:
const namesArr2 = users2.map(users2 => `${users2[0].name} ${users2[0].last}`);
//console.log(namesArr2);


//Посчитать время жизни всех людей в массиве:
const liveCount = users.reduce((acc, curr) => {
   if (curr.died === 'none') curr.died = 2022
   return curr.died - curr.born + acc
}, 0)
//console.log(liveCount);


//функция подсчета времени жизни для первого массива (первый аргумент id, второй аргумент массив)
function personalLiveCount(p, arr) {
   const liveCount = arr.filter(i => { if (p === i.id) return i })
      .reduce((acc, curr) => {
         if (curr.died === 'none') curr.died = 2022
         return curr.died - curr.born + acc
      }, 0)
   console.log(liveCount);
}
//personalLiveCount(4, users)


//Отфильтровать людей которые родились в 1800-ых у первого массива
const in1800s = users.filter(i => {
   if (i.born > 1799 && i.born < 1900) {
      //console.log(`${i.name} ${i.last}`);
   }
})

//Отсортировать людей в зависимости от количества прожитых лет (от большего к меньшему) (скопипизженно)
const personSort = users.sort((a, b) => {
   const aLived = a.died - a.born;
   const bLived = b.died - b.born;

   if (aLived > bLived) {
      return -1
   } else {
      return 1
   }
})
console.log(personSort);
*/

//Debugger отладчик кода
/*
const input = document.querySelector('.form-control'),
   btn = document.querySelector('.btn'),
   result = document.querySelector('.result');


btn.addEventListener('click', (e) => {
   e.preventDefault();
   let a = input.value;

   a = Math.pow(a, 2);

   if (a) result.textContent = `${a}`;
   else result.textContent = `Введите число`;

})


let count = 0;

for (let i = 0; i < 9; i++) {
   count++
}
//console.log(count);


debugger
let arr = [1, 2, 3, 4, 5, 6, 7]

for (let [i] of arr.entries()) {
   arr[i] = arr[i] * 2;
   console.log(arr[i]);
}

console.log(arr);
*/

//Цикл в цикле
/*
point: for (let i = 0; i < 4; i++) {
   console.log(`Первый этаж ${i}`);
   for (let j = 0; j < 4; j++) {
      console.log(`Второй этаж ${j}`);
      for (let k = 0; k < 4; k++) {
         if (k == 2) continue point;
         console.log(`Третий этаж ${k}`);

      }
   }
}
*/

////////////Общение с сервером, запросы, тут указал 3 способа

/*
function req() {


   const request = new XMLHttpRequest();

   //////////////////// 1. XML HTTP REQUEST - Старый метод

   //Получение GET запроса, по адресу: (json-server)
   request.open("GET", "http://localhost:3000/timeForCode")

   //Заголовки (понимать серверу с какими данными он сейчас работает)
   request.setRequestHeader("Content-type", "application/json; charset=utf-8");

   //Запрос создан и сервер знает с какими данными он будет работать, теперь отправляем запрос
   request.send(); //Так как GET запрос, оставляем пустые скобки, если бы был POST, надо в скобки дописать какое-то body

   //Теперь можно взаимодействовать с сервером
   //Навешиваю обработчик readystatechange, который позволяет отслеживать стадии запроса, стадии запроса по ссылке
   //https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState
   //upd все же поставил обработчик load, он попроще
   request.addEventListener('load', () => {
      //Если стадия запроса равна 4 и статус запроса 200
      if (request.status === 200) {
         //request.response - полученный ответ от сервера
         let data = JSON.parse(request.response)
         console.log(data);

         //Здесь пишу то что мне надо

      } else console.error('Что-то пошло не так :(')

   })

   //////////////////// 2. Fetch Api - Новый метод

   //Ввожу url
   fetch("http://localhost:3000/timeForCode")
      //Получаем данные, и у фетча есть метод парса json
      .then(data => data.json())
      //После этого по цепочке, его надо обработать, я вызываю функцию
      .then(data => timeByMonth(data, 11)) //Здесь пример функии
      //обработать ошибки:
      .catch(err => console.error(err))


   //////////////////// 3. Fetch Api - Дорабатываю, пишу вспомогательную функцию

   //Более лаконичный, такой варик, но надо обязательно дописать вспомогательную функцию
   getResource("http://localhost:3000/timeForCode")
      .then(data => timeByMonth(data, 8))
      .catch(err => console.error(err))



   //Пишу ниже где-нибудь такую функцию:
   //Она асинхронна, поэтому используется метод async await
   async function getResource(url) {
      const res = await fetch(`${url}`);

      //внутри фетча, появляется свойство ок, которое понятно из названия говорит о том что запрос выполнен
      if (!res.ok) throw new Error(`Couldn't fetch ${url}, status ${res.status}`);

      return await res.json();
   }





}
*/







