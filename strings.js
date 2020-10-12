// Link: http://wm-school.ru/js/string_exercises.php

// 1\35 Напишите функцию stringToarray(str), которая преобразует строку в массив слов
/*
var str = 'Каждый охотник желает знать';
function stringToarray(str){
    return str.split(' ') // если убрать пробел в кавычках, тогда массив будет из букв, а не из слов
    // метод из ответа: str.trim().split(" "); | если в строке будет вначале\вконце пробел, тогда он станет элем. масс.
}
console.log(stringToarray(str))
*/

// 2\35 Напишите функцию delete_characters(str, length), которая возвращает подстроку,
// состоящую из указанного количества символов

var str = 'Каждый охотник желает знать';
function delete_characters(str, length) {
    return str = str.split('').slice(0, length).join('')
}
console.log(delete_characters(str,14))
// Метод из ответа создаёт дополнительные проверки валидности строки: if ((str.constructor === String) && (length>0)) {
// return str.slice(0, length);
