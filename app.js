const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");

// Sắp xếp thứ tự clockwise
const clockwiseNum = [1, 2, 3, 6, 9, 8, 7, 4];
const clockwiseBtn = [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4];

btn5.addEventListener("click", () => {
  // Lưu vào biến số cuối cùng
  const removedNum = clockwiseNum[clockwiseNum.length - 1];
  // Bỏ số cuối cùng
  clockwiseNum.pop();
  // Add số cuối cùng và đầu array
  clockwiseNum.unshift(removedNum);

  // Map button theo thứ tự số trong array
  btn1.innerText = clockwiseNum[0];
  btn2.innerText = clockwiseNum[1];
  btn3.innerText = clockwiseNum[2];
  btn6.innerText = clockwiseNum[3];
  btn9.innerText = clockwiseNum[4];
  btn8.innerText = clockwiseNum[5];
  btn7.innerText = clockwiseNum[6];
  btn4.innerText = clockwiseNum[7];
});
