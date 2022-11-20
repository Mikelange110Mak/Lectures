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
console.log(process.argv);