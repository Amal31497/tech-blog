const newPost = async(event) => {
    event.preventDefault();

    document.location.replace("/create-post")
}



document.querySelector("#writeBlog").addEventListener("click",newPost);
