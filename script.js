const textArea = document.querySelector("#text-area");
const totalChar = document.querySelector(".total-char");
const remaining = document.querySelector(".remaining");

textArea.addEventListener("keydown", (event) => {
  const maxCharater = 150;
  totalChar.innerText = event.currentTarget.value.length;
  remaining.innerText = maxCharater - totalChar.innerText;

  if (remaining.innerText == 130) {
  }
});
