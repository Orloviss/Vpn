const first = document.querySelector(".first-btn");
const sec = document.querySelector(".sec-btn");
const third = document.querySelector(".third-btn");
document.querySelector(".first-btn").onclick = function() {
    first.classList.add('active');
    sec.classList.remove('active');
    third.classList.remove('active');  
}
document.querySelector(".sec-btn").onclick = function() {
    sec.classList.add('active');
    first.classList.remove('active');
    third.classList.remove('active');  
}
document.querySelector(".third-btn").onclick = function() {
    third.classList.add('active');
    sec.classList.remove('active');
    first.classList.remove('active');  
}
// search location
