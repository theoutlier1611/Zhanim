alert("Ooh.. You touch my tralala..");
// Unlock button functionality
document.addEventListener("DOMContentLoaded", () => {
    const unlockButton = document.getElementById("unlock-button");
    const giftSection = document.getElementById("gift-section");

    unlockButton.addEventListener("click", () => {
        giftSection.classList.remove("hidden");
        gsap.from(".gift-message", { opacity: 0, y: -50, duration: 1.5 });
        unlockButton.style.display = "none";
    });

    // Timeline animations on scroll
    const timelineItems = document.querySelectorAll(".timeline-item");
    gsap.registerPlugin(ScrollMagic);
    const controller = new ScrollMagic.Controller();

    timelineItems.forEach((item) => {
        new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.9,
        })
            .setTween(gsap.from(item, { opacity: 0, x: 100, duration: 1 }))
            .addTo(controller);
    });
});
