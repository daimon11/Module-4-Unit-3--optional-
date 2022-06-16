const income = +prompt('Ваш доход в рублях', '');
// const income15 = 15000 * 0.13;
// const income20 = 15000 * 0.13;

if (income <= 15000) {
  alert('Налог = ' + income*0.13);
}
if (income > 15000 && income < 50000) {
  alert('Налог = ' + (15000 * 0.13 + (income - 15000) * 0.2));
}
if (income >= 50000) {
  alert('Налог = ' + (15000 * 0.13 + (50000 - 15000) * 0.2 + (income - 50000) * 0.3));
}
