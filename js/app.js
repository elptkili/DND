"use strict"

// Variable global para controlar si el video ya terminó
let videoTerminado = false
let videoDesvanecido = false
let indicadorScrollMostrado = false


$(window).scroll( function(){

  //  Calcular el scroll que hace el usuario
  let pixel = $(window).scrollTop()

  //  Mostrar por consola ese scroll
  console.log( { pixel })

  // Si el video se desvaneció y el usuario hace scroll hacia arriba, volver a mostrarlo
  if (videoDesvanecido && pixel < $(document).height() - $(window).height() - 200) {
    console.log("Scroll hacia arriba - volviendo a mostrar el video")
    mostrarVideo()
  }

  // Ocultar el indicador de scroll cuando el usuario empiece a hacer scroll
  if (pixel > 50 && indicadorScrollMostrado) {
    ocultarIndicadorScroll()
  }

  // Asociar el scroll que hace el user con el tiempoActual del vídeo
  // https://www.w3schools.com/TAGs/av_prop_currenttime.asp
  macpro.currentTime = pixel / 215

  // Detectar si el usuario ha llegado al final del scroll
  detectarFinalScroll()

})

// Función para detectar el final del scroll
function detectarFinalScroll() {
  // Obtener la altura total del documento
  let alturaDocumento = $(document).height()
  
  // Obtener la altura de la ventana
  let alturaVentana = $(window).height()
  
  // Obtener la posición actual del scroll
  let scrollActual = $(window).scrollTop()
  
  // Calcular si hemos llegado al final (con un margen de 5px para asegurar)
  let margenFinal = 5
  let estaEnElFinal = scrollActual + alturaVentana >= alturaDocumento - margenFinal
  
  if (estaEnElFinal) {
    console.log("¡Has llegado al final del scroll!")
    // Verificar si el video ha terminado
    if (videoTerminado) {
      console.log("Video terminado - mostrando botón")
      mostrarBotonCrearPersonaje()
    }
  } else {
    ocultarBotonCrearPersonaje()
  }
}

// Alternativa usando scrollTop() y scrollHeight
function detectarFinalScrollAlternativo() {
  let scrollTop = $(window).scrollTop()
  let scrollHeight = $(document).height()
  let windowHeight = $(window).height()
  
  if (scrollTop + windowHeight >= scrollHeight) {
    console.log("Final del scroll detectado (método alternativo)")
    // Acciones cuando llegue al final
  }
}

// Función para mostrar el botón "Crear Personaje"
function mostrarBotonCrearPersonaje() {
  let boton = $('#boton-crear-personaje')
  if (boton.length === 0) {
    // Crear el botón si no existe
    $('body').append(`
      <div id="boton-crear-personaje" class="boton-crear-personaje">
        <button class="btn-crear-personaje">
          <span class="texto">Crear Personaje</span>
        </button>
      </div>
    `)
  } else {
    // Mostrar el botón si ya existe
    boton.fadeIn(300)
  }
}

// Función para ocultar el botón "Crear Personaje"
function ocultarBotonCrearPersonaje() {
  let boton = $('#boton-crear-personaje')
  if (boton.length > 0) {
    boton.fadeOut(300)
  }
}

// Función para mostrar el video nuevamente
function mostrarVideo() {
  let video = $('#macpro')
  if (video.length > 0) {
    console.log("Mostrando video nuevamente")
    // Restaurar opacidad del video con transición suave
    video.css('transition', 'opacity 1.5s ease-in')
    video.css('opacity', '1')
    // Ocultar el botón
    ocultarBotonCrearPersonaje()
    // Resetear las variables
    videoDesvanecido = false
    videoTerminado = false
    
    // Mostrar el indicador de scroll nuevamente después de un delay
    setTimeout(function() {
      mostrarIndicadorScroll()
    }, 1500)
  }
}

// Función para mostrar el indicador de scroll
function mostrarIndicadorScroll() {
  if (!indicadorScrollMostrado) {
    console.log("Mostrando indicador de scroll")
    $('body').append(`
      <div id="indicador-scroll" class="indicador-scroll">
        <div class="texto-indicador">Desplázate para avanzar</div>
        <div class="flecha-indicador">
          <div class="flecha"></div>
        </div>
      </div>
    `)
    indicadorScrollMostrado = true
    
    // Ocultar automáticamente después de 8 segundos
    setTimeout(function() {
      if (indicadorScrollMostrado) {
        ocultarIndicadorScroll()
      }
    }, 8000)
  }
}

// Función para ocultar el indicador de scroll
function ocultarIndicadorScroll() {
  let indicador = $('#indicador-scroll')
  if (indicador.length > 0) {
    console.log("Ocultando indicador de scroll")
    indicador.fadeOut(500, function() {
      $(this).remove()
    })
    indicadorScrollMostrado = false
  }
}

// Event listener para el botón crear personaje
$(document).on('click', '.btn-crear-personaje', function() {
  console.log("¡Botón Crear Personaje clickeado!")
  // Aquí puedes agregar la acción que quieras, por ejemplo:
  // - Redirigir a otra página
  // - Mostrar un formulario
  // - Abrir un modal
  // etc.
  
  // Ejemplo: redirigir a athena.html
  window.location.href = 'athena.html'
})

// Event listener para cuando el video termine
$(document).ready(function() {
  // Mostrar el indicador de scroll al cargar la página
  setTimeout(function() {
    mostrarIndicadorScroll()
  }, 2000) // Esperar 2 segundos después de cargar
  
  // Esperar a que el video esté listo
  $('#macpro').on('ended', function() {
    if (!videoTerminado) {
      console.log("El video ha terminado")
      videoTerminado = true
      // Poner el video en opacidad 0 con transición suave
      $(this).css('transition', 'opacity 2s ease-out')
      $(this).css('opacity', '0')
      videoDesvanecido = true
      // Mostrar el botón crear personaje después de un pequeño delay
      setTimeout(function() {
        mostrarBotonCrearPersonaje()
      }, 1000)
    }
  })

  // También detectar cuando el video esté cerca del final (por si no llega exactamente al final)
  $('#macpro').on('timeupdate', function() {
    let video = this
    let duracion = video.duration
    let tiempoActual = video.currentTime
    
    // Si quedan menos de 1 segundo para terminar
    if (duracion - tiempoActual < 1 && duracion - tiempoActual > 0 && !videoTerminado) {
      console.log("Video casi terminado")
      videoTerminado = true
      // Poner el video en opacidad 0 con transición suave
      $(video).css('transition', 'opacity 2s ease-out')
      $(video).css('opacity', '0')
      videoDesvanecido = true
      // Mostrar el botón crear personaje después de un pequeño delay
      setTimeout(function() {
        mostrarBotonCrearPersonaje()
      }, 1500)
    }
  })
})

// Método usando JavaScript vanilla (sin jQuery)
function detectarFinalScrollVanilla() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  let scrollHeight = document.documentElement.scrollHeight
  let clientHeight = window.innerHeight
  
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("Final del scroll detectado (JavaScript vanilla)")
    // Acciones cuando llegue al final
  }
}
