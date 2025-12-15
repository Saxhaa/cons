function atLeastOneRadio(i) {
    return (document.querySelector('input[name="q'+i.toString()+'"]:checked') != null)
}

function UpdateOutput(event){
    let nbQuestions=17
    let scoreCoachs = [0, 0, 0, 0, 0] //0 : éole, 1 : matt,  2 : océ, 3 : sach, 4 : personne
    
    for (let i = 1; i<=nbQuestions; i++){
        if (atLeastOneRadio(i)){
            scoreCoachs[document.querySelector('input[name="q'+i.toString()+'"]:checked').value]+=1
        }
    }
    let bestCoach = scoreCoachs.indexOf(Math.max(...scoreCoachs));
    console.log(bestCoach)
    console.log(scoreCoachs)
    switch (bestCoach){
        case 0:
            document.getElementById("out").value = "Tout va bien se passer, t'inquiète !";
            break;
        case 1:
            document.getElementById("out").value = "Mais alors là mais toi mais alors là ça va être top génial!";
            break;
        case 2:
            document.getElementById("out").value = "Banger ce qui t'attend bg !";
            break;
        case 3:
            document.getElementById("out").value = "J'ai comme l'impression que ta vie va être un mélange de joie et de folie furieuse youpi!";
            break;
    }
}

function Pauvre(event){
    alert("Malheureusement votre budget est trop faible, nous vous conseillons de vous rediriger vers un coach en finance")
}

function Malandrin(event){
    window.location.href = "https://fr.wiktionary.org/wiki/malandrin";
}

document.getElementById("calc").addEventListener("click", UpdateOutput)
document.getElementById("pauvre").addEventListener("click", Pauvre)
document.getElementById("malandrin").addEventListener("click", Malandrin)