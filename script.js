const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
const windowHeight = window.innerHeight;
const scrollY = window.scrollY;
  const sectionInView = scrollY > sectionTop - windowHeight + sectionHeight / 2;
if (sectionInView) {
  section.classList.add('in-view');
} else {
  section.classList.remove('in-view');
}
});
});
