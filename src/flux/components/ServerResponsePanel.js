import BaseComponent from './base/BaseComponent';

class ServerResponsePanel extends BaseComponent {
  renderTemplate() {
    const response = this.store.getters().getLastServerResponse();
    return `<p class="view-stub__label">${response}</p>`;
  }
}

ServerResponsePanel.registerSubClass();

export default ServerResponsePanel;
