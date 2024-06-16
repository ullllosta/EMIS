const moreBtn = document.querySelector('.more-products');
const productsList = document.querySelector('.products__list');

moreBtn.addEventListener('click', () => {
  productsList.style.maxHeight = `${productsList.scrollHeight}px`;
  moreBtn.style.transform = 'scale(0)';
  moreBtn.style.margin = 0;

  window.addEventListener('resize', () => {
    productsList.style.maxHeight = `${productsList.scrollHeight}px`;
  });
});

// Массив карточек продукции
const productsData = [
  {
    image: 'images/buns-coffe-list/barberry-veal.jpg',
    name: 'Пирог с телятиной',
    description:
      'свежая телятина в сочетании с ягодами барбариса',
    characteristics: {
      weight: '135g',
      price: '140 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/chicken-spinach.jpg',
    name: 'Курица со шпинатом',
    description:
      'треугольники с обжаренным куриным филе и листьями шпината',
    characteristics: {
      weight: '130g',
      price: '110 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/miringue-roll.jpg',
    name: 'Миренговый рулет',
    description:
      'пирожное из запечённых взбитых яичных белков и сахара, со свежими ягодами клубники',
    characteristics: {
      weight: '1000g',
      price: '1500 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/lemon-cake.jpg',
    name: 'Лимонный кекс',
    description:
      'сдобное тесто с цедрой и кусочками лимона, сливочная глазурь сверху',
    characteristics: {
      weight: '1000g',
      price: '1200 руб',
    },
  },
  
  {
    image: 'images/buns-coffe-list/cinnamon.jpg',
    name: 'Булка с корицей',
    description:
      'булочка на натуральном сливочном масле с большим добавлением корицы',
    characteristics: {
      weight: '90g',
      price: '55 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/cherry-pie.jpg',
    name: 'Пирог с вишней',
    description: 'тесто на натуральном сливочном масле с ягодами вишни внутри',
    characteristics: {
      weight: '120g',
      price: '60 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/meringue.jpg',
    name: 'Миренга',
    description:
      'нежный и воздушный десерт, приготовленный из взбитых белков с сахаром и корицей',
    characteristics: {
      weight: '70g',
      price: '100 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/creamy-bun.jpg',
    name: 'Булка сливочная',
    description:
      'булочка с натуральным сливочным маслом и сахаром в слоях',
    characteristics: {
      weight: '100g',
      price: '55 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/currant-pie.jpeg',
    name: 'Пирог со смородиной',
    description:
      'булочка на натуральном сливочном масле с джемом из смородины',
    characteristics: {
      weight: '120g',
      price: '60 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/strawberry-pie.jpg',
    name: 'Пирог с клубникой',
    description: 'нежное тесто с клубничным джемом в начинке',
    characteristics: {
      weight: '110g',
      price: '60 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/egg-pie.jpg',
    name: 'Пирог с яйцом и луком',
    description: 'нежное тесто и ароматная начинка из яиц и лука',
    characteristics: {
      weight: '120g',
      price: '60 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/liver-pie.jpg',
    name: 'Пирог с печенью',
    description: 'вкусная булочка с начинкой из печени и картофеля',
    characteristics: {
      weight: '120g',
      price: '60 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/julienne.jpg',
    name: 'Жюльен с курицей',
    description: 'тонкое тесто с большим количеством куриного филе, грибов и сырной шапочкой сверху',
    characteristics: {
      weight: '120g',
      price: '85 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/cabbage.jpg',
    name: 'Пирог с капустой',
    description: 'тушеная капуста в нежном тесте',
    characteristics: {
      weight: '140g',
      price: '55 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/gogal-cheese.jpg',
    name: 'Гогал с сыром',
    description:
      'тонкое тесто, смазаное сливочным маслом с большим количеством сыра внутри',
    characteristics: {
      weight: '140g',
      price: '130 руб',
    },
  },
  {
    image: 'images/buns-coffe-list/gogal.jpg',
    name: 'Гогал со специями',
    description:
      'тонкое тесто, смазаное сливочным маслом со специями внутри',
    characteristics: {
      weight: '120g',
      price: '140 руб',
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

// Перебираем массив продуктов
productsData.forEach((item) => {
  // Создаем новый элемент списка для продукта
  const productsItem = document.createElement('li');
  productsItem.classList.add('products__item');

  // Добавляем разметку для изображения и названия продукта
  productsItem.innerHTML = `
      <img class="products__image" src="${item.image}" alt="${item.name}" />
      <h3 class="products__name">${item.name}</h3>
    `;

  // Если есть описание продукта, добавляем его в разметку
  if (item.description) {
    productsItem.innerHTML += `
        <p class="products__description">${item.description}</p>
        <div class="products__characteristics">
          <span>${item.characteristics.weight}</span>
          <span>${item.characteristics.price}</span>
        </div>
      `;
    // Если нет описания, добавляем характеристики продукта в разметку
  } else {
    productsItem.innerHTML += `
        <div class="products__characteristics products__characteristics--coffee">
          ${item.characteristics.coffee
            .map((option) => `<span>${option}</span>`)
            .join('')}
        </div>
      `;
  }

  // Добавляем созданный элемент списка в контейнер продуктов
  productsList.appendChild(productsItem);
});

// Массив с данными слайдов
const slides = [
  {
    img: 'images/cookie-slider/pahlava.jpg',
    title: 'Пахлава Бакинская',
    description:
      'десять слоев нежнейшего теста, пропитанного топленым маслом, начинка - грецкий орех и пряности',
    price: '1.400р / кг',
  },
  {
    img: 'images/cookie-slider/badambura.jpg',
    title: 'Бадамбура миндаль',
    description:
      'каждый слой промазан топленым сливочным маслом, начинка - дробленный обжаренный миндаль с сахаром и мускатным орехом',
    price: '100р / шт',
  },
  {
    img: 'images/cookie-slider/chocolate-ball.jpg',
    title: 'Курабье мегашоколад',
    description: 'какао, отборный шоколад, натуральное сливочное масло',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/nuts-cookie.jpg',
    title: 'Курабье с грецким орехом',
    description:
      'нежнейшее песочное печенье с дробленным грецким орехом в тесте, хорошо пропитанное сахарным сиропом',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/pistachio.jpg',
    title: 'Аджибадам миндаль',
    description:
      'белковое тесто без добавления муки, с добавлением молотого миндаля и фундука',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/banana-cookie.jpg',
    title: 'Банан с грецким орехом',
    description:
      'нежное, мягкое песочное печенье с добавлением крупной кокосовой стружки, пропитанное сахарным сиропом',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/hazelnut-cookie.jpg',
    title: 'Шекербура фундук',
    description:
      'нежное песочное тесто, которое обволакивает дробленый обжаренный фундук, смешанный с ароматным сахаром и нотками кардамона',
    price: '90р / шт',
  },
  {
    img: 'images/cookie-slider/kyata.jpg',
    title: 'Кята умач',
    description:
      'песочное печенье, прослойка - сливочное масло, обжаренное в муке и сахаре',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/kyata-nuts.jpg',
    title: 'Кята грецкий орех',
    description:
      'нежное песочное печенье с прослойкой из сливочного масла, обжаренного с мукой, сахаром и ароматным грецким орехом',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/milk-cookie.jpg',
    title: 'Рулет сгущенка и орех',
    description:
      'слоеное тесто, смазанное топленым маслом, начинка - варёная сгущенка , грецкий орех',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/sesame-cookie.jpg',
    title: 'Кунжутное',
    description:
      'песочное тесто с нежнейшим сливочным послевкусием, обвалено и выпечено в кунжуте',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/sandy-cookie.jpg',
    title: 'Шекер черек',
    description: 'нежное песочное печенье на сливочном масле',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/cocunt-cookie.jpg',
    title: 'Шекерпаре с кокосом',
    description:
      'нежное, мягкое песочное печенье с добавлением крупной кокосовой стружки, пропитанное сахарным сиропом',
    price: '45р / шт',
  },
  {
    img: 'images/cookie-slider/mutaki.jpg',
    title: 'Мутаки с грецким орехом',
    description:
      'тонкое песочное тесто, начинка - грецкий орех и прянности, нежное сливочное послевкусие',
    price: '45р / шт',
  },
];

// Получаем контейнер слайдов
const sliderContainer = document.querySelector('.swiper-wrapper');

// Перебираем массив с данными слайдов
slides.forEach((slide) => {
  // Создаем новый элемент слайда
  const slideElement = document.createElement('div');
  slideElement.classList.add('swiper-slide');

  // Добавляем разметку в элемент слайда
  slideElement.innerHTML = `
    <img src="${slide.img}" alt="${slide.title}" />
    <div class="slide__text">
      <h3 class="slide__name">${slide.title}</h3>
      <p class="slide__description">${slide.description}</p>
      <b class="slide__price">${slide.price}</b>
    </div>
  `;

  // Добавляем элемент слайда в контейнер слайдов
  sliderContainer.appendChild(slideElement);
});
