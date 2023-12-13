import "./style.css";
import createHome from "./home";

console.log("Hello again World!");
const homeBtn = document.getElementById("home");
console.log(homeBtn);
homeBtn.onclick = createHome;
