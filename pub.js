const title = document.getElementById('autotext');
const text = "Lewis HOUNNAHIN";
let index = 0;

const play = () => {
    title.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(play, 250);
    }
};

const startAnimation = () => {
    setTimeout(play, 1000);
};

startAnimation();
