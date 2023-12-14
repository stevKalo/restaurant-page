function createMenu() {
  const body = document.getElementById("body");

  const appHead = document.createElement("h2");
  appHead.classList.add("menu-head");
  appHead.textContent = "Appetizers";

  const appList = document.createElement("ul");
  appList.classList.add("menu-list");
  const app1 = document.createElement("li");
  app1.textContent = "Appetizer 1";
  const app2 = document.createElement("li");
  app2.textContent = "Appetizer 2";
  const app3 = document.createElement("li");
  app3.textContent = "Appetizer 3";
  const app4 = document.createElement("li");
  app4.textContent = "Appetizer 4";

  const mainsHead = document.createElement("h2");
  mainsHead.classList.add("menu-head");
  mainsHead.textContent = "Mains";

  const mainsList = document.createElement("ul");
  mainsList.classList.add("menu-list");
  const main1 = document.createElement("li");
  main1.textContent = "Main 1";
  const main2 = document.createElement("li");
  main2.textContent = "Main 2";
  const main3 = document.createElement("li");
  main3.textContent = "Main 3";
  const main4 = document.createElement("li");
  main4.textContent = "Main 4";

  const dessertsHead = document.createElement("h2");
  dessertsHead.classList.add("menu-head");
  dessertsHead.textContent = "Desserts";

  const dessertsList = document.createElement("ul");
  dessertsList.classList.add("menu-list");
  const dessert1 = document.createElement("li");
  dessert1.textContent = "Dessert 1";
  const dessert2 = document.createElement("li");
  dessert2.textContent = "Dessert 2";
  const dessert3 = document.createElement("li");
  dessert3.textContent = "Dessert 3";
  const dessert4 = document.createElement("li");
  dessert4.textContent = "Dessert 4";

  body.appendChild(appHead);
  body.appendChild(appList);
  body.appendChild(mainsHead);
  body.appendChild(mainsList);
  body.appendChild(dessertsHead);
  body.appendChild(dessertsList);

  appList.appendChild(app1);
  appList.appendChild(app2);
  appList.appendChild(app3);
  appList.appendChild(app4);

  mainsList.appendChild(main1);
  mainsList.appendChild(main2);
  mainsList.appendChild(main3);
  mainsList.appendChild(main4);

  dessertsList.appendChild(dessert1);
  dessertsList.appendChild(dessert2);
  dessertsList.appendChild(dessert3);
  dessertsList.appendChild(dessert4);

  // Append other elements to the body or other parent elements as needed
}

export default createMenu;
