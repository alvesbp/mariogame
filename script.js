const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const cloud = document.querySelector(".cloud");

function jump() {
  mario.classList.add("jump");
  setTimeout(() => mario.classList.remove("jump"), 600);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudPosition = cloud.offsetLeft;
  console.log(cloudPosition);
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    cloud.style.animation = "none";
    cloud.style.left = `${cloudPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "img/gameover.png";
    mario.style.marginLeft = "20px";
    mario.style.width = "100px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
