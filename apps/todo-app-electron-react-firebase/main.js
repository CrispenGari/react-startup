const electron = require("electron")
const path = require("path")
const isDev = require("electron-is-dev")
const url = require('url')
const ipc = electron.ipcMain
const {constants} = require('./src/utils/constants')
let window;
const createWindow =()=>{
    window = new electron.BrowserWindow({
        width: 1000,
        height: 850,
        frame: false,
       webPreferences:{
           nodeIntegration: true,
           enableRemoteModule: true,
       }
    })
    window.loadURL(isDev?"http://localhost:3000":`file://${path.join(__dirname, './build/index.html')}`)
    window.on("closed", ()=>{
        window=null
    })
    // window.webContents.openDevTools({mode: "bottom"})
}
electron.app.on("ready", createWindow)
electron.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      electron.app.quit();
    }
  });
  electron.app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  ipc.on(constants.EXIT_APP, (event, args)=>{
    electron.dialog.showMessageBox(window,{
      buttons:["Yes", "No", "Cancel"],
      defaultId: 0,
      cancelId: 2,
      title: "Closing the Todo App",
      message: "Are you sure you want to close the todo app?"
    }).then(response=>{
      console.log(response)
      if(response.response === 0){
        electron.app.quit()
      }else{
        electron.app.focus();
      }
    })
  })