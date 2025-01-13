const toggleText = document.getElementById('toggleImage');
const imageContainer = document.getElementById('imageContainer');
const magicalImage = document.getElementById('magicalImage');
let isImageVisible = false;

toggleText.addEventListener('click', () => {
    if (!isImageVisible) {
        toggleText.insertAdjacentElement('afterend', imageContainer);
        imageContainer.style.display = 'block';
        setTimeout(() => {
            magicalImage.style.opacity = '1';
            magicalImage.style.filter = 'grayscale(10%)';
            magicalImage.classList.add('reveal');
        }, 50);
        toggleText.textContent = 'hide image';
    } else {
        magicalImage.style.opacity = '0';
        magicalImage.style.filter = 'grayscale(100%)';
        magicalImage.classList.remove('reveal');
        setTimeout(() => {
            imageContainer.style.display = 'none';
        }, 1000);
        toggleText.textContent = 'show image';
    }
    isImageVisible = !isImageVisible;
});
