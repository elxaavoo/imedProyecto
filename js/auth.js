
// accedo al servicio de autenticación
var authService = firebase.auth();

// manejador de eventos para loguearse
document.getElementById('botonlogin').addEventListener('click', function() {
  var provider = new firebase.auth.GoogleAuthProvider();

  authService.signInWithPopup(provider)
        .then(function(result) {
            // logueado con éxito
            console.log('Hemos autenticado al usuario ', result.user.displayName);
            console.log('Hemos autenticado al usuario ', result.user);
        })
        .catch(function(error) {
            // Fallo de login
            console.log('Se ha encontrado un error:', error);
        });
})


//manejador de eventos para cerrar sesión (logout)
document.getElementById('botonlogout').addEventListener('click', function() {
  authService.signOut()
})

let currentUser;

// manejador de eventos para los cambios del estado de autenticación
authService.onAuthStateChanged(function(user) {
  if (user) {
    currentUser = user;
    console.log("Usuario logueado", currentUser.displayName);
  } else {
    console.log("No hay usuario logueado.");
  }
});

document.getElementById('loginusuario').addEventListener('click',function(){
  var email=documentgetElementById('Usuario');
  var password=documentgetElementById('Contrasena');

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  })