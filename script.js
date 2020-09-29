const playButton = document.querySelector('#videoPlay');
const reverseButton = document.querySelector('#goBack');
const pauseVideo = document.querySelector('.pause_text');

const tl = new TimelineLite({
    paused: true
});

tl.to('.tracklists_wrap', 0.5, {
        autoAlpha: '0',

    })
    .to('.video_wrap', 0.5, {
        y: 100,
    })
    .to('.lines', 0.5, {
        width: '0',
        stagger: 0.1
    })
    .to('.lines', 0.5, {
        autoAlpha: '0'
    }, '-=0.1')

    .to('.whilst_playing_wrap', 0.5, {
        autoAlpha: '1',
        y: 200
    })


playButton.addEventListener('click', () => {
    tl.play();
})

reverseButton.addEventListener('click', () => {
    tl.reverse();
})