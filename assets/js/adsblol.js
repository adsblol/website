// Poll data from /api/0/me
// and update the UI

var API_URL = "https://api.adsb.lol/api/0/me"

// We want to make it globally accessible within the rest of the browser
// To do this, we need to create a global variable
// We can do this by assigning it to the window object
window.adsblol_api_me = {}

// We want to poll the API every 5 seconds
// To do this, we need to create a function that will be called every 5 seconds
// We can do this by using setInterval
// setInterval takes two arguments:
// 1. The function to call
// 2. The interval in milliseconds
// We can use an anonymous function to call our own function
function updateTable() {
    // Iter over window.adsblol_api_me.clients.beast
    // This is idempotent. We can call it as many times as we want
    // for (var i = 0; i < window.adsblol_api_me.clients.beast.length; i++) {
    //     var client = window.adsblol_api_me.clients.beast[i];
    //     var row = document.getElementById("adsblol_api_me_beast_table").insertRow(1);
    //     var id = row.insertCell(0);
    //     var ip = row.insertCell(1);
    //     var kbps = row.insertCell(2);
    //     var time = row.insertCell(3);
    //     var total_positions = row.insertCell(4);
    //     var messages_per_second = row.insertCell(5);
    //     var positions_per_second = row.insertCell(6);
    //     id.innerHTML = client.id;
    //     id.class = "tooltiptext";
    //     ip.class = "tooltiptext";
    //     ip.innerHTML = client.ip;
    //     kbps.innerHTML = client.kbps;
    //     time.innerHTML = client.connected_seconds;
    //     total_positions.innerHTML = client.positions;
    //     messages_per_second.innerHTML = client.messages_per_second;
    //     positions_per_second.innerHTML = client.positions_per_second;
    // }
    // This is not idempotent unfortunately. It always creates a new row.
    // We transform it to idempotent now,
    // By updating the row if it exists, and creating it if it doesn't.
    // We use the index as the row id.
    // We remove the row if it doesn't exist in the API anymore.
    // We also remove the row if it's the first row, because that's the header.

    // Update adsblol_api_me_planes = window.adsblol_api_me.global.planes
    planes = document.getElementById("adsblol_api_me_planes");
    planes.innerHTML = window.adsblol_api_me.global.planes;

    beast = document.getElementById("adsblol_api_me_beast");
    beast.innerHTML = window.adsblol_api_me.global.beast;

    mlat = document.getElementById("adsblol_api_me_mlat");
    mlat.innerHTML = window.adsblol_api_me.global.mlat;

    for (var i = 0; i < window.adsblol_api_me.clients.beast.length; i++) {
        var client = window.adsblol_api_me.clients.beast[i];
        var row = document.getElementById("adsblol_api_me_beast_table").rows[i + 1];
        if (row) {
            // if (row.cells[0].innerHTML != client.hex) {
            //     row.cells[0].classList.add("adsblol_blink");
            //     row.cells[0].innerHTML = client.hex;
            // }
            if (row.cells[0].innerHTML != window.adsblol_api_me.client_ip) {
                row.cells[0].classList.add("adsblol_blink");
                row.cells[0].innerHTML = window.adsblol_api_me.client_ip;
            }
            if (row.cells[1].innerHTML != client.kbps) {
                row.cells[1].classList.add("adsblol_blink");
                row.cells[1].innerHTML = client.kbps;
            }
            if (row.cells[2].innerHTML != client.connected_seconds) {
                row.cells[2].classList.add("adsblol_blink");
                row.cells[2].innerHTML = client.connected_seconds;
            }
            if (row.cells[3].innerHTML != client.positions) {
                row.cells[3].classList.add("adsblol_blink");
                row.cells[3].innerHTML = client.positions;
            }
            if (row.cells[4].innerHTML != client.messages_per_second) {
                row.cells[4].classList.add("adsblol_blink");
                row.cells[4].innerHTML = client.messages_per_second;
            }
            if (row.cells[5].innerHTML != client.positions_per_second) {
                row.cells[5].classList.add("adsblol_blink");
                row.cells[5].innerHTML = client.positions_per_second;
            }
        } else {
            row = document.getElementById("adsblol_api_me_beast_table").insertRow(i + 1);
            var ip = row.insertCell(0);
            var kbps = row.insertCell(1);
            var time = row.insertCell(2);
            var total_positions = row.insertCell(3);
            var messages_per_second = row.insertCell(4);
            var positions_per_second = row.insertCell(5);
            ip.classList.add("aloltooltiptext");
            ip.innerHTML = window.adsblol_api_me.client_ip;
            kbps.innerHTML = client.kbps;
            time.innerHTML = client.connected_seconds;
            total_positions.innerHTML = client.positions;
            messages_per_second.innerHTML = client.messages_per_second;
            positions_per_second.innerHTML = client.positions_per_second;
        }
    }

    // update MLAT table too
    // for (var i = 0; i < window.adsblol_api_me.clients.mlat.length; i++) {
    //     var client = window.adsblol_api_me.clients.mlat[i];
    //     var row = document.getElementById("adsblol_api_me_mlat_table").insertRow(1);
    //     var name = row.insertCell(0);
    //     var peers = row.insertCell(1);
    //     var timeout = row.insertCell(2);
    //     name.innerHTML = client.user;
    //     peers.innerHTML = client.peer_count;
    //     timeout.innerHTML = client.bad_sync_timeout;
    // }
    // This is not idempotent unfortunately. It always creates a new row.
    // We transform it to idempotent now,
    for (var i = 0; i < window.adsblol_api_me.clients.mlat.length; i++) {
        var client = window.adsblol_api_me.clients.mlat[i];
        var row = document.getElementById("adsblol_api_me_mlat_table").rows[i + 1];
        if (row) {
            if (row.cells[0].innerHTML != client.user) {
                row.classList.add("adsblol_blink");
                row.cells[0].innerHTML = client.user;
            }
            if (row.cells[1].innerHTML != client.peer_count) {
                row.classList.add("adsblol_blink");
                row.cells[1].innerHTML = client.peer_count;
            }
            if (row.cells[2].innerHTML != client.bad_sync_timeout) {
                row.classList.add("adsblol_blink");
                row.cells[2].innerHTML = client.bad_sync_timeout;
            }
        } else {
            row = document.getElementById("adsblol_api_me_mlat_table").insertRow(i + 1);
            var name = row.insertCell(0);
            var peers = row.insertCell(1);
            var timeout = row.insertCell(2);
            name.innerHTML = client.user;
            name.classList.add("aloltooltiptext");
            peers.innerHTML = client.peer_count;
            timeout.innerHTML = client.bad_sync_timeout;
        }
    }
    // If length of window.adsblol_api_me.clients.mlat > 0; show MLAT table
    // Remove .d-none class from table
    if (window.adsblol_api_me.clients.mlat.length > 0) {
        document.getElementById("adsblol_api_me_mlat_table").classList.remove("d-none");
        // Let's remove d-none from adsblol_api_me_feeding_info too
        document.getElementById("adsblol_api_me_feeding_info").classList.remove("d-none");
        document.getElementById("adsblol_api_me_footer").innerHTML = ", You"
    }
    // Same for beast.
    if (window.adsblol_api_me.clients.beast.length > 0) {
        document.getElementById("adsblol_api_me_beast_table").classList.remove("d-none");
        // Let's remove d-none from adsblol_api_me_feeding_info too
        document.getElementById("adsblol_api_me_feeding_info").classList.remove("d-none");
    }
}

window.adsblol_api_me_update = function () {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            window.adsblol_api_me = data
            updateTable();

        });
}

// When document is ready,
// call window.adsblol_api_me_update
// and set interval to 5 seconds
document.addEventListener("DOMContentLoaded", function () {
    setInterval(window.adsblol_api_me_update, 5000);
    window.adsblol_api_me_update();
});
