const {BrowserWindow, Menu, dialog} = require('electron');

const isMac = process.platform === 'darwin'
const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: () => {
          let files = dialog.showOpenDialogSync(
            BrowserWindow.getFocusedWindow(),
            {
            properties: ['openFile'],
            filters: [{name: 'PDF',extensions: ['pdf']}]
          });
          console.log(files);
        }
      },
      ,isMac ? {
        role: 'close',
        label: 'Close',
      } : {
        role: 'quit',
        label: 'Exit',
      }
    ]
  },
  {
    role: 'viewMenu'
  },
];

module.exports = Menu.buildFromTemplate(template);