document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.menu-nav').classList.toggle('show');
})

document.querySelector('.nav-main img').addEventListener('click',()=>{
    alert("Será regidirido a WhatsApp del Sr. Marcos. ¿Está seguro?");
})


ScrollReveal().reveal('.contenedor-servicio');
ScrollReveal().reveal('.contenedor-galeria'),{delay:500};
ScrollReveal().reveal('.contacto'),{delay:500};