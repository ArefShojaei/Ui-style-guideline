const paginationItems = document.querySelectorAll(".pagination-item")

paginationItems.forEach(item => {
    item.addEventListener("click",()=>{
        paginationItems.forEach(item => item.classList.remove("active"))
        item.classList.add("active")
    })
})

export default paginationItems