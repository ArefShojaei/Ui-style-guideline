const checkboxes = document.querySelectorAll(".checkbox-content")

checkboxes.forEach(item => {

    const parentElement = item.closest(".checkbox")

    if(!parentElement.classList.contains("disabled")){
        item.addEventListener("click",()=>{
            item.closest(".checkbox").classList.toggle("active")
        })
    }

})

export default checkboxes