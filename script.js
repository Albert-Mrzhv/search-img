const input = document.querySelector('[data-input-text]');
const searchBtn = document.querySelector('[data-btn-search]');
const result = document.querySelector('#result-block-img');

const searchCars = ['Машины', 'машины', 'Машина', 'машина', 'Тачка', 'тачка', 'Авто', 'авто', 'Автомобиль', 'автомобиль', 'Тачки', 'тачки', 'Автомобили', 'автомобили'];
const searcHome = ['Дома', 'дома', 'Дом', 'дом'];

const handleInputAndButtonClick = () => {
    if (input.value === '') {
        return
    }
    if (searchCars.includes(input.value)) {
        result.innerHTML = 'Loading...'
        setTimeout(() => {
            result.innerHTML = `
            <div class="img-search">
                <img class="img" src="./img-cars/1701416671_sportishka-com-p-samie-luchshie-sportkari-instagram-16.jpg" alt="">
                <img class="img" src="./img-cars/861917.jpg" alt="">
                <img class="img" src="./img-cars/avto-hammer.orig.jpg" alt="">
                <img class="img" src="./img-cars/cattouchret.webp" alt="">
                <img class="img" src="./img-cars/FqaNNR-TY3M.jpg" alt="">
                <img class="img" src="./img-cars/kAAAAgN4A-A-960.jpg" alt="">
            </div>
            `
            clickImages();
        }, 2000);
    } else if (searcHome.includes(input.value)) {
        result.innerHTML = 'Loading...'
        setTimeout(() => {
            result.innerHTML = `
            <div class="img-search">
                <img class="img" src="./img-home/1633327009_1-p-foto-finskikh-domov-i-kottedzhei-foto-1.jpg" alt="">
                <img class="img" src="./img-home/1686202736_gagaru-club-p-nebolshoi-kirpichnii-domik-dizain-vkontakt-37.jpg" alt="">
                <img class="img" src="./img-home/354580-krasivyy-dom-33.jpg" alt="">
                <img class="img" src="./img-home/main-spb-18-1.jpg" alt="">
                <img class="img" src="./img-home/orig.jpg" alt="">
                <img class="img" src="./img-home/XXL_height.webp" alt="">
            </div>
            `
            clickImages();
        }, 2000);
    } else {
        result.innerHTML = 'Loading...'
        setTimeout(() => {
            result.innerHTML = 'Ничего не найдено!'
        }, 2000)
    }
    input.value = ''
}

searchBtn.addEventListener('click', () => {
    handleInputAndButtonClick();
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleInputAndButtonClick();
    }
})


const clickImages = () => {
    const imag = result.querySelectorAll('.img');
    imag.forEach((img, index) => {
        img.addEventListener('click', () => {
            const main = document.querySelector('.main');
            main.style.pointerEvents = 'none';

            const containerImgBtn = document.createElement('div');
            containerImgBtn.classList.add('container-img-btn');

            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            imgElement.dataset.index = index
            imgElement.classList.add('img-element');

            const removeImg = document.createElement('input');
            removeImg.type = 'button';
            removeImg.value = 'X';
            removeImg.classList.add('remove-img');

            removeImg.addEventListener('click', () => {
                containerImgBtn.remove();
                main.style.pointerEvents = 'auto';
            })

            const buttonLeft = document.createElement('div');
            buttonLeft.textContent = 'ᐸ';
            buttonLeft.classList.add('btn-left', 'btn-arrow');

            const buttonRight = document.createElement('div');
            buttonRight.textContent = 'ᐳ';
            buttonRight.classList.add('btn-right', 'btn-arrow');


            buttonRight.addEventListener('click', () => {
                if (index < imag.length - 1) {
                    imgElement.src = imag[++index].src
                    buttonLeft.style.opacity = '1'
                } else if (imag.length - 1) {
                    buttonRight.style.opacity = '0.3'
                }
            })

            buttonLeft.addEventListener('click', () => {
                if (index > 0) {
                    imgElement.src = imag[--index].src
                    buttonRight.style.opacity = '1'
                } else {
                    buttonLeft.style.opacity = '0.3'
                }
            })

            containerImgBtn.append(buttonLeft, imgElement, removeImg, buttonRight);
            document.body.append(containerImgBtn);
        })
    })
}