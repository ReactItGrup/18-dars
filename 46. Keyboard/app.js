// keydown, keyup, keypress

document.addEventListener("keydown", (e) => {
  //   console.log("Salom");
  //   console.log(e);
  //   console.log(e.key);
  //   console.log(e.code);
  //   console.log(e.keyCode);
});

document.addEventListener("keyup", (e) => {
  if (e.key == "m" && e.ctrlKey) {
    alert("ajoyib");
  }
});
