// const numLeaves = 30;
// const homeSection = document.querySelector('#home');
// const homeHeight = homeSection.offsetHeight;

// for (let i = 0; i < numLeaves; i++) {
//     const leaf = document.createElement('div');
//     leaf.className = 'leaf';
//     leaf.style.left = `${Math.random() * 100}vw`;
//     leaf.style.animationDuration = `${Math.random() * 3 + 2}s`; // Vary animation duration
//     leaf.style.animationName = 'fall';
//     leaf.style.animationTimingFunction = 'linear';
//     leaf.style.animationIterationCount = 'infinite';
//     leaf.style.animationDirection = 'normal';
//     document.body.appendChild(leaf);
// }

document.addEventListener('DOMContentLoaded', () => {
    const leavesContainer = document.getElementById('leaves-container');
    const numberOfLeaves = 30;

    for (let i = 0; i < numberOfLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 3 + 2}s`; // Falling speed between 2s and 5s
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leavesContainer.appendChild(leaf);
    }
});