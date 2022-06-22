const income = +prompt('Ваш доход в рублях', '');

if (income > 50000) {
  console.log('Налог = ' + ((15000 * 0.13) + ((50000 - 15000) * 0.2) + ((income - 50000) * 0.3)));
} else if (income > 15000) {
  console.log('Налог = ' + ((15000 * 0.13) + ((income - 15000) * 0.2)));
} else if (income > 0) {
  console.log('Налог = ' + income * 0.13);
} else {
  console.log('Неккоректные данные');
}