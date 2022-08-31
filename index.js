
alert("Bienvenido a nuestro Shop! Tienda de panes de masa madre. \n\nTenemos grandes descuentos segun la cantidad de productos que compres. \n\nComprando 2 productos o mas ---> 20% \n\nComprando + de 10 productos ---> 30%")

let cantProd = parseInt(prompt("Ingrese cantidad de productos"));
let precio = parseInt(100);
let operacion = "";

if (cantProd >= 2 & cantProd <= 10) {
        operacion = (cantProd*(precio * 0.20))
        descuento = "tu descuento es del 20% !"
} else if (cantProd >= 10) {
        operacion = (cantProd*(precio * 0.30))
        descuento = "tu descuento es del 30% !"
} else if (cantProd < 2 & cantProd >= 0) {
        operacion = cantProd * precio
        descuento = "no tienes descuento"
} else {
        alert("Cantida no valida")        
    }
alert("El total a pagar es: $" + operacion + " y " + descuento)

function pago () {
    let pago = prompt("Desea realizar el pago? \n\n1- Si \n\n2- No\n\n");
    if (pago == "1"){
        let usuario = prompt("Ingrese su usuario");
        alert(`Bienvenido ${usuario}`)
        let contrasena = prompt("Ingrese su contraseña")
        if (contrasena == 1111) {
            alert("Pago realizado con exito, muchas gracias!")
        }else{
            alert("Contraseña incorrecta, cerrando ventana de pago...")
        }
    }
    else {
        alert("Para comprar debe crear un usuario")
    }
 }
 pago()


 
