/*
const sum = 1 + 5;
console.log(sum);
console.log('Hello World');
*/


//process - шлобальный объект с помощью которого можно получить информацию о текущем процессе
//здесь вывожу айди процесса
//console.log(process.pid);

/* остановил программу убив процесс командой kill айди процесса
while (true) {
}
*/

//вручную установил порт при помощи пакета dotenv и crossenv
//const dotenv = require('dotenv')
//dotenv.config()

//console.log(process.env.PORT);
//console.log(process.env.NODE_ENV);

//также у объекта process есть аргументы
//console.log(process.argv);

//стандартный модуль path, позволяет удобным образом взаимодействовать с путями
//const path = require('path');
//у которого есть методы
//один из самых популярных методов join позволяет склеивать несколько участков пути (как видим этот метод добавляет слэш)
//console.log(path.join('first', 'second', 'someurl'));

//также в nodeJS есть глобальные переменные которые начинаются с __ это dirname который показывает путь к директории
//console.log(__dirname);

//также я могу использовать 2 точки, чтобы вернуться на папку назад
//console.log(path.join(__dirname, '..', '..'));

//следующая по частоте использования это функция resolve, которая похожа на join но возвращает абсолютный путь
//console.log(path.resolve('first', 'second', 'someurl'));

//также есть возможность путь распарсить
//const fullpath = path.resolve(__dirname, 'first', 'second', 'third')
//console.log('Парсинг пути', path.parse(fullpath));


//имея юрл его надо распарсить
//const siteUrl = 'http://localhost:8080/users?id=5123'

//для этого есть глобальнодоступный класс URL 
//const url = new URL(siteUrl)
//console.log(url);

//Знакомство с файловой системой, есть 2 типа синхронные и ассинхронные, начнем с синхронной
const fs = require('fs');
const path = require('path');

//создание новой папки, первый аргумент путь, второй имя
//fs.mkdirSync(path.resolve(__dirname, 'dir'))

//как создать рекурсивно новые папки? для это есть метод recursive
//fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), { recursive: true }) //как видим создалась целая иерархия папок

//С ассинхронной работаем немного по другому, с помощью коллбэка

/*
console.log('START');
fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
   if (err) {
      console.log(err);
      return
   }
   else console.log('Папка создана');
})
console.log('END');
*/

//Как папки удалять

//fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) throw err;
//})

/*
//следующий метод позволяет создать файл и записать(переписать) в него какие-то данные
fs.writeFile(path.resolve(__dirname, 'test.txt'), 'улыбок тебе дед макар', (err) => {
   if (err) throw err;
   console.log('Файл записан');
})

//если я хочу что-то ДОписать в конец файла
fs.appendFile(path.resolve(__dirname, 'test.txt'), '\n рак(а)м дед ебет кобылу', (err) => {
   if (err) throw err;
   console.log('Файл дописан');
})
*/
