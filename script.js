const spans = document.querySelectorAll('span')
const bg = document.querySelector('.bg')

function handleTimeClock() {
  const dataToday = new Date()

  const time = {
    hour: dataToday.getHours(), 
    minute: dataToday.getMinutes(), 
    segund: dataToday.getSeconds()
  }

  innerValueZero(spans[0], time.hour)
  innerValueZero(spans[1], time.minute)
  innerValueZero(spans[2], time.segund)

  handleBackGround(time.hour)
}

function innerValueZero(item, dataTimer) {
  if(dataTimer < 10) {
    item.innerText = `0${dataTimer}`
  } else {
    item.innerText = dataTimer
  }
}

function handleBackGround(hour) {
  if(hour < 13) {
    bg.classList.remove(bg.classList[1])
    bg.classList.add('morning')
  } else if (hour > 13 && hour < 17){
    bg.classList.remove(bg.classList[1])
    bg.classList.add('afternoon')
  } else if (hour > 17 && hour == 00){
    bg.classList.remove(bg.classList[1])
    bg.classList.add('night')
  }
}

console.log(bg.classList[1])

setInterval(() => {
  handleTimeClock()
}, 1000);