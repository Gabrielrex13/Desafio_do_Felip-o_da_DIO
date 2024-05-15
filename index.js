let heroi = ["Felipe" , "Luan" , "Fernanda" , "Nathan" , "Fernando"]
let xp = 110000
let nivel = ""
for(let i = 0; i < heroi.length; i++){
        if (xp < 1000) {
            nivel = "Ferro"
        } else if (xp <= 2000) {
            nivel = "Bronze"
        } else if (xp <= 5000) {
            nivel = "Prata"
        } else if (xp <= 7000) {
            nivel = "Ouro"
        } else if (xp <= 8000) {
            nivel = "Platina"
        } else if (xp <= 9000) {
            nivel = "Ascendente"
        } else if (xp <= 10000) {
            nivel = "Imortal"
        } else {
            nivel = "Radiante"
        }
console.log("O Herói " + heroi[i] + " está no nível de "  + nivel);
}


/*let heroi = ["Rafael", "Pietro", "Ana", "Paula", "Julia", "Mateus"];

for (let i = 0; i < heroi.length; i++) {
    console.log("O heroi " + heroi[i])
}
*/