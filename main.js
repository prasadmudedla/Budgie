const electron = require('electron');
const { app, BrowserWindow } = electron;
let win;

app.on('ready', () => {
    win = new BrowserWindow({ minimizable: false});
    win.loadURL(__dirname + '/index.html');
    win.maximize();
});