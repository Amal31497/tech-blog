const submitPost = async(event)=>{
    event.preventDefault();

    var title = document.querySelector("#blog-Title").value.trim();
    var content = document.querySelector("#blog-Content").value.trim();

    if(title && content){
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok){
            document.location.replace("/dashboard")
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector("#createNewPost").addEventListener("click", submitPost)