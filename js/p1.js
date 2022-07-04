document.getElementById('titre').onclick = playTitre

function playTitre() {
    document.getElementById('titre').play()
  }
 
 
 function swapImage() {
    const myImgA = document.getElementById('a');
    if (myImgA.src.match("img/a.png")) {
        myImgA.src = "img/aaa.png";
        document.getElementById('jentendsa').play()
        
       
    } else if (myImgA.src.match("img/aaa.png")) {
        myImgA.src = "img/rat.png";
        document.getElementById('jentendsrat').play()

    } else  if (myImgA.src.match("img/rat.png")){
        myImgA.src = "img/a.png";
        document.getElementById('jentendsa').play()
    }
}