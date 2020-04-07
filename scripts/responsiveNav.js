const topBar = document.getElementById("topBar");
const navBar = document.getElementById("navBar");
const navBtns = document.getElementsByClassName("responsive1");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
let flag = true;

const responsiveNavFunction = () => {
  if (flag === true) {
    topBar.style.display = "block";
    navBar.style.display = "block";
    homeBtn.style.textAlign = "center";
    menuBtn.style.textAlign = "center";
    for (let i = 0; i < navBtns.length; i++) {
      navBtns[i].style.display = "block";
      navBtns[i].style.textAlign = "center";
    }
    flag = false;
  } else if (flag === false) {
    topBar.style.display = "flex";
    navBar.style.display = "flex";
    for (let i = 0; i < navBtns.length; i++) {
      navBtns[i].style.display = "none";
    }
    flag = true;
  }
};
