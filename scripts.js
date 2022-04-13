window.onload = function () {
  var myCarousel = document.querySelector('#carouselMapas');
  new bootstrap.Carousel(myCarousel, { interval: 4000 }).cycle();
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