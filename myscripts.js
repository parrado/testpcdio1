//Scripts que se ejecutarán en el lado del cliente
//Alexander López-Parrado, PhD, 2019

//Identificador del canal de ThingSpeak
const channelID="333785";

//Función para el botón
function msg() {

  //Crea objeto tipo XMLHttpRequest para acceder a ThingSpeak
  xhr = new XMLHttpRequest();


  //URL para leer última entrada en el canal de ThingSpeak
  xhr.open('GET', "https://api.thingspeak.com/channels/"+channelID+"/feeds/last.json", true);

  //Envía la petición
  xhr.send();

  //Función que se ejecutará cuando responda el servidor de ThingSpeak
  xhr.onload = () => {
    //Crea un objeto JSON con la respuesta del Servidor
    var response=JSON.parse(xhr.responseText);

    //Muestra en un cuadro de diálogo el valor del campo
    alert(response.field1);

  };

  //Configura la función que se ejecutará si hay error al conectar servidor de ThingSpeak
  xhr.onerror = ()=> {alert("No puedo conectarme a ThingSpeak :(")}
}
