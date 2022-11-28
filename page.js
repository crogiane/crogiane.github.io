var acerca = document.getElementById("aboutHe");
var blog = document.getElementById("personalBlog");
var pro = document.getElementById("lIn");
var hub = document.getElementById("gitHub");
var touch = document.getElementById("callHim");
var lienzo = document.getElementById("mostrar");

function mostrarOrigen()
{
    lienzo.innerHTML = "algo acerca de el";
}
function mostrarBlog()
{
    lienzo.innerHTML = "link del blog";
}
function mostrarPortafolio()
{
    lienzo.innerHTML = "link de linkedIn";
}
function mostrarDev()
{
    lienzo.innerHTML = "link de GitHub";
}
function mostrarRedes()
{
    lienzo.innerHTML = "gmail, numero y otras redes";
}

acerca.addEventListener("click", mostrarOrigen);
blog.addEventListener("click", mostrarBlog);
pro.addEventListener("click", mostrarPortafolio);
hub.addEventListener("click", mostrarDev);
touch.addEventListener("click", mostrarRedes);
