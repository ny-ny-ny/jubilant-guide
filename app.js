let count = 0;

const countEl = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

function render() {
  countEl.textContent = count;
}

plusBtn.onclick = () => {
  count++;
  render();
};

minusBtn.onclick = () => {
  count--;
  render();
};

render();
