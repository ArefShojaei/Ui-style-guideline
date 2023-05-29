const toggles = document.querySelectorAll(".toggle")

toggles.forEach(item => {
    item.addEventListener("click",()=>{
        item.classList.toggle("active")
    })
})

export default toggles