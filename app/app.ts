import { AmountController } from "./controllers/amount.controller.js";
import { ExpenseController } from "./controllers/expense.controller.js";

const amountForm = document.querySelector('#amount-form');
const expenseForm = document.querySelector('#expense-form');

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