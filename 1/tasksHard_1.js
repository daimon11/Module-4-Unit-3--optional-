const income = +prompt('Ваш доход в рублях', '');

if (income > 50000) {
  console.log('Налог = ' + income * 0.3);
} else if (income > 15000) {
  console.log('Налог = ' + income * 0.2);
} else if (income > 0) {
  console.log('Налог = ' + income * 0.12);
} else {
  console.log('Введены некорректные данные')
}