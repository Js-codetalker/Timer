let startButton = document.querySelector('.timer__startButton'),
	resetButton = document.querySelector('.timer__resetButton'),
	audio = document.querySelector('.alarm'),
	title = document.getElementById('title'),
	currentTime,
	deadline,
	/*hours = [document.querySelector('.remainHours'),null],*/
	minutes = [document.querySelector('.remainMinutes'),null],
	seconds = [document.querySelector('.remainSeconds'),null];


const startTimerFunction = () => {
	minutes[1] = parseInt(document.querySelector('.remainMinutes').value);
	seconds[1] = parseInt(document.querySelector('.remainSeconds').value)
	countdown(/*hours[1],*/minutes[1],seconds[1])

}

const countdown = (/*hoursF,*/minutesF,secondsF) => {
		
		deadline = Date.now() + /*hoursF*3600000*/ + minutesF*60000 + secondsF*1000;


	interval = setInterval(()=> {
		currentTime = Date.now()-1000

		/*if (deadline - currentTime >= 3600000) {hours[0].value = timeToString(Math.trunc((deadline - currentTime) / 3600000))}*/

		if (deadline - currentTime/* - 3600000*parseInt(hours[0].value)*/ >= 60) {minutes[0].value = timeToString(Math.trunc((deadline - currentTime /*- 3600000*parseInt(hours[0].value)*/)/60000))}
		
		seconds[0].value = timeToString(Math.trunc((deadline - currentTime/* - 3600000*parseInt(hours[0].value)*/ - 60000*parseInt(minutes[0].value))/1000))

		title.innerHTML = `${minutes[0].value}:${seconds[0].value}`

		resetTimer()
		
		if (/*parseInt(hours[0].value) == 0 &&*/ parseInt(minutes[0].value) == 0 && parseInt(seconds[0].value) == 0) {
			clearInterval(interval)
			audio.play()
		}

		},1000)
}

const timeToString = number => {
		return ("0"+number).slice(-2)
}
const resetTimer = () => {
	resetButton.addEventListener('click',()=> {
	startButton.removeEventListener('click',startTimerFunction)
	clearInterval(interval);
	/*hours[0].value = timeToString(hours[1]);*/
	minutes[0].value = timeToString(minutes[1]);
	seconds[0].value = timeToString(seconds[1]);
	title.innerHTML = `Podomoro clock`

	startTimer();
})
}
const startTimer = () => {
	startButton.addEventListener('click', startTimerFunction);
}

startTimer()/*this autoruns if countdown is placed directly*/