function tarea(done) {
console.log('mi primer tarea');
    done();
}

exports.tarea = tarea;  // exportar la tarea, la parte izquierda esta asociada con el como se va a llamara la tarea en la terminal con node y la de la derecha es el nombre de la funcion que se va a ejecutar
