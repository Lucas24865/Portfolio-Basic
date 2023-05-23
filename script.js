
//Animations on show
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
         } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hiddenAnimation');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsUp = document.querySelectorAll('.hiddenAnimationUp');
hiddenElementsUp.forEach((el) => observer.observe(el));

const hiddenElementsDown = document.querySelectorAll('.hiddenAnimationDown');
hiddenElementsDown.forEach((el) => observer.observe(el));

const hiddenElementsLeft = document.querySelectorAll('.hiddenAnimationLeft');
hiddenElementsLeft.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hiddenAnimationRight');
hiddenElementsRight.forEach((el) => observer.observe(el));

function GoToStudies(){
    window.location.href = '#Studies';
}
function GoToLanguages(){
    window.location.href = '#Languages';
}
function GoToAboutMe(){
    window.location.href = '#AboutMe';
}
function GoToExperience(){
    window.location.href = '#Experience';
}