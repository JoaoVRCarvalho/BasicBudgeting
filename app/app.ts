import { AmountController } from "./controllers/amount.controller.js";
import { ExpenseController } from "./controllers/expense.controller.js";

const amountForm = document.querySelector('#amount-form') as HTMLElement;
const expenseForm = document.querySelector('#expense-form') as HTMLElement;

const showExpenseForm = document.querySelector('#show-expense-form');

const amountController = new AmountController();
const expenseController = new ExpenseController();

amountForm.addEventListener('submit', event => {
  event.preventDefault();
  amountController.add();
})

expenseForm.addEventListener('submit', event => {
  event.preventDefault();
  expenseController.add();
})

showExpenseForm.addEventListener('click', event => {
  event.preventDefault();
  let visibility = expenseForm.style.visibility;

  if (visibility === '' || visibility === 'hidden') {
    expenseForm.style.visibility = 'visible';
    toggleExpenseFade();
    setTimeout(toggleExpenseFade, 700);
  } else {
    expenseForm.style.visibility = 'hidden';
  }
})

function toggleExpenseFade() {
  if (expenseForm.classList.contains('fade')) {
    return expenseForm.classList.remove('fade'); 
  }
  return expenseForm.classList.add('fade');
}