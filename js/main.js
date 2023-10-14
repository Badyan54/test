function newPosition() {
    let element = document.getElementById('button2');
    element.style.position = 'fixed';
    element.style.left = (Math.floor(Math.random() * (1000 - 20 + 1)) + 20) + "px";
    element.style.top = (Math.floor(Math.random() * (650 - 20 + 1)) + 20) + "px";
}

function сongratulations() {
    alert("О, я так і знавю. Нє ну я ванга")
}
