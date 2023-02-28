let boton = document.getElementById('sumar'); /*para mantener la memoria del numero*/
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma);

/*Crear una funcion en este caso, suma*/
function hacersuma(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2;
    respuesta.innerHTML = `El resultado de la suma es: ${n3}`;
}