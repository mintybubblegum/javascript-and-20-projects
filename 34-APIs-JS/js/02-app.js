// Intersection observer para aplicar scroll infinito o para agregar lazy loading en algunas imagenes

document.addEventListener('DOMContentLoaded', entries => {

    const observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting){
            console.log('Ya está visible');
        }
    });
    
    observer.observe(document.querySelector('.premium')); //si la seccion mi viaje plus se muestra, aplicar console.log
});
