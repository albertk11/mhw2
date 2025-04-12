function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }

function createP(p){
    const testo = document.createElement('p');
    testo.textContent = p;
    return testo;
}

const items = [
        { text: 'TUTTI I PRODOTTI', img: 'zero.png' },
        { text: 'MONSTER ENERGY', img: 'lattina-classica.png' },
        { text: 'MONSTER ULTRA', img: 'ultra-white.png' },
        { text: 'JUICED MONSTER', img: 'mango-loco.png' }
    ];
const items2 = [
        { text: 'NEWS', img: 'news.png' },
        { text: 'MUSICA', img: 'musica.png' },
        { text: 'GAMING', img: 'gaming.png' },
        { text: 'GIRLS', img: 'girls.png' },
        { text: 'EVENTI', img: 'eventi.png' },
        { text: 'ROSTER', img: 'roster.png' }
    ];

function apriTendina() {
    const tenda = document.querySelector("#tenda");
    const tenda2 = document.querySelector("#tenda2");
    const tendina = tenda.querySelector('.tendina');
    const aa = tendina.querySelectorAll('a');
    const pro = document.querySelector("#prod");
    
    if(tenda2.classList.contains('hidden') === false) {
        tenda2.classList.add('hidden');
        document.querySelector("#unleashed").dataset.clicked = 'false';
    }
    
    if(pro.dataset.clicked === 'false') {
        tenda.classList.remove('hidden');
        for (let i = 0; i < aa.length; i++) {
            aa[i].innerHTML = '';
            aa[i].appendChild(createP(items[i].text));
            aa[i].appendChild(createImage(items[i].img));
        }
        pro.dataset.clicked = 'true';
    } else {
        tenda.classList.add('hidden');
        pro.dataset.clicked = 'false';
    }
}

function apriTendina2() {
    const tenda = document.querySelector("#tenda");
    const tenda2 = document.querySelector("#tenda2");
    const tendina2 = tenda2.querySelector('.tendina');
    const aa2 = tendina2.querySelectorAll('a');
    const unl = document.querySelector("#unleashed");
    
    if(tenda.classList.contains('hidden') === false) {
        tenda.classList.add('hidden');
        document.querySelector("#prod").dataset.clicked = 'false';
    }
    
    if(unl.dataset.clicked === 'false') {
        tenda2.classList.remove('hidden');
        for (let j = 0; j < aa2.length; j++) {
            aa2[j].innerHTML = '';
            aa2[j].appendChild(createP(items2[j].text));
            aa2[j].appendChild(createImage(items2[j].img));
        }
        unl.dataset.clicked = 'true';
    } else {
        tenda2.classList.add('hidden');
        unl.dataset.clicked = 'false';
    }
}

function cambiaSfondo() { 
  const bkg = document.querySelector('#img-ragazze');
  const divdanascondere  = document.querySelector('#scomparsa');
  const bottone = document.querySelector('.sopraimg')
  if(bottone.dataset.clicked==='false'){
  bkg.style.backgroundImage = 'url("cod.png")';
  bottone.dataset.clicked='true';
  divdanascondere.classList.add('hidden');
  return;
  }
  divdanascondere.classList.remove('hidden');
  bkg.style.backgroundImage = 'url("ultra-rosa.png")';
  bottone.dataset.clicked='false';
}

for (const bottoncini of document.querySelectorAll('.sopraimg')) {
  bottoncini.addEventListener('click', cambiaSfondo);
}

for (const tendina of document.querySelectorAll('#prod')) {
  tendina.addEventListener('click', apriTendina);
}

for (const tendina2 of document.querySelectorAll('#unleashed')) {
  tendina2.addEventListener('click', apriTendina2);
}