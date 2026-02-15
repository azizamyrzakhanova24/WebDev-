// --- 4.1 ОБЪЕКТЫ ---
// Задача: Привет, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Задача: Проверка на пустоту
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Задача: Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum); // 390

// Задача: Умножаем все числовые свойства на 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

// --- 4.4 МЕТОДЫ ОБЪЕКТА, THIS ---
// Задача: Создайте калькулятор
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// --- 4.5 КОНСТРУКТОР, NEW ---
// Задача: Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}
let calc = new Calculator();
