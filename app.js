// ----------TWINKLING STARS BACKGROUND-------------

function stars() {
  const count = 200
  let i = 0

  while (i < count) {
    const star = document.createElement('i')
    const section = document.querySelector('section')
    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)

    
    const size = Math.random() * 4
    star.style.left = x +'px'
    star.style.top = y +'px'
    star.style.width = 1 + size + 'px'
    star.style.height = 1 + size + 'px'

    const duration = Math.random() * 2

    star.style.animationDuration = 2 + duration + 's'
    star.style.animationDelay = duration + 's'
    
    section.appendChild(star)
    i++
  }
}

stars()


// -------------CALENDAR ---------------

// months array
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December']

const calendarDays = document.querySelector('.calendar-days')

function generateCalendar() {
  // current full date (eg Thursday 10 March 2022 with time 10:35 GMT)
  const currDate = new Date()

  currDate.setDate(1)

  // current month -- index rank eg Jan is 0, March is 2
  currMonth = currDate.getMonth() 

  // current year
  currYear = currDate.getFullYear()

  // get first day of the month (eg Tuesday 1 March 2022)
  const firstDay = new Date(currYear, currMonth, 1).getDate()

  if (firstDay === 0) {
    firstDay = 7
  }

  // get number of days in that particular month (eg. March has 31 days) -- last day is 0
  const daysInCurrentMonth = new Date(currYear, currMonth + 1, 0).getDate()

  const daysInPrevMonth = new Date(currYear, currMonth, 0).getDate()

  // current date (eg the 10th)
  const day = currDate.getDate() // 

  // if use getDay() will return the day of the week eg. Thu March 10th is 4th day 
  const firstDayIndex = currDate.getDay()

  const lastDayIndex = new Date(currYear, currMonth + 1, 0).getDay()

  const nextMonthDays = 7 - lastDayIndex - 1

  // get current full date string (eg Thursday 10 March 2022)
  const fullDateString = currDate.toLocaleDateString( 'en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  // display full current date string on calendar
  document.querySelector('#full-date-display').innerHTML = fullDateString

  // display current month and year on calendar
  document.querySelector('#month').innerHTML = monthArr[currMonth]
  document.querySelector('#year').innerHTML = currYear


  let days = ''

  // render the prev month days 
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-month-days">${daysInPrevMonth -x + 1}</div>`
  }


  // render the days in current month
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    if (i === new Date().getDate() && currMonth === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`
    } else {
      days += `<div>${i}</div>`
    }
  }

  // render the days in next month 
  for (let n = 1; n <= nextMonthDays; n++) {
    days += `<div class="next-month-days">${n}</div>`
    calendarDays.innerHTML = days
  }
}


generateCalendar()

// ----------------LIGHT MODE SWITCH-----------

document.querySelector(".light-mode-switch").onclick = () => {
  document.querySelector("main").classList.toggle("light")
  document.querySelector("main").classList.toggle("dark")
}

// Changing previous/next month 
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')