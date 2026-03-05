const toggleBtn = document.querySelector(".theme-toggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "🌙";
    } else {
        toggleBtn.textContent = "☀️";
    }
});
