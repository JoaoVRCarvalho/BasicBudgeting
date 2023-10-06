import { MoneyController } from "./controllers/page.js";

const form = document.querySelector('#amount-form')
const controller = new MoneyController

form.addEventListener('submit', event => {
  event.preventDefault();
  controller.addBudget();
}) 