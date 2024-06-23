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

document.addEventListener("DOMContentLoaded", function () {
const hamburger = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburger.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
  });
  });

  function getBackgroundColor(element) {
    let bgColor = window.getComputedStyle(element).backgroundColor;
    if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        return getBackgroundColor(element.parentElement);
    }
    return bgColor;
}

function luminance(r, g, b) {
    let a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getRGBValues(color) {
    let rgb = color.match(/\d+/g).map(Number);
    return { r: rgb[0], g: rgb[1], b: rgb[2] };
}

function updateHeaderTextColor() {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    let bgColor, r, g, b, lum;

    for (let section of sections) {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bgColor = getBackgroundColor(section);
            break;
        }
    }

    if (bgColor) {
        ({ r, g, b } = getRGBValues(bgColor));
        lum = luminance(r, g, b);
        header.style.color = lum > 0.5 ? 'black' : 'white';
        document.querySelectorAll('.logo, .HeaderNavigation a').forEach(el => {
            el.style.color = lum > 0.5 ? 'black' : 'white';
        });
    }
}

window.addEventListener('scroll', updateHeaderTextColor);
window.addEventListener('load', updateHeaderTextColor);
window.addEventListener('resize', updateHeaderTextColor);