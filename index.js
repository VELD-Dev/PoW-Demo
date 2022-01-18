const Electron = require('electron');

const createWindow = () => {
    const win = new Electron.BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile("index.html")
}


Electron.app.whenReady().then(() => {
    createWindow()


    app.on('window-all-closed', () => {
        if(process.platform !== 'darwin') app.quit()
    })
})