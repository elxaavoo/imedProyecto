const form = document.getElementById('formulario'); // Obtenemos la referencia al formulario

if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
    form.addEventListener('submit', guardarDatos); // Al momento de enviar el formulario, ejecuta la función "contactform"
}

function guardarDatos(event){
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    console.log(nombre);

    db.collection("correos").add({
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}