const deletePost = async(event) => {
    event.preventDefault();
    
    var targetPostId = event.target.getAttribute("id")
    if(targetPostId){
        const response = await fetch(`/api/blogs/${targetPostId}`, {
            method: 'DELETE'
        })

        if(response.ok){
            document.location.reload()
        }
    }
    console.log(targetPostId)
}

var posts = document.querySelectorAll(".deletePost");

posts.forEach(post => {
    post.addEventListener("click", deletePost)
})

