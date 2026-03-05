const toggleBtn = document.querySelector(".theme-toggle");
const card = document.querySelector(".profile-card");

toggleBtn.addEventListener("click", () =>{
    document.body.classList.toggle("light")
})