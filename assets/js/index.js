const ak = document.getElementsByClassName("ak-47");
const scar = document.getElementsByClassName("fn-scar");
const rpg = document.getElementsByClassName("rpg-7");
let i;

for (i = 0; i < ak.length; i++) {
  ak[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < scar.length; i++) {
    scar[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panl = this.nextElementSibling;
      if (panl.style.display === "block") {
        panl.style.display = "none";
      } else {
        panl.style.display = "block";
      }
    });
  }

  for (i = 0; i < rpg.length; i++) {
    rpg[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var pan = this.nextElementSibling;
      if (pan.style.display === "block") {
        pan.style.display = "none";
      } else {
        pan.style.display = "block";
      }
    });
  }