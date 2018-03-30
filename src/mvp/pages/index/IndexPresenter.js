import Model from '../../Model';

class IndexPresenter {
  constructor(view) {
    this.view = view;
  }

  handleSubmit() {
    this.addLogEntry('презентер готов передать данные в модель');
    Model.sendToServer(this.view.getInputValue())
      .then(() => {
        this.addLogEntry('модель закончила общение с сервером');
        this.addLogEntry('презентер запрашивает у модели измененные данные');
        const newLabel = Model.getInputLabel();
        this.addLogEntry('презентер передает новые данные во вью');
        this.view.setLabelValue(newLabel);
      });
  }

  addLogEntry(message) {
    this.view.addLogEntry(message);
  }
}

export default IndexPresenter;
