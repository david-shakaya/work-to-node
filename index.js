const validator = require('validator'); //импортируем скачанный npm Валидатор
const node = require('./exporImpor') //импортируем из другого файла
// console.log(node);


//  Работа с  NODE.js
// 1) открываем консоль(командная строка) и у нас появляетсься адрес:
//    C: \Users\Давид >

// 2)воодим адрес с названиемм проэкта 
//    C: \Users\Давид > cd Documents\GitHub\work-to-node

//3) Для того что бы получить доступ к файлу index.js  нужно сделать следующее
//    C:\Users\Давид\Documents\GitHub\work-to-node>node index.js
// и в консоле увидим: hello World


/* 
* npmjs.com  - сайт для поиска скачивание и ознакомления с пакетами
*/


// 4) Cоздаем packege.json - Там будем хранить все наши пакеты и другую инфу.
//  - Находим адрес с папкой проекта куда будем добавляеть packege.json 
    //   C:\Users\Давид\Documents\GitHub\work-to-node>npm init
// 5)  Затем устанавливаем необходимый пакет (например валидатор) 
//      C:\Users\Давид\Documents\GitHub\work-to-node>npm install validator
//  6)  После установки пакет появится папка node_modules. ОБЯЗАТЕЛЬНО добавляем её в .gitignore
// думаю можно поставить такие значения(подсмотрел у репеты) 
  /*   node_modules /
     .cache
     dist/
     .DS_Store
   */
 
 
  /*
  *  -7) Используем скачанный валидатор. Внизу прописан вызов функции валидатора.
  *  - Для проверки валидноссти емейлов. В консоле, терминале вводим node index.js
  * 
  */

   const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);
