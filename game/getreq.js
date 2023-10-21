function handleData(data) {
    var dataContainer = document.getElementById("data-container");
    dataContainer.textContent = "Received data: " + data;
}



// Handle incoming data
window.addEventListener("message", function(event) {
    if (event.data && event.data.fromGodot) {
        handleData(event.data.data);
    }
});