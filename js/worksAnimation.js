function Display(workbox, description, video, descriptionText, descriptionExpText, index) {
    this.active = false;
    this.workbox = workbox;
    this.description = description;
    this.video = video; 
    this.descriptionText = descriptionText;
    this.descriptionExpText = descriptionExpText;
    this.index = index;

    this.makeActive = function() {
        this.active = true;
        this.description.classList.add('z-index');
        swipeUp();
        this.video.style.display = 'initial';
        this.descriptionText.classList.add('text-appear');
        let descriptionExpText = this.descriptionExpText;
        let video = this.video;
        setTimeout(function() {
            descriptionExpText.classList.add('text-appear');
        }, 500);
        if (video.className === 'video-appear') {
            video.classList.remove('video-appear');
            setTimeout(function() {
            video.classList.add('video-appear');
            video.setAttribute('autoplay', 'autoplay');
        }, 500); 
        }
        setTimeout(function() {
            video.classList.add('video-appear');
            video.setAttribute('autoplay', 'autoplay');
        }, 1000);             
    }

    this.makeInactive = function() {
        this.active = false;
        this.description.classList.remove('z-index');
        this.video.removeAttribute('autoplay');
        this.descriptionText.classList.remove('text-appear');
        this.descriptionExpText.classList.remove('text-appear');
        this.video.classList.remove('video-appear');
        this.video.style.display = 'none'; 
    }   
}

let display1 = new Display(
    document.getElementById('fansi-schmansi-block'), 
    document.getElementById('fansi-schmansi-description'), 
    document.getElementById('fansi-schmansi-video'), 
    document.getElementById('fansi-schmansi-description-text'), 
    document.getElementById('fansi-schmansi-exp-text'), 
    0);

let display2 = new Display(
    document.getElementById('syzygy-block'), 
    document.getElementById('syzygy-description'), 
    document.getElementById('syzygy-video'),
    document.getElementById('syzygy-description-text'),
    document.getElementById('syzygy-exp-text'),
    1);

let display3 = new Display(
    document.getElementById('film-scope-block'), 
    document.getElementById('film-scope-description'),
    document.getElementById('film-scope-video'),
    document.getElementById('film-scope-description-text'),
    document.getElementById('film-scope-exp-text'), 
    2);

let display4 = new Display(
    document.getElementById('roman-numeral-convertor-block'), 
    document.getElementById('roman-numeral-convertor-description'),
    document.getElementById('roman-numeral-convertor-video'),
    document.getElementById('roman-numeral-convertor-description-text'),
    document.getElementById('roman-numeral-convertor-exp-text'), 
    3);

let display5 = new Display(
    document.getElementById('dum-drum-block'), 
    document.getElementById('dum-drum-description'),
    document.getElementById('dum-drum-video'),
    document.getElementById('dum-drum-description-text'),
    document.getElementById('dum-drum-exp-text'), 
    4);

let display6 = new Display(
    document.getElementById('portfolio-block'), 
    document.getElementById('portfolio-description'),
    document.getElementById('portfolio-video'),
    document.getElementById('portfolio-description-text'),
    document.getElementById('portfolio-exp-text'), 
    5);

let displays = [display1, display2, display3, display4, display5, display6];


function displaySwipe(index) {
    console.log(index);
    displays.forEach((display) => {
        if (index === display.index) {
            display.makeActive();                     
        } else {
            display.makeInactive();
        }
    });
}

displays.forEach((display) => {
    display.workbox.addEventListener('click', function() {
        displaySwipe(display.index);
    });
})
