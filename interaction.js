let ITENS_LOJA = [
    {
        nome: "Bola da Copa",
        preco: 86.30,
        url_img: "./img/bola_copa.webp",
        descricao: "Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome: "Carrinho da Hot Wheels",
        preco: 5.80,
        url_img: "./img/carro_hotwheels.jpeg",
        descricao: "Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome: "Chinelo",
        preco: 19.99,
        url_img: "./img/chinelo.webp",
        descricao: "Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome: "Escorredor de Louça",
        preco: 15.20,
        url_img: "./img/escorredor_louca.webp",
        descricao: "Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome: "Espada Medieval",
        preco: 200.18,
        url_img: "./img/espada_medieval.png",
        descricao: "Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome: "Guitarra",
        preco: 1980.99,
        url_img: "./img/guitarra.webp",
        descricao: "Otima para utilizar em bandas de hard rock"
    },
    {
        nome: "Toalha de Banho",
        preco: 9.99,
        url_img: "./img/toalha_banho.webp",
        descricao: "Boa para se secar apos o banho"
    },
    {
        nome: "Vinho",
        preco: 59.90,
        url_img: "./img/vinho.webp",
        descricao: "Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

var itens_section = document.getElementById('itens_section')
ITENS_LOJA.forEach(function(dados){
    itens_section.innerHTML += `<div class="box">
                                    <img src="${dados.url_img}" class="box__img">
                                    <h2 class="box__name">${dados.nome}</h2>
                                    <p><strong>Preço:</strong> R$ ${dados.preco}</p>
                                    <h3>Descrição:</h3>
                                    <p>${dados.descricao}</p>
                                </div>`
})

var itens_section = document.getElementById('itens_section');

function renderizarItens() {
  itens_section.innerHTML = "";

  ITENS_LOJA.forEach(function(dados, index) {
    var box = document.createElement('div');
    box.className = 'box';

    var img = document.createElement('img');
    img.src = dados.url_img;
    img.className = 'box__img';
    box.appendChild(img);

    var name = document.createElement('h2');
    name.className = 'box__name';
    name.textContent = dados.nome;
    box.appendChild(name);

    var price = document.createElement('p');
    price.innerHTML = `<strong>Preço:</strong> R$ ${dados.preco}`;
    box.appendChild(price);

    var description = document.createElement('h3');
    description.textContent = 'Descrição:';
    box.appendChild(description);

    var descText = document.createElement('p');
    descText.textContent = dados.descricao;
    box.appendChild(descText);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', function() {
      excluirItem(index);
    });
    box.appendChild(deleteButton);

    var favoriteButton = document.createElement('button');
    favoriteButton.textContent = dados.favorito ? 'Remover Favorito' : 'Favoritar';
    favoriteButton.addEventListener('click', function() {
      marcarFavorito(index);
    });
    box.appendChild(favoriteButton);

    itens_section.appendChild(box);
  });
}

function excluirItem(index) {
  ITENS_LOJA.splice(index, 1);
  renderizarItens();
}

function marcarFavorito(index) {
  ITENS_LOJA[index].favorito = !ITENS_LOJA[index].favorito;
  renderizarItens();
}

renderizarItens();