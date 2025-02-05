const input = document.querySelector('[data-input-text]');
const searchBtn = document.querySelector('[data-btn-search]');
const result = document.querySelector('#result-block-img');

const searchCars = ['Машины', 'машины', 'Машина', 'машина', 'Тачка', 'тачка', 'Авто', 'авто', 'Автомобиль', 'автомобиль', 'Тачки', 'тачки', 'Автомобили', 'автомобили'];
const searcHome = ['Дома', 'дома', 'Хата', 'хата', 'Дом', 'дом', 'Хаты', 'хаты'];

const arrey = []

searchBtn.addEventListener('click', () => {
    if (input.value === '') {
        return
    }
    if (searchCars.includes(input.value)) {
        result.innerHTML = 'Loading...'
        setTimeout(() => {
            result.innerHTML = `
            <div class="img-search">
                <img class="img" src="/img-cars/1701416671_sportishka-com-p-samie-luchshie-sportkari-instagram-16.jpg" alt="">
                <img class="img" src="/img-cars/861917.jpg" alt="">
                <img class="img" src="/img-cars/avto-hammer.orig.jpg" alt="">
                <img class="img" src="/img-cars/cattouchret.webp" alt="">
                <img class="img" src="/img-cars/FqaNNR-TY3M.jpg" alt="">
                <img class="img" src="/img-cars/kAAAAgN4A-A-960.jpg" alt="">
            </div>
            `
        }, 2000);
    } else if (searcHome.includes(input.value)) {
        result.innerHTML = 'Loading...'
        setTimeout(() => {
            result.innerHTML = `
            <div class="img-search">
                <img class="img" src="/img-home/1633327009_1-p-foto-finskikh-domov-i-kottedzhei-foto-1.jpg" alt="">
                <img class="img" src="/img-home/1686202736_gagaru-club-p-nebolshoi-kirpichnii-domik-dizain-vkontakt-37.jpg" alt="">
                <img class="img" src="/img-home/354580-krasivyy-dom-33.jpg" alt="">
                <img class="img" src="/img-home/main-spb-18-1.jpg" alt="">
                <img class="img" src="/img-home/orig.jpg" alt="">
                <img class="img" src="/img-home/XXL_height.webp" alt="">
            </div>
            `
        }, 2000);
    } else {
        result.innerHTML = 'Loading...'
        setTimeout(() => {
            result.innerHTML = 'Ничего не найдено!'
        }, 2000)
    }
    input.value = ''
})