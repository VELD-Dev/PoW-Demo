const Electron = require('electron');
const path = require("path")

const createWindow = () => {
    const win = new Electron.BrowserWindow({
        width: 1300,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    win.loadFile("index.html")
}


Electron.app.whenReady().then(() => {
    createWindow()

    Electron.app.on("activate", () => {
        if(Electron.BrowserWindow.getAllWindows().length === 0) createWindow();
        console.log("WINDOW LOADED");
    })


    Electron.app.on('window-all-closed', () => {
        if(process.platform !== 'darwin') Electron.app.quit()
    })
})