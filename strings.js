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
//======================================================================================================================
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
//======================================================================================================================
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
//======================================================================================================================
// 4\35 Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки
// из нижнего регистра в верхни
/*
var str = "string not starting with capital";

function cursive_letter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(cursive_letter(str))
// Мда. Редактор нечаянно написал готовый ответ в вопрос... Впрочем, я так и планировал использовать только index
// первого символа вместо перевода всей строки в массив.
 */
//======================================================================================================================
// 5\35 Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы
/*
var str = "каждый охотник желает знать";

function capitalize(str) {
    str = str.split(' ') // перевожу всю строку в массив по 1 слову
    for (i = 0; i<str.length;i++){
        charUp = str[i].toString().split('') // каждое слово делим на буквы
        charUp[0] = charUp[0].toUpperCase() // перевожу индекс 0 в верхний регистр
        console.log(charUp.join('')) // возвращаю всё в строковое значение
    }
}
console.log(capitalize(str))
// определённо не лучший метод, но не смог сообразить как лучше.
// Ответ: return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}). Догадывался что можна регуляром,
// но посчитал что это будет более мудрёный способ
// В этом примере регулярное выражение работает следующим образом: «Взять все символы без пробелов (\ S), стоящие
// в начале строки (^) или после любого символа пробела (\ s) и преобразовать их в верхний регистр (toUpperCase)».
 */
//======================================================================================================================
// 6\35 Задание на изменение регистра символов на противоположный уже решено в arrays.js [4\36]
//======================================================================================================================
// 7\35 Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов

/*
var str = "every...,,, -/ hunter #! wishes ;: {} to $ % ^ & * know..,";

function remove_char(str) {
    var specialChars = "!@#$^&%*()+=-[]\\/{}|:;<>?,."
    for (i = 0; i < specialChars.length; i++) {
        var str = str.replace(new RegExp("\\" + specialChars[i], "gi"), '')
    }
    console.log(str)
}
remove_char(str)
*/
// Понимал что нужно в реплейс засунуть регулярку, но смостоятельно не смог реализовать, пришлось гуглить.
// В ответах представлен следующий вариант var res = ""; res = str.replace(/[^\w\s]|_/g, "")
// .replace(/\s+/g, " "); return res;
//======================================================================================================================
// 8\35 Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение
// с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента
/*
function zeros (num, len, sign) {
    num = num.toString().split('')
    result = []
    for (i = 0;i<len-num.length;i++){
        result.unshift('0')
    }
    console.log(sign + result.concat(num).join(''))
}
zeros(145,5,'+')
*/
// Easy. В ответе другой метод: function zeros (num, len, sign) {
// let len_zer = len - (num + '').length, // к-во нулей
// num_zer = '';
//   for ( ; len_zer > 0; len_zer--) {
//     num_zer += 0;
//   }
//   return (sign === undefined || sign === '') ? num_zer + num + '' : sign + num_zer + num +'';
// }
//======================================================================================================================
// 9\35 Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов
/*
function comparison(str1, str2) {
    var equivalent = str1.toLowerCase() === str2.toLowerCase()
    console.log(equivalent)
}
comparison('string', 'StRiNg')
comparison('ABCDe', 'AbcdW')
*/
// Слишком изи.
//======================================================================================================================
// 10\35 Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в
// строке str1 без учёта регистра символов
/*
function insensitive_search(str1, str2) {
    reg = new RegExp(str2,'ig')
    str1.match(reg)?console.log('Содержит'):console.log('Не содержит')
}
insensitive_search('Изучаю JavaScript', 'javascript')
insensitive_search('Изучаю JavaScript', 'javascriptS')
 */

// Решил быстро, но не без помощи MDN. В ответах использ. метод search:
// let search_str = new RegExp(str2, "ig");
// var result = str1.search(search_str);
// return (result > 0) ? "Соответствует" : "Не соответствует";
//======================================================================================================================
// 11\35 Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при
// котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы
/*
str = "hEllo amAzIng woRld";
function initCap(str) {
    result = []
    str = str.toLowerCase().split(' ') // вся строка в массив
    result.push(str[0]) // первое слово (т.к. ему не нужно менять регистр) сразу ложу в результ
    str.shift(0)  // удаляю первое слово из основного масива
    for (i=0;i<str.length;i++) {
        str[i] = str[i].split('') // перевожу каждый элемент массива (одно слово) в побуквенный массив
        str[i][0] = str[i][0].toUpperCase() // меняю регистр первой буквы каждого слова
        result.push(str[i] = str[i].join('')) // ложу в результирующий масив "склеенные" из букв слова
    }
    console.log(result.join(''))
}
initCap(str)
*/
// #EasyFast. Ответ: return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m) {
//       return m.toUpperCase().replace(/\s+/g, "");
// Ответ отличный, но сложно воспринимаемый. И O(n) у него лучше, чем у моего метода. Я собирался сделать проверку на
// "левые" символы, но в задании, увы, этого небыло.
//======================================================================================================================
// 12\35 Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase
// в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово
// пишется с маленькой буквы.
/*
function initSnake(str) {
    result = []
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) { // ищем среди элем большую букву
            result.push('_') // если находим - вставляем перед ней "_"
        }
        result.push(str[i]) // а потом вставляем и саму букву в результ. массив
    }
    result = result.join('').toLowerCase()
    return result
}
*/

// Полохо решил, много лишних операций... Попробую другим методом:
/*
function initSnake(str) {
    for (i = 0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase()){ // находим большую букву
            str = str.replace(str[i],'_'+str[i].toLowerCase()) // заменяем её на маленькую вставив перед ней нижнее подч
        }
    }
    return str
}
console.log(initSnake('helloAmazingWorld'))
*/
// В этот раз получше.                  Ответ: var str = str.replace(/[A-Z]/g, function (letter) {
//     return '_' + letter.toLowerCase();
//   });
//   // Удаляем символ подчеркивания (_) в начале строки
//   return str.replace(/^_/, "");
//======================================================================================================================
// 13/35 Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз
/*
function repeatStr(str, n) {
    var newStr = ''
    while (n > 0, n--) newStr = newStr + str
    return newStr
    // Мой вариант:
    while (n > 0, n--) console.log(str) // но здесь вывод поочерёдно в столбик

}
console.log(repeatStr('Hello!', 5))
 */
// #EasyFast
//======================================================================================================================
// 14/35 Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу
/*
var pathname = "/home/user/dir/file1.txt";
// "Велосипедный" метод: 
function path(pathname) {
    let result = []
    pathnameRev = pathname.split('').reverse() // положили в массив и перевернули
    for (i=0; i<pathnameRev.length; i++) {
        if (pathnameRev[i] !== '/') { // если итератор != '/' - ложим в результ. массив
            result.push(pathnameRev[i])
        } else {i = i+pathnameRev.length} // если равен, значит нашли полное имя файла, выходим из цикла
    }
    console.log(result.reverse().join(''));
};
console.log(path(pathname));

// Метод проще: (пришёл в голову когда решал 15-ю задачу)
function path(pathname) {
    index = pathname.lastIndexOf('/')
    return pathname = pathname.slice(index+1, pathname.length)
};
console.log(path(pathname));
*/
// Ответ банален и прост: function path(pathname) {
//   var name = pathname.split("/").pop(); return name;}
//======================================================================================================================
// 15/35 Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str 
// и определяет заканчивается ли строка символами подстроки
/*
var str = "Каждый охотник желает знать"; 
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function(substring) {
    indexOfLastSpace = substring.lastIndexOf(' ') // находим последний пробел который отделяет последнее слово
    substring = substring.slice(indexOfLastSpace+1, substring.length) // отрезаем лишнее оставляя только слово
    if (substring === str) { // сравниваем слова 
        console.log(true);
    }
    else {
        console.log(false);
    }
};
console.log(str.endsWith(str));
*/
// #EasyFast
// Ответ элегантный: String.prototype.endsWith = function(substring) {
//   if(substring.length > this.length) return false;
//   return this.substr(this.length - substring.length) === substring;};
//====================================================================================================================== 
// 16/35 Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до 
// указанного символа char в зависимости от параметра pos
/*
var str = 'Астрономия — Наука о небесных телах';

function getSubstr(str, char, pos) {
    charIndex = str.indexOf(char)
    if (pos === 'after') {
        return (str.split('').slice(++charIndex, Infinity).join(''))
    } else if (pos === 'before') {
        return (str.split('').slice(0, charIndex).join(''))
    }
};

console.log(getSubstr(str, '—', 'after'));
console.log(getSubstr(str, 'Н', 'before'));
*/
// #EasyFast. Ответ идентичный моему.
//======================================================================================================================
// 17/35 Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию
// pos строки str. По умолчанию подстрока вставляется в начало строки
/*

function insert(str, substr, pos = 0) {
    if (pos === 0) {
        return str = substr + str
    } else if (pos !== 0 && typeof pos === 'number') {
        str = str.split('')
        str[pos] = str[pos] + substr
        return str.join('')
    } else {console.log('Print pos of number!')} // проверка на валидность pos
};

console.log(insert('Казнить нельзя', "Помиловать ", ))

 */
// #EasyFast. Ответ получше будет: var array = str.split('');
//   array.splice(pos, 0, substr);
//   return array.join('');
//======================================================================================================================
// 18/35 Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного
// количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb)
// или заданным символом symb
/*

function limitStr(str, n, symb = '...') {
    // Если длина < n и символ не ...
    if (str.length > n && symb !== '...') {
        // Вырезаем n-е кол-во сиволов и плюсуем заданный символ
        return str.slice(0, n) + symb
        // Если символ "..."
    } else if (str.length > n && symb === '...') {
        // Вырезаем и добавляем "..."
        return str.slice(0, n) + symb
        // Если строка > n -> конкатинируем строку и символ
    } else return str + symb;
}
console.log(limitStr('Каждый охотник желает знать', 28, '!'))

 */
// #EasyFast. Догадывался что можно легко рефактернуть, но не придумал как.
// Ответ: if (!n && !symb) return str;
//        symb = symb || '...'; return str.substr(0, n - symb.length) + symb;
//======================================================================================================================
// 19/35 Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов
/*

function cutString(str, n) {
    const result = []
    for (i=0; i<str.length; i+=n){
        result.push(str.slice(i, n+i))
    }
    return result
}
console.log(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

 */

// #EasyFast. Ответ аналогичный, кроме одной строчки res.push(str.SUBSTR(i, n));
//======================================================================================================================
// 20/35 Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str
/*

var symb = "о", str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
    // Решил 60 секунд
    let count = 0
    str.split('').forEach(e => {
        if (e === symb) { count ++ }
    })
    return count

    // Второй метод:
    let counter = 0
    do {
        // Если в строке есть symb - удаляем его
        str = str.replace(symb, '')
        ++counter
        // Выполняем пока в строке не исчезнет symbol
    } while (str.search(symb) > -1)
    return counter
}
console.log(count(str, symb))

 */
// #EasyFast. Ответ похожий на мой.
//======================================================================================================================
// 21/35 Напишите функцию cutTegs(str), которая возвращает строку str, очищенную от всех HTML-тегов.
/*

var str = `<p>Здесь важная информация
о тегах HTML. </p>`

function cutTegs(str) {
    str1 = str.replace(/<\/?\w*>/mig, '') // Моё первое регулярное выражение -_-
    // Reg: "<" открытие тэга; "\/?" может быть, а может и не быть слеш; "\w*" буквы в любом кол-ве; ">" закрытие тэга
    return str1
}
console.log(cutTegs(str))

 */
// #Easy. Ответ идентичный, но RegEx такой: /( |<([^>]+)>)/ig
//======================================================================================================================
// 22/35 Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str
/*

var str = "   Max  is     a good      boy  ";
function strip(str) {
    let regEx = new RegExp(/(\s\s+)/mig)
    // Чтобы небыло первого пробела в строке - можно заюзать .trim()
    // или добавить ещё это
    // .replace(/^\s/,'')    // удалить пробелы в начале строки
    // .replace(/\s$/,'')   // удалить пробелы в конце строки
    str = str.replace(regEx,' ')
    return str
}
console.log(strip(str))

 */
// Не сложно, но поковыряться пришлось. Ответ идентичный моему.
//=====================================================================================================================>
// 23/35 Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
/*

var str = "Сила тяжести приложена к центру масс тела";

function cutString(str, n) {
    return str.split(' ').slice(0,n).join(' ')
}
console.log(cutString(str, 3))

 */
// #EastFast. Ответ идентичный моему.
//=====================================================================================================================>
// 24/35 Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.

function alphabetize(str) {
    return str.split('').sort().join('')
}
console.log(alphabetize("Europe"))

// #EastFast. Ответ идентичный моему. Чёт пошли слишком простые задачи
//=====================================================================================================================>