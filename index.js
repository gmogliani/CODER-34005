
alert("Bienvenidos, quieres saber si tu numero es par o impar? ")
let numero = parseInt(prompt("Ingrese su numero:"));

for (let i = 0; i < 1; i++) {
        if (numero %2 === 0) {
                alert("Tu numero es par")
        } else {
                alert("Tu numero es impar")
        }
}


/*alert("Bienvenido a nuestro Shop! \n\nTenemos grandes descuentos segun la cantidad de productos que compres. \n\nComprando 2 productos o mas ---> 20% \n\nComprando + de 10 productos ---> 30%")
let cantProd = parseInt(prompt("Ingrese cantidad de productos"));
let precio = parseInt(100);
let resultado = "";

if (cantProd >= 2 & cantProd <= 10) {
        operacion = (cantProd*(precio * 0.20))
        descuento = "Tu descuento es del 20% !"
} else if (cantProd >= 10) {
        operacion = (cantProd*(precio * 0.30))
        descuento = "Tu descuento es del 30% !"
} else if (cantProd < 2 & cantProd >= 0) {
        alert("No tienes descuento")
} else {
        alert("Cantida no valida")        
    }
let total = (precio * cantProd) + operacion;
alert("El total sin descuento es: $" + (cantProd * precio) + "\n" + "\n" + descuento + " ---> $" + operacion + "\n" + "\n" + "El total a pagar es: $" + ((cantProd * precio) - operacion))
*/

