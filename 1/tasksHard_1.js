const income = +prompt('Ваш доход в рублях', '');

if (income <= 15000) {
  alert('Налог = ' + income * 0.12);
}
if (income > 15000 && income < 50000) {
  alert('Налог = ' + income * 0.2);
}
if (income >= 50000) {
  alert('Налог = ' + income * 0.3);
}
