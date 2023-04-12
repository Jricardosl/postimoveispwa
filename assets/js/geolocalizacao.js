
//
document.addEventListener('DOMContentLoaded', ()=> {
    if (!('geolocation' in navigator)) {
        alert('O navegador não tem suporte para essa API');
    }else{
        navigator.geolocation.getCurrentPosition(mostrarPosicao);
    }
})

//Pega a posição do dispositivo
function mostrarPosicao(local){
    let latitude = local.coords.latitude;
    let longitude = local.coords.longitude;

    console.log("Latitude: " + latitude + " Longitude: " + longitude);

    var mapOption = {
        center: [latitude, longitude],
        zoom: 20
    }


    //Cria o mapa
    //var map = L.map('map').setView([51.505, -0.09], 13);
    var map = L.map('map').setView([latitude, longitude], 12);

    //Adiciona a camada ao mapa
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    //Cria o marcador
    var marker = L.marker([latitude, longitude]).addTo(map);

    //Cria área em volta do marcador
    var circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);
}

/*
var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

*/
