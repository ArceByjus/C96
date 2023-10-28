var firebaseConfig = {
    apiKey: "AIzaSyDEt12sng8W1M71YMvbtcRw6frWZfomd1Q",
    authDomain: "proyectok-2b513.firebaseapp.com",
    databaseURL: "https://proyectok-2b513-default-rtdb.firebaseio.com",
    projectId: "proyectok-2b513",
    storageBucket: "proyectok-2b513.appspot.com",
    messagingSenderId: "455336755837",
    appId: "1:455336755837:web:d1e92a6b9c1aa715b1a714"
  };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

Nombre = localStorage.getItem("Nombre");
document.getElementById("hola").innerHTML="¡Hola "+Nombre+"!";

function CrearSala(){
    NombSala = document.getElementById("Sala").value;
    firebase.database().ref("/").child(NombSala).update({
        purpose : "adding Salas"
    });
    localStorage.setItem("NombSala", NombSala);
    window.location = "Kwitter_page.html"; 
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
       document.getElementById("SalasTendencia").innerHTML = ""; 
       snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
    Salas = childKey;
    console.log("Room Name - " + Salas);
   row = "<div class='room_name' id="+Salas+" onclick='redirectToRoomName(this.id)' >#"+ Salas +"</div><hr>";
   document.getElementById("SalasTendencia").innerHTML += row;
 });
});

}

getData();

function Salir(){
  localStorage.removeItem("Nombre");
  localStorage.removeItem("NombSala");
  window.location.replace("index.html")
}