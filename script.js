const textArea = document.querySelector("#text-area");

textArea.addEventListener("keydown", (event) => {
  console.log(event.currentTarget.value.length);
});
