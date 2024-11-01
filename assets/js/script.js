// dropdown
const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach((dropdown) => [
    dropdown.addEventListener('click', (e) => {
        const dropdownList = dropdown.querySelector('.dropdown-list')
        dropdownList.classList.toggle('active')
    })
])

// toggle menu for small devices
const menuShowIcon = document.querySelector('.menu-show-icon')
const menu = document.querySelector('.menu')
menuShowIcon.addEventListener('click', () => [
    menu.classList.toggle('active')
])

// 
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },
        991: {
            slidesPerView: 2,
        }
    }
});