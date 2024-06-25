// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
//     найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement.Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
//     а не напрямую.

function createCounter(number) {
    function numberValue(number) {
        return number;
    }
    function increment(number) {
        return number += 1;
    }
    function decrement(number) {
        return number -= 1;
    }
    return { increment, decrement, numberValue };
}

const value = 5;
const resultat = createCounter();
console.log(`Сама цифра: ${resultat.numberValue(value)}`);
console.log(`увеличиваем цифру ${value} на 1 итог: ${resultat.increment(value)}`);
console.log(`уменьшаем цифру ${value} на 1 итог: ${resultat.decrement(value)}`);

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

//     Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


// не силен в рекурсии :)