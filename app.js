// 保存キー（名前）
const STORAGE_KEY = "todayCount";

// 保存されている値を読み込む（なければ0）
let count = Number(localStorage.getItem(STORAGE_KEY)) || 0;

const countEl = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

function render() {
  countEl.textContent = count;
}

// 保存する関数
function save() {
  localStorage.setItem(STORAGE_KEY, count);
}

plusBtn.onclick = () => {
  count++;
  save();
  render();
};

minusBtn.onclick = () => {
  count--;
  save();
  render();
};

render();
