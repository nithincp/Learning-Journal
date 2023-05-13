const readMore = document.querySelector(".read-more")
const hiddenBlogs = document.querySelectorAll(".hidden")


readMore.addEventListener('click', () => {
    if (readMore.innerHTML === 'View More'){
        hiddenBlogs.forEach((div) => {
            div.style.display = 'grid'
        })
        readMore.innerHTML = 'View Less'
    }
    else if(readMore.innerHTML === 'View Less'){
        hiddenBlogs.forEach((div) => {
            div.style.display = 'none'
        })
        readMore.innerHTML = 'View More'
    }
    
})
