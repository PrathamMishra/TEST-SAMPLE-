const acBtn = document.querySelector("#addChild");
const rcBtn = document.querySelector("#removeChild");
const tcBtn = document.querySelector("#toggleChild");
const cDiv = document.querySelector("#childWrapper");
const mForm = document.querySelector("#mainForm");
const sText = document.querySelector("#sampleText");

acBtn.addEventListener("click", (e) => {
  const child = document.createElement("div");
  child.classList.add("child");
  cDiv.appendChild(child);
});
rcBtn.addEventListener("click", (e) => {
  cDiv.removeChild(cDiv.childNodes[0]);
});
tcBtn.addEventListener("change", (e) => {
  if (e.target.checked) {
    cDiv.style.display = "block";
  } else {
    cDiv.style.display = "none";
  }
});
mForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  sText.style.backgroundColor = e.target.divCol.value;
  sText.style.color = e.target.textCol.value;
});
