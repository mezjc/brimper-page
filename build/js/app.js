const typedElement = document.querySelector(".typed");
if (typedElement) {
  const typed = new Typed(".typed", {
    strings: [
      '<i class="teclado">Experiencia Retail</i>',
      '<i class="teclado">Diseño y Ejecucion</i>',
      '<i class="teclado">Proyectos Eficientes</i>',
    ],
    // stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: "|", // Caracter para el cursor
    contentType: "html", // 'html' o 'null' para texto sin formato
  });
}

document.querySelector(".button").addEventListener("click", () => {
  document.querySelector(".navegacion").classList.toggle("show");
});

//--Slider--

const sliderElement = document.querySelector(".slider__contenedor");

if (sliderElement) {
  let slider = document.querySelector(".slider__contenedor");
  let sliderIndividual = document.querySelectorAll(".slider__contenido");
  let contador = 1;
  let width = sliderIndividual[0].clientWidth;
  let intervalo = 9000;

  window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
  });

  setInterval(function () {
    slides();
  }, intervalo);

  function slides() {
    slider.style.transform = "translate(" + -width * contador + "px)";
    slider.style.transition = "transform.7s";
    contador++;

    if (contador == sliderIndividual.length) {
      setTimeout(function () {
        slider.style.transform = "translate(0px)";
        slider.style.transition = "transform.0s";
        contador = 1;
      }, 1500);
    }
  }
}

const swiperElement = document.querySelector(".mySwiper");

if (swiperElement) {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
