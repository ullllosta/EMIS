const galleryItems = [
  {
    images: ['images/gallery/gogal.png', 'images/gallery/gogal2.png'],
    title: 'гогал c сыром',
    description:
      'традиционное блюдо азербайджанской кухни',
  },
  {
    images: ['images/gallery/tasting.png', 'images/gallery/tasting2.png'],
    title: 'бесплатная дегустация',
    description:
      'попробуйте бесплатно любое печенье перед покупкой!',
  },
  {
    images: [
      'images/gallery/nuts-cookie.png',
      'images/gallery/nuts-cookie2.png',
    ],
    title: 'курабье с грецким орехом',
    description:
      'нежнейшее песочное печенье с дробленным грецким орехом',
  },
  {
    images: ['images/gallery/buns.png', 'images/gallery/buns2.png'],
    title: 'вкуснейшая выпечка',
    description:
      'попробуйте булочки с разными вкусами',
    wide: true,
  },
  {
    images: [
      'images/gallery/chocolate-ball.png',
      'images/gallery/chocolate-ball2.png',
    ],
    title: 'курабье мегашоколад',
    description:
      'какао, отборный шоколад, натуральное сливочное масло',
  },
  {
    images: [
      'images/gallery/julienne.png',
      'images/gallery/julienne2.png',
    ],
    title: 'жюльен',
    description:
      'нежное тесто с начинкой из курицы и грибов',
  },
  {
    images: ['images/gallery/tea.png', 'images/gallery/tea2.png'],
    title: 'листовой чай',
    description:
      'большой выбор листового чая на выбор',
  },
  {
    images: ['images/gallery/pahlava.png', 'images/gallery/pahlava2.png'],
    title: 'пахлава',
    description:
      'самая вкусная пахлава Ростова',
  },
];

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  item.images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image;
    galleryItem.appendChild(img);
  });

  const galleryDescription = document.createElement('div');
  galleryDescription.classList.add('gallery__description');

  const descriptionDiv = document.createElement('div');
  const title = document.createElement('h6');
  title.textContent = item.title;
  const description = document.createElement('p');
  description.textContent = item.description;

  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(description);
  galleryDescription.appendChild(descriptionDiv);
  galleryItem.appendChild(galleryDescription);

  gallery.appendChild(galleryItem);
});
