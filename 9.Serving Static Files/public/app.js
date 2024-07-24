document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    const title = document.querySelector("h1");
    let currentFontSize = window.getComputedStyle(title).fontSize;
    let newFontSize = parseInt(currentFontSize) + 1;
    
    if (button.textContent === "CLICK ME") {
      button.textContent = "Clicked!";
      button.style.backgroundColor = "lightgreen";
      title.style.fontSize = newFontSize + "px";
    } else {
      button.textContent = "CLICK ME";
      button.style.backgroundColor = "";
    }
  });
});
