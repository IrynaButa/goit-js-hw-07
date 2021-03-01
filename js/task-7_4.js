// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counterValue = 0;
console.log(counterValue);

const refs = {
  up: document.querySelector('[data-action="increment"]'),
  down: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value')

}
refs.up.addEventListener('click', onBtnIncrease)
refs.down.addEventListener('click', onBtnDecrease)

function onBtnDecrease(event) { 
  refs.value.textContent = (counterValue -= 1)
}

function onBtnIncrease(event) { 
  refs.value.textContent = (counterValue += 1)
}