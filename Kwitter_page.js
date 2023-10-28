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
  Sala = localStorage.getItem("NombSala");

  function Salir(){
    localStorage.removeItem("Nombre");
    localStorage.removeItem("NombSala");
    window.location.replace("index.html")
  }

  function Enviar(){
    msg = document.getElementById("msj").value;
    firebase.database().ref(Sala).push({
        nombre:Nombre,
        mensaje:msg,
        like:0
    });
    document.getElementById("msj").value = "";
  }