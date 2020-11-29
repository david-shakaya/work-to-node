// const validator = require('validator'); //импортируем скачанный npm Валидатор
// const node = require('./exporImpor') //импортируем из другого файла
// console.log(node);

import './css/styles.scss';


// --------------------------------------------------------------------
// console.log('id', uuidv4());
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

//    const validateEmail = email => {
//   return validator.isEmail(email);
// };

// console.log(
//   'Is mango@mail.com a valid email?: ',
//   validateEmail('mango@mail.com'),
// );

// console.log(
//   'Is Mangozedog.com a valid email?: ',
//   validateEmail('Mangozedog.com'),
// );

// 8) - Устанавливаем babel на сайте https://babeljs.io/setup#installation   выбераем CLI
    //  и устанавливаем
    // 9) Добавляем скрипт и следуем указаниея в документации бабеля
    // 10) Унас будут ошибки после виполнения команды npm run build. Исправляем:
        //  - a) Создаем папку src и туда кидаем исходные файлы .js
        //  - b) Также меняем путь к файлам package.json. Сейчас они уже изменены.

//  11) Что бы байбил переводил наш код понятный всем браузерам нужно дополнительно установить пресет. 
 // -  следуем инструкции в документации пункт 4. https://babeljs.io/setup#installation
  // 12) После установки, в корне проекта создаем файл .babelrc туда кидаем строки(строки уже там)








  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WEBPACK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  // САЙТЫ ИНСТРУКЦИИ ПО НАСТРОЙКЕ 
  // -  https://tproger.ru/translations/configure-webpack4/
  //  - https://webpack.js.org/loaders/css-loader/


  // 1) Перед работой Cоздаем packege.json - если он уже создан пропускаем этот шаг.
    // >  npm init

  // 2) Потом устанавливаем вебпак
    // >  npm install webpack webpack-cli --save-dev

  // 3) Создаем файл в корне проекта с названием webpack.config.js  Внутри этого файла создаем експорт
  // и запысываем туда адрес файла js для старта:
//   module.exports = {
//   entry: "./src/index.js"
// };

  //  4) Затем в пакет джейсон добавляем скрипт:
//   "scripts": {
//    "dev": "webpack --mode development"
    //  также мы можем поставить для продакшина --mode production(это просто для общего развития)
// }

      // 5) И выполняем следующюю команду в терминале:
      // npm run dev

//  6) У нас появляеться папка dist с файлом main.js а там всеь наш код уже обработанный вебпаком.

//  7)Если мы хотим что бы весь код попадал в папку какую нам нужно и создавал файл с нужным именем 
//  прописываем оутпут в файле webpack.config.js :
        // const path = require('path');

            //  output: {
          //     path: path.resolve(__dirname, 'build'), //означает создай папку с именем build
          //     filename: 'bundle.js'  // означает создай файл с именем bundle
          //   }
      
          // >>>>>>>>>>>>>>>>>>>>>>>>Загрузчики <<<<<<<<<<<<<<<<<
// Загрузчики для того что бы вебпак работал(баиндил) другие файлы кроме js. Например css,html и тд.
// Настраиваем коректную работу бабиля вместе с вебпаком. 
// 1) Идем на сайт бабиля https://babeljs.io/setup#installation    и выбираем систему для установки вебпак и устанавливаем его команда:
      //  npm install --save-dev babel-loader @babel/core

 // 2)в webpack.config.js добавляем след код. 
//  module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         }
//       }
//     ]
//   }
// 3) в файл .babelrc добавляем пресет : и для бабиля с вебпаком все готова
// {
//     "presets": [
//         "@babel/preset-env"
//     ]
// }
   
const add = (a, b) => a + b; 
add(2, 3)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


                                                  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                    // Добавляем в сборку CSS с помощью вебпака
// 1) Что бы вебпак увидел CSS добавляем импорт файла в index.js:  import './css/styles.css'
// 2) Устанавливаем загрузчики вебпака для CSS, пишем в терминале:
      // npm install style-loader css-loader --save-dev

  // 3) Добавляем в webpack.config.js правила для использования 

      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // }

  // 4)Что бы css был отделным файлом. Устанавлиаем след.плагин
  // npm install --save-dev mini-css-extract-plugin

  // 5)  Добавляем в webpack.config.js переменную.
  // const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  // 6) В webpack.config.js добаввляем правило. Ставим между style-loader и css-loader
  // MiniCssExtractPlugin.loader
// 7) В webpack.config.js добаввляем вызов класа или чтото типа того:
// plugins: [new MiniCssExtractPlugin()]



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


                                                  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                    // Добавляем в сборку SCSS с помощью вебпака
// 1) Устанавливаем пакеты (node - sass устаревает скори придеться делать по другому)
// npm install sass - loader node - sass

// 2) Ненужный шаг если изначально в стилях стоит scss а не css как сейчас у нас. Переименовуем css в scss

// 3)Добавляем импорт в index.js c нашими scss стилями
// import './css/styles.scss';
// 4) Добавляем праила для scss: 
//    {
//         test: /\.scss$/i,
//         use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], 
//       }
// 5) Что бы изменить имя файла со стилями которые генерятья добавляем в плагины вебпака строку:
// { filename:"style.css"}
//  Все вместе выглядит так:    plugins: [new MiniCssExtractPlugin({ filename:"style.css"})]
// 6) npm run dev

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


                                                  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                    // Добавляем в сборку HTML с помощью вебпака
// ....

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> СТавим себе пакет webpack-dev-server
//  Это для того что бы в реальном времени смотреть как меняеться наша страница(как лайв сервер в вскоде)
// 1)ссылка на документацию https://github.com/webpack/webpack-dev-server
// 2) Устанавливаем:
// npm install webpack-dev-server --save-dev
// 3) В скрипте в джейсон пакете. Там где скрипты меняем "dev": 
// "webpack --mode development"  на
//  