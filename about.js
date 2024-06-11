$(function() {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    } else {
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });
});

// Falling leaves for about section
document.addEventListener('DOMContentLoaded', () => {
    const leavesContainer = document.getElementById('leaves-container');
    const numberOfLeaves = 30;

    for (let i = 0; i < numberOfLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 3 + 8}s`; // Falling speed between 2s and 5s
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leavesContainer.appendChild(leaf);
    }
});
