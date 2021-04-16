const editPost = async(event) => {
    event.preventDefault();

    var targetPostId = event.target.getAttribute("value");

    if(targetPostId){
        document.location.replace(`/edit-post/${targetPostId}`)
    }
}
var posts = document.querySelectorAll(".post");
posts.forEach(post =>{
    post.addEventListener("click", editPost)
})