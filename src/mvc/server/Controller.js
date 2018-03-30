import index from './view/index';
import error from './view/error';
import Model from './Model';
import log from '../log';

class Controller {
  constructor(model) {
    this.model = model;
  }

  static parseBody(body) {
    const parsedBody = {};

    body.split('\n').forEach((entry) => {
      const [key, value] = entry.split('=');
      parsedBody[key] = value;
    });

    return parsedBody;
  }

  get(route) {
    switch (route) {
      case '/':
        log('контроллер определил, что роут "/" соответствует вью index');
        return index(this.model);
      default:
        console.error(`unknown route ${route}`);
        return error();
    }
  }

  post(route, _body) {
    const body = this.constructor.parseBody(_body);
    switch (route) {
      case 'new-label':
        log('контроллер определил, что роут "new-label" соответствует мутации данных в модели');
        this.model.setInputLabel(body.input);
        log('после мутации модели контроллер отдает вью index');
        return this.get('/');
      default:
        console.error(`unknown route ${route}`);
        return error();
    }
  }
}

const controller = new Controller(Model);

export default controller;
