const backgroundHeader = document.getElementById('background');
const menuItemText = document.getElementsByClassName('menu-item-text');


function handleEvent() {
    window.onscroll = () => {
        if (this.scrollY) {
            backgroundHeader.classList.add('shadow');
        } else {
            backgroundHeader.classList.remove('shadow');
        }
    }

    for (let i = 0; i < menuItemText.length; i++) {
        menuItemText[i].addEventListener('click', function (e) {
            e.preventDefault();
            for (let i = 0; i < menuItemText.length; i++) {
                if (menuItemText[i].classList.contains('underline')) {
                    menuItemText[i].classList.remove('underline');
                }
            }
            menuItemText[i].classList.add('underline');
        })
            
    }
}

function main() {
    handleEvent();
}

main();






