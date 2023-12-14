import "./style.css";
import createHome from "./home";

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
};
