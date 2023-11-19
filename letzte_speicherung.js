document.addEventListener('DOMContentLoaded', function () {
    var letzteSpeicherungElement = document.getElementById('letzte-speicherung');
    var letzteSpeicherung = new Date(document.lastModified);
    var datumZeit = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    var datumZeitFormatiert = letzteSpeicherung.toLocaleDateString('de-DE', datumZeit);
    letzteSpeicherungElement.textContent = 'Letzte Speicherung: ' + datumZeitFormatiert + ' Uhr';
});