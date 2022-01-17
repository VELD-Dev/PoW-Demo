console.log("Initializing dependencies...");
const fs = require("fs");
const os = require("os");

console.log("Dependencies initialized.");
console.log("Initializing token generator system...");

/**
 * Uses a for i loop to create a random token of length 256 based on Proof of Work systems
 * @param {Number} arrayLength Set here the current length of the array of the total of generated tokens
 * @returns {Promise<Object>} Returns the generated token in an object with the work duration Date() and the unique token.
 * @example console.log(generateRandomToken().uniqueToken)
 *          // returns a String with the unique token into
 *          console.log(generateRandomToken())
 *          // returns an object with the string and the duration into
 *          console.log(generateRandomToken().workDuration)
 *          // returns an integer with the duration of the generation of the token in milliseconds
 */
async function generateRandomToken(arrayLength) {
    const tokenScheme = "abcdefghijklmnopqrstuvwxyz.ABCDEFGHIJKLMNOPQRSRTUVWXYZ0123456789&#@!?".split("");
    console.log(tokenScheme.length);
    let remainingPossibilities = (tokenScheme.length * 256) - arrayLength
    return new Promise((resolve, reject) => {
        let token = {
            uniqueToken: "",
            generationDuration: 0
        };
    
        let startProcessDate = Date.now();
        let tokenArray = [];
        for (let i = 0; i < 256; i++) {
            let index = Math.floor(Math.random() * tokenScheme.length)
            if(tokenArray.indexOf(tokenScheme[index]) == -1) {
                token.uniqueToken += tokenScheme[index]
            
                if(tokenArray.length === 256) {
                    token.uniqueToken = tokenArray.join("");
                    token.workDuration = (Date.now() - startProcessDate);
                };
            }
        };
        console.log(remainingPossibilities)
        resolve(token);
    })
}

console.log("Token generation system initialized.")
console.log("Initializing system stats recorders...")
console.log(`ARCH-${os.arch} RAM-${((os.totalmem - os.freemem) / 1000000).toFixed(2)}MB/${(os.totalmem / 1000000).toFixed(2)}MB CPU-${os.cpus[0]}MHz`)
setTimeout(() => {
    console.log("Generating a token...")
    let isTokenExisting = true
    let jsonFile = JSON.parse(fs.readFileSync("./generatedToken.json"))
    setInterval(async () => {
        let finalToken;
        await generateRandomToken(jsonFile.length).then(async token => {
            finalToken = token
        })
        await jsonFile.push(finalToken)

        fs.writeFileSync("./generatedToken.json", JSON.stringify((await jsonFile), undefined, 4))
        console.log(`ARCH-${os.arch} RAM-${((os.totalmem - os.freemem) / 1000000).toFixed(2)}MB/${(os.totalmem / 1000000).toFixed(2)}MB CPU-${os.cpus[0]}MHz`)
        console.log("End of Program.")
    }, 50)
}, 5000);
