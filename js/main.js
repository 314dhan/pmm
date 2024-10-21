// Fetch navbar
fetch('partials/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

// Animasi teks yang berubah-ubah
const words = ["Ramadhan!", "Programmer", "Coding Enthusiast", "Teacher"];
let index = 0;
const textElement = document.getElementById("changingText");

setInterval(() => {
    index = (index + 1) % words.length;
    textElement.textContent = words[index];
}, 3000);
