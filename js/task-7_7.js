// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputFont = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputFont.addEventListener("input", onFontRange);

function onFontRange(event) {
    textEl.style.fontSize = inputFont.value + "px";
    //console.log(textEl.style.fontSize);
 }
