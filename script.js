const img = document.querySelector('.demo-img');

document.addEventListener('mousemove', (e) => {
    rotateElement(e, img);
});

function rotateElement(event, element) {
    // get mouse position
    const x = event.pageX;
    const y = event.pageY;

    // find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // get offset from middle as a percentage
    // and scale it down for smoother rotation
    const offsetX = ((x - middleX) / middleX) * 25; // Adjusted from 45 to 25 for smoother effect
    const offsetY = ((y - middleY) / middleY) * 25; // Adjusted from 45 to 25 for smoother effect

    // set rotation
    element.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
}
