import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const videoPlayerElem = document.querySelector('#vimeo-player');
const player = new Player(videoPlayerElem, {
  muted: true,
});

videoPlayerElem.addEventListener('load', onPlayerLoad);
player.on('timeupdate', throttle(onPlayerRunning, 3000));

function onPlayerRunning({ seconds }) {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
}

function onPlayerLoad() {
  try {
    const lastVideoPosition = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    player
      .setCurrentTime(lastVideoPosition)
      .then(function (seconds) {
        seconds = lastVideoPosition;
      })
      .catch(function (error) {
        console.log(error.name);
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
