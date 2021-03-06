// Link: https://www.youtube.com/watch?v=_pLpx6btq6U
.  - любой одиночный символ
[] - любой из указаных внутри символов.
    Т.е. [Ii] - найдёт в разных регистрах "i". Диапазон [a-d] от "а" до "d", [0-9]
$  - ищет в конце строки. Все строки заканчивающиеся на "." : \.$ ибо точку нужно в данном случае экранировать
    чтобы она не определялась как "любой" символ
^  - начало строки. Если этот символ (каретка) лежит в [], тогда он создаёт отрицательное значение "не"
\  - экранирование
\d - означает любую цифру
\D - что угодно кроме цифр
\s - пробелы
\S - что угодно кроме пробелов
\w - буквы
\W - всё кроме букв
\b - граница слова. Т.е. /\b...\b/ это слова из трёх букв, но данный пример будет реагировать на пробелы, поэтому:
     /\b\w\w\w\b/ - выделит все слова из трёх букв
\B - всё кроме не границ

Квантификация
n{5} - сколько раз должен повторяться символ. n{4,6} от 4х до 6и символов
*    - от нуля и выше. Т.е. n* - любое кол-во повторений n
+    - от 1 и выше
?    - ноль или 1 раз
Проверяем валидность номера карты: 4123-2231 1232 3123. В примере цифры идут через space и "-", поэтому делаем лог.
    оператор "или": /d{4}(\s|-)d{4}/    (\s (space) | (или) - ("-"))
Проверяем валидность номер телефона: +38 (050) 222. Начинается или с "+":/^\+[3-7]\d\s\(\d{3}\)\s\d{3}/
Проверяем валидность email: "hello@ua.ua". /w+@w+\.w+/
//======================================================================================================================