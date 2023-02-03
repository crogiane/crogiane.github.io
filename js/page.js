/* Declaración de variables */
var acerca = document.getElementById("aboutHe");
var blog = document.getElementById("personalBlog");
var red = document.getElementById("socialMedia");
var touch = document.getElementById("callHim");
var lienzo = document.getElementById("mostrar");

/* Funciones de los eventos de los inputs */
function mostrarOrigen()
{
    // lienzo.innerText = "Durante toda mi vida nunca me interesó la tecnología, pero eso cambió a los 16 años cuando aprendí lo interesante que puede llegar a ser este mundo, hasta entonces mi vida estaba yendo sobre rieles todo el tiempo y me la pasaba haciendo todo lo que me decian sin preguntarme porqué y toda mi vida en la primaria y la secundaria fué asi. En ese entonces no me preguntaba siquiera que era lo que queria estudiar ya que siempre me dijeron que los primeros lugares y con mejores notas postulaban a carreras dificiles en la universidad como medicina, asi que yo ni me puse a pensar en que era lo que me gustaba, incluso no sabía que era lo que me gustaba, pues todo mundo tenia expectativas altas de mí y no quería desepcionarlos, a veces cuando pensba en tecnología, me imaginaba un mundo de hackers que están en otro lado y yo jamás podría ser parte. Y fué durante la cuarentena del 2020 cuando descubrí lo genial que es ser parte de esta comunidad, aprendiendo en internet, y a pesar de que sabía que muchas personas iban a verme mal por elejir estudiar en esta área, decidí no hacer todo lo que me digan y pensar más en lo que me gusta.";
}
function mostrarBlog()
{
    lienzo.innerText = "link del blog";
}
function mostrarRedes()
{
    lienzo.innerText = "gmail, numero y otras redes";
}
function palos()
{
    lienzo.innerText = "feisbuk, tuiter y jemail";
}

/* Agregar eventListeners a los inputs */
acerca.addEventListener("click", mostrarOrigen);
blog.addEventListener("click", mostrarBlog);
touch.addEventListener("click", mostrarRedes);
red.addEventListener("click", palos);
