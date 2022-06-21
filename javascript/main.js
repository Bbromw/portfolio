const text = document.querySelector(".name");
let strText = text.textContent;
text.textContent = "";
strText = strText.split("");
for (let i = 0; i < strText.length; i++) {
  if ((strText[i] === " ")) text.innerHTML += "<span>" + "_" + "</span>";
  else text.innerHTML += "<span>" + strText[i] + "</span>";
}

let char = 0;




function onTick() {
  const span = document.querySelectorAll("span")[char];
  const { classList, style} = span;
  classList.add("fade");
  char++;
  if (char == strText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval();
  char = 0;
  timer = null;
}
let timer= setInterval(onTick, 500)


