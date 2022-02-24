let arrowDownBtn = document.querySelector('.arrowDownBtn');
let el = document.querySelector('.works');

arrowDownBtn.addEventListener('click', function () {
    el.scrollIntoView({behavior:'smooth'});
});