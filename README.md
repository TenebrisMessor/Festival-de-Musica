DESCRIPCIÓN DEL PROCESO DEL PROYECTO.

DESCARGANDO TODO LO NECESARIO PARA EL PROYECTO.

Para generar este proyecto vamos a utilizar ciertas herramientas como lo son Node que a su vez nos va a facilitar el uso de NPM y SASS y GULP los cuales 
sirven para generar codigo de hojas de estilo y automatizar ciertos procesos respectivamente.

Para instalar node vamos a ir a la pagina https://nodejs.org/es/ y vamos a instalar la version que venga para nuestro sistema operativo ya sea iOS, Windows 
o Linux.

Vamos a generar un archivo llamado package.json utilizando la terminal vamos a introducir:
```ssh 
npm init
```
Nos va a realizar una serie de preguntas solo hay que verificar que toda la informacion este bien y solo cambiar o agregar informacion cuando te pregunte 
por la descripcion, git repository, keywords, author, posterior a eso damos puros enter y aceptamos en yes esto nos ayudara igualmente para que las personas
que estan trabajando en un proyecto sepan de las versiones de las dependencias.

Ahora utilizando NPM vamos a proceder con la instalaciòn de SASS colocando en nuestra terminal del proyecto.

```ssh 
npm install sass
```
Esto nos va a instalar una dependencia en el package.json podemos comprobarla y verificar su version, para este proposito es importante verificar los tipos 
de dependencias que son las dependencias comunes y las dependencias de desarrollo las primeras las encontraras en tu package.json como "dependencies ", y las
de desarrollo las encontraras como "devDependencies" las normales una vez que realices un deployment o un servidor que soporte node.js las va a instalar 
mientras que las de desarrollo no dado que solo podras utilizarlas en tu proyecto local, en este caso se utilizaran dependencias de desarrollo y dado que 
por default se agregan dependencies habra que hacer algunos pasos extra como borrar en el package. json 

```ssh
"dependencies":{
"sass": "^1.42.1"
}
```
Posteriormente en la terminal instalamos como dependencia de desarrollo colocando.

```ssh
npm install sass --save-dev
```
por lo cual ahora debera de aparecer como: 

```ssh
"devDependencies":{
"sass": "^1.42.1"
}
```
Notaras que se crearon carpetas nuevas cuando instalaste las dependencias tal cual node_modules que va a ser para que se descarguen como tal las dependencias y tambien vamos a ver las dependencias de las dependencias asi como los bins que son los scripts que podemos ejecutar con npm, es importante considerar que la carpeta de node modules va a crecer y se puede eliminar por lo facil que es recuperar usando nuevamente ``` npm i``` e igualmente tenemos package-lock.json donde se puede notar bastante codigo las cuales son las dependencias que ayudan a trabajar a la dependencias, el archivo se puede modificar pero no es recomendable. 

COMPILANDO CON SASS.
Se va a generar una carpeta nueva denominada src y dentro otra carpeta llamada scss en donde se coloca el archivo de sass llamado app.scss y se genera la variable y el codigo: 
```ssh
$rojo: red;
body{
 background-color: $rojo;
 }
 ```
 Esto no se puede agregar directamente al html dado que es una hoja de sass y el navegador no conoce como tal la extensión por lo cual hay que compilarlo usando el package.json generando en la sección de scripts un script ``` "sass":"sass"```.
 
En la carpeta de binarios podemos verificar que ya se encuentra la llamada al script de SASS el cual se puede ver en el archivo de package.json ahora en la sección de scripts podemos ver algo como esto ```"sass":"sass"``` lo cual denota del lado izquierdo el script y del lado derecho el binario, posteriormente se edita el script agregando primeramente la carpeta ```"sass":"sass src/scss"``` y se puede agregar una carpeta en especifico para que se compile por ejemplo si en este caso al codigo agregamos ```"sass":"sass src/scss:build/css"``` en este caso le estamos pidiendo que compile lo que se encuentra en ```src/scss``` y el resultado lo almacena en ```build/css``` posterior a ello para realizar la compilación se coloca en la terminal el comando ```npm run sass``` lo ultimo tiene que ser el nombre del script solo en caso de que se use otro nombre para evitar confusiones, en este caso hay que recordar enlazar la hoja de estilos css que en este caso se encuentra en build/css por lo cual ahora podremos comprobar en esta carpeta que se encuentrra lo que esta en sass ha sido transferido a la hoja de css.Cabe aclarar que para evitar mantenernos compilando igualmente podemos usar la funcion watch en el script de la siguiente manera. ```"sass":"sass --watch src/scss:build/css"``` agregando este watch en los scripts una vez ingresando en terminal el comando para compilar se va a actualizar automaticamente cualquier cambio que hagamos en el scss hasta presionar ctrl+c lo cual va a detener la compilación continua y automatica.

INSTALANDO GULP Y CREANDO EL PRIMER ARCHIVO.

Para instalar gulp vamos a introducir uno de los siguientes dos comandos en la terminal, ambos son para instalarlo como dependencia de desarrollo pero de maneras distintas, puedes elegir el que sea.
```ssh 
npm i -D gulp 
```

```ssh
npm install --save-dev gulp

```

Una vez instalado podremos ver la dependencia en el package.json y de la misma forma podemos iniciar y crear el archivo gulpfile.js en la carpeta raiz de nuestro proyecto. Dentro de gulpfile podemos agregar la function tarea que solo va a imprimir mi primer tarea en consola, posterior a ello mandamos a llamar la funciòn colocando ```exports.primerTarea=tarea;``` despues en la terminal mandamos a llamar la funcion escribiendo, ```export.``` sirve para poner la tarea en node.
```ssh 
npx gulp primerTarea
```
Dado esto podemos ver la salida esperada, recordar colocar dentro de la función un callback es decir la funcion que se manda a llamar despues de otra función por ejemplo la funcion done utilizandolo como parametro y despues llamandolo dentro de la misma función. dentro del comando en terminal se va a mandar a llamar con lo que esta del lado izquierdo del export que es la identificación y la del derecho el nombre de la función.

Ahora otra manera de hacer esta compilación es utilizando el package.json en el cual agregaremos otro script llamado tarea usando ```"tarea":"gulp tarea"``` ahora para mandar a llamar la función necesitaremos utilizar npm colocando en la terminal ´´´npm run tarea´´´ lo cual iniciara la tarea directo desde el package.json 

```const {src, dest } = require('gulp');``` nos dice que va a extraer de sass las funciones src y dest como talde igual forma antes de ello tenemos que traer
//sass requiriendo el paquete de sass y luego lo que hace es que lo convierte en una funcion que se puede utilizar en el codigo de la funcion css 
//src es para identificar los archivos mientras que dest es para identificar la carpeta de destino y almacenar los archivos. Posterior a ello vamos a comenzar
//la automatización de la compilación de sass a css y para ello vamos a utilizar el paquete de gulp-sass que es un plugin de gulp que nos permite compilar sass
//a css y para ello vamos a utilizar el metodo pipe que es una funcion que se ejecuta despues de la otra y pertenece a la api de gulp y lo que hace es que  ejecuta
//una funcion y luego ejecuta la siguiente y asi sucesivamente, dicha funcion es ```.pipe``` igualmente recordar instalar el plugin de gulp-sass con el comando 
//```npm install gulp-sass``` y luego de ello vamos a ejecutar la tarea con el comando ```gulp css``` recordando que hay que hacer un const ```onst sass = require('gulp-sass')(require('sass'));``` y si todo sale bien nos va a generar un archivo css en la carpeta
//build/css y si queremos que se ejecute automaticamente cada vez que se modifique el archivo sass vamos a utilizar el metodo watch que es un metodo de gulp que nos    
//permite observar los cambios que se realizan en los archivos y ejecutar una tarea en especifico y para ello vamos a utilizar el metodo watch que es un metodo de gulp
//que nos permite observar los cambios que se realizan en los archivos y ejecutar una tarea en especifico.

//ahora vamos a agregar una funcion llamada dev para agregar un ```watch``` y para ello vamos a utilizar el metodo watch que es un metodo de gulp que nos permite observar
//los cambios que se realizan en los archivos y ejecutar una tarea en especifico agregando la funcion dev que encontraremos en el gulpfile.js



//GENERANDO MIXINS



























