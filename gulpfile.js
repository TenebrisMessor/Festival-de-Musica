// function tarea(done) {
// console.log('mi primer tarea');
//     done();
// }

// exports.tarea = tarea;  // exportar la tarea, la parte izquierda esta asociada con el como se va a llamara la tarea en la terminal con node y la de la derecha es el nombre de la funcion que se va a ejecutar

const plumber =require('gulp-plumber'); //requerir el paquete de plumber
const {src, dest, watch, parallel} = require('gulp'); //requerir el paquete de gulp y extraer las funciones src y dest como tal.
const sass = require('gulp-sass')(require('sass')); //requerir el paquete de sass
const webp=require('gulp-webp'); //requerir el paquete de webp


function css(done) {

    src('src/scss/**/*.scss') //identificar el archivo sass a compilar y todos los archivos que esten dentro de la carpeta scss
        .pipe(plumber()) //usar el paquete de plumber    
        .pipe(sass()) //compilarlo
        .pipe(dest('build/css')); // Almacenarlo en disco destino de la carpeta un pipe es una accion que se realiza despues de la otra y pertenece a la api de gulp

    done(); //callback que avisa a gulp cuando llegamos al final
}

function dev(done) {
    watch('src/scss/**/*.scss', css); //vigilar los cambios en el archivo sass y ejecutar la funcion css
    done();
}
 
//Imagenes


function versionWebp(done) { //funcion para convertir las imagenes a webp
    const opciones = {
        quality:50
    };
    src('src/img/**/*.{jpg,png}') 
        .pipe(webp())
        .pipe(dest('build/img'));
    done();
}


exports.css=css; //exportar la tarea, la parte izquierda esta asociada con el como se va a llamara la tarea en la terminal con node y la de la derecha es el nombre de la funcion que se va a ejecutar
exports.dev=parallel(versionWebp, dev); //parallel sirve para ejecutar dos o mas tareas simultaneamente
exports.versionWebp=versionWebp;





//para poder utilizar el workflow sin interrupciones hay que instalar el paquete de gulp-plumber y posteriormente utilizarlo en la funcion css en el pipe. 