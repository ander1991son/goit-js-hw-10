//Jugador preexistente
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

///

const onPlay = function (data) {
  // Obtiene el tiempo de reproducción actual
  const currentTime = data.seconds;
  // Guarda el tiempo de reproducción en el almacenamiento local
  localStorage.setItem('videoplayer-current-time', currentTime);
};

player.on('play', onPlay);

///

// If later on you decide that you don’t need to listen for play anymore.
player.off('play', onPlay);

// Alternatively, `off` can be called with just the event name to remove all
// listeners.
player.off('play');

///

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') ?? 0);

import throttle from 'lodash/throttle';

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
); // Limita las actualizaciones a una vez por segundo
