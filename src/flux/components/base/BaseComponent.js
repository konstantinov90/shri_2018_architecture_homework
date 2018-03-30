class BaseComponent {
  constructor(domElement, store, dispatcher) {
    this.domElement = domElement;
    this.store = store;
    this.dispatcher = dispatcher;

    this.domElement.addEventListener('storeChanged', this.render.bind(this));
    this.dispatcher.registerComponent(this);
  }

  __makeStyle() {
    JSON.stringify(this.style).replace(/"/g, '').replace(/,/g, ';');
  }

  static registerSubClass() {
    this.subClasses[this.name] = this;
  }

  render({ detail }) {
    this.domElement.innerHTML = this.renderTemplate();
    if (!detail.skipLog) {
      this.dispatcher.log({ newEntry: `компонент ${this.constructor.name} готов перерисоваться` });
    }
    this.processHandlers();
  }

  processHandlers() {
    if (!this.handlers) {
      return;
    }
    const handlers = this.handlers();
    Object.keys(handlers).forEach((selector) => {
      const action = handlers[selector];
      this.domElement.querySelectorAll(selector).forEach((el) => {
        Object.keys(action).forEach((event) => {
          el.addEventListener(event, action[event].bind(this));
        });
      });
    });
  }
}

BaseComponent.subClasses = {};

export default BaseComponent;
