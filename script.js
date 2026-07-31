function nextScene(num) {

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    const next = document.getElementById("scene" + num);

    if (next) {
        next.classList.add("active");
    }

}
