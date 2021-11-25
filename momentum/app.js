const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const button = document.querySelector("button");
function btnClick() {
  const chosenColorStart = colors[Math.floor(Math.random() * colors.length)];
  const chosenColorEnd = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(0.25turn, ${chosenColorStart}, ${chosenColorEnd})`;
  // 잘 됨
  // document.body.style.background = 'linear-gradient(0.25turn, '+chosenColorStart+', '+chosenColorEnd+')';
  // 안 됨 why?..
  // document.body.style.backgroundColor = `linear-gradient(0.25turn, ${chosenColorStart}, ${chosenColorEnd})`;
}

button.addEventListener("click", btnClick);