const $ = (selector) => {
    return document.querySelector(selector);
}

const hour = $('.hour');
const dot1 = $('.dot:nth-of-type(1)');
const min = $('.min');
const dot2 = $('.dot:nth-of-type(2)');
const sec = $('.sec');
const week = $('.week');

function update() {
    const now = new Date();

    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });

    week.children[now.getDay()].classList.add('active');
}

setInterval(update, 1000);

update();