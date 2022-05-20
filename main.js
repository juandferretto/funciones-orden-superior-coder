const arrayObjetos = [
	{
		color: "rojo",
		marca: "vans",
		precio: 15000 
	},
	{
		color: "azul",
		marca: "nike",
		precio: 18000 
	},
	{
		color: "negras",
		marca: "adidas",
		precio: 16000 
	},
	{
		color: "negras",
		marca: "levis",
		precio: 15000 
	},
];

const arrayNumeros = [1, 2, 3, 4, 5];


/* Retorna funcion */

// function mayorQue(m){

// 	return (n) => m > n;

// }

// const mayorQueDiez = mayorQue(10);

/* Recibe funcion por parámetro */

// let acc = 0;

// function recorrer(array, fn){

// 	for(const elemento of array){
// 		fn(elemento);
// 	}

// }

// function sumar(elemento){
// 	acc += elemento;
// }

// recorrer(arrayNumeros, sumar);

// console.log(acc);


/* FOREACH */

// arrayObjetos.forEach( (elemento) => {
// 	console.log(elemento);
// });


// function forEach2(array, fn){
// 	for(const elemento of array){
// 		fn(elemento);
// 	}
// }

// function mostrar(elemento){
// 	console.log(elemento);
// }

// forEach2(arrayObjetos, mostrar);

/* FIND */

// const encontrado = arrayObjetos.find( (elemento) => {
// 	return elemento.color === "negras";
// });

// function find2(array, fn){

// 	for(const elemento of array){
// 		if(fn(elemento)){
// 			return elemento;
// 		}
// 	}
// 	return;
// }

// const encontrado = find2(arrayObjetos, (elemento) => {
// 	return elemento.precio == 5000;
// });

// console.log(encontrado);

/* FILTER */

// const arrayFiltrado = arrayObjetos.filter( (elemento) => {
// 	return elemento.precio === 15000;
// });

function filter2(array, fn){
	const arrayRetorno = [];
	for(const elemento of array){
		if(fn(elemento)){
			arrayRetorno.push(elemento);
		}
	}
	return arrayRetorno;
}

const arrayFiltrado = filter2(arrayObjetos, (hola) => {
	return hola.marca.indexOf("is") != -1;
});

console.log(arrayFiltrado);
