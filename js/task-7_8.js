// Напиши скрипт создания и очистки коллекции элементов.Пользователь
// вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>



const refs = {
  input: document.querySelector('#controls>input'),
  clearBtn: document.querySelector('button[data-action="destroy"]'),
  createBtn: document.querySelector('button[data-action="render"]'),
 boxes: document.getElementById('boxes'),
}
refs.createBtn.addEventListener('click', onInputAmount )
refs.clearBtn.addEventListener('click', onDestroyBoxes)
function onInputAmount(event) { 
  let amount = Number(refs.input.value);
  onCreateBoxes(amount);
}
function onCreateBoxes(amount) {
  const baseSize = 30;
 const fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    const reSize = baseSize + i * 10;
    const box = document.createElement("div");
   box.style.cssText = `width: ${reSize}px; height: ${reSize}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(box);
  }
  refs.boxes.appendChild(fragment);
}
function onDestroyBoxes() { 
  refs.boxes.textContent = '';
}
function random() {
   return Math.floor(Math.random() * 256);
}


