/* Declaración de variables */
const navLogo = document.getElementById('facetop');
const navName = document.getElementById('nametop');
const acerca = document.getElementById("aboutHe");
const blog = document.getElementById("personalBlog");
const touch = document.getElementById("callHim");
const homePage = document.querySelector('.home-screen');
const lifePage = document.querySelector('.about-me-screen');
const blogPage = document.querySelector('.blog-screen');
const mediaPage = document.querySelector('.social-media-screen');

/* Funciones de los eventos de los inputs */
function showHome() {
    lifePage.classList.add('inactive');
    blogPage.classList.add('inactive');
    mediaPage.classList.add('inactive');
    homePage.classList.remove('inactive');
}
function showAboutMe() {
    homePage.classList.add('inactive');
    blogPage.classList.add('inactive');
    mediaPage.classList.add('inactive');
    lifePage.classList.remove('inactive');
    // lienzo.innerText = "Durante toda mi vida nunca me interesó la tecnología, pero eso cambió a los 16 años cuando aprendí lo interesante que puede llegar a ser este mundo, hasta entonces mi vida estaba yendo sobre rieles todo el tiempo y me la pasaba haciendo todo lo que me decian sin preguntarme porqué y toda mi vida en la primaria y la secundaria fué asi. En ese entonces no me preguntaba siquiera que era lo que queria estudiar ya que siempre me dijeron que los primeros lugares y con mejores notas postulaban a carreras dificiles en la universidad como medicina, asi que yo ni me puse a pensar en que era lo que me gustaba, incluso no sabía que era lo que me gustaba, pues todo mundo tenia expectativas altas de mí y no quería desepcionarlos, a veces cuando pensba en tecnología, me imaginaba un mundo de hackers que están en otro lado y yo jamás podría ser parte. Y fué durante la cuarentena del 2020 cuando descubrí lo genial que es ser parte de esta comunidad, aprendiendo en internet, y a pesar de que sabía que muchas personas iban a verme mal por elejir estudiar en esta área, decidí no hacer todo lo que me digan y pensar más en lo que me gusta.";
}
function showBlog() {
    homePage.classList.add('inactive');
    lifePage.classList.add('inactive');
    mediaPage.classList.add('inactive');
    blogPage.classList.remove('inactive');
}
function showSocialMedia() {
    homePage.classList.add('inactive');
    lifePage.classList.add('inactive');
    blogPage.classList.add('inactive');
    mediaPage.classList.remove('inactive');
}

/* Agregar eventListeners a los inputs */
navLogo.addEventListener("click", showHome);
navName.addEventListener('click', showHome);
acerca.addEventListener("click", showAboutMe);
blog.addEventListener("click", showBlog);
touch.addEventListener("click", showSocialMedia);
