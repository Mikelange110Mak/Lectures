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