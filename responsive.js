function miMenu() {
    var x = document.getElementById("miMenNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }