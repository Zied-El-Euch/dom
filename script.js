var articles = [
  {
    nom: "Clavier Razer",
    description: "MECANIQUE",
    image: "clavier.jpg",
    prix: 250,
    quantite: 10,
  },
  {
    nom: "Souris Lenovo",
    description: "20000DPI 9BUTTONS",
    image: "./souris.jpg",
    prix: 100,
    quantite: 9,
  },
  {
    nom: "Casque",
    description: "best sound",
    image: "./casque.jpg",
    prix: 120,
    quantite: 0,
  },
  {
    nom: "Webcam",
    description: "50MP",
    image: "./webcam.jpg",
    prix: 25,
    quantite: 25,
  },
  {
    nom: "Ecran Dell",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, totam.",
    image: "./ecran.jpg",
    prix: 450,
    quantite: 0,
  },
  {
    nom: "Tapis RedDragon",
    description: "THE best quality.",
    image: "./tapis.jpg",
    prix: 15,
    quantite: 40,
  },
  {
    nom: "Cable HDMI",
    description: "buy 1 the second is free",
    image: "./cable.jpg",
    prix: 25,
    quantite: 40,
  },
];
function add(e) {
  let buton = e.target;
  let newVal =
    parseFloat(
      buton.parentElement.getElementsByClassName("quantity")[0].innerText
    ) + 1;
  buton.parentElement.getElementsByClassName("quantity")[0].innerText = newVal;
}
function min(b) {
  let button = b.target;
  let newVal =
    parseFloat(
      button.parentElement.getElementsByClassName("quantity")[0].innerText
    ) - 1;
  button.parentElement.getElementsByClassName("quantity")[0].innerText = newVal;
  console.log(newVal);
  if (newVal == 0) {
    button.parentElement.parentElement.remove();
  }
}

for (let article of articles) {
  console.log(article);
  let articlesContainer = document.querySelector(".articles-container");

  let newArticle = document.createElement("div");
  newArticle.setAttribute("class", "card");

  if (article.quantite > 0) {
    newArticle.innerHTML = `
            <img src="${article.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${article.nom}</h5>
                <p class="card-text">${article.description}</p>
                <p class="card-text price">${article.prix}DT</p>
                <a href="#" class="buton" onclick="updateTotal()" class="btn btn-primary">+</a> 
                <p class="quantity">${article.quantite}</p> 
                <a href="#" class="button" onclick="updateTotal()" class="btn btn-primary">-</a> 
                <i onclick="changeColor(this)" class='bx bx-heart'></i>
            </div>
            `;
    newArticle
      .getElementsByClassName("button")[0]
      .addEventListener("click", min);
    newArticle
      .getElementsByClassName("buton")[0]
      .addEventListener("click", add);
    articlesContainer.append(newArticle);
  }
  updateTotal();
}
function changeColor(elem) {
  if (elem.style.color == "black" || elem.style.color == "") {
    elem.style.color = "red";
  } else {
    elem.style.color = "black";
  }
}
function updateTotal() {
  let items = document.getElementsByClassName("card-body");

  let total = 0;

  for (let item of items) {
    let prix = parseFloat(item.getElementsByClassName("price")[0].innerText);
    let qt = parseFloat(item.getElementsByClassName("quantity")[0].innerText);
    total += prix * qt;
  }

  document.getElementsByClassName("prix-total")[0].innerText = total;
}
