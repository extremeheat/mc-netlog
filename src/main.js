const { app, BrowserWindow } = require('electron')

function createMainWindow () {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      preload: path.join(__dirname, './front/preload.js'),
    }
  })

  // Open dev tools on load
  window.webContents.openDevTools()

  // window.loadFile(path.join(__dirname, './client/index.html'))
  window.loadURL('file://' + __dirname + '/dt/inspector.html?electron=true');

  // window.webContents.on('devtools-opened', () => {
  //   window.focus()
  //   setImmediate(() => {
  //     window.focus()
  //   })
  // })

  return window
}

app.on('ready', () => {
  createMainWindow()
})

app.on('window-all-closed', function () {
  app.quit()
})

app.allowRendererProcessReuse = false
