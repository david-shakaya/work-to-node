const path = require('path');

module.exports = {
    entry: './src/index.js',
     output: {
    path: path.resolve(__dirname, 'build'), //означает создай папку с именем build
    filename: 'bundle.js'  // означает создай файл с именем bundle
    },
   module: {  // Модуль для того что бы коректно работал бабиль вместе с вебпаком(также можно добавлять и для html и тд.)
    rules: [
      {
        test: /\.m?js$/,    //Регулярное выражение которое изет js. файлы
        exclude: /node_modules/,  // означает обрабатывай все кроме этой папки
        use: {
          loader: "babel-loader",
        }
      }
    ]
  }
     
     
};

