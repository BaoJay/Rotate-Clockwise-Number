// Sắp xếp thứ tự clockwise
const nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

btn5.addEventListener("click", () => {
  nums.unshift(nums.pop());
  // Ánh xạ từng btn vào array đã xếp theo thứ tự clockwise
  for (let i = 0; i < 8; i++) {
    document.querySelector("#btn" + ids[i]).innerText = nums[i];
  }
});
