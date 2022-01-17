const fs = require("fs")

let jsonFile = JSON.parse(fs.readFileSync("./generatedToken.json"))
let charArray = "abcdefghijklmnopqrstuvwxyz.ABCDEFGHIJKLMNOPQRSRTUVWXYZ0123456789&#@!?".split("");

console.log("Tokens: " + jsonFile.length);
console.log("Possibilités totales: " + charArray.length * 256);
console.log("Possibilitées restantes: " + ((charArray.length * 256) - jsonFile.length))
console.log("Charactères max: " + 256);
console.log("Liste des charactères: (" + charArray.length + ")")
console.log(charArray)