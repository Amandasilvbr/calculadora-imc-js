const btn = document.getElementById("calculate").addEventListener("click", imc)

function imc() {
    let firstName = document.getElementById("peopleName").value
    let height = document.getElementById("peopleHeight").value
    let weight = document.getElementById("peopleWeight").value
    let resultPlace = document.getElementById("result")
    let imcResult = (weight / (height * height)).toFixed(2)
    let classification = ""

    if (imcResult < 18.5) {
        classification = "abaixo do peso."
    } else if (imcResult < 25) {
        classification = "com peso ideal, parabéns!"
    } else if (imcResult < 30) {
        classification = "um pouco acima do peso."
    } else if (imcResult < 35) {
        classification = "obesidade grau I."
    } else if (imcResult < 40) {
        classification = "obesidade grau II."
    }
    resultPlace.textContent= `${firstName}, o seu imc é de ${imcResult}. Você está ${classification}`
}