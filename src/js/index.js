import { gsap } from 'gsap';

const tween = gsap.to('header', {
    duration: 0.5,
    paused: true,
    ease: 'power2.out',
    top: 0,
});

const header = document.getElementsByClassName('c-header')[0];
header.addEventListener('click', () => tween.play());

gsap.to('.c-img-container img', {
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

const tl = gsap.timeline({
    repeat: -1, // アニメーションの繰り返し回数。-1で無限回。
    repeatDelay: 0.3, // ループとループの間の時間
    defaults: { duration: 0.5, ease: 'power4.out' }, // tweenのデフォルトの値
});

// アニメーションを実行
tl.from('.c-boxes__box', {
    scale: 0,
})
    .to('.c-boxes__box1', {
        left: 50,
    })
    .to(
        '.c-boxes__box2',
        {
            right: 50,
        },
        '<',
    ) // "<"は「前のアニメーションと同時に再生する」オプション
    .to('.c-boxes__box', {
        scale: 0,
    });
