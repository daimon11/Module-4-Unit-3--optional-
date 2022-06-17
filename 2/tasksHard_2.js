const income = +prompt('Ваш доход в рублях', '');

if (income <= 15000) {
  alert('Налог = ' + income*0.13);
} else if (income > 15000 && income < 50000) {
  alert('Налог = ' + (15000 * 0.13 + (income - 15000) * 0.2));
} else if (income >= 50000) {
  alert('Налог = ' + (15000 * 0.13 + (50000 - 15000) * 0.2 + (income - 50000) * 0.3));
}
