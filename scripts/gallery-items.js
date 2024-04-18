const galleryColumns = [
  {
    images: ['images/gallery/pahlava.png', 'images/gallery/pahlava2.png'],
    title: 'гогал c сыром',
    description:
      'тонкое слоеное тесто, смазаное сливочным маслом, и большое количество нежнейшего сыра внутри сиропом',
  },
  {
    images: ['images/gallery/adjibadam.png', 'images/gallery/pahlava.png'],
    title: 'курабье с грецким орехом',
    description:
      'нежнейшее песочное печенье с дробленным грецким орехом в тесте, хорошо пропитанное сахарным сиропом',
  },
  {
    images: [
      'images/gallery/nuts-cookie.png',
      'images/gallery/nuts-cookie2.png',
    ],
    title: 'курабье с грецким орехом',
    description:
      'нежнейшее песочное печенье с дробленным грецким орехом в тесте, хорошо пропитанное сахарным сиропом',
  },
  {
    images: ['images/gallery/buns.png', 'images/gallery/nuts-cookie2.png'],
    title: 'курабье с грецким орехом',
    description:
      'нежнейшее песочное печенье с дробленным грецким орехом в тесте, хорошо пропитанное сахарным сиропом',
    wide: true,
  },
  {
    images: [
      'images/gallery/chocolate-ball.png',
      'images/gallery/nuts-cookie2.png',
    ],
    title: 'курабье с грецким орехом',
    description:
      'нежнейшее песочное печенье с дробленным грецким орехом в тесте, хорошо пропитанное сахарным сиропом',
  },
  {
    images: [
      'images/gallery/milk-cookie.png',
      'images/gallery/nuts-cookie2.png',
    ],
    title: 'курабье с грецким орехом',
    description:
      'нежнейшее песочное печенье с дробленным грецким орехом в тесте, хорошо пропитанное сахарным сиропом',
  },
  {
    images: ['images/gallery/gogal.png', 'images/gallery/gogal2.png'],
    title: 'гогал c сыром',
    description:
      'тонкое слоеное тесто, смазаное сливочным маслом, и большое количество нежнейшего сыра внутри сиропом',
  },
  {
    images: ['images/gallery/gogal.png', 'images/gallery/gogal2.png'],
    title: 'гогал c сыром',
    description:
      'тонкое слоеное тесто, смазаное сливочным маслом, и большое количество нежнейшего сыра внутри сиропом',
  },
];

const gallery = document.querySelector('.gallery');

galleryColumns.forEach((column) => {
  const galleryColumn = document.createElement('div');
  galleryColumn.classList.add('gallery__column');

  column.images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image;
    galleryColumn.appendChild(img);
  });

  const galleryDescription = document.createElement('div');
  galleryDescription.classList.add('gallery__description');

  const descriptionDiv = document.createElement('div');
  const title = document.createElement('h6');
  title.textContent = column.title;
  const description = document.createElement('p');
  description.textContent = column.description;

  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(description);
  galleryDescription.appendChild(descriptionDiv);
  galleryColumn.appendChild(galleryDescription);

  gallery.appendChild(galleryColumn);
});
