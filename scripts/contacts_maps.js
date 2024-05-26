const moskovskayaMapButton = document.getElementById('moskovskaya_map_button');
const konnoiMapButton = document.getElementById('konnoi_map_button');
const moskovskayaMap = document.getElementById('moskovskaya_map');
const konnoiMap = document.getElementById('konnoi_map');

konnoiMap.style.display = 'none';

moskovskayaMapButton.addEventListener('click', () => {
  moskovskayaMapButton.classList.add('map_button--active');
  konnoiMapButton.classList.remove('map_button--active');
  moskovskayaMap.style.display = 'block';
  konnoiMap.style.display = 'none';
});

konnoiMapButton.addEventListener('click', () => {
  moskovskayaMapButton.classList.remove('map_button--active');
  konnoiMapButton.classList.add('map_button--active');
  moskovskayaMap.style.display = 'none';
  konnoiMap.style.display = 'block';
});
