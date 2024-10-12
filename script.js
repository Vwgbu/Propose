document.querySelector('.yes').addEventListener('click', function() {
    const response = document.querySelector('.response');
    response.classList.remove('hidden');
    response.classList.add('show');
    this.style.transform = "scale(0.9)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 300);
});
