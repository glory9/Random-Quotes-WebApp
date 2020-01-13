var quotes = document.getElementById('quotes')
fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote =>{
  quotes.innerHTML += `<p> ${quote.quote} </p>`
})

let catButton = document.getElementById('dispCat')
catButton.addEventListener("click", evt => {
  var catImg = document.getElementById('catImage')
  fetch('https://api.thecatapi.com/v1/images/search?')
  .then(res => res.json())
  .then(cats =>{
    cats.forEach(cat => {
      catImg.innerHTML = `<img src="${cat.url}" alt="cat image" /><p>Here is this Cat wishing you the bestest day ever!</p>`
    });
  })
})