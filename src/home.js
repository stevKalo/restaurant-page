import { loremIpsum } from "lorem-ipsum";

function createHome() {
  console.log("Home button clicked!");
  const body = document.getElementById("body");
  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = "Welcome to the Restaurant!";
  body.appendChild(heading);

  const img = document.createElement("img");
  img.setAttribute("src", "./assets/meal-photo.avif");
  body.appendChild(img);

  const copy = document.createElement("p");
  copy.classList.add("copy");
  copy.textContent = loremIpsum({ count: 100, units: "chars" });
  body.appendChild(copy);
}

export default createHome;
