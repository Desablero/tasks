// Link: http://wm-school.ru/js/array_exercises.php

// 1\36 Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал
/*
var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    return cloneArr = arr
}
var arr1 = arrayClone(vegetables);
console.log(arr1)

// Не понимаю глубинный смысл задачи и сделал тривиальный способ,
// но в ответах был такой метод метод: return arr.slice(0); ¯\_(ツ)_/¯
 */

// 2\36 Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
// Элементы массива будут разделены запятой. Получите результат двумя разными методами
/*
var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetables.join(',')) // Метод №1
result = []; result.push(vegetables); console.log(result.join(',')) // Метод №2

// Забыл о методе .toString(), он был в ответах...
*/

// 3\36 Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:)
// между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

const num = 55639217;

function colonOdd(num) {
    num = num.toString().split('')
    for (i = 0; i < num.length; i++) {
        if ((num[i] % 2 !== 0) && (num[i++] % 2 !== 0)) {
            num[i] = ':' + num[i]
        }
    }
    return num.join('')
}
console.log(colonOdd(num))
// Мой метод несколько лаконичней, нежели в ответах и вроде O(n) лучше. 
