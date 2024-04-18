// Массив объектов отзывов
const reviews = [
  {
    author: 'Варвара Ж.',
    role: 'Знаток города 2 уровня',
    letter: 'В',
    letterColor: 'orange',
    date: '20 сентября 2023',
    text: 'Раньше не любила восточные сладости, пока не попробовала в Emis. Это настолько вкусно! Всегда свежая выпечка, вкусные кофе и чай. И обслуживание на высоте! Теперь это моё любимое место, куда привела всех подружек) Спасибо',
  },
  {
    author: 'Варвара Ж.',
    role: 'Знаток города 2 уровня',
    letter: 'В',
    letterColor: 'orange',
    date: '17 августа 2023',
    text: 'Супер-радушный персонал и самые вкусные сладости ❤ личная рекомендация - пахлава... Мою любовь к настоящей домашней пахлаве не передать никак! Обязательно вернусь за кофе и сладостями❤',
  },
  {
    author: 'Мария Аладьина',
    role: 'Знаток города 7 уровня',
    letter: 'М',
    letterColor: 'purple',
    date: '15 июня 2023',
    text: 'Спасибо большое что вы есть, обязательно к вам вернусь, по вкусу прямо чувствуется что всё натуральное, а так же очень хочется отметить отзывчивость и радушие персонала, всегда очень приветливые, и вежливые. Однозначно рекомендую это место',
  },
  {
    author: 'Ксения Д.',
    role: 'Знаток города 3 уровня',
    letter: 'К',
    letterColor: 'pink',
    date: '9 апреля 2023',
    text: 'Вкуснющая выпечка. Очень грамотная, приятная продавец-консультант. Уютная атмосфера. Доступные цены. А ещё, дегустация по всей продукции!Для меня это 100 из 100! Спасибо за всё, я в восторге от первого визита. Приду ещё)',
  },
  {
    author: 'Матвей Воронцов.',
    role: 'Знаток города 2 уровня',
    letter: 'М',
    letterColor: 'blue',
    date: '16 июня 2023',
    text: 'это место-просто отличное место дя семейного отдыха. вкуснейшее печенье и кофе,приятный персонал и атмосфера,и цены отличные,я обязательно зайду сюда ещё раз,спасибо!',
  },
  {
    author: 'Виолетта И.',
    role: 'Знаток города 4 уровня',
    letter: 'В',
    letterColor: 'blue',
    date: '4 марта 2023',
    text: 'Место чудесное, хозяева очень вежливые, дружелюбные, дали все попробовать. Сладости не смогла выбрать , поэтому набрала всего по чуть-чуть, ооочень вкусно , обязательно вернусь! 🙏🏽🤍',
  },
  {
    author: 'Мар Александрова',
    role: 'Знаток города 13 уровня',
    letter: 'М',
    letterColor: 'green',
    date: '15 января 2023',
    text: 'Забрели случайно, небольшая лавка с восточными вкусняшками и отличный кофе, очень рекомендую.',
  },
  {
    author: 'Василий А.',
    role: 'Знаток города 2 уровня',
    letter: 'В',
    letterColor: 'purple',
    date: '2 февраля 2023',
    text: 'Одно из любимейших мест в Ростове, прекрасные десерты и приветливые хозяева.',
  },
  {
    author: 'Елена С.',
    role: 'Знаток города 3 уровня',
    letter: 'Е',
    letterColor: 'green',
    date: '3 мая 2022',
    text: 'Зашли туда по завлекательной надписи - Восточные сладости))) и были очень рады) это семейный бизнес)) как же душевно нас встретили, всё дали попробовать, бесплатно угостили чаем) всё свежайшее! Всё очень вкусно! Могут и с собой запаковать! Теперь когда буду в районе рынка - перекусить только туда!',
  },
  {
    author: 'Ирина Петренко',
    role: 'Знаток города 2 уровня',
    letter: 'И',
    letterColor: 'blue',
    date: '26 августа 2022',
    text: 'Лучшие сладости в городе ,очень приятные продавцы ,владелец всегда угостит ,расскажет и ещё с собой что то даст 😀Идеальное место !🫶🏻100000 из 10!',
  },
  {
    author: 'uleechh',
    role: 'Знаток города 2 уровня',
    letter: 'U',
    letterColor: 'pink',
    date: '7 сентября 2022',
    text: 'Замечательно заведение! Все очень вкусно и великолепное обслуживание ❤️',
  },
];

// Получаем элемент списка отзывов
const reviewsList = document.querySelector('.reviews__list');

// Перебираем массив отзывов
reviews.forEach((review) => {
  // Создаем элемент отзыва
  const reviewItem = document.createElement('li');
  reviewItem.className = 'reviews__item review';

  // Добавляем разметку отзыва
  reviewItem.innerHTML = `
      <div class="review__author">
        <span class="review__letter review__letter--${review.letterColor}">${review.letter}</span>
        <p class="review__name">
          ${review.author}
          <span class="review__role">${review.role}</span>
        </p>
      </div>
      <div class="review__stars-date">
        <span class="review__stars"></span>
        <p class="review__date">${review.date}</p>
      </div>
      <div>
        <p class="review__text">
          ${review.text}
        </p>
      </div>
    `;

  // Добавляем отзыв в список
  reviewsList.appendChild(reviewItem);
});
