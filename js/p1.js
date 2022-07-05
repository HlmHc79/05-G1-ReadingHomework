document.getElementById('titre').onclick = playTitre

function playTitre() {
    document.getElementById('titre').play()
  }
 
 function swapImageA() {
    const myImgA = document.getElementById('a');
    if (myImgA.src.match("img/a.png")) {
        myImgA.src = "img/aaa.png";
        document.getElementById('jentendsa').play()    
    } else if (myImgA.src.match("img/aaa.png")) {
        myImgA.src = "img/avion.png";
        document.getElementById('jentendsavion').play()

    } else  if (myImgA.src.match("img/avion.png")){
        myImgA.src = "img/a.png";
        document.getElementById('jentendsa').play()
    }
}

function swapImageI() {
    const myImgI = document.getElementById('i');
    if (myImgI.src.match("img/i.png")) {
        myImgI.src = "img/iii.png";
        document.getElementById('jentendsile').play()
    } else if (myImgI.src.match("img/iii.png")) {
        myImgI.src = "img/ilestylo.png";
        document.getElementById('jentendsile').play()
    } else  if (myImgI.src.match("img/ilestylo.png")){
        myImgI.src = "img/i.png";
        document.getElementById('jentendsi').play()
    }
}

function swapImageE() {
    const myImgE = document.getElementById('e');
    if (myImgE.src.match("img/e.png")){
        myImgE.src = "img/eee.png";
        document.getElementById('jentendse').play()
    } else if (myImgE.src.match("img/eee.png")) {
        myImgE.src = "img/renard.png";
        document.getElementById('jentendsrenard').play()
    } else if (myImgE.src.match("img/renard.png")){
        myImgE.src = "img/e.png";
        document.getElementById('jentendse').play()
    }
}

function swapImageY() {
    const myImgY = document.getElementById('y');
    if (myImgY.src.match("img/i.png")) {
        myImgY.src = "img/yyy.png";
        document.getElementById('jentendsi').play()
    } else if (myImgY.src.match("img/yyy.png")) {
        myImgY.src = "img/pyjama.png";
        document.getElementById('jentendspyjama').play()
    } else  if (myImgY.src.match("img/pyjama.png")){
        myImgY.src = "img/i.png";
        document.getElementById('jentendsi').play()
    }
}

function swapImageO() {
    const myImgO = document.getElementById('o');
    if (myImgO.src.match("img/o.png")) {
        myImgO.src = "img/ooo.png";
        document.getElementById('jentendso').play()
    } else if (myImgO.src.match("img/ooo.png")) {
        myImgO.src = "img/orange.png";
        document.getElementById('jentendsorange').play()
    } else  if (myImgO.src.match("img/orange.png")){
        myImgO.src = "img/o.png";
        document.getElementById('jentendso').play()
    }
}

function swapImageU() {
    const myImgU = document.getElementById('u');
    if (myImgU.src.match("img/u.png")) {
        myImgU.src = "img/uuu.png";
        document.getElementById('jentendsu').play()
    } else if (myImgU.src.match("img/uuu.png")) {
        myImgU.src = "img/lune.png";
        document.getElementById('jentendslune').play()
    } else  if (myImgU.src.match("img/lune.png")){
        myImgU.src = "img/u.png";
        document.getElementById('jentendsu').play()
    }
}

function swapImageEh() {
    const myImgEh = document.getElementById('eh');
    if (myImgEh.src.match("img/eh.png")) {
        myImgEh.src = "img/eheheh.png";
        document.getElementById('jentendseh').play()
    } else if (myImgEh.src.match("img/eheheh.png")) {
        myImgEh.src = "img/epee.png";
        document.getElementById('jentendsepee').play()
    } else  if (myImgEh.src.match("img/epee.png")){
        myImgEh.src = "img/eh.png";
        document.getElementById('jentendseh').play()
    }
}

function swapImageEe() {
    const myImgEe = document.getElementById('ee');
    if (myImgEe.src.match("img/ee.png")) {
        myImgEe.src = "img/eeee.png";
        document.getElementById('jentendsee').play()
    } else if (myImgEe.src.match("img/eeee.png")) {
        myImgEe.src = "img/fleche.png";
        document.getElementById('jentendsfleche').play()
    } else  if (myImgEe.src.match("img/fleche.png")){
        myImgEe.src = "img/ee.png";
        document.getElementById('jentendsee').play()
    }
}

function swapImageEhE() {
    const myImgEhE = document.getElementById('ehe');
    if (myImgEhE.src.match("img/ee.png")) {
        myImgEhE.src = "img/EhE.png";
        document.getElementById('jentendsee').play()
    } else if (myImgEhE.src.match("img/EhE.png")) {
        myImgEhE.src = "img/foret.png";
        document.getElementById('jentendsforet').play()
    } else  if (myImgEhE.src.match("img/foret.png")){
        myImgEhE.src = "img/EhE.png";
        document.getElementById('jentendsEhE').play()
    }
}

function swapImageL() {
    const myImgL = document.getElementById('l');
    if (myImgL.src.match("img/l.png")) {
        myImgL.src = "img/lll.png";
        document.getElementById('jentendsl').play()
    } else if (myImgL.src.match("img/lll.png")) {
        myImgL.src = "img/langue.png";
        document.getElementById('jentendslangue').play()
    } else  if (myImgL.src.match("img/langue.png")){
        myImgL.src = "img/l.png";
        document.getElementById('jentendsl').play()
    }
}

function swapImageM() {
    const myImgM = document.getElementById('m');
    if (myImgM.src.match("img/m.png")) {
        myImgM.src = "img/mmm.png";
        document.getElementById('jentendsm').play()
    } else if (myImgM.src.match("img/mmm.png")) {
        myImgM.src = "img/monstre.png";
        document.getElementById('jentendsmonstre').play()
    } else  if (myImgM.src.match("img/monstre.png")){
        myImgM.src = "img/l.png";
        document.getElementById('jentendsm').play()
    }
}

function swapImageR() {
    const myImgR = document.getElementById('r');
    if (myImgR.src.match("img/r.png")) {
        myImgR.src = "img/rrr.png";
        document.getElementById('jentendsr').play()
    } else if (myImgR.src.match("img/rrr.png")) {
        myImgR.src = "img/robot.png";
        document.getElementById('jentendsrobot').play()
    } else  if (myImgR.src.match("img/robot.png")){
        myImgR.src = "img/r.png";
        document.getElementById('jentendsr').play()
    }
}