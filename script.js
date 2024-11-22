// Sujuv kerimine navigeerimismenüü linkidele
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        // Ei vii meid kohe lingi sihtkohta
        event.preventDefault(); 

        // Sihtkoha ID määramine
        const targetId = this.getAttribute("href").substring(1); 
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth", // sujuv kerimine sihtkohta
            block: "start" // kerimine algab lehe ülalosast
        });
    });
});

// Typed.js tervitustekstis
var typed = new Typed('.element', {
    strings: ["Tere tulemast meie retseptilehele!", "Leia oma lemmikretseptid siit!"], // tekstid, mida vaheldumisi esitatakse
    typeSpeed: 75, // trükkimise kiirus
    backSpeed: 75, // teksti kustutamise kiirus
    loop: true // Tekst muutub koguaeg
});

