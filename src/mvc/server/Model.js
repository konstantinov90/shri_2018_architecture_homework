import log from '../log';

class Model {
  constructor() {
    this.inputLabel = 'Здесь появится ответ сервера';
  }
  getInputLabel() {
    return this.inputLabel;
  }
  setInputLabel(inputValue) {
    log(`модель меняет данные "inputValue" на ${inputValue}`);
    this.inputLabel = `Я сервер, верь мне! Я получил сообщение ${inputValue}`;
  }
}

const model = new Model();

export default model;
