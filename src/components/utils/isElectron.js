// src/utils/isElectron.js
export function isElectron() {
    return typeof window !== 'undefined' && window.process && window.process.type;
  }
  