const button = document.getElementById("clickBtn");
const countText = document.getElementById("count");

let clicks = 0;

button.addEventListener("click", () => {
  clicks++;
  countText.textContent = "Clicks: " + clicks;
});
