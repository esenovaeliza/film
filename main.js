// Стянуть данные с API и отобразить на странице (картинку, название и год) в виде карточек.
// Примерный результат:

// API = 'https://www.omdbapi.com/?apikey=b6003d8a&s=All

let div = document.querySelector("div");

fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
  .then((res) => res.json())
  .then((data) => {
    data.Search.forEach((item) => {
      console.log(item);
      div.innerHTML += `<div class='block'><h3 class='h3'>${item.Title}  ${item.Year}год</h3> <img src='${item.Poster}'></div>
    `;
    });
  });
