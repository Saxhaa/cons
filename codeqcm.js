function atLeastOneRadio(i) {
    return (document.querySelector('input[name="q' + i + '"]:checked') != null);
}

function UpdateOutput() {
    let nbQuestions = 19;
    let scoreCoachs = [0, 0, 0, 0]; // 0: Éole, 1: Matt, 2: Océ, 3: Sacha

    for (let i = 1; i <= nbQuestions; i++) {
        if (atLeastOneRadio(i)) {
            let selectedValue = parseInt(document.querySelector('input[name="q' + i + '"]:checked').value);
            if (!isNaN(selectedValue) && selectedValue >= 0 && selectedValue < scoreCoachs.length) {
                scoreCoachs[selectedValue] += 1;
            }
        }
    }

    let bestCoach = scoreCoachs.indexOf(Math.max(...scoreCoachs));
    let outputElement = document.getElementById("out");

    if (outputElement) {
        switch (bestCoach) {
            case 0:
                outputElement.textContent = "Tout va bien se passer, t'inquiète !";
                break;
            case 1:
                outputElement.textContent = "Mais alors là mais toi mais alors là ça va être top génial!";
                break;
            case 2:
                outputElement.textContent = "Banger ce qui t'attend bg !";
                break;
            case 3:
                outputElement.textContent = "J'ai comme l'impression que ta vie va être un mélange de joie et de folie furieuse youpi!";
                break;
            default:
                outputElement.textContent = "Aucun coach ne te correspond vraiment, désolé !";
        }
    }
}

function Pauvre(event) {
    event.preventDefault();
    alert("Malheureusement votre budget est trop faible, nous vous conseillons de vous rediriger vers un coach en finance");
    document.querySelector('input[name="q1"]:checked').checked = false;
}

function Malandrin(event) {
    event.preventDefault();
    window.open("https://fr.wiktionary.org/wiki/malandrin", "_blank");
    document.querySelector('input[name="q19"]:checked').checked = false;
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("calc").addEventListener("click", UpdateOutput);

    // Ajouter les écouteurs d'événements pour les inputs spécifiques
    let pauvreInput = document.getElementById("pauvre");
    if (pauvreInput) {
        pauvreInput.addEventListener("change", Pauvre);
    }

    let malandrinInput = document.getElementById("malandrin");
    if (malandrinInput) {
        malandrinInput.addEventListener("change", Malandrin);
    }
});
