window.onload = function () {
  var myCarousel = document.querySelector('#carouselMapas');
  new bootstrap.Carousel(myCarousel, { interval: 4000 }).cycle();
}

function verMas() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btnVerMas");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver más"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver menos"; 
    $("#more").fadeIn(200);
  }
}

function abrirTab(tab) {
  var i, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(tab).style.display = "block";
}

const btn = document.getElementById('btnSubmit');

document.getElementById('formContacto')
  .addEventListener('submit', function (event) {

    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_kpqhvyi';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar consulta';
        alert('Consulta enviada.');
      }, (err) => {
        btn.value = 'Enviar consulta';
        alert(JSON.stringify(err));
      });
  });