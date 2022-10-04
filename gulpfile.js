// function tarea(done) {
// console.log('mi primer tarea');
//     done();
// }

// exports.tarea = tarea;  // exportar la tarea, la parte izquierda esta asociada con el como se va a llamara la tarea en la terminal con node y la de la derecha es el nombre de la funcion que se va a ejecutar


const {src, dest } = require('gulp'); //requerir el paquete de gulp y extraer las funciones src y dest como tal.
const sass = require('gulp-sass'); //requerir el paquete de sass
function css(done) {

    src('src/scss/app.scss') //identificar el archivo sass
        .pipe(sass()) //compilarlo
        .pipe(dest('build/css')); // Almacenarlo en disco destino de la carpeta un pipe es una accion que se realiza despues de la otra y pertenece a la api de gulp

    done(); //callback que avisa a gulp cuando llegamos al final
}


exports.css=css; //exportar la tarea, la parte izquierda esta asociada con el como se va a llamara la tarea en la terminal con node y la de la derecha es el nombre de la funcion que se va a ejecutar














//NOTAS:    const {src, dest } = require('gulp'); nos dice que va a extraer de sass las funciones src y dest como talde igual forma antes de ello tenemos que traer
//sass requiriendo el paquete de sass y luego lo que hace es que lo convierte en una funcion que se puede utilizar en el codigo de la funcion css 
//src es para identificar los archivos mientras que dest es para identificar la carpeta de destino y almacenar los archivos. Posterior a ello vamos a comenzar
//la automatización de la compilación de sass a css y para ello vamos a utilizar el paquete de gulp-sass que es un plugin de gulp que nos permite compilar sass
//a css y para ello vamos a utilizar el metodo pipe que es una funcion que se ejecuta despues de la otra y pertenece a la api de gulp y lo que hace es que  ejecuta
//una funcion y luego ejecuta la siguiente y asi sucesivamente. En este caso vamos a utilizar el metodo pipe para compilar sass a css y para ello vamos a utilizar