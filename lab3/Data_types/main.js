// --- 5.2 ЧИСЛА ---
// Задача: Случайное число от min до max
function random(min, max) {
  return min + Math.random() * (max - min);
}

// Задача: Случайное целое число от min до max
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// --- 5.3 СТРОКИ ---
// Задача: Сделать первый символ заглавным
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// Задача: Проверка на спам
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// Задача: Усечение строки
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

// Задача: Выделить число (валюту)
function extractCurrencyValue(str) {
  return +str.slice(1);
}

// --- 5.4 и 5.5 МАССИВЫ ---
// Задача: Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

// Задача: Фильтрация по диапазону
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

// Задача: Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

// Задача: Скопировать и отсортировать
function copySorted(arr) {
  return arr.slice().sort();
}

// Задача: Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);

// Задача: Получить средний возраст
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// --- 5.7 MAP И SET ---
// Задача: Оставить уникальные элементы массива
function unique(arr) {
  return Array.from(new Set(arr));
}

// --- 5.10 ДЕСТРУКТУРИЗАЦИЯ ---
// Задача: Максимальная зарплата
function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for(let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

// --- 5.11 ДАТА И ВРЕМЯ ---
// Задача: День недели
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}

// --- 5.12 JSON ---
// Задача: Преобразуйте объект в JSON, а затем обратно
let user = {
  name: "Василий Иванович",
  age: 35
};
let user2 = JSON.parse(JSON.stringify(user));
