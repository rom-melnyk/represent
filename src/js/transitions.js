function nextSlide() {
    console.info('Next slide');
}


function previousSlide() {
    console.info('Previous slide');
}


function goToSlide(no) {
    console.info(`Go to slide #${no}`);
}


function nextTransition() {
    console.info(`Next transition`);
}


function previousTransition() {
    console.info('Previous transition');
}


export {
    previousSlide,
    nextSlide,
    goToSlide,
    previousTransition,
    nextTransition
}