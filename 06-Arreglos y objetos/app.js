    /*
ARREGLOS son:
    *Mutables
    *Contienen index (inician con 0)
    *Longitud puedes varias (Cardinalidad)

*/

//Sintaxis

var bevidasCalientes =  ["Cafe", "Te", "Li,moka" ];
var bebidas= new Array("Frappe", "Soda Italiana", "Refresco")

var nombre = ["Pablo", "Carlos", "Ana", "Teresa"];
var vegetales = new Array ("Tomate", "Lechuga", "Zanahoria");

//Acceder a los elementos de un arreglo por medio de su indice 
console.log(nombre[0]);
console.log(vegetales[1]);

//Modificar el array usando indice para referenciar 
nombre[1] = "Jose"; //Esta linea quita el nombre de Carlos y lo substituye por Jose
console.log(nombre);

//si se usa un index que no existe o mayor a su cardinalidad se añade el elemento al final

console.log(vegetales.length);
//Luego si :
vegetales[vegetales.length + 1] = "Pepino";
console.log(vegetales) // ['Tomate', 'Lechuga', 'Zanahoria', empty, 'Pepino'];


/*
OPERACIONES CON ARREGLOS
 */

var frutas = ["Pera","Manzana","Uva","Sandia"];

//Recorriendo por medio de for
for(var i = 0; i <= frutas.length - 1; i++){
    console.log(frutas[i])
} 

//Recorriendo por medio de foreach
frutas.forEach(function(elemento, indice, array){
    console.log(indice, elemento);
});


//añadir elemento al final del array
frutas.push("Naranja");
console.log(frutas)

//añadir elemento al principio del array
frutas.unshift("Cereza");
console.log(frutas) //Dezplaza al contenido donde el index 0 => index 1

//Quitar el ultimo elemento del arreglo 
frutas.pop();
console.log(frutas)

//Quitar elemento del principio
frutas.shift();
console.log(frutas);


//Conocer el indice de un elemento 
var posicion = frutas.indexOf("Uva");
console.log(posicion)

//Eliminar elementos con un valor inicial y un radio ejemplo para manzana punto inicial 1 ----> 1 con radio 
frutas.splice(1, 1);
console.log(frutas);


/*ARREGLOS CON DIFERENTES TIPOS DE DATOS*/
var persona = ["Pablo","Vazquez",34 ,"5531312225",1.75];
console.log(persona);


//Creando un OBJETO en JS de forma Literal---
var personas = {
    //propiedades
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ["Futbol", "Peliculas", "Ingles"],
    trabajo: 'Instructor',
    esCasado: true
};

console.log(personas)

//Acceder por medio del operador punto (.)
console.log(personas.apellido);
console.log(personas['trabajo'])

//Accediendo y modificando propiedades de objetos 
personas.esCasado = false;
console.log(personas.esCasado);


//Creando un OBJETO en JS de CON SINTAXIS OBJECT---

var persona2 = new Object();
persona2.nombre = "Ana";
persona2.apellido = "Pinedo";
persona2["trabajo"] = "Webdeveloper"

console.log(persona2);


/*FUNCIONES EN OBJETOS*/

var persona3 = {
    //Propiedades
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ["Futbol", "Peliculas", "Ingles"],
    trabajo: 'Instructor',
    esCasado: true,
    anioNacimiento: 1986,

    //Metodos

    calculaEdad: function(){
        return 2025-this.anioNacimiento;
    }
};

var edad = persona3.calculaEdad();
console.log(edad)