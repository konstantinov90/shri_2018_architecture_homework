import Store from './Store';

class Dispatcher {
  constructor(store) {
    this.store = store;
  }

  registerComponent(component) {
    this.store.registerComponent(component);
  }
  dispatch(action, payload) {
    this.log({ newEntry: `диспетчер готов вызвать экшн ${action} хранилища ${JSON.stringify(payload)}` });
    this.store.actOn(action, payload);
  }
  log(payload) {
    // диспэтч без внутреннего логирования, иначе зациклимся
    this.store.actOn('logSomething', payload);
  }
}

const instance = new Dispatcher(Store);

export default instance;
