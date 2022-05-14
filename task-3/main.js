let img = document.querySelector("#cat-here")
let button = document.querySelector("#new-cat")


async function getCat(){
let response = await fetch("https://api.thecatapi.com/v1/images/search")
let data = await response.json()
console.log(data)
img.src = data[0].url
}
getCat();

button.addEventListener("click",getCat)

