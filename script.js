
  const saibaMaisButton = document.getElementById("saiba-mais");
        
  const informacoesContato = document.getElementById("informacoes-contato");

  saibaMaisButton.addEventListener("click", function() {
  informacoesContato.style.display = "block";

  saibaMaisButton.style.display = "none";
});


const linkContato = document.getElementById("link-contato");

linkContato.addEventListener("click", function(event) {
event.preventDefault(); 
informacoesContato.style.display = "block";
});


const linkInicio = document.getElementById("link-inicio");

linkInicio.addEventListener("click", function(event) {
event.preventDefault(); 
location.reload();
});


const linkNoticias = document.getElementById("link-noticias");

const noticiasSection = document.getElementById("noticias");

linkNoticias.addEventListener("click", function(event) {
event.preventDefault(); 
noticiasSection.style.display = "block";

const informacoesContato = document.getElementById("informacoes-contato");
informacoesContato.style.display = "none";
});




























  

















