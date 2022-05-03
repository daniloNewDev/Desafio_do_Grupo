function sortear() {
     const sorteio = []
     do {
          for (let x = 1; x <= 6; x++) {
               document.getElementById('demo').innerHTML += x + ` - Número ${Math.floor(Math.random() * 60)}` + "<br>"
          }
     } while (sorteio.includes(x) == false)
}