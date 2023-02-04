var startbutton = document.querySelector(".control-buttons span");
var namePlayer = document.querySelector(".info-container .name span");
var number = document.querySelector(".info-container .tries span");
var cards = document.querySelectorAll(".memory-game-blocks .game-block");
var success = document.querySelector("#success");
var fail = document.querySelector("#fail");

var select = [];

startbutton.onclick = function () {
  var name = prompt("What is Your Name");
  startbutton.parentNode.style.display = "none";
  console.log(name);
  namePlayer.textContent = name;
};

cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    card.classList.add("nega");
    select.push(card.children[1].firstElementChild);
    if (select.length === 2) {
      if (select[0].src === select[1].src) {
        console.log("good");
        success.play();
        select = [];
      } else {
        fail.play();
        select.forEach(function (card) {
          setTimeout(() => {
            card.parentNode.parentNode.classList.remove("nega");
          }, 800);
        });
        select = [];
        number.textContent++;
      }
    }
  });
});
