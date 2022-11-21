var library = {
  heads: [
    "/assets/img/arcade/memory/dave.png",
    "/assets/img/arcade/memory/nick.png",
    "/assets/img/arcade/memory/joe.png",
    "/assets/img/arcade/memory/kane.png",
    "/assets/img/arcade/memory/langers.png",
    "/assets/img/arcade/memory/robot.png",
    "/assets/img/arcade/memory/smoigel.png",
    "/assets/img/arcade/memory/superphiz.png",
    "/assets/img/arcade/memory/thomasg.png",
    "/assets/img/arcade/memory/worthalter.png",
    "/assets/img/arcade/memory/dave.png",
    "/assets/img/arcade/memory/nick.png",
    "/assets/img/arcade/memory/joe.png",
    "/assets/img/arcade/memory/kane.png",
    "/assets/img/arcade/memory/langers.png",
    "/assets/img/arcade/memory/robot.png",
    "/assets/img/arcade/memory/smoigel.png",
    "/assets/img/arcade/memory/superphiz.png",
    "/assets/img/arcade/memory/thomasg.png",
    "/assets/img/arcade/memory/worthalter.png"
  ]
}

var images = [];
var tempElt1 = "";
var tempElt2 = "";
var click = -1;
var win = 0;
var score = 0;
var time = 0;
function finalscore() {
  return score;
  // return Math.floor( (score/time)*100 ) || 0;
}

var preElt = document.querySelector("#pre");
var themesElt = document.querySelector("#themes");
var boxElts = document.getElementsByClassName("box");
var mainElt = document.querySelector(".main");
var timeElt = document.querySelector("#time");
var scoreElt = document.querySelector("#score");
var postElt = document.querySelector("#post");
var finalElt = document.querySelector("#final");
var againElt = document.querySelector("#again");


// initiate the game with chosen theme
// themesElt.addEventListener("click", function(e) {
//   if (e.target.classList.contains("themes")) {
//     activateTheme(e.target.id);
//     preElt.classList.add("hidden");
//   }
// });
document.addEventListener("DOMContentLoaded", function(event) { 
  activateTheme("heads");
});
function activateTheme(theme) {
  // insert theme in images array
  for (let i = 0; i < 20; i++) {images.push(library[theme][i]);}  
  // insert images in memory game
  for (let i = 0; i < 20; i++) {
    var rand = Math.floor(Math.random() * (images.length - 1));
    boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
    images.splice(rand, 1);
  }
}


// Handle the play
mainElt.addEventListener("click", gameLogic);

function gameLogic(e) {
  // make sure the box is playable
  if (e.target.classList.contains("play")) {
    e.target.firstChild.classList.remove("hidden");
    // first of two click
    if (click < 1) {
      tempElt1 = e.target;
      // timer
      if (click === -1) {
        timer = setInterval(function() {
          time++;
          timeElt.innerHTML = time;
        }, 1000);
      }
      click = 1;
    }

    // second click
    else if (e.target !== tempElt1) {
      tempElt2 = e.target;

      // different images
      if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
        mainElt.removeEventListener("click", gameLogic);
        setTimeout( function() {
          tempElt1.firstChild.classList.add("hidden");
          tempElt2.firstChild.classList.add("hidden");
          mainElt.addEventListener("click", gameLogic);
        }, 400);
        if (score > 0) {
          // score -= 2;
          score -= 15;
        }
        scoreElt.innerHTML = finalscore();
      }

      // same images
      else {
        score += 10;
        win += 2;
        tempElt1.firstChild.classList.add("outlined");
        tempElt2.firstChild.classList.add("outlined");
        tempElt1.classList.remove("play");
        tempElt2.classList.remove("play");
        scoreElt.innerHTML = finalscore();

        // game won
        if (win === 20) {
          clearInterval(timer);
          finalElt.innerHTML = "You won " + finalscore() + " points <br> in " + time + " seconds";
          // finalElt.innerHTML = "You scored " + finalscore() + " points";
          postElt.classList.remove("hidden");
        }
      }
      click = 0;
    }
  }
}

againElt.addEventListener("click", resetGame);

function resetGame() {
  // reset game
  tempElt1 = "";
  tempElt2 = "";
  click = -1;
  win = 0;
  score = 0;
  time = 0;
  postElt.classList.add("hidden");
  // preElt.classList.remove("hidden");
  for (let i = 0; i < 20; i++) {
    boxElts[i].classList.add("play");
    boxElts[i].firstChild.classList.add("hidden");
  }
  timeElt.textContent = time;
  scoreElt.innerHTML = score;
  activateTheme("heads");
}

// handle focus of the page
// function checkPageFocus() {
//   if (document.hasFocus()) {
//     preElt.classList.remove("hidden");
//   }
//   else {
//     preElt.classList.add("hidden");
//   }
// }
// var checkPageInterval = setInterval(checkPageFocus, 300);