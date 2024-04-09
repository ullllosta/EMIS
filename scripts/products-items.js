const moreBtn = document.querySelector('.more-products');
const productsList = document.querySelector('.products__list');

moreBtn.addEventListener('click', () => {
  productsList.style.maxHeight = '1760px';
  moreBtn.style.transform = 'scale(0)';
});

const productsData = [
  {
    image: 'images/buns-coffe-list/cinnamon.jpg',
    name: 'Булка с корицей',
    description:
      'булочка на натуральном сливочном масле с большим добавлением корицы',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/cherry-pie.jpg',
    name: 'Пирог с вишней',
    description: 'тесто на натуральном сливочном масле с ягодами вишни внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/cinnamon.jpg',
    name: 'Булка с маком',
    description:
      'булочка на натуральном сливочном масле с большим добавлением корицы',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/creamy-bun.jpg',
    name: 'Булка сливочная',
    description:
      'булочка на натуральном сливочном масле с большим добавлением корицы',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/currant-pie.jpeg',
    name: 'Пирог со смородиной',
    description:
      'булочка на натуральном сливочном масле с большим добавлением корицы',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/strawberry-pie.jpg',
    name: 'Пирог с клубникой',
    description: 'тесто на натуральном сливочном масле с ягодами вишни внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/egg-pie.jpg',
    name: 'Пирог с яйцом и луком',
    description: 'тесто на натуральном сливочном масле с ягодами вишни внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/liver-pie.jpg',
    name: 'Пирог с печенью',
    description: 'тесто на натуральном сливочном масле с ягодами вишни внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/julienne.jpg',
    name: 'Жюльен с курицей',
    description: 'тесто на натуральном сливочном масле с ягодами вишни внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/cinnamon.jpg',
    name: 'Пирог с капустой',
    description: 'тесто на натуральном сливочном масле с ягодами вишни внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/gogal.jpg',
    name: 'Гогал с сыром',
    description:
      'тонкое тесто, смазаное сливочным маслом с большим количеством сыра внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/liver-pie.jpg',
    name: 'Гогал со специями',
    description:
      'тонкое тесто, смазаное сливочным маслом с большим количеством сыра внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/liver-pie.jpg',
    name: 'Гогал со специями',
    description:
      'тонкое тесто, смазаное сливочным маслом с большим количеством сыра внутри',
    characteristics: {
      weight: '120g',
      price: '50 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/nicely.jpg',
    name: 'Капучино',
    characteristics: {
      coffee: ['0,2 мл — 120₽', '0,3 мл — 180₽'],
    },
  },
  {
    image: 'images/buns-coffe-list/latte.jpg',
    name: 'Латте',
    characteristics: {
      coffee: ['0,2 мл — 130₽', '0,3 мл — 180₽'],
    },
  },
  {
    image: 'images/buns-coffe-list/american.jpg',
    name: 'Американо',
    characteristics: {
      coffee: ['0,2 мл — 90₽', '0,3 мл — 180₽'],
    },
  },
  {
    image: 'images/buns-coffe-list/espresso.jpg',
    name: 'Эспрессо',
    characteristics: {
      coffee: ['60 мл — 60₽', 'Двойной — 120₽'],
    },
  },
  {
    image: 'images/buns-coffe-list/turkish-coffee.jpg',
    name: 'Кофе в турке',
    characteristics: {
      coffee: ['100 мл — 150₽', '200 мл — 220₽', '300 мл — 300₽'],
    },
  },
  {
    image: 'images/buns-coffe-list/tea.jpg',
    name: 'Чай в асортименте',
    characteristics: {
      coffee: ['100 мл — 150₽', '200 мл — 220₽', '300 мл — 300₽'],
    },
  },
];

productsData.forEach((item) => {
  const productsItem = document.createElement('li');
  productsItem.classList.add('products__item');

  productsItem.innerHTML = `
      <img class="products__image" src="${item.image}" alt="${item.name}" />
      <h3 class="products__name">${item.name}</h3>
    `;

  if (item.description) {
    productsItem.innerHTML += `
        <p class="products__description">${item.description}</p>
        <div class="products__characteristics">
          <span>${item.characteristics.weight}</span>
          <span>${item.characteristics.price}</span>
        </div>
      `;
  } else {
    productsItem.innerHTML += `
        <div class="products__characteristics products__characteristics--coffee">
          ${item.characteristics.coffee
            .map((option) => `<span>${option}</span>`)
            .join('')}
        </div>
      `;
  }

  productsList.appendChild(productsItem);
});
