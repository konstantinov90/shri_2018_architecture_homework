import BaseComponent from './components/base/BaseComponent';
import Store from './Store';
import Dispatcher from './Dispatcher';
import './components/Log';
import './components/InputForm';
import './components/ServerResponsePanel';


document.querySelectorAll('.__flux-component__').forEach((comp) => {
  const component = new BaseComponent.subClasses[comp.dataset.component](comp, Store, Dispatcher);
  component.render({ detail: { skipLog: true } });
});
