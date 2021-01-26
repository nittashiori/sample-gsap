import { gsap } from 'gsap';

const tween = gsap.to('header', {
    duration: 0.5,
    paused: true,
    ease: 'power2.out',
    top: 0,
});

const header = document.getElementsByClassName('c-header')[0];
console.log(header);
header.addEventListener('click', () => tween.play());
