const sharesCards = [
  {
    id: 'daily-discount',
    image: 'images/shares/daily-discount.png',
    title: 'Ежедневная скидка',
    description: 'Подробнее',
  },
  {
    id: 'evening-discount',
    image: 'images/shares/evening-discount.png',
    title: 'Вечерняя суперскидка',
    description: 'Подробнее',
  },
  {
    id: 'giving-200-bonuses',
    image: 'images/shares/giving-200-bonuses.png',
    title: 'Дарим 200 бонусов новичкам!',
    description: 'Подробнее',
  },
  {
    id: 'happy-birthday',
    image: 'images/shares/happy-birthday.png',
    title: 'Скидки для именниников',
    description: 'Подробнее',
  },
];

const sharesModals = [
  {
    id: 'daily-discount',
    title: 'Акция дня: Скидка 10% на один из видов печенья!',
    description: [
      'Выбор печенья, на которое действует скидка, происходит случайным образом.',
      'Предпринимать никаких дополнительных действий не нужно, скидка автоматически применяется при оплате и отображается в чеке.',
      '<span>Примечание:</span> действует ежедневно и распространяется только на один вид печенья в день.',
    ],
  },
  {
    id: 'evening-discount',
    title: 'Суперскидка после 19:00! Как получить?',
    description: [
      '1. Посетите нашу пекарню после 19:00 вечера.',
      '1. Выберите любой товар из нашего ассортимента, будь то печенье или выпечка.',
      '3. При оплате вы автоматически получите скидку в 20% на весь ваш заказ!',
      '<span>Примечание:</span> распространяется на все виды печенья и выпечки в нашей пекарне.',
    ],
  },
  {
    id: 'giving-200-bonuses',
    title: 'Бонусная система в нашей пекарне: ',
    description: [
      '1. Создайте карту участника пекарни. При регистрации вы получите 200 бонусных баллов. 1 бал равен 1 рублю.',
      '2. При каждой покупке вы получаете 3% от суммы покупки в виде бонусных баллов.',
      '3. Бонусные баллы можно использовать для оплаты 50% от суммы следующей покупки.',
      '<span>Примечание:</span> Подробности о бонусной системе уточняйте у персонала.',
    ],
  },
  {
    id: 'happy-birthday',
    title: 'Скидка в день рождения - 15% на весь чек!',
    description: [
      '1. Посетите нашу пекарню в День Вашего Рождения.',
      '2. Предъявите нашему персоналу документы, подтверждающие вашу дату рождения.',
      '3. При оплате вашего заказа вы автоматически получите скидку в 15% на весь чек!',
      '<span>Примечание:</span> предоставляется на все виды печенья и выпечки в нашей пекарне.',
    ],
  },
];

const sharesCardsContainer = document.querySelector('.shares__cards');
const sharesModalsContainer = document.querySelector('.shares__modals');

// Создаем разметку для shares__card
sharesCards.forEach((card) => {
  const li = document.createElement('li');
  li.classList.add('shares__card');
  li.innerHTML = `
      <button class="shares__button" data-modal-target="#${card.id}">
        <img class="shares__image" src="${card.image}" alt="${card.title}" />
        <p class="shares__name">${card.title}</p>
        <p class="shares__details">${card.description}</p>
      </button>
    `;
  sharesCardsContainer.appendChild(li);
});

// Создаем разметку для shares__modal
sharesModals.forEach((modal) => {
  const article = document.createElement('article');
  article.classList.add('shares__modal');
  article.setAttribute('id', modal.id);
  article.innerHTML = `
      <div class="shares__modal__container">
        <button class="shares__modal__close">
          <img src="images/icons/cross-icon.svg" alt="Закрыть" />
        </button>
        <h1 class="shares__modal__title">${modal.title}</h1>
        ${modal.description
          .map(
            (description) =>
              `<p class="shares__modal__description">${description}</p>`
          )
          .join('')}
      </div>
    `;
  sharesModalsContainer.appendChild(article);
});

const modalBtns = document.querySelectorAll('.shares__button');

modalBtns.forEach((button) => {
  button.addEventListener('click', function () {
    const modalTarget = document.querySelector(this.dataset.modalTarget);
    modalTarget.style.display = 'flex';
  });
});

const closeBtns = document.querySelectorAll('.shares__modal__close');

closeBtns.forEach((button) => {
  button.addEventListener('click', function () {
    const modal = this.closest('.shares__modal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', function (event) {
  if (event.target.classList.contains('shares__modal')) {
    event.target.style.display = 'none';
  }
});
