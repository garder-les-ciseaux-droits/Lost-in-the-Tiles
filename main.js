import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {

  Menu.setApplicationMenu(null);
  
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Создаем сервер express
  const server = express();
  const port = 3000; // Можно использовать любой свободный порт

  // Обслуживаем файлы из папки dist
  server.use(express.static(path.join(__dirname, 'dist')));

  // Запускаем сервер express
  server.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
    // Загружаем основную страницу через сервер express
    mainWindow.loadURL(`http://localhost:${port}/index.html`);
  });
  server.use('/src/assets', express.static(path.join(__dirname, 'src/assets')));

}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
