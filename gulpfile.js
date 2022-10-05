// function tarea(done) {
// console.log('mi primer tarea');
//     done();
// }

// exports.tarea = tarea;  // exportar la tarea, la parte izquierda esta asociada con el como se va a llamara la tarea en la terminal con node y la de la derecha es el nombre de la funcion que se va a ejecutar


const {src, dest, watch } = require('gulp'); //requerir el paquete de gulp y extraer las funciones src y dest como tal.
const sass = require('gulp-sass')(require('sass')); //requerir el paquete de sass
function css(done) {

    src('src/scss/app.scss') //identificar el archivo sass
        .pipe(sass()) //compilarlo
        .pipe(dest('build/css')); // Almacenarlo en disco destino de la carpeta un pipe es una accion que se realiza despues de la otra y pertenece a la api de gulp

    done(); //callback que avisa a gulp cuando llegamos al final
}

function dev(done) {
    watch('src/scss/app.scss', css); //vigilar los cambios en el archivo sass y ejecutar la funcion css
    done();
}
 
exports.css=css; //exportar la tarea, la parte izquierda esta asociada con el como se va a llamara la tarea en la terminal con node y la de la derecha es el nombre de la funcion que se va a ejecutar
exports.dev=dev;













