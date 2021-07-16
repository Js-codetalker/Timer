let hours = { element : document.querySelector('.remainHours'),
			  configuredTime : document.querySelector('.remainHours').value,
			  remainTime : document.querySelector('.remainHours').value },

	minutes = { element : document.querySelector('.remainMinutes'),
				configuredTime : document.querySelector('.remainMinutes').value,
				remainTime :  document.querySelector('.remainMinutes').value },

	seconds = { element : document.querySelector('.remainSeconds'),
				configuredTime : document.querySelector('.remainSeconds').value,
				remainTime : document.querySelector('.remainSeconds').value},

	startButton = document.querySelector('.timer__startButton'),
	resetButton = document.querySelector('.timer__resetButton'),
	audio = document.querySelector('.alarm')
	title = document.getElementById('title'),
	interval = setInterval(()=> {},1000);

	clearInterval(interval);


const countdown = element => {
		element.remainTime = ("0"+(parseInt(element.remainTime)-1)).slice(-2)
		element.element.value = element.remainTime
}
const resetTimer = () => {
	resetButton.addEventListener('click',()=> {
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
	startButton.addEventListener('click', ()=> {
		hours.remainTime = document.querySelector('.remainHours').value,
		minutes.remainTime = document.querySelector('.remainMinutes').value
		seconds.remainTime = document.querySelector('.remainSeconds').value

	interval = setInterval(()=> {
		if (seconds.remainTime === "00" && parseInt(minutes.remainTime) > 0) {
			countdown(minutes)
			seconds.remainTime = "60"
		}
		if (seconds.remainTime === "00" && parseInt(minutes.remainTime) == 0 && parseInt(hours.remainTime) > 0) {
			countdown(hours)
			minutes.remainTime = "59"
			seconds.remainTime = "60"
		} 
		if (seconds.remainTime === "00" && parseInt(minutes.remainTime) == 0 && parseInt(hours.remainTime) == 0) {
			audio.play()
			resetTimer()
		}
		countdown(seconds)
		title.innerHTML = `${hours.remainTime}:${minutes.remainTime}:${seconds.remainTime}`
	},1000)
})
}

starTimer()

