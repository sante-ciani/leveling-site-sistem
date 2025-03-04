document.addEventListener("DOMContentLoaded", function() {
    let sound = document.getElementById("levelSound");

    document.querySelector(".glitch").addEventListener("mouseenter", function() {
        sound.play();
    });
});
