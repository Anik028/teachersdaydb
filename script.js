function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map.setCenter(pos);
                new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: "You are here!",
                });

                console.log(Latitude: ${pos.lat}, Longitude: ${pos.lng});
            },
            () => {
                handleLocationError(true, map.getCenter());
            }
        );
    } else {
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    console.error(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
}

function loadMapScript() {
    const script = document.createElement('script');
    script.src = https://maps.googleapis.com/maps/api/js?key=AIzaSyCB12OjKV-r7Xs_NtBM322nrg-S_Xz7htM&callback=initMap;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

window.onload = loadMapScript;