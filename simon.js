let gameseq = [];
let userseq = [];
let random = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let maxlevel = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("key Pressed");
    started = true;
    levelup();
  }
});
function blink(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userblink(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function levelup() {
  userseq = [];
  level += 1;
  h2.innerText = `Level ${level}`;
  let randomidx = Math.floor(Math.random() * 3);
  let randomval = random[randomidx];
  let randombtn = document.querySelector(`.${randomval}`);
  gameseq.push(randomval);
  console.log(gameseq);
  blink(randombtn);
}
function checkbtn(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 700);
    }
  } else {
    maxlevel = Math.max(maxlevel, level);
    h2.innerHTML = `Game Over!!your score is <b>${level}</b> <br>Highest score is ${maxlevel}<br>Press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "black";
    }, 200);

    reset();
  }
} 
function btnpress() {
  let btn = this;
  userblink(btn);
  userbtn = btn.getAttribute("id");
  userseq.push(userbtn);

  checkbtn(userseq.length - 1);
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", btnpress);
}
function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
