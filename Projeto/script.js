let daily = document.querySelector('.daily');
let weekly = document.querySelector('.weekly');
let monthly = document.querySelector('.monthly');

let workHours = document.querySelector('.contentWork');
let workPrevious = document.querySelector('.previousWork');

let playHours = document.querySelector('.contentPlay');
let playPrevious = document.querySelector('.previousPlay');

let studyHours = document.querySelector('.contentStudy');
let studyPrevious = document.querySelector('.previousStudy');

let exerciseHours = document.querySelector('.contentExercise');
let exercisePrevious = document.querySelector('.previousExercise');

let socialHours = document.querySelector('.contentSocial');
let socialPrevious = document.querySelector('.previousSocial');

let selfcareHours = document.querySelector('.contentSelfCare');
let selfcarePrevious = document.querySelector('.previousSelfCare');

dailychoise();

daily.onclick = function() {dailychoise()};
weekly.onclick = function() {weeklychoise()};
monthly.onclick = function() {monthlychoise()};

function dailychoise(){
    workHours.innerHTML = '7hrs';
    workPrevious.innerHTML =  'Yesterday - 8hrs'
    playHours.innerHTML = '1hr';
    playPrevious.innerHTML =  'Yesterday - 30m'
    studyHours.innerHTML = '3hrs';
    studyPrevious.innerHTML =  'Yesterday - 2hrs'
    exerciseHours.innerHTML = '1:30hrs';
    exercisePrevious.innerHTML =  'Yesterday - 2hrs'
    socialHours.innerHTML = '2hrs';
    socialPrevious.innerHTML =  'Yesterday - 2hrs'
    selfcareHours.innerHTML = '2hrs';
    selfcarePrevious.innerHTML =  'Yesterday - 2hrs'
}

function weeklychoise(){ 
    workHours.innerHTML = '35hrs';
    workPrevious.innerHTML =  'Last week - 35hrs'
    playHours.innerHTML = '10hrs';
    playPrevious.innerHTML =  'Last week - 12hrs'
    studyHours.innerHTML = '21hrs';
    studyPrevious.innerHTML =  'Last week - 22hrs'
    exerciseHours.innerHTML = '9hrs';
    exercisePrevious.innerHTML =  'Last week - 9hrs'
    socialHours.innerHTML = '14hrs';
        socialPrevious.innerHTML =  'Last week - 2hrs'
    selfcareHours.innerHTML = '8hrs';
    selfcarePrevious.innerHTML =  'Last week - 12hrs'
}

function monthlychoise(){
    workHours.innerHTML = '140hrs';
    workPrevious.innerHTML =  'Last month - 141hrs'
    playHours.innerHTML = '40hrs';
    playPrevious.innerHTML =  'Last month - 40hrs'
    studyHours.innerHTML = '80hrs';
    studyPrevious.innerHTML =  'Last month - 82hrs'
    exerciseHours.innerHTML = '36hrs';
    exercisePrevious.innerHTML =  'Last month - 39hrs'
    socialHours.innerHTML = '53hrs';
    socialPrevious.innerHTML =  'Last month - 57hrs'
    selfcareHours.innerHTML = '32hrs';
    selfcarePrevious.innerHTML =  'Last month - 30hrs'
}

function nthHere(){
    alert('nothing here!')
}