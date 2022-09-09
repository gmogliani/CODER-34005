// variables y funcion de orden superior
const productos = [
  { id: 1, nombre: "Pan de Masa Madre de Crema y Miel", precio: 100},
  { id: 2, nombre: "Pan de Masa Madre Mix de semillas", precio: 200 },
  { id: 3, nombre: "Miel batida x 500 gr", precio: 500 },
]
let nombre = parseInt(prompt("Ingrese el numero de producto para obtener mas informacion: \n\n1- Pan de Masa Madre de Crema y Miel \n\n2- Pan de Masa Madre Mix de semillas  \n\n3- Miel batida x 500 gr"));
let panes = productos.find(item => item.id === nombre);

if(panes === undefined){
  alert("producto no encontrado");
}else{
  let mensaje = `
id: ${panes.id}
nombre: ${panes.nombre}
precio: $${panes.precio}
`;
alert(mensaje);
}
