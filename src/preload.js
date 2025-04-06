// Используем синтаксис импорта
import { contextBridge, ipcRenderer } from 'electron';

// Создаем безопасный мост для взаимодействия с основным процессом
contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  onMessage: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => callback(...args));
  }
});
