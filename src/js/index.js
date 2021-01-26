import { gsap } from 'gsap';

const tween = gsap.to('header', {
    duration: 0.5,
    paused: true,
    ease: 'power2.out',
    top: 0,
});

const header = document.getElementsByClassName('c-header')[0];
header.addEventListener('click', () => tween.play());

gsap.to('img', {
    delay: 1,
    duration: 1.5,
    y: -10, // 少し上に移動させる
    opacity: 1,
    ease: 'power2.out',
    // 複数要素を扱うプロパティ
    stagger: {
        from: 'start', // 左側から
        amount: 0.8, // 0.8秒おきに
    },
});
