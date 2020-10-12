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
/*
var str = 'Каждый охотник желает знать';
function delete_characters(str, length) {
    return str = str.split('').slice(0, length).join('')
}
console.log(delete_characters(str,14))
// Метод из ответа создаёт дополнительные проверки валидности строки: if ((str.constructor === String) && (length>0)) {
// return str.slice(0, length);
*/

// 3\35 Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-)
// между словами. При этом все символы строки необходимо перевести в верхний регистр.
/*
var str = "HTML JavaScript PHP";
function insert_dash(str) {
    // return str.trim().toUpperCase().split(' ').join('-')
    return str.trim().toUpperCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}
console.log(insert_dash(str))
// Метод из ответа: return str.trim().toUpperCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
// replace(/\s/g, "-"); заменяет пробелы на "-"
 */

// 4\35 Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки
// из нижнего регистра в верхни

var str = "string not starting with capital";

function cursive_letter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(cursive_letter(str))
// Мда. Редактор нечаянно написал готовый ответ в вопрос... Впрочем, я так и планировал использовать только index
// первого символа вместо перевода всей строки в массив.
