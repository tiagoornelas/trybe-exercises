const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

divUm.addEventListener('click', highlightBox);
divDois.addEventListener('click', highlightBox);
divTres.addEventListener('click', highlightBox);

input.addEventListener('keyup', addText);

myWebpage.addEventListener('dblclick', function () {
    window.open('https://open.spotify.com/playlist/7b3pIzIAIhiStOsa95og5E?si=f562a96592dc4b27');
})

myWebpage.addEventListener('mouseover', function () {
    myWebpage.style.color = '#006dfb';
})

myWebpage.addEventListener('mouseout', function () {
    myWebpage.style.color = 'white';
})

function resetClasses() {
    let boxes = document.querySelectorAll(".container div");
    for (let box in boxes) {
        boxes[box].className = 'default';
    }
}

function highlightBox() {
    resetClasses();
    this.className = 'tech';
}

function addText () {
    document.querySelector(".tech").innerText = document.querySelector("#input").value;
}