
const scrollUp = (() => {
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        const element = document.getElementById("back2Top");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            if(element.style.display === 'none') {
                element.style.display = 'block'
                fadeIn(element);
            }
        } else if(element) {
            element.style.display = 'none'
            fadeOut(element);
        }
    }
});

const fadeOut = (element) => {
    var opacity = 1;
    function decrease() {
        opacity -= 0.05;
        if (opacity <= 0) {
            // complete
            element.style.opacity = 0;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}

const fadeIn = (element) => {
    var opacity = 0;
    function decrease() {
        opacity += 0.05;
        if (opacity <= 0) {
            // complete
            element.style.opacity = 0;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}

export default scrollUp;