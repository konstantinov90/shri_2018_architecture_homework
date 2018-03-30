import BaseComponent from './base/BaseComponent';

class InputForm extends BaseComponent {
  sendInputToServer() {
    const message = this.getInput();
    this.dispatcher.log({ newEntry: `форма готова отправить сообщение ${message} на сервер` });
    this.dispatcher.dispatch('sendToServer', { message });
  }

  getInput() {
    return this.domElement.querySelector('.view-stub__input').value;
  }

  /* eslint-disable class-methods-use-this */
  renderTemplate() {
    return `
    <div class="view-stub__input-block">
    <input class="view-stub__input"/>
    <button class="view-stub__apply">Отправить на сервер</button>
    </div>
    `;
  }
  /* eslint-enable class-methods-use-this */

  handlers() {
    // selector inside template
    return {
      '.view-stub__apply': {
        click: this.sendInputToServer,
      },
    };
  }
}

InputForm.registerSubClass();

export default InputForm;
