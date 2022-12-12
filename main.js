//Le damos una bienvenida al expectador
let nombre = prompt("Cuál es tu nombre?: ");
    alert("Bienvenido, " + nombre + " Los artistas son: Daddy Yankee, La Konga y David Guetta");


//puede seleccionar alguno de los artistas
let artistas = prompt("Selecciona el artista que querés ver");
    if (artistas == 'daddy yankee') {
       alert('AGOTADO');
    } else if (artistas == 'la konga') {
        alert('Quedan 4 entradas'); 


//ingresamos la cantidad de entradas para saber el costo segun la cantidad de entradas
 let konga = parseInt(prompt("Seleccione la cantidad de entradas que querés comprar"));
        let precio;
            precio = parseInt(8000);
        let precioTotal;
            precioTotal = konga * precio;
                if (konga == 4){
                    alert("Tenés un descuento 10% y el precio sería $" + precioTotal*0.9);
                }
                else {
                    alert("El precio sería $" + precioTotal );
                }    

//acá verificamos la cantidad de entradas que compraron hasta que coloquen las correctas con un ciclo
        let puestos = konga;
        let seleccionPuesto = prompt("Selecciona cuántos asientos apartás");

        while (seleccionPuesto != puestos){
            alert("No es la cantidad de entradas que compraste");
            seleccionPuesto = prompt("Selecciona cuántos asientos apartás");
        }
                    
    } else if (artistas == 'david guetta') {
        alert('Preventa 07 diciembre 2022');
    } else {
        alert('Selecciona alguno de los 3 artistas');
}
// registro de compra

function Registro (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
    let nombrecliente= prompt("Nombre de la persona?");
    let apellidocliente = prompt("apellido de la persona?");
    let edadcliente = parseInt(prompt("edad de la persona?")); 
    let mayoredad;

    if (edadcliente < 18){
        alert("es menor de edad no puede asistir");
        mayoredad = false;

    } else {
        alert ( "ya te enviaremos tu entrada");
        mayoredad = true
  
}
 const nuevoRegistro = new Registro (nombrecliente, apellidocliente, edadcliente);

let cliente = [nombrecliente, artistas, edadcliente, mayoredad];

console.log(cliente);

cliente.unshift(apellidocliente);

console.log(cliente);