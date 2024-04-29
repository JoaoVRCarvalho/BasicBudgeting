export abstract class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    if(!document.querySelector(selector)) {
      throw `selector [${selector}] absent from DOM...`
    }
    this.element = document.querySelector(selector) as HTMLElement;
  }

  update(model: T) {
    this.element.innerHTML = this.template(model);
  }

  abstract template(model: T): string
}