// --- 2.4 ПЕРЕМЕННЫЕ ---
// Задача: Работа с переменными
let admin, name;
name = "Джон";
admin = name;
alert(admin);

// Задача: Придумайте правильные имена
let ourPlanetName = "Земля";
let currentUserName = "Джон";

// --- 2.13 ЦИКЛЫ ---
// Задача: Вывести чётные числа
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// Задача: Замените for на while
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Задача: Повторять цикл, пока ввод неверен
let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// --- 2.14 SWITCH ---
// Задача: Напишите 'if', аналогичный 'switch'
let browser = 'Edge';
if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

// --- 2.15 ФУНКЦИИ ---
// Задача: Функция min(a, b)
function min(a, b) {
  return a < b ? a : b;
}

// Задача: Функция pow(x, n)
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
