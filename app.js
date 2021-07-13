let hours = document.querySelector('.remainHours'),
	minutes = document.querySelector('.remainMinutes'),
	seconds = document.querySelector('.remainSeconds'),
	starButton = document.querySelector('.startTimer'),
	title = document.getElementById('title');

const countdown = element => {
		element.value = ("0"+(parseInt(element.value)-1)).slice(-2)
}
starButton.addEventListener('click', ()=> {

	let interval = setInterval(()=> {
		if (seconds.value === "00" && parseInt(minutes.value) > 0) {
			countdown(minutes)
			seconds.value = "60"
		}
		if (seconds.value === "00" && parseInt(minutes.value) == 0 && parseInt(hours.value) > 0) {
			countdown(hours)
			minutes.value = "59"
			seconds.value = "60"
		} 
		if (seconds.value === "00" && parseInt(minutes.value) == 0 && parseInt(hours.value) == 0) {
			clearInterval(interval)
		}
		countdown(seconds)
		title.innerHTML = `${hours.value}:${minutes.value}:${seconds.value}`
	},1000)
})
