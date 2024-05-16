let heroi = ["Felipe" , "Luan" , "Fernanda" , "Nathan" , "helio" , "Barbara" , "Rex"]
let xp = [1000, 1001, 2000, 2001, 5000, 5001, 7000, 7001, 8000, 8001, 9000, 9001, 10000, 10001]
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

for(let i = 0; i < heroi.length; i++){
    for(let j = 0; j < xp.length; j++){
        if(nivel < 1000){
            xp = "Ferro"
        }else if(nivel === 1001 || nivel === 2000){
            xp = "bronze"
        }else if(nivel === 2001 || nivel === 5000){
            xp = "Prata"
        }else if(nivel === 5001 || nivel === 7000){
            xp = "Ouro"
        }else if(nivel === 7001 || nivel === 8000){
            xp = "Platina"
        }else if(nivel === 8001 || nivel === 9000){
            xp = "Ascendente"
        }else if(nivel === 9001 || nivel === 10000){
            xp = "Imortal"
        }else if(nivel === 10001){
            xp = "Radiante"
        }
    }
    console.log("O heroi " + heroi[i] + " e esta no nivel " + xp[j])
}