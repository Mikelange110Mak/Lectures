/*
//переменным можно указывать типы данных
let a: number = 1;
let b: string = 'Hello';
b = b + ' TS'
console.log(b);
let c: undefined = undefined;

//как дела с объектами обстоят и как изменять их значения?
let d: { user: string } = { user: 'Adam' }
d = { user: 'Tyrell' }
console.log(d);

//тип данных any, который можно перезаписывать (стандартное поведение JS)
let e;
e=1;
e='Hi';
e=true;
e=null;
e=undefined;
e = {};
e = function (){}
*/

//3

/*
function a(x: number, y: number): number {
   return x + y
}

let b = (x: number, y: number): number => x + y;

//Сигнатура функции
let c: (x: number, y: number) => number;

//неправильная запись
//c = function(x:number, y:string):string{
//   return x+y
//}

c = function (x: number, y: number): number {
   return x + y
}

function d(x: number, y: number): void {
   console.log(x + y);
}

function e(x: string): never {
   throw new Error(x);
}

//перегрузка функций
//  function f(x: any, y: any): any {
//     if (typeof x === 'number') return x + y
//     else return `${x} ${y}`
//  }


function g(x: number, y: number): number;
function g(x: string, y: number): string;
function g(x: any, y: any): any {
   if (typeof x === 'number') return x + y
   else return `${x} ${y}`
}
console.log(g(2, 2));
console.log(g('Mak', 11));
*/

//4
/*
//это бывает небезопасно
let a: any = 1
let b: number = a

// поэтому у типа данных any, есть безопасный эквивалент
let c: unknown = 1
//  let d:number = c   выходит ошибка, нужно произвести преобразование типов
//делается это так:
let d: number = <number>c
//есть и другой способ:
let e: number = c as number

let f: any = 'Makedon'
let g: number = (<string>f).length
console.log(g);

//объединение типов
let h: number | string = 1
h = 'Magteridon'
//псевдонимы типов
type W = number | string
let i: W = 1
i = 'Pseudo'

type J = 1 | 2 | 3
let j: J = 1
j = 2
j = 3
//j = 4

type K = 'a' | 'b' | 'c'
let k: K = 'a'
k = 'b'
k = 'c'

type L = true
let l: L = true;

type JKL = 'a' | 1 | true
let jkl: JKL = 'a'
jkl = 1
jkl = true

//Как происходит объединение типов с объектами?
type M = { a: string } | { b: string }
let m: M = { a: 'Jersey' }
m = { b: 'New' }
m = { a: 'New', b: 'Jersey' }
//m = { a: 'New', b: 'Jersey', c:'USA' }  error
//m = {}   error

//пересечение типов
type N = { a: string } & { b: string }  //обозначает что свойство обоих объектов должны присутствовать
let n: N = { a: 'New', b: 'Orlean' }
//n = {a:'aa'}  error
//n = {b:'bb'}  error
//n = {}        error

type O = { a: string, b?: string }  //второе свойство необязательным
let o: O = { a: 'aa' }
o = { a: 'aa', b: 'bb' }
//o = {a: 'aa', b: 'bb', c:'cc'}  error
//o = {}                         error

if ('b' in o) {
   console.log(o.b);
}
*/

//5 Массивы, кортежи и перечисления

/*
//любой тип данных
//let a = []
//a = [1, 'a']

//числовой тип данных
//let a = [1, 2, 3, 4, 5]
let a: number[] = [1, 2, 3, 4, 5]
//a.push('a')    возникает ошибка если добавляю или присваю переменной массива строку

//также массивы можно задавать другим способом
let b: Array<string> = ['a', 'b', 'c']

//если нужен массив с числами и строками:
let c: (number | string)[] = [1, 'a', 2, 'b']
let d: Array<number | string> = ['a', 'b', 'c', 1, 2, 3]

//Кортежи
//здесь указал что первый элемент массива число, второй строка:
let e: [number, string] = [1, 'a']


//У кортежей могут быть необязательные элементы:
let f: [number, string?] = [1, 'a']
f = [1]    //тут я уже могу только один элемент добавить в отличии от случая вышеб потому что второй элемент необязательный
//f=[1,2]  неверная запись

//Перечисления
enum G {
   A = 5,
   B
}
console.log(G.A, G.B, G[G.A], G[G.B]);

enum G2 {
   A = 'Wsgoya',
   B = 'On'
}
console.log(G2.A, G2.B)

//перечисления можно записывать и другим способом:
const enum G3 {
   A,
   B
}
console.log(G3.A, G3.B);
*/

//6 Классы
/*
class Person {
   //поля
   _name: string = ''
   _age: number = 0
   _note: string = ''

   constructor(name: string, age: number, note: string) {
      this._name = name
      this._age = age
      this._note = note
   }

   //методы:
   sayHello(): string {
      return `Привет, меня зовут ${this._name}`
   }

   //статические поля:
   static isFlying = false;

   //статические методы:
   static description(): string {
      return `Класс "Человек"`
   }

   //свойства (геттеры и сеттеры) для доп логики к полям:

   //геттер
   get name(): string {
      return this._name
   }
   get age(): number {
      return this._age
   }

   //сеттер
   set name(value: string) {
      this._name = value
   }
   set age(value: number) {
      if (value > 0 && value < 100) this._age = value
      else throw new Error('Неверный возраст')
   }

}

const igor: Person = new Person('Игорек', 30, "ИГАРЕК ПРАКУРАТУРА!")
console.log(igor);

const vasya: Person = new Person('Вася', 23, "ВЫ ЧЕ УГАРАЕТЕ?!")
console.log(vasya);

//вызываю метод:
const kesha: Person = new Person('Иннокентий', 101, "Ломай меня полностью")
console.log(kesha.sayHello());

//вызываю статическое поле (его можно вызвать только у класса)
console.log(Person.isFlying);

//вызываю статический метод (он тоже есть только у класса)
console.log(Person.description());

//проверяем геттеры и сеттеры:
console.log(vasya.age);
vasya.age = 50
console.log(vasya.age);

//оператор instance of (похож на type of только работает на объекты и классы)
if (igor instanceof Person) console.log('Right');
*/

//7 Наследование классов

class Person {
   name: string = ''
   age: number = 0

   constructor(name: string, age: number) {
      this.name = name
      this.age = age
   }

   sayHello(): string {
      return `Приветствую ${this.name}`
   }
}

//наследуем класс студентов от класса персон
class Student extends Person {
   group: string = ''
   course: number = 0

   //в конструктор пишем не только новые значения, но и наследуемые
   constructor(name: string, age: number, group: string, course: number) {
      //чтобы вызвать те наследуемые параметры, ключевое слово super
      super(name, age)
      this.group = group
      this.course = course
   }

   //видоизменяю метод из класса Person
   sayHello(): string {
      //первый вариант:
      //return `Привет студентик ${this.name} из группы ${this.group}`

      //второй вариант (вызов родительского метода и видоизменяем его):
      const text = super.sayHello()
      return `${text} из группы ${this.group}`
   }

}

class Teacher extends Person {
   disciplines: string[] = []

   constructor(name: string, age: number, disciplines: string[]) {
      super(name, age)
      this.disciplines = disciplines
   }
}

const ira: Person = new Person('Ира', 18)
console.log(ira);
console.log(ira.sayHello());

//создаю объект наследуемого класса
const dnonis: Student = new Student('Денис', 25, 'B1', 2)
console.log(dnonis);
console.log(dnonis.sayHello());

//Преобразование типов 
//Класс Student обрезали до класса Person, но в логе видны все поля, потому-что в js нет преобразования типов
const newDenis: Person = <Person>dnonis
console.log(newDenis);
console.log(newDenis.sayHello());

//Попробуем преобразовать другим способом:
const eve: Person = new Student('Ева', 21, 'C2', 3)
console.log(eve);
console.log(eve.sayHello());

//
const dula: Teacher = new Teacher('Дулат Мустафиевич', 50, ['Физическая культура', 'Завуч', 'Биология'])
console.log(dula);
console.log(dula.sayHello());

//Невозможно множественное наследие, например: class Teacher extends Person, Student
//чтобы это обойти, используются интерфейсы
//8 Реализация интерфейсов

