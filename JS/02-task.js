// Анаграмма
// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.

// Постановка
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

function anagramCheck(a, b) {
    const reversedB = b.split('').reverse().join('');
    const result = a.toLowerCase() === reversedB.toLowerCase() ? 'It is anagram.' : 'It is NOT anagram!'
    console.log(result);
}

anagramCheck('Bla', 'Alb');
anagramCheck('Bla', 'bla');