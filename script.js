let text = document.getElementById('text');
let foreground = document.getElementById('hill2');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * -2.5 + 'px';
    foreground.style.marginTop = value * 1.5 + 'px';
    });