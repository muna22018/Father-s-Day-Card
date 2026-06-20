const card = document.querySelector('.card');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
 
openBtn.addEventListener('click', () => {
  card.classList.add('open');
});
 
closeBtn.addEventListener('click', () => {
  card.classList.remove('open');
});
 