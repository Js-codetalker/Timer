let startButton = document.querySelector('.timer__startButton'),
	resetButton = document.querySelector('.timer__resetButton'),
	audio = document.querySelector('.alarm')
	title = document.getElementById('title'),
	interval = setInterval(()=> {},1000);

	clearInterval(interval);

const starTimerFunction = () => {
	let currentTime = Date.now(),
		hours = [document.querySelector('.remainHours'),parseInt(document.querySelector('.remainHours').value)*3600000],
		minutes = [document.querySelector('.remainMinutes'),parseInt(document.querySelector('.remainMinutes').value)*60000],
		seconds = [document.querySelector('.remainSeconds'),parseInt(document.querySelector('.remainSeconds').value)*1000],
		deadline = currentTime + hours[1] + minutes[1] + seconds[1];


	interval = setInterval(()=> {
		currentTime = Date.now()-1000

		if (deadline - currentTime >= 3600000) {hours[0].value = timeToSting(Math.trunc((deadline - currentTime) / 3600000))}

		if (deadline - currentTime - 3600000*parseInt(hours[0].value) >= 60) {minutes[0].value = timeToSting(Math.trunc((deadline - currentTime - 3600000*parseInt(hours[0].value))/60000))}
		
		seconds[0].value = timeToSting(Math.trunc((deadline - currentTime - 3600000*parseInt(hours[0].value) - 60000*parseInt(minutes[0].value))/1000))
		},1000)
}

const timeToSting = number => {
		return ("0"+number).slice(-2)
}
const resetTimer = () => {
	resetButton.addEventListener('click',()=> {
	startButton.removeEventListener('click',starTimerFunction)
	clearInterval(interval);
	hours.remainTime = hours.configuredTime;
	minutes.remainTime = minutes.configuredTime;
	seconds.remainTime = seconds.configuredTime;
	hours.element.value = hours.configuredTime;
	minutes.element.value = minutes.configuredTime;
	seconds.element.value = seconds.configuredTime;

	starTimer();
})
}
const starTimer = () => {
	startButton.addEventListener('click', starTimerFunction)
	resetTimer()
}

starTimer()


