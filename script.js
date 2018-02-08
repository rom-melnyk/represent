function initRepresent() {
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


    window.addEventListener('keydown', ({ key, shiftKey }) => {
        // console.info(arguments[0]);
        switch (key) {
            case '?':
                // TBD show help
                break;
            case 'ArrowLeft':
                previousSlide();
                break;
            case 'ArrowRight':
                nextSlide();
                break;
            case ' ':
                if (shiftKey) {
                    previousTransition();
                } else {
                    nextTransition();
                }
                break;
            default:
        }
    });

    const leftControlElem = document.querySelector('body > .controls.left');
    const rightControlElem = document.querySelector('body > .controls.right');

    if (leftControlElem) {
        leftControlElem.addEventListener('click', previousSlide);
    }
    if (rightControlElem) {
        rightControlElem.addEventListener('click', nextSlide);
    }

    const paginationElem = document.querySelector('footer > .pagination');
    if (paginationElem) {
        paginationElem.addEventListener('click', ({ target }) => {
            const targetClassList = target && target.classList;
            if (targetClassList && targetClassList.contains('page') && !targetClassList.contains('current')) {
                goToSlide(target.innerText);
            }
        });
    }
}
