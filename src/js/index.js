const button = document.getElementsByClassName('c-header')[0];
const loading = document.getElementsByClassName('c-boxes')[0];

const tween = gsap.to(button, {
    duration: 0.5,
    paused: true,
    ease: 'power2.out',
    width: '100%',
    height: '100px',
    lineHeight: '100px',
    borderRadius: '0%',
    cursor: 'default',
    top: 0,
});

const showContent = () => {
    // ローディング表示
    loading.classList.add('active');
    // 以下のtween.play()とgsap.to()は同じことをしている
    tween.play();
    gsap.to('.c-header h1', {
        opacity: 0,
    });
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

    gsap.timeline({
        default: { ease: 'power2.out', duration: 1 }, // timelineのプロパティ
        scrollTrigger: {
            markers: true, // マーカーを表示するか（開発用）
            trigger: '.c-content', // この要素と交差するとイベントが発火
            start: 'top 50%', // ウィンドウのどの位置を発火の基準点にするか
            end: 'bottom top', // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種類
        },
    })
        .to('.c-content__text h2', {
            opacity: 1,
            y: -10,
        })
        .to(
            '.c-content__text p',
            {
                opacity: 1,
                y: -10,
            },
            '-=1',
        ) //直前のアニメーションに0.7秒かぶせる
        .to(
            '.c-content__img',
            {
                opacity: 1,
                x: -10,
            },
            '-=1',
        ); //直前のアニメーションに0.7秒かぶせる
};

button.addEventListener('click', showContent);
