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