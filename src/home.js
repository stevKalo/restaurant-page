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
  copy.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit saepe perferendis praesentium, minima modi sunt eveniet voluptatem quas inventore deserunt necessitatibus molestias illo placeat adipisci a voluptatum sit iusto totam? Labore quis aliquam libero nulla ea quod, nobis exercitationem ab fugit dolorum eum at officia dolorem dolor expedita debitis pariatur? Saepe vel sint optio culpa, id doloremque veniam quasi error dolor reiciendis reprehenderit, accusamus a nulla, minus necessitatibus adipisci. Eos quis in dolor exercitationem beatae culpa odio nihil unde? Amet provident accusamus mollitia blanditiis dolores velit rerum voluptas exercitationem excepturi delectus laudantium minus, doloremque libero quos quia neque nulla? Repellendus!";
  body.appendChild(copy);
}

export default createHome;
