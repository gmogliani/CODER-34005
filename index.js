// eventos
function cambioProducto (){
  let seleccion = document.getElementById("seleccion");

  if ("blanco" == seleccion.value){
    document.getElementById("contenedor").innerHTML = '<img src="/img/pan_blanco.jpg" width="500px"><h1>Pan de Masa Madre de Crema y Miel</h1>\n<h2>Precio: $100</h2>';/*alert("Has seleccionado Pan Blanco de Crema y Miel\n\nPrecio: $100")*/
    
  }else if ("salvado" == seleccion.value){
    document.getElementById("contenedor").innerHTML = '<img src="/img/pan_salvado.jpg" width="500px"><h1>Pan de Masa Madre de salvado</h1>\n<h2>Precio: $200</h2>';/*alert("Has seleccionado Pan de Salvado Mix de Semillas\n\nPrecio: $200")*/
  }else{
    contenedor.innerHTML = '<img src="https://i.postimg.cc/mg2305mQ/Pan-de-masa-madre-3-1024x1024-1.jpg" width="500">';
  }
}
