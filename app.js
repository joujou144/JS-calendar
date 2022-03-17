const modeSwitchText = document.querySelector(".toggle-text");

// ----------TWINKLING STARS BACKGROUND-------------

function stars() {
   const count = 200
   let i = 0

   while (i < count) {
      const star = document.createElement('i')
      const section = document.querySelector('section')

      const x = Math.floor(Math.random() * window.innerWidth - 3)
      const y = Math.floor(Math.random() * window.innerHeight - 3)

      const size = Math.random() * 4 + 1
      star.style.left = x + 'px'
      star.style.top = y + 'px'
      star.style.width = size + 'px'
      star.style.height = size + 'px'

      const duration = Math.random() * 2
      star.style.animationDuration = 2 + duration + 's'
      star.style.animationDelay = duration + 's'

      section.appendChild(star)
      i++
   }

}

stars()


// -------------CALENDAR ---------------


const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const currDate = new Date()

currMonth = currDate.getMonth()

currYear = currDate.getFullYear()
const gridsize = 42
const calendarDays = document.querySelector('.calendar-days')

const fullDateString = currDate.toLocaleDateString('en-GB', {
   weekday: 'long',
   day: 'numeric',
   month: 'long',
})


function generateCalendar() {

  document.querySelector('#month').innerHTML = monthArr[currMonth]

  document.querySelector('#year').innerHTML = currYear

  document.querySelector('#full-date-display').innerHTML = fullDateString

  currDate.setDate(1)


  // get first day of the month (eg Tuesday 1 March 2022)
  const firstDay = new Date(currYear, currMonth, 1).getDate()

  // get number of days in that particular month (eg. March has 31 days) -- last day is 0
  const daysInCurrentMonth = new Date(currYear, currMonth + 1, 0).getDate()

  const daysInPrevMonth = new Date(currYear, currMonth, 0).getDate()

  // if use getDay() will return the day of the week eg. Thu March 10th is 4th day 
  const firstDayIndex = currDate.getDay() - 1

  const lastDayIndex = new Date(currYear, currMonth + 1, 0).getDay() - 1

  const nextMonthDays = 6 - lastDayIndex

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

  // render next month days 
  if(nextMonthDays >= 1) {
    for (let j = 1; j <= nextMonthDays; j++){
      days += `<div class="next-month-days">${j}</div>`;
   
    }
  } else {
    for (let k = 0; k <= nextMonthDays; k++){
      days += `<div class="invisible"></div>`;
  
    }
  }
    
   calendarDays.innerHTML = days
}

generateCalendar()

//----------CHANGING PREV/NEXT MONTH/YEAR -------

function prevMonth() {
  currMonth--
   if (currMonth < 0 ) {
      currMonth = 11
      currYear--
   }
}

function nextMonth() {
  currMonth++
   if (currMonth === 12) {
      currMonth = 0
      currYear++
   }
}

document.addEventListener('click', function(e) {
   if (e.target.id === 'prev') {
      currDate.setMonth(currMonth-1)
      prevMonth()
      generateCalendar()
   }

   if (e.target.id === 'next') {
      currDate.setMonth(currMonth+1)
      nextMonth()
      generateCalendar()
   }
})


// ---------LIGHT MODE SWITCH-----------

document.querySelector('.light-mode-switch').onclick = () => {
  const main = document.querySelector('main')

  if (main.classList.contains('light')) {
    main.classList.replace('light', 'dark')
    modeSwitchText.innerHTML = 'Dark Mode'
  } else{
    main.classList.add('light')
    modeSwitchText.innerHTML = 'Light Mode'
  }
}
