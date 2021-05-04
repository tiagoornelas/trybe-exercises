function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const holidays = [24, 25, 31];
    const fridays = [4, 11, 18, 25];

    const daysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        dayListItem.className = 'day';

        for (let dayOff in holidays) {
            if (holidays[dayOff] === days) {
                dayListItem.classList.add("holiday");
            }
        }

        for (let dayOff in fridays) {
            if (fridays[dayOff] === days) {
                dayListItem.classList.add("friday");
            }
        }

        daysList.appendChild(dayListItem);
    }
}

function btnHoliday() {
    const container = document.querySelector('.buttons-container');
    const btn = document.createElement('button');
    btn.className = 'btn-holiday';
    btn.innerHTML = 'Feriados';

    container.appendChild(btn);
}

function btnFriday() {
    const container = document.querySelector('.buttons-container');
    const btn = document.createElement('button');
    btn.className = 'btn-friday';
    btn.innerHTML = 'Sexta-feira';

    container.appendChild(btn);
}

function highlightHoliday () {
    const holidays = document.querySelectorAll(".holiday");

    for (let day in holidays) {
        if (holidays[day].style.backgroundColor == 'white') {
            holidays[day].style.backgroundColor = '#eee';
        } else {
            holidays[day].style.backgroundColor = 'white';
        }
    }
}

function highlightFriday () {
    const holidays = document.querySelectorAll(".friday");

    for (let day in holidays) {
        if (holidays[day].innerHTML == 'SEXTOU o/') {
            holidays[day].innerHTML = parseInt(holidays[day].previousElementSibling.innerHTML) + 1;
        } else {
            holidays[day].innerHTML = 'SEXTOU o/';
        }
    }
}

createDaysOfTheWeek();
createDaysOfTheMonth();
btnHoliday();
btnFriday();

document.querySelector('.btn-holiday').addEventListener('click', highlightHoliday);

document.querySelector('.btn-friday').addEventListener('click', highlightFriday);

function zoomIn(event) {
    let alvo = event.target;
    alvo.style.fontSize = '22px';
}

function zoomOut(event) {
    let alvo = event.target;
    alvo.style.fontSize = '20px';
}

const daysCalendar = document.querySelectorAll("ul")[2];
daysCalendar.addEventListener('mouseover', zoomIn);
daysCalendar.addEventListener('mouseout', zoomOut);