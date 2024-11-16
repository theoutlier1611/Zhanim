document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.getElementById("preloader");
    const container = document.querySelector(".container");

    setTimeout(() => {
        preloader.classList.add("hidden");
        container.classList.remove("hidden");
        gsap.from(container, { opacity: 0, duration: 1.5 });
    }, 2000);

    // Unlock Gift Button
    const unlockButton = document.getElementById("unlock-button");
    const giftSection = document.getElementById("gift-section");

    unlockButton.addEventListener("click", () => {
        giftSection.classList.remove("hidden");
        gsap.from(giftSection, { opacity: 0, y: 50, duration: 1.5 });
        unlockButton.style.display = "none";
    });

    // Scroll Animations for Timeline
    const timelineItems = document.querySelectorAll(".timeline-item");
    const controller = new ScrollMagic.Controller();

    timelineItems.forEach((item) => {
        new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.9,
        })
            .setTween(gsap.from(item, { opacity: 0, y: 50, duration: 1.5 }))
            .addTo(controller);
    });
});
