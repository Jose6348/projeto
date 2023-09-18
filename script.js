function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imag
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/lucasmazieri.jpg")
  } else {
    //se tiver em dark mod mantem a imagem normal
    img.setAttribute("src", "./assets/mazieri.advogado.jpg")
  }
}

