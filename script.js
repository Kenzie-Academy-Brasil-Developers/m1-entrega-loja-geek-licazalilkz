let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];
let itensPainting = filtraPainting(itens); 
let itensActfigure = filtraActfigure(itens);

function filtraPainting(itensFiltro){
    let painting = [];

    for (let i = 0; i < itens.length; i++) {
        if(itens[i].type === 'Painting'){
            painting.push(itens[i]);
        }
    }

    return painting;
}

function filtraActfigure(itensFiltro){
    let actFigure = [];

    for (let i = 0; i < itens.length; i++) {
        if(itens[i].type === 'Action Figures'){
            actFigure.push(itens[i]);
        }
    }

    return actFigure;
}

// elementos base
const body = document.querySelector("body");
const painting = document.querySelector(".painting");
const actionFigure = document.querySelector(".actionFigure");

// criando elemento
function criarProdutoPainting(produto) {
    const cardProduto = document.createElement("div");
    cardProduto.className = "produtoDiv";
    const produtoLista = document.createElement("ul");
    // esse for talvez ta errado
    for (let i = 0; i < itensPainting.length ; i++) {
        const produtoItem = document.createElement("li");
        const produtoNome = document.createElement("p");
        produtoNome.className = "produtoNome";
        const produtoPrice = document.createElement("p");;
        const produtoImage = document.createElement("img");

        produtoImage.src = itensPainting[i].image;
        produtoNome.innerText = itensPainting[i].name;
        produtoPrice.innerText = itensPainting[i].price;

        produtoItem.appendChild(produtoImage);
        produtoItem.appendChild(produtoNome);
        produtoItem.appendChild(produtoPrice);

        produtoLista.appendChild(produtoItem);
    }
    // cardProduto.appendChild(produtoNome);
    cardProduto.appendChild(produtoLista);
    painting.appendChild(cardProduto);

    return painting;
}

function criarProdutoActfigure(produto) {
    const cardProduto = document.createElement("div");
    cardProduto.className = "produtoDiv";
    const produtoLista = document.createElement("ul");
    // esse for talvez ta errado
    for (let i = 0; i < itensActfigure.length ; i++) {
        const produtoItem = document.createElement("li");
        const produtoNome = document.createElement("p");
        produtoNome.className = "produtoNome";
        const produtoPrice = document.createElement("p");
        const produtoImage = document.createElement("img");

        produtoImage.src = itensActfigure[i].image;
        produtoNome.innerText = itensActfigure[i].name;
        produtoPrice.innerText = itensActfigure[i].price;

        produtoItem.appendChild(produtoImage);
        produtoItem.appendChild(produtoNome);
        produtoItem.appendChild(produtoPrice);

        produtoLista.appendChild(produtoItem);
    }
    // cardProduto.appendChild(produtoNome);
    cardProduto.appendChild(produtoLista);
    actionFigure.appendChild(cardProduto);

    return actionFigure;
}

criarProdutoPainting(itens);
criarProdutoActfigure(itens);