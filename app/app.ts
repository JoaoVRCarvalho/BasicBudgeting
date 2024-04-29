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

  if (expenseForm.classList.contains('hidden')) {
    toggleClass(expenseForm, 'hidden');
    toggleClass(expenseForm, 'fade');
    console.log(expenseForm.classList);
    setTimeout(expenseFormFade, 700);
  } else {
    toggleClass(expenseForm, 'hidden');
  }
})

const expenseFormFade = () => {
  toggleClass(expenseForm, 'fade');
}

function toggleClass(element: HTMLElement, className: string): void {
  if (element.classList.contains(className)) {
    return element.classList.remove(className); 
  }
  return element.classList.add(className);
}