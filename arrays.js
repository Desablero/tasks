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
/*

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

 */
// На первый взгляд изичная таска, но как оказалось подобная идентификация типов имеет подводные камни. Мне кажется
// я споткнулся об каждый, пока не решил написать примитивный, но работающий код. Тип NaN не такой прост как кажется.
// Ответ: return arr.filter(function(v) { return !!v; }); Ппц! Решение в одну строчку! Мда, пойду читать про .filter
// Надо было внимательней перечитать задание, я не учёл это условие: "ложных (false) значений".
// ====================================================================================================================>
// 20/36 Напишите код, который отсортирует массив объектов litmir по значению свойства title
/*

var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
];

litmir.sort(function (a,b,) {
    if (a.title > b.title) {
        return 1
    }
    if (a.title < b.title) {
        return -1
    }
    return 0
})

console.log(litmir)

 */
// #Fast. Ответ идентичный моему.
// ====================================================================================================================>
// 21/36 Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел,
// сумма которых равна заданному значению.
/*

var number = 6;
var array = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18,3, 2.5, 3.5]; // Ваша пара чисел: 1 + 4,Ваша пара чисел: 2 + 3

function isInteger(num) { // проверка на целочисленность
    return (num ^ 0) === num; // ^ (картека) это операция xor (побитово)
}
function findCouple(arr, num) {
    let result = []
    for (i=0; i<arr.length; i++) {
        arrNum = arr[i]
        arr[i] = ''
        for (j=0; j<arr.length; j++) {
            if (isInteger(arrNum) && arrNum+arr[j] === num) { // если число целое и две пары чисел = n
                result.push(`Ваша пара чисел: ${arrNum} + ${arr[j]}`)
            }
        }
    }
    return result
}
// console.log(findCouple(array, number))

 */
// #Easy. Ответ мудрёный.
// ====================================================================================================================>
// 22/36 Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов
// и имя свойства, а затем возвращает все значения данного свойства из массива объектов.
/*

var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
];

function propertyValue(array, key) {
    for (i=0; i<array.length; i++) {
        console.log(array[i][key])
    }
}
propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид

 */
// #Easy. Делал долго из-за незнания синтаксиса. Делал arr[i].key в итоге - undef. Но на форуме нашёл элегантную запись:
// for (item of array) {console.log(item[key])}. А вот ответ многострочный и очень заумный.
// ====================================================================================================================>
// 23/36 Напишите функцию startingSubstring(arr), которая возвращает общую начальную подстроку в массиве строк
/*


var arr1 = ['Капуста', 'Капитал'];
var arr2 = ['Репа', 'Редиска'];
function startingSubstring(arr) {
    result = []
    str1 = arr[0]
    str2 = arr[1]
    str1 = str1.split('')
    str2 = str2.split('')
    bigger = str1.length>str2.length?str1.length:str2.length
    i = 0
    while (str1[i] === str2[i]) {
        result.push(str1[i])
        i++
    }
    return result.join('')
}
var res1 = startingSubstring(arr1);
var res2 = startingSubstring(arr2);
console.log(res1)
console.log(res2)

 */
// #EasyFast. Ответ идентичный.
// ====================================================================================================================>
// 24/36 Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.
/*

function removeItem(arr, num) {
    while (arr.includes(num)) {
        idx = arr.indexOf(num)
        arr.splice(idx,1)
    }
    return arr
}
console.log(removeItem([5, 3, 5, 7, 8, 5], 5)); // [3,7,8]

 */
// #EastFast. Ответ идентичный, только через for
// ====================================================================================================================>
// 25/36 Напишите функцию randomElement(arr), которая возвращает случайный элемент из массива
/*

function randomElement(arr) {
    min = 0
    max = arr.length
    idx = Math.floor(Math.random() * (max - min) + min)
    console.log(arr[idx])
}
var arr = [24, 45, 22, 35, 43];
console.log(randomElement(arr)); // 22

 */
// #EasyFast. Ответ: return arr[Math.floor(Math.random()*arr.length)];
// ====================================================================================================================>
// 26/36 Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len элементов value.
/*

function arrayFilled(len, value) {
    arr = []
    arr.length = len
    arr.fill(value)
    return arr
}

console.log(arrayFilled(5, 1))   // [1,1,1,1,1]
console.log(arrayFilled(4, 12)) // [12,12,12,12]

*/
// #EasyFast. Ответ: var array = [];
//   for(len; len > 0; len--) {    array.push(value);  }  return array;
// ====================================================================================================================>
// 27/36 Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции 
// from в позицию to.
/*

function moveElement(arr,from,to) {
    buff = arr[from] // буверим значение перемещаемого элемента
    arr.splice(from,1) // вырезаем перемещаемый элемент
    // разделяем масив на две части в месте установки буфера
    arr1 = arr.slice(0, to) 
    arr2 = arr.slice(to, Infinity)
    // закидываем в первую часть массива наш буфер, а потом и второй массив со спред оператором
    arr1.push(buff)
    arr1.push(...arr2)
    return arr1
}
var arr = [ 'a', 'b', 'c', 'd', 'e'];
console.log(moveElement(arr,3,1)); // ["a", "d", "b", "c", "e"]
*/

// #Easy. Ответ: arr.splice(to,0,arr.splice(from,1)[0]);
// ====================================================================================================================>
// 28/36 Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len,
// заполненный целыми числами, где каждое число больше предыдущего на единицу.

function generateNumbers(start, len) {
let arr = []
    arr.length = len
    for (i=0; i<arr.length; i++) {
        arr[i] = start++
    }
    return arr
}
console.log(generateNumbers(0, 5));  // 0,1,2,3,4
console.log(generateNumbers(-5, 4)); // -5,-4,-3,-2

// #EasyFast. 
