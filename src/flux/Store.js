import { sendToServer as apiSendToServer } from '../ServerApi';

const EVENT = new CustomEvent('storeChanged', { detail: { skipLog: false } });
const EVENT_SKIP_LOG = new CustomEvent('storeChanged', { detail: { skipLog: true } });

class Store {
  constructor() {
    this.componentDomElements = [];
    this.data = {};
  }

  registerComponent(component) {
    this.componentDomElements.push(component.domElement);
  }

  actOn(actionName, payload) {
    const action = this.actions()[actionName];
    if (!action) {
      console.error(`action ${action} is not registered`);
    }
    if (actionName !== 'logSomething') {
      const newEntry = `хранилище готово обработать экшн ${actionName} с нагрузкой ${JSON.stringify(payload)}`;
      console.log(newEntry);
      this.data.logEntries.push(newEntry);
      this.done({ skipLog: true });
    }
    action(payload);
  }

  done({ skipLog = false }) {
    if (!skipLog) {
      this.data.logEntries.push('хранилище рассылает компонентам событие storeChanged');
    }

    this.componentDomElements.forEach((e) => {
      e.dispatchEvent(skipLog ? EVENT_SKIP_LOG : EVENT);
    });
  }

  initState() {
    this.data = {
      lastServerResponse: 'Здесь появится ответ сервера',
      logEntries: [],
    };
  }

  getters() {
    return {
      getLastServerResponse: () => this.data.lastServerResponse,
      getLogEntries: () => [...this.data.logEntries],
    };
  }

  actions() {
    return {

      logSomething: ({ newEntry }) => {
        console.log(newEntry);
        this.data.logEntries.push(newEntry);
        this.done({ skipLog: true });
      },

      sendToServer: ({ message }) => {
        apiSendToServer(message)
          .then((resp) => {
            this.data.lastServerResponse = resp;
            const newEntry = `хранилище получило ответ от сервера ${resp}`;
            console.log(newEntry);
            this.data.logEntries.push(newEntry);
            this.done({ skipLog: false });
          });
      },

    };
  }
}

const instance = new Store();
instance.initState();

export default instance;
