document.addEventListener("DOMContentLoaded", () => {
    const animatedTexts = document.querySelectorAll('.animated-text');

    animatedTexts.forEach((text, index) => {
        text.style.animationDelay = `${index * 0.2}s`; // Stagger the animations
        text.classList.add('fade-in'); // Add the class to trigger animation
    });
});
