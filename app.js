// 保存キー（名前）
const STORAGE_KEY = "todayCount";

// 保存されている値を読み込む（なければ0）
let count = Number(localStorage.getItem(STORAGE_KEY)) || 0;

const countEl = document.getElementById("count");
const plusBtn1 = document.getElementById("plus1");
const minusBtn1 = document.getElementById("minus1");
const plusBtn3 = document.getElementById("plus3");
const minusBtn3 = document.getElementById("minus3");
const plusBtn5 = document.getElementById("plus5");
const minusBtn5 = document.getElementById("minus5");
const plusBtn10 = document.getElementById("plus10");
const minusBtn10 = document.getElementById("minus10");

function render() {
  countEl.textContent = count;
}

// 保存する関数
function save() {
  localStorage.setItem(STORAGE_KEY, count);
}

plusBtn1.onclick = () => {
  count++;
  save();
  render();
};

minusBtn1.onclick = () => {
  count--;
  save();
  render();
};

plusBtn3.onclick = () => {
  count+=3;
  save();
  render();
};

minusBtn3.onclick = () => {
  count-=3;
  save();
  render();
};

plusBtn5.onclick = () => {
  count+=5;
  save();
  render();
};

minusBtn5.onclick = () => {
  count-=5;
  save();
  render();
};

plusBtn10.onclick = () => {
  count+=10;
  save();
  render();
};

minusBtn10.onclick = () => {
  count-=10;
  save();
  render();
};

render();
