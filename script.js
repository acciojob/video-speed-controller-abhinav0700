const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;

  // round playback rate for display
  const rateDisplay = playbackRate.toFixed(2) + '×';
  bar.textContent = rateDisplay;
  bar.style.height = Math.round(percent * 100) + '%';

  video.playbackRate = playbackRate;
});
