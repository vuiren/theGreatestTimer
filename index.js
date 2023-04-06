const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let secondsLeft = 0
let intervalId = -1
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
	  const secondsToIsoString = new Date(seconds * 1000).toISOString().slice(11, 19);
	  timerEl.textContent = secondsToIsoString
  };
};

const animateTimer = createTimerAnimator();


inputEl.addEventListener('input', () => {
	inputEl.value = inputEl.value.replace(/\D/g,'');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  clearInterval(intervalId)
  const seconds = Number(inputEl.value);
  secondsLeft = seconds
  
  animateTimer(seconds);

  inputEl.value = '';
  
  intervalId = setInterval(function() {
	if(secondsLeft<=0){
		clearInterval()
		return
	}
	
	secondsLeft--
	animateTimer(secondsLeft)
}, 1000)

});
