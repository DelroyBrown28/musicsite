const playButton = document.querySelector('#videoPlay');
const reverseButton = document.querySelector('#goBack');
const pauseVideo = document.querySelector('.pause_text');

const tl = new TimelineLite({
    paused: true
});

tl.to('.top_line', 0.5, {
        width: '55%',
    })
    .to('.bottom_line', 0.5, {
        width: '55%',
    }, '-=0.5')


playButton.addEventListener('click', () => {
    tl.play();
})

reverseButton.addEventListener('click', () => {
    tl.reverse();
})