// Link: http://wm-school.ru/js/string_exercises.php

// 1\35 Напишите функцию stringToarray(str), которая преобразует строку в массив слов

var str = 'Каждый охотник желает знать';
function stringToarray(str){
    return str.split(' ') // если убрать пробел в кавычках, тогда массив будет из букв, а не из слов
    // метод из ответа: str.trim().split(" "); | если в строке будет вначале\вконце пробел, тогда он станет элем. масс.
}
console.log(stringToarray(str))