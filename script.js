function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert("Sua latidude é "+latitude);
    alert("Sua longitudes é "+longitude);

  }

  function error () {
    cosole.log("Não consegui obter a posição atual");
  }
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log = "O navegador não suporta geolocalização";
  }
  function mostrarVariaveis() {
    var texto = latitude+ " " + longitude;
    document.getElementById("variables").textContent = texto;
  }
 