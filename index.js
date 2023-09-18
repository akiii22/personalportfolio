const navToggle = document.querySelector(".toggle")
const navLink = document.querySelectorAll(".nav_link")
navToggle.addEventListener("click", ()=>{
  document.body.classList.toggle("nav-open")
})

navLink.forEach(link => {
  link.addEventListener("click", () =>{
    document.body.classList.remove("nav-open")
  })
})

