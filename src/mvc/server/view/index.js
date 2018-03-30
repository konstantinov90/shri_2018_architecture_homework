import log from '../../log';

export default function (model) {
  log('вью index рендерит шаблон');
  return `
    <h1>Архитектура приложения</h1>
    <div class="view-stub">
        <form class="view-stub__input-block" method="POST" action="new-label">
            <input class="view-stub__input" name="input"/>
            <button class="view-stub__apply" type="submit">Отправить на сервер</button>
        </form>
        <p class="view-stub__label">${model.getInputLabel()}</p>
    </div>
  `;
}
