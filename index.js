const padlOrel = Math.random() < 0.5;
const vysledekElement = document.querySelector('.vysledek');
const minceElement = document.querySelector('.mince');

if (padlOrel) {
  vysledekElement.textContent = 'Padl orel';
  minceElement.classList.add('mince--orel');
} else {
  vysledekElement.textContent = 'Padla panna';
  minceElement.classList.add('mince--panna');
}
