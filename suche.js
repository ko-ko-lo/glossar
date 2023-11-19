var suchBegriffe = [
    { begriff: "Usability Testing", link: "./usability-testing.html" },
    { begriff: "User Experience", link: "./user-experience.html" },
    { begriff: "User Interface", link: "./user-interface.html" },
    { begriff: "Qualitative Research", link: "./qualitative-research.html" },
    { begriff: "Quantitative Research", link: "./quantitative-research.html" }
];

var suchBegriffEingabe = document.getElementById("suchBegriffEingabe");
var keinSuchergebnis = document.getElementById('meldung');

document.getElementById("suchFormular").addEventListener("submit", function (event) {
    event.preventDefault();
    var suchBegriff = suchBegriffEingabe.value;
    
    for (var i = 0; i < suchBegriffe.length; i++) {
        if (suchBegriffe[i].begriff === suchBegriff) {
            window.location.href = suchBegriffe[i].link;
            return;
        }
    }
    keinSuchergebnis.classList.remove('versteckt');
});

suchBegriffEingabe.addEventListener("input", function () {
    if (!suchBegriffEingabe.value) {
        keinSuchergebnis.classList.add('versteckt');
    }
});
