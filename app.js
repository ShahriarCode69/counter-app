const counterValue = document.getElementById("counterValue");

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let counterNumber = 0;

increaseBtn.addEventListener("click", () => {
  counterNumber += 1;
  console.log(counterNumber);
  counterValue.textContent = counterNumber;
});

resetBtn.addEventListener("click", () => {
  counterNumber = 0;
  console.log(counterNumber);
  counterValue.textContent = counterNumber;
});

decreaseBtn.addEventListener("click", () => {
  if (counterNumber > 0) {
    counterNumber -= 1;
    console.log(counterNumber);
    counterValue.textContent = counterNumber;
  }
});
