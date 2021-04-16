const submitEdit = async (event) => {
    event.preventDefault();

    var targetPostId = document.querySelector(".card").getAttribute("value");
    var title = document.querySelector("#blog-Title").value.trim();
    var content = document.querySelector("#blog-Content").value.trim();

    if(targetPostId){
        const response = await fetch(`/api/blogs/${targetPostId}`, {
            method:"PUT",
            body: JSON.stringify({ title,content }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(response.ok){
            document.location.replace('/dashboard')
        }
    }
}

document.querySelector("#updatePost").addEventListener("click", submitEdit)