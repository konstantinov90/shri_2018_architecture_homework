import BaseComponent from './base/BaseComponent';

class Log extends BaseComponent {
  renderTemplate() {
    return this.store.getters().getLogEntries()
      .map(resp => `<p>${resp}</p>`)
      .join('');
  }
}

Log.registerSubClass();

export default Log;
