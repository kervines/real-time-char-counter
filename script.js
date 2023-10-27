const textArea = document.querySelector("#text-area");
const totalChar = document.querySelector(".total-char");
const remaining = document.querySelector(".remaining");

const remainingChar = 50;
textArea.setAttribute("maxlength", remainingChar);

textArea.addEventListener("keyup", () => {
  remaining.innerText = remainingChar;
  totalChar.innerText = textArea.value.length;
  remaining.innerText -= totalChar.innerText;
});
