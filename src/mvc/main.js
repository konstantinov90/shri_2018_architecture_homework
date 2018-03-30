import Controller from './server/Controller';
import log from './log';

class YourBrowser {
  constructor(domElement) {
    this.domElement = domElement;
  }

  renderHTML(HTML) {
    this.domElement.innerHTML = HTML;
    this.mockRequestStub();
  }

  mockRequestStub() {
    const form = this.domElement.querySelector('.view-stub__input-block');
    this.domElement.querySelector('.view-stub__apply')
      .addEventListener('click', (e) => {
        e.preventDefault();
        this.post(form.attributes.action.value, new FormData(form));
      });
  }

  get(url) {
    log('ваш браузер запрашивает у сервера главную страницу (обращение к контроллеру)');
    this.renderHTML(Controller.get(url));
  }

  post(url, formData) {
    log('ваш браузер делает POST запрос на сервер (обращение к контроллеру)');
    const body = Array.from(formData.entries())
      .map(entry => entry.join('='))
      .join('\n');
    this.renderHTML(Controller.post(url, body));
  }
}

const yourBrowser = new YourBrowser(document.querySelector('.kinda-browser'));

yourBrowser.get('/');
