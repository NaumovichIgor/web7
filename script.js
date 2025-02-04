const gallery = document.querySelector('.gallery');
const slideGroups = document.querySelectorAll('.slide-group');
const totalGroups = slideGroups.length;
let currentPage = 1;

const pagerCurrent = document.querySelector('.current-page');
const pagerTotal = document.querySelector('.total-pages');
pagerTotal.textContent = totalGroups;

const updatePager = () => {
    pagerCurrent.textContent = currentPage;
};

const moveToPage = (page) => {
    const offset = (page - 1) * -100;
    gallery.style.transform = `translateX(${offset}%)`;
    currentPage = page;
    updatePager();
};

document.querySelector('.left-arrow').addEventListener('click', () => {
    if (currentPage > 1) {
        moveToPage(currentPage - 1);
    }
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    if (currentPage < totalGroups) {
        moveToPage(currentPage + 1);
    }
});

// Инициализация
moveToPage(1);