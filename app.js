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

   const nextMonthDays = 7 - lastDayIndex - 1

   let days = ''

   // render the prev month days 
   for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-month-days">${daysInPrevMonth -x + 1}</div>`
      calendarDays.innerHTML = days
   }

   // render the days in current month
   for (let i = 1; i <= daysInCurrentMonth; i++) {
      if (i === new Date().getDate() && currMonth === new Date().getMonth()) {
         days += `<div class="today">${i}</div>`
      } else {
         days += `<div>${i}</div>`
      }
      calendarDays.innerHTML = days
   }

   // render the days in next month 
   for (let n = 1; n <= nextMonthDays; n++) {
      days += `<div class="next-month-days">${n}</div>`
      calendarDays.innerHTML = days
   }

}

generateCalendar()

//----------CHANGING PREV/NEXT MONTH/YEAR -------

function prevMonth() {
   if (currMonth === -1) {
      currMonth = 11
      currYear--
   }
}

function nextMonth() {
   if (currMonth === 12) {
      currMonth = 0
      currYear++
   }
}

document.addEventListener('click', function(e) {
   if (e.target.id === 'prev') {
      currDate.setMonth(currMonth--)
      prevMonth()
      generateCalendar()
   }

   if (e.target.id === 'next') {
      currDate.setMonth(currMonth++)
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
