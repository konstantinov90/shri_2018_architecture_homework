const log = document.querySelector('.app-log');

export default function (message) {
  const newEntry = document.createElement('p');
  newEntry.innerText = message;
  console.log(message);
  log.appendChild(newEntry);
}
