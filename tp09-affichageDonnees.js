function init() {
    affichageDonnees();
    affichagePaysInfos();
    affichagePaysEtCapitale();
}

function affichageDonnees() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://countriesnow.space/api/v0.1/countries/capital');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = req.responseText;

            let zoneAffichage = document.querySelector("#resultat");
            zoneAffichage.innerHTML = data;
        }
    }
    req.send();
}

function affichagePaysInfos() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://countriesnow.space/api/v0.1/countries/capital');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.responseText);

            let zoneAffichage = document.querySelector("#paysInfos");
            for (let i = 0; i < data.data.length; i++) {
                zoneAffichage.innerHTML += data.data[i].name + " : " + data.data[i].capital + "<br>";
            }
        }
    }
    req.send();
}

function affichagePaysEtCapitale() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://countriesnow.space/api/v0.1/countries/capital');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.responseText);

            let zoneAffichage = document.querySelector("#corps");
            for (let i = 0; i < data.data.length; i++) {
                zoneAffichage.innerHTML += "<tr><td>" + data.data[i].name + "</td><td>" + data.data[i].capital + "</td></tr>";
            }
        }
    }
    req.send();
}