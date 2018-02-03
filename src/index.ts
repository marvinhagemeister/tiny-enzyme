import { render } from "preact";

export function mount(node: JSX.Element) {
  // Cleanup first
  const body = document.body;
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  // Create a clean state
  const div = document.createElement("div");
  document.body.appendChild(div);
  const top = document.body.firstChild;
  const root = render(node, top as any);

  return new EnzymeElement(root);
}

export class EnzymeElement {
  public items: Element[];
  constructor(el: Element | Element[]) {
    this.items = Array.isArray(el) ? el : [el];
  }

  simulate(name: string) {
    // MouseEvent leads to an infinite loop in jsdom
    const event = new Event(name, {
      view: window,
      bubbles: true,
      cancelable: true,
    } as any);

    this.items.map(x => x.dispatchEvent(event));
    return this;
  }

  find(selector: string) {
    const found = Array.from(this.items[0].querySelectorAll(selector));
    return new EnzymeElement(found.length === 1 ? found[0] : found);
  }
}
