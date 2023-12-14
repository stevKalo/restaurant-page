import "./style.css";
import createHome from "./home";
import createMenu from "./menu";

function clearPage() {
  const body = document.getElementById("body");
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}

const homeBtn = document.getElementById("home");
homeBtn.onclick = () => {
  clearPage();
  createHome();
};

const menuBtn = document.getElementById("menu");
menuBtn.onclick = () => {
  clearPage();
  createMenu();
};
