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

Una vez instalado podremos ver la dependencia en el package.json y de la misma forma podemos iniciar y crear el archivo gulpfile.js en la carpeta raiz de nuestro proyecto.

































