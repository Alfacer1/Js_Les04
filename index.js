

// Завдання 4

const num1 = parseFloat(prompt("Введіть перше число: "));
const num2 = parseFloat(prompt("Введіть друге число: "));

if (!isNaN(num1) && !isNaN(num2)) {
  const add = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const division = num2 !== 0 ? num1 / num2 : "Ділення на 0 неможливе!";

  alert(
    "Додавання: " + add + "\n" +
    "Віднімання: " + difference + "\n" +
    "Множення: " + product + "\n" +
    "Ділення: " + division
  );
} 
else {
  alert("Ви ввели неправильні числа. Будь ласка, введіть числа.");
}



































// !!! Примітки для себе !!!

// prompt() - виводить діалогове вікно з полем для вводу.
// alert() - виводить повідомлення.
// confirm() - виводить повідомлення з кнопкою Ок і Скасувати.
// var / let - перемінна змінна
// const - неперемінна змінна
// concatenatedResult - це змінна що об'єднує значення рядків, які користувач ввів у змінні 
// if (умова) {} - оператор для умовного виконання коду. (умова) - це вираз, який оцінюється на істинність або хибність.
// else {} - (перевірка if) - використовується для встановлення альтернативного дії, яка виконується, якщо умова в операторі if не виконується.
// !isNaN(inputNumber) - перевіряє чи введене значення є числом.
// "!" - в цьому виразі інвертує результат, тобто умова виконується, якщо inputNumber є числом.
// inputNumber.length === 5 - умова перевіряє, чи довжина рядка inputNumber дорівнює 5.
// .split('') - розбиває значення inputNumber на окремі символи (цифри).
// .join(' ') - з*єднює значення inputNumber.split('') використовуючи пробіли між ними. 
// == (порівняння за значенням) - оператор порівнює значення на рівність без порівняння типів даних. (1 = '1')
// === (строге порівняння) - оператор порівнює значення та типи даних (1 не = '1')
// && - це логічний оператор, використовується для комбінування двох чи більше логічних виразів і повертає 'true' тільки тоді, коли всі вирази, які з'єднуються за допомогою &&, є істинними.
// parseFloat - це функція, яка перетворює рядок у число з плаваючою комою або у NaN (Не-число), якщо рядок неможливо перетворити у число.
// "add" ----- "додавання".
// "difference" ----- "віднімання".
// "product" ----- "множення".
// "division" ----- "ділення".
// !== - це оператор строгої нерівності, який використовується для порівняння двох значень. В даному контексті !== 0 ? перевіряє, чи значення (наприклад num2) не рівне значенню справа від оператора (нуль).
