const music = document.getElementById('background-music');
const wind = document.getElementById('background-wind');

function startMusic() {
    music.volume = 0.3;
    wind.volume = 0.05;
    wind.play();
    music.play();
  }

  
  function setupMusicTrigger() {
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('keydown', startMusic, { once: true });
    document.addEventListener('mousemove', startMusic, { once: true });
  }

  window.addEventListener('load', setupMusicTrigger);