

let inputNode = document.querySelector(".inputField").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {

    let url = "http://recipepuppyproxy.herokuapp.com/api/?i=" + event.target.value
    let img = document.querySelector(".images")
    let foodImg = ""

    fetch(url)

      .then(function(response) {
        return response.json()
      })
      .then(function(info) {

        for (var i = 0; i < info.results.length; i++) {

          foodImg += `
            <div class="content">
              <img src="${info.results[i].thumbnail}" alt="Food Picture">
              <li class"title">${info.results[i].title}</li>
              <li>${info.results[i].ingredients}</li>
            </div>
            `

          img.innerHTML = foodImg
        }
      })
  }
})
