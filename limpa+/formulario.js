var latitudeSpan = document.getElementById("latitude");
var longitudeSpan = document.getElementById("longitude");
var bairroInput = document.getElementById("bairro");
var cidadeInput = document.getElementById("cidade");
var ruaInput = document.getElementById("rua");

var map;
var marker;

// Verifica se o navegador suporta a API de Geolocalização
if ("geolocation" in navigator) {
    // Obtém a referência ao botão e ao elemento do mapa
    var getLocationButton = document.getElementById("getLocationButton");
    var mapElement = document.getElementById("map");
    var enviarButton = document.getElementById("enviarButton");

    getLocationButton.addEventListener("click", function() {
        // Solicita a localização do usuário
        navigator.geolocation.getCurrentPosition(function (position) {
            // Obtém as coordenadas de latitude e longitude
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Exibe as coordenadas na página
            latitudeSpan.textContent = latitude;
            longitudeSpan.textContent = longitude;

            // Cria um mapa do Google Maps
            var mapOptions = {
                center: {lat: latitude, lng: longitude},
                zoom: 15
            };

            map = new google.maps.Map(mapElement, mapOptions);

            // Remove o marcador anterior, se existir
            if (marker) {
                marker.setMap(null);
            }

            // Adiciona um novo marcador no mapa
            marker = new google.maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: map,
                title: "Sua localização"
            });
        }, function (error) {
            // Tratamento de erros
            alert("Não foi possível obter a localização.");
        });
    });

    enviarButton.addEventListener("click", function() {
        // Coleta as informações de bairro, cidade e rua
        var bairro = bairroInput.value;
        var cidade = cidadeInput.value;
        var rua = ruaInput.value;

        // Envie essas informações para o banco de dados (simulado)
        console.log("Informações enviadas para o banco de dados:");
        console.log("Bairro: " + bairro);
        console.log("Cidade: " + cidade);
        console.log("Rua: " + rua);
    });
} else {
    // Navegador não suporta Geolocalização
    alert("Geolocalização não suportada pelo seu navegador.");
}
