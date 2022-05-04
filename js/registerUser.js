const form = document.getElementById('signup-form'); // Obtenemos la referencia al formulario
if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
    form.addEventListener('submit', guardarDatos); // Al momento de enviar el formulario, ejecuta la función "contactform"
}

function guardarDatos(event){

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var lastname = document.getElementById("lastname").value;
    var provincia = document.getElementById("provincia").value;
    var poblacion = document.getElementById("poblacion").value;
    var pais = document.getElementById("pais").value;
    var user = document.getElementById("user").value;
    var tlf = document.getElementById("tlf").value;

    db.collection("usuarios").add({
        user: user,
        password: pass,
        name: name,
        lastname: lastname,
        provincia: provincia,
        poblacion: poblacion,
        pais: pais,
        tlf: tlf,
        email: email
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    firebase.auth().createUserWithEmailAndPassword(email, pass)

}
