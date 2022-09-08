let hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    h = document.querySelector('.hours'),
    m = document.querySelector('.minutes'); 
function clock() {
    let hours = new Date().getHours(),
        minutes = new Date().getMinutes(),
        secondes = new Date().getSeconds();
    hour.style.transform = `rotate(${hours * 30}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    sec.style.transform = `rotate(${secondes * 6}deg)`
    h.innerHTML = hours < 10 ? '0' + hours : hours
    m.innerHTML = minutes < 10 ? '0' + minutes : minutes
setTimeout(function(){
    clock()
}, 1000)
}
clock()


let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem')
for (let i = 0; i < link.length; i++) {
    const el = link[i];
    el.addEventListener('click', function() {
        link.forEach((e, i) => {
            e.classList.remove('active')
            tabs[i].classList.remove('active')
        })
        tabs[i].classList.add('active')
        this.classList.add('active')
    })
}
let span = document.querySelector('.tabsLink__span');
let button = document.querySelector('.stopwatch__btn')

for (let i = 0; i < span.length; i++) {
    const el = button[i];
    el.addEventListener('click', function(){
        span.forEach((e, i) => {
            e.classList.remove('active')
            span[i].classList.remove('active')
        })
        span[i].classList.add('active')
        this.classList.add('active')
    })
}