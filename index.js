let heroi = ["Felipe", "Luan", "Fernanda", "Nathan", "Helio", "Barbara", "Rex"];
let xp = [1000, 1001, 2000, 2001, 5000, 5001, 7000, 7001, 8000, 8001, 9000, 9001, 10000, 10001];
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let i = 0; i < heroi.length; i++) {
    let nivelAtual;
    for (let j = 0; j < xp.length; j++) {
        if (xp[j] < 1000) {
            nivelAtual = nivel[0];
        } else if (xp[j] >= 1000 && xp[j] <= 2000) {
            nivelAtual = nivel[1];
        } else if (xp[j] > 2000 && xp[j] <= 5000) {
            nivelAtual = nivel[2];
        } else if (xp[j] > 5000 && xp[j] <= 7000) {
            nivelAtual = nivel[3];
        } else if (xp[j] > 7000 && xp[j] <= 8000) {
            nivelAtual = nivel[4];
        } else if (xp[j] > 8000 && xp[j] <= 9000) {
            nivelAtual = nivel[5];
        } else if (xp[j] > 9000 && xp[j] <= 10000) {
            nivelAtual = nivel[6];
        } else if (xp[j] > 10000) {
            nivelAtual = nivel[7];
        }
    }
    console.log("O heroi " + heroi[i] + " está no nível " + nivelAtual);
}
