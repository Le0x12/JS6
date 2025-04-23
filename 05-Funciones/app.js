function bienvenido(){
    return "Hola Benvenuto a la seccion de funciones";
}

 /*Se usa return para que la funcion al ser llamda retorne algo en este casose guarda en una variable y se imprime */
var saludo = bienvenido();
console.log(saludo);

//Partes de una funcion 
//PARAMETROS, CODIGO, SALIDA ------------------------

function cuadradoDeNumero(num){
    return (num * num);
}

var numero = 5
console.log(cuadradoDeNumero(numero))

//Ejercicio de Fahrenheit a Celsius
//C = (F-32) * 5/9

function fahrenheitToCelcius(fahrenheitDegrees){
    return (fahrenheitDegrees - 32) * 5/9;
}


console.log(fahrenheitToCelcius(32));
console.log(fahrenheitToCelcius(55));
console.log(fahrenheitToCelcius(96));


//FUNCIONES COMO EXPRESIONES 

var prueba = function(nombre){
   return "Funcion como expresion " + nombre;
}

console.log(prueba("Lex"));

//ARGUMENTOS INDEFINIDOS 
//Que pasa si llamo a la funcion sin parametro
console.log(prueba());

//ARGUMENTOS NULOS
var a = null
var nullVar = function(a){
    return a;
}

console.log(nullVar(a))
//null no es igual a undefine, null puede ser operado 

//ARGUMENTOS POR DEFECTO 
 //La variable c tiene un valor por defecto que es 0 ese solo cambia si al invicar se envia un valor nuevo, en todo caso siempre toma 0
 // su algun valor se argumenta coo null los otros numeros operan 
var sumar = function(a = 0,b = 0,c = 0){ 
    return a + b + c;

}

console.log(sumar(10, 4));

//Si llamamos la funcion sin argumentos sumara los valores po defecto que fueron definidos como 0
console.log(sumar())

//TEMPLATE STRING (Plantillas de Cadenas)
var nombre  = "Kumi";
console.log(`El nombre es: ${nombre}`);

var num1 = 5;
var num2 = 10;

console.log(`La suma es : ${num1 + num2}`)