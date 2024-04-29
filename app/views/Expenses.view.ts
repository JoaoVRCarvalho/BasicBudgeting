import { Budget } from "../models/Budget.js"
import { View } from "./View.js"

export class expensesView extends View<Budget> {
  template(model: Budget): string {
    return `
    <table>
      <tr>
        <th></th>
      </tr>
    </table>
    `
  }
}