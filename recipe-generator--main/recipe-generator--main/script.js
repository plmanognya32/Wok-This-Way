document.addEventListener('DOMContentLoaded', function () {
      
    function showModal(imageUrl) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');

        modalImage.src = imageUrl;
        modal.style.display = 'flex';
    }

    
    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    }

    document.querySelector('.card1').addEventListener('click', function () {
        showModal('b1');
    });

    document.querySelector('.card2').addEventListener('click', function () {
        showModal('b1');
    });

    document.querySelector('.card3').addEventListener('click', function () {
        showModal('g1');
    });

    document.querySelector('.card4').addEventListener('click', function () {
        showModal('s2.jpg');
    });

   
    document.getElementById('imageModal').addEventListener('click', function (event) {
        if (event.target === this) {
            closeModal();
        }
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});