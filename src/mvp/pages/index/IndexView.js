import IndexPresenter from './IndexPresenter';

class IndexView {
  constructor(domElement) {
    this.domElement = domElement;
    this.presenter = new IndexPresenter(this);
    this.init();
  }

  init() {
    this.domElement.querySelector('.view-stub__apply')
      .addEventListener('click', this.onSubmit.bind(this));
  }

  onSubmit() {
    this.addLogEntry('вью говорит презентеру, что нужно обработать новый сабмит');
    this.presenter.handleSubmit();
    this.clearInput();
  }

  clearInput() {
    this.domElement.querySelector('.view-stub__input').value = '';
  }

  getInputValue() {
    return this.domElement.querySelector('.view-stub__input').value;
  }

  setLabelValue(label) {
    this.addLogEntry('вью устанавливает новое значение лейбла');
    this.domElement.querySelector('.view-stub__label').innerText = label;
  }

  addLogEntry(message) {
    const newEntry = document.createElement('p');
    console.log(message);
    newEntry.innerText = message;
    this.domElement.querySelector('.app-log').appendChild(newEntry);
  }
}

export default IndexView;
