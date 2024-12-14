const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
let currentMonth = 10; // November
let currentYear = 2024;

function updateCalendar() {
document.getElementById("month-year").innerText = `${months[currentMonth]} ${currentYear}`;
generateCalendar(currentMonth, currentYear);
}

function generateCalendar(month, year) {
const calendarDays = document.getElementById("calendar-days");
calendarDays.innerHTML = `
<div class="day">Sun</div>
<div class="day">Mon</div>
<div class="day">Tue</div>
<div class="day">Wed</div>
<div class="day">Thu</div>
<div class="day">Fri</div>
<div class="day">Sat</div>
`;

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

// Add empty divs for the days of the week before the 1st
for (let i = 0; i < firstDay; i++) {
calendarDays.innerHTML += `<div class="date"></div>`;
}

// Add the days of the month
for (let day = 1; day <= daysInMonth; day++) {
calendarDays.innerHTML += `<div class="date">${day}</div>`;
}
}

document.getElementById("prev-month").addEventListener("click", function() {
currentMonth--;
if (currentMonth < 0) {
currentMonth = 11;
currentYear--;
}
updateCalendar();
});

document.getElementById("next-month").addEventListener("click", function() {
currentMonth++;
if (currentMonth > 11) {
currentMonth = 0;
currentYear++;
}
updateCalendar();
});

// Initial render of the calendar
updateCalendar();
