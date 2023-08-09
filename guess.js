let correctNumber;

// acertar o número de 1 - 10
function randomNumber() {
    return Math.round(Math.random() * (10 - 1 + 1) + 1);
}

function guessNumber () {
    correctNumber = randomNumber ();
        //attempts
    let tentativas = 0;
    let acertou = false;

            //guessedCorrectly
    while (!acertou) {
        const guess = parseInt(prompt('Adivinhe o número entre 1 e 10:'));
        tentativas++;

        if (guess === correctNumber) {
            acertou = true;
            alert(`Parabéns, Você acertou o número ${correctNumber} em ${tentativas} tentativas.`);
        } else if (guess < correctNumber) {
            alert(`Tente um número maior.`);
        } else {
            alert(`Tente um número menor.`)
        }
    }
}

guessNumber();