function createAbout() {
  const body = document.getElementById("body");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  heading.classList.add("heading");

  const bio = document.createElement("p");
  bio.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam!";
  bio.classList.add("copy");

  const img = document.createElement("img");
  img.setAttribute("src", "./assets/meal-photo.avif");
  img.classList.add("about-img");

  const socials = document.createElement("ul");
  socials.classList.add("socials");
  const social1 = document.createElement("li");
  social1.textContent = "Facebook";
  const social2 = document.createElement("li");
  social2.textContent = "Instagram";
  const social3 = document.createElement("li");
  social3.textContent = "Threads";

  body.appendChild(heading);
  body.appendChild(bio);
  body.appendChild(img);
  body.appendChild(socials);
}

export default createAbout;
