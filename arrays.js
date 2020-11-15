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
//======================================================================================================================
// 2\36 Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
// Элементы массива будут разделены запятой. Получите результат двумя разными методами
/*
var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetables.join(',')) // Метод №1
result = []; result.push(vegetables); console.log(result.join(',')) // Метод №2

// Забыл о методе .toString(), он был в ответах...
*/
//======================================================================================================================
// 3\36 Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:)
// между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.
/*
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
 */
//======================================================================================================================
// 4\36 Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве
// аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК»,
// то на выходе должен быть массив [кАжДыЙ оХоТнИк]
/*
const str = 'КаЖдЫй ОхОтНиК ЖеЛаЕт'

function changeRegister (str) {
    str = str.split('')
    result = []

    for (i = 0; i<str.length;i++) {
        if (str[i] === str[i].toUpperCase()) { // если элемент в верхнем регистре
            result.push(str[i].toLowerCase())
        } else if (str[i] === str[i].toLowerCase()) { если элемент в нижнем регистре
            result.push(str[i].toUpperCase())
        }
    }
    console.log(result.join(''))
}
changeRegister(str)

// Easy таска
*/
//======================================================================================================================
// 5\36 Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из
// массива arr (игнорируйте чувствительность к регистру)
/*
var arr = ["Php", "php", "css", "css", "script", "script", "Html", "html", "java"];

function removeDuplicates(arr) {
    arr = arr.join(' ').toLowerCase().split(' ') // перевод в нижний рег.
    var result = []
    for (i = 0; i < arr.length; i++) {
        if (result.includes(arr[i])) {} // если в результирующем масив есть этот элем, тогда ничего не делать
        else {
            result.push(arr[i]) // иначе положить элем. в результ. массив
        }
    }
    console.log(result)
}
removeDuplicates(arr)
// В ответах сложно читаемый и мудрёный код с использованием объектов. Как по мне - мой метод простой и функциональный.
 */
//======================================================================================================================
// 6\36 Високосным годом является каждый четвертый год и века начинаются только на высокостные года, отличие високосного
// года от обычного заключается в появлении 366-го дня. Напишите функцию chooseYears(start, end), которая принимает
// в качестве аргументов диапозон лет и возвращает массив високосных лет в заданном диапазоне
/*
function chooseYears(start, end) {
    result = []
    for (start;start<=end;start++){ // первое значение эквивалентно start=start
        if (start % 4 === 0) {
            result.push(start)
        }
    }
    console.log(result)
}
chooseYears(2000,2020)
// Easy
 */
//======================================================================================================================
// 7\36 Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for случайно изменяет порядок
// расстановки элементов массива
/*
function shuffle(arr) {
    // for (var i = arr.length - 1; i > 0; i--) {
    //     var j = Math.floor(Math.random() * (i + 1));
    //     var temp = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = temp;
    // }
    arr.sort(function (a,b) {
        a = Math.random()
        b = Math.random()
        if (a>b){return 1}
        else {return -1}
    })
    console.log( arr);
}
var array = [0,1,2,3,4,5,6,7,8,9];
shuffle(array)
*/
// Решил быстро, хотя и не с первой попытки.
// Ответ много проще и элегантней, хотя и мне не очевидно как работает:
// function shuffle() {return 0.5 - Math.random();}
// array.sort(shuffle);
//======================================================================================================================
// 8\36 Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n'
// элементов массива
/*
var array = [1,2,3,4,5,6,7,8,9];
function getFirst(array, n) {
    array = array.slice(0,n)
    console.log(array)
}
getFirst(array,5)
 */
//Решил молниеносно. В ответах тот же метод, только с проверками на валидность массива.
//======================================================================================================================
// 9\36 Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n'
// элементов массива
/*
var array = [1,2,3,4,5,6,7,8,9];
function getFirst(array, n) {
    array = array.reverse().slice(0,n).reverse()
    console.log(array)
}
getFirst(array,5)
 */
// #EasyFast. Ответ:
// function getLast(array, n) {
//     if (array == null) return false;
//     if (n == null) return array[array.length - 1];
//     return array.slice(Math.max(array.length - n, 0));
// };
//======================================================================================================================
// 10\36 Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов
// заданных массивов
/*
var arr1 = [1, 2, 3, 4, 5, 4, 2, 2];
var arr2 = [4, 5, 6, 1, 2, 2, 3, 1];

function summ(arr1, arr2) {
    result = []
    arr1L = arr1.length
    arr2L = arr2.length
    arr1L > arr2L ? bigger = arr1.length : bigger = arr2.length // Узнаю у кого больше элем. для использ. в цикле for
    if (arr1L !== arr2L) {
        if (arr1L > arr2L) { // если в arr1 больше элем, тогда делаем его симетричным к arr2 с нулями в конце
            howMany = arr1L - arr2L
            for (i = 0; i < howMany; i++) {
                arr2.push(0)
            }
        } else if (arr1L < arr2L) { // если в arr2 больше элем, тогда делаем его симетричным к arr1 с нулями в конце
            howMany = arr2L - arr1L
            for (i = 0; i < howMany; i++) {
                arr1.push(0)
            }
        }
    }
    for (i = 0; i < bigger; i++) {
        result.push(arr1[i] + arr2[i]) // лижим сумму элементов arr1 & arr2 в результирующий массив
    }
    console.log(result)
}
summ(arr1, arr2)
 */
// Easy. В ответах если значение undef, тогда push(0), а дальше суммирование как у меня.
//=====================================================================================================================>
// 11\36 Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве
/*
function countIdentic(arr) {
    result = []
    for (i = 0; i < arr.length; i++) {
        arr.shift(0)
        if (!result.includes(arr[i])&& arr[i] !== undefined) {
            result.push(arr[i])
        }
    }
    console.log(result.length)

}
countIdentic([1,2,2,3,3,3,4,4,4,4]) // 4
countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9])
// Долго решал, пришлось прибегнуть к проверке на undef из-за того, что счётчик был больше наявных элем. в массиве
*/
//=====================================================================================================================>
// 12\36 Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины
/*
var arr1 = [1, [2, [3, [4]]]];
var arr2 = [1, [2], [3, [[4]]], [5, 6]];

function expand(arr) {
    return arr.flat(Infinity); // Ф-я flat разворачивает массив с указанной глубиной вложенности. 
}
console.log(expand(arr2));
*/
// Думал достаточно долго, поэтому пришлось гуглить. Нагуглил изичный метод flat в итоге решил одной строчкой. 
// Отет: var i = 0; while(i < arr.length) { arr = arr.reduce(function(a, b) {return a.concat(b);},[]); i++;}return arr;
//=====================================================================================================================>
// 13/36 Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива
/*
var array1 = [5, 2, 1, -10, 8, 8];
var array2 = [5, 2, 1, -9, 3, 7];

var union = function (array1, array2) {
    array2.forEach((elem) => {
        if (!array1.includes(elem)) {
            array1.push(elem)
        }
    }) 
    return array1
}

console.log(union(array1, array2));
*/
// #EasyFast
// Ответ даже не буду приводить, т.к. он большой и мудрёный
//=====================================================================================================================>
// 14/36 Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, 
// которые не находятся в arr2 и наоборот. like: [a,3,4,b]
/*
var arr1 = [1, 2, 'a'];
var arr2 = [1, 2, 3, 4, 'b'];  

function arrayDiff(arr1, arr2) {
    let result = []
    arr1.forEach((elem) => {
        if (!arr2.includes(elem)) {
            result.push(elem)
        }
    })
    arr2.forEach((elem) => {
        if (!arr1.includes(elem)) {
            result.push(elem)
        }
    }) 
return result
}

console.log(arrayDiff(arr1,arr2))
*/
// Easy. 
//=====================================================================================================================>
// 15/36 Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы 
// по убыванию их значений
/*
var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1,-20,-22];  

function compareNumbers(arr){
    for (i=0; i<arr.length - 1; i++) {
        for(j=0; j<arr.length - 1 - i; j++) { // одна перестановка самого большого числа в конец массива
            // - i нужно для того, чтобы не проверять уже переставленные числа
            if (arr[j] > arr[j+1]) {
                const buff = arr[j] // - алгоритм swap
                arr[j] = arr[j+1]
                arr[j+1] = buff
                }
        }
        
    }
    console.log(arr)
}

console.log(compareNumbers(numbers))
*/
// Знал что существует "пузырьковый", но пришлось гуглить как выглядит каркас. 
//=====================================================================================================================>
// 16/36 Напишите код, который находит наиболее часто используемый элемент массива
/*

var arr1 = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
let result = []
arr1 = arr1.sort();
for (i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== 'number') {
        muxNum = arr1[i - 1]
        break
    }
}
console.log(muxNum)

 */
// #EasyFast
//=====================================================================================================================>
// 17/36  Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива
/*

function sumOfSquares(arr) {
    // Метод №1. С двумя циклами

    result = []
    for (i = arr.length-1; i>-1; i--) {
        arr[i] = arr[i]*arr[i]
        // Или так arr[i] = Math.pow(arr[i],2)
    }
    const reducer = (acc, cur) => acc + cur;
    console.log(arr.reduce(reducer))

    // Метод №2.
    const reducer = (acc, cur) => acc + cur * cur;
    return arr.reduce(reducer)

}
console.log(sumOfSquares([1, 2, 3, 4, 5]));

*/
// Easy. Ответ идентичный моему
// ====================================================================================================================>
// 18/36 Напишите код, который определяет сумму и произведение значений массива
/*

var arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];

reducerSum = (acc, cur) => acc+cur
reducerMult = (acc, cur) => acc*cur

sum = arr.reduce(reducerSum)
product = arr.reduce(reducerMult)

console.log(" Сумма : "+sum + " Произведение : " + product);

 */
// #EasyFast. Ответ идентичный моему
// ====================================================================================================================>
// 19/36 Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений:
// false, null, undefined, 0, –0, NaN и "" (пустя строка).

array = [NaN, 0, 22, 77, -17, false, '', undefined, 99, null, -0, 'Great!'];
function filterFalse(arr) {
    const delElem = []
    const result = []
    // В цикле проверям валидность элемента массива. Если элем. имеет недопустимый тип -
    // ложим индекс этого элемента в массив delElem
    for (i = 0; i < arr.length; i++) {
        // Тип isNaN определяет где в массиве NaN, а также undefined и string.
        // Это очень специфический тип, ибо NaN !== NaN. Поэтому его нужно обработать отдельно
        if (isNaN(arr[i]) && typeof arr[i] !== 'string') {
            delElem.push(i)
        } else if (arr[i] === false) {
            delElem.push(i)
        } else if (arr[i] === null) {
            delElem.push(i)
        } else if (arr[i] === -0) {
            delElem.push(i)
        } else if (arr[i] === '') {
            delElem.push(i)
        }
    }
    // Собрав индексы элементов подлежащих удалению - помещаем валидные элементы в результ. масс.
    for (i = 0; i < arr.length; i++) {
        if (!delElem.includes(i)) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(filterFalse(array))

// На первый взгляд изичная таска, но как оказалось подобная идентификация типов имеет подводные камни. Мне кажется
// я споткнулся об каждый, пока не решил написать примитивный, но работающий код. Тип NaN не такой прост как кажется.
// Ответ: return arr.filter(function(v) { return !!v; }); Ппц! Решение в одну строчку! Мда, пойду читать про .filter
// Надо было внимательней перечитать задание, я не учёл это условие: "ложных (false) значений".

