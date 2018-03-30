function sendToServer(data) {
  return Promise.resolve(data)
    .then(d => `Я сервер, верь мне! Я получил сообщение: ${d}`);
}

// console.log(data);

// var event = new CustomEvent('dataIsSent', { detail: data });

// document.dispatchEvent(event);

// Пример обработки события dataIsSent. Рекомендуется изменить API модуля так,
// чтобы вызова события через document не было

// function test() {
//     document.addEventListener('dataIsSent', function(event) {
//         console.log('event got ' + event.detail);
//     });
//     sendToServer('mydata');
// }

/* eslint-disable import/prefer-default-export */
export { sendToServer };
/* eslint-enable import/prefer-default-export */
