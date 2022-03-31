import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const refs = {
  videoPlayer: document.querySelector('#vimeo-player'),
};
const player = new Player(refs.videoPlayer, {
  muted: true,
});

refs.videoPlayer.addEventListener('load', onPlayerLoad);
player.on('timeupdate', throttle(onPlayerRunning, 3000));

function onPlayerRunning({ seconds }) {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onPlayerLoad() {
  try {
    const lastVideoPosition = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    player
      .setCurrentTime(lastVideoPosition)
      .then(seconds => (seconds = lastVideoPosition))
      .catch(error => {
        console.log(error.name);
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
