import '../scss/style.scss';

import { qs, qsa } from './dom';
import {
    previousSlide,
    nextSlide,
    goToSlide,
    previousTransition,
    nextTransition
} from './transitions';


const html = {
    header: {
        elem: null,
        h1: null,
        h2: null
    },
    controls: {
        left: null,
        right: null,
    },
    slides: {
        elem: null,
        slides: []
    },
    footer: {
        elem: null,
        pagination: null,
        pages: [],
        credits: null
    }
};


function prepareHtmlContent() {
    html.header.elem = document.createElement('header');
    html.header.h1 = document.createElement('h1');
    html.header.h2 = document.createElement('h2');

    html.header.elem.appendChild( html.header.h1 );
    html.header.elem.appendChild( html.header.h2 );
    document.body.appendChild( html.header.elem );

    html.controls.left = document.createElement('div');
    html.controls.left.classList.add('controls', 'left');
    html.controls.left.setAttribute('title', 'Previous slide');
    html.controls.right = document.createElement('div');
    html.controls.right.classList.add('controls', 'right');
    html.controls.right.setAttribute('title', 'Next slide');

    document.body.appendChild( html.controls.left );
    document.body.appendChild( html.controls.right );

    html.slides.elem = document.createElement('div');
    html.slides.elem.classList.add('slides');
    document.body.appendChild( html.slides.elem );

    html.footer.elem = document.createElement('footer');
    html.footer.pagination = document.createElement('div');
    html.footer.pagination.classList.add('pagination');
    html.footer.credits = document.createElement('div');
    html.footer.credits.classList.add('credits');
    html.footer.credits.innerHTML = 'RePresent 2018 &nbsp; | &nbsp; &copy; Roman Melnyk';

    html.footer.elem.appendChild( html.footer.pagination );
    html.footer.elem.appendChild( html.footer.credits );
    document.body.appendChild( html.footer.elem );
}


function initRepresent() {
    prepareHtmlContent();

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

    html.controls.left.addEventListener('click', previousSlide);
    html.controls.right.addEventListener('click', nextSlide);

    html.footer.pagination.addEventListener('click', ({ target }) => {
        const targetClassList = target && target.classList;
        if (targetClassList && targetClassList.contains('page') && !targetClassList.contains('current')) {
            goToSlide(target.innerText);
        }
    });
}


if (typeof window !== 'undefined') {
    window.initRepresent = initRepresent;
}

export { initRepresent };
