const fs = require("fs");


// SET PASSWORD LENGTH HERE
const pswdLength = 16


/**
 * 
 * @param {Number} length Length of the password
 * @returns {Promise<String>} Password
 */
async function passwordGenerator(length) {
    console.log("Initializing of the function...")
    const characterScheme = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.&#@?!".split("")
    console.log("Building the promise...")
    return new Promise((resolve, reject) => {
        let pswd = "";
        for(let i = 0; i < length; i++) {
            let randomNum = Math.floor(Math.random() * characterScheme.length)
            pswd += characterScheme[randomNum]
        }
        resolve(pswd)
    })
}

passwordGenerator(pswdLength).then(password => {
    console.log("Password generated.")
    console.log("GENERATED PASSWORD: " + password)
    console.log("WARNING! PASSWORD IS NOT SAVED, BE CAREFUL AND STOCK IT SOMEWHERE!!!")
})