function changeImg(imgNumber) {
  var randomnumber = Math.floor(Math.random() * 6) + 1;
  var randomImgSource = "images/dice" + randomnumber + ".png";

  var b = document.querySelector(".img" + imgNumber);
  //   var a = document.getElementsByClassName("img1")[0];
  //   console.log(a);

  b.setAttribute("src", randomImgSource);
}

function getDiceNumber(diceNumber) {
  let src = document.querySelector(".img" + diceNumber);
  let src1 = src.getAttribute("src");
  src1 = src1.slice(11, 12);
  return src1;
}

function displayWinner() {
  console.log(src1);
  console.log(src2);
  if (src1 === src2) {
    document.querySelector("h1").innerHTML = "DRAW";
  } else if (src1 > src2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 win ";
  } else if (src1 < src2) {
    document.querySelector("h1").innerHTML = "Player 2 win 🎉";
  }
}

changeImg(1);
changeImg(2);

var src1 = getDiceNumber(1);
var src2 = getDiceNumber(2);
displayWinner();

// Beaucoup plus interessant d'aller a l'essentiel et pas de faire des fonctions pour rien .
