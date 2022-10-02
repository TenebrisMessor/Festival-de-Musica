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
 
