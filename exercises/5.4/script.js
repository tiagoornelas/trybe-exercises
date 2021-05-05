window.onload = function () {
    const darkMode = document.querySelectorAll("li")[0];
    const fontChange = document.querySelectorAll("li")[1];
    const plusSize = document.querySelectorAll("li")[2];
    const lessSize = document.querySelectorAll("li")[3];
    const plusSpace = document.querySelectorAll("li")[4];
    const lessSpace = document.querySelectorAll("li")[5];
    const texts = document.querySelectorAll("p");
    let lightOn = true;
    let serif = true;

    function loadPreset() {
        if (localStorage.getItem('dark') === 'true') {
            document.body.style.backgroundColor = '#171527';
            document.body.style.color = '#fff';
            lightOn = false;
        }
    
        if (localStorage.getItem('serif') === 'sans') {
            for (let p in text) {
                text[p].style.fontFamily = 'sans serif';
                serif = false;
            }
        }
    
        if (localStorage.getItem('font') === 'big') {
            let text = document.querySelectorAll('p');
            for (let p in text) {
                text[p].style.fontSize = '24px';
            }
        }
    
        if (localStorage.getItem('height') === 'big') {
            let text = document.querySelectorAll('p');
            for (let p in text) {
                text[p].style.lineHeight = '27px';
            }
        }
    }

    function lummus() {
        if (lightOn === true) {
            document.body.style.backgroundColor = '#171527';
            document.body.style.color = '#fff';
            lightOn = false;
            localStorage.setItem('dark','true');
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
            lightOn = true;
            localStorage.setItem('dark','false');
        }
    }

    function changeFont() {
        let text = document.querySelectorAll('p');
        if (serif === true) {
            for (let p in text) {
                text[p].style.fontFamily = 'sans serif';
                serif = false;
                localStorage.setItem('serif','sans');
            }
        } else {
            for (let p in text) {
                text[p].style.fontFamily = 'serif';
                serif = true;
                localStorage.setItem('serif','serif');
            }
        }
    }

    function enlargeFont() {
        let text = document.querySelectorAll('p');
        for (let p in text) {
            text[p].style.fontSize = '24px';
        }
        localStorage.setItem('font','big');
    }

    function reduceFont() {
        let text = document.querySelectorAll('p');
        for (let p in text) {
            text[p].style.fontSize = '16px';
        }
        localStorage.setItem('font','small');
    }

    function enlargeHeight() {
        let text = document.querySelectorAll('p');
        for (let p in text) {
            text[p].style.lineHeight = '27px';
        }
        localStorage.setItem('height','big');
    }

    function reduceHeight() {
        let text = document.querySelectorAll('p');
        for (let p in text) {
            text[p].style.lineHeight = '19px';
        }
        localStorage.setItem('height','small');
    }

    darkMode.addEventListener('click', lummus);
    fontChange.addEventListener('click', changeFont);
    plusSize.addEventListener('click', enlargeFont);
    lessSize.addEventListener('click', reduceFont);
    plusSpace.addEventListener('click', enlargeHeight);
    lessSpace.addEventListener('click', reduceHeight);
    loadPreset();
}