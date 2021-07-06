var x =1
var y =2

console.log(x+y)


function sumar(a,b){
    return a+b;

}

var resultado=sumar(3,6);

console.log(resultado)

function multiplicar(a,b){
    return a*b;
}

var mult = multiplicar;

var m = mult(2,3)

console.log(m)

// Taller canciones 

var a="La cucaracha"
var b="one"
var c="mundo"
var d="snake"
var e="mouse"

function canciones(a){
    console.log(a);


}

console.log("Mi lista de canciones favoritas")

canciones(a)
canciones(b)
canciones(c)
canciones(d)
canciones(e)

// Funcion minutos

function mintotal(h,m){
    return m+h*60

}


console.log(mintotal(3,30))


//longitud de cadena
var a="hola mundo"

console.log(a.length);


//convertir a mayuscula o minuscula

w1="backend". toUpperCase ();
var w2=w1. toUpperCase ();
console.log(w2);

//a minuscula

w3= "BACKEND". toLowerCase();
console.log(w3)

//eliminacion de espacios en blanco al ppio y final

w4="   frontend  ".trim();
console.log(w4)

// concatenacion de strings

function saludo(nombre,apellido,curso){
    var resultado= 'hola '+nombre+''+apellido+"bienvenido al curso de"+curso;
    var resultado2= `hola ${nombre} ${apellido}, bienvenido al curso ${curso}`;
    return resultado
    return resultado2
}

console.log(saludo("Pedro","mosquera", "JAVA"))