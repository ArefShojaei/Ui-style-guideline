const radio_buttons = document.querySelectorAll(".radio-button")

radio_buttons.forEach(item=> {
    item.addEventListener("click",()=>{
        radio_buttons.forEach(item => item.classList.remove("active"))
        item.classList.add("active")
    })
})

export default radio_buttons