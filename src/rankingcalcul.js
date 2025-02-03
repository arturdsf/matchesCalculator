const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function matches(victorys, defeats){
    let difference = victorys - defeats;
    let ranking;

    if (difference <= 10) {
        ranking = "iron";
    } else if (difference >= 11 && difference < 20){
        ranking = "bronze";
    } else if (difference >= 21 && difference < 49){
        ranking = "silver";
    } else if (difference >= 50 && difference < 79){
        ranking = "gold";
    } else if (difference >= 80 && difference < 89){
        ranking = "Diamond";
    } else if (difference >= 90 && difference < 99){
        ranking = "legendary";
    } else if (difference >= 100){
        ranking = "radiant";
    }

    return ranking;
}

readline.question("Digite a quantidade de partidas vencidas: " , (victorys) => {
    readline.question("Digite a quantidade de partidas perdidas: " , (defeats) => {
        victorys = parseInt(victorys);
        defeats = parseInt(defeats);
        const ranking = matches(victorys, defeats);
        console.log("seu ranking é: " + ranking);
        readline.close();
    });
});

