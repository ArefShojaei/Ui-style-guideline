const dropdownContent = document.querySelectorAll(".dropdown-content")

dropdownContent.forEach(item=>{
    const parentElement = item.closest(".dropdown")

    item.addEventListener("click", ()=>{
        parentElement.classList.toggle("active")
    })

})

export default dropdownContent