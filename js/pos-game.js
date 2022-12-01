const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');


window.onload = () => {
  const playerName = localStorage.getItem('player');
  spanPlayer.innerHTML = playerName;

  const timerName = localStorage.getItem('timer');
  timer.innerHTML = timerName;
}