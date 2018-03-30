import { sendToServer as apiSendToServer } from '../ServerApi';

class Model {
  constructor() {
    this.inputLabel = '';
  }

  getInputLabel() {
    return this.inputLabel;
  }

  sendToServer(message) {
    return apiSendToServer(message)
      .then((resp) => { this.inputLabel = resp; });
  }
}

const model = new Model();

export default model;
