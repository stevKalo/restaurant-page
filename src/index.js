import "./style.css";
import createHome from "./home";

const homeBtn = document.getElementById("home");

homeBtn.onclick = createHome();
console.log(homeBtn);
