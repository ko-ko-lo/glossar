document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionContents = document.querySelectorAll('.accordion-content');

    accordionHeaders.forEach((header, index) => {
        header.addEventListener('click', function () {
            const openContent = document.querySelector('.accordion-content.open');
            if (openContent && openContent !== accordionContents[index]) {
                openContent.classList.remove('open');
            }
            accordionContents[index].classList.toggle('open');
        });
    });
});