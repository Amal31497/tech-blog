var hideComments = $(".hide-comments")
var comments = $(".comments")
$.each(hideComments, function(index, button){
    button.addEventListener("click", (event)=>{
        event.preventDefault();
        if(button.getAttribute("class") === "card-footer show-comments"){
            $(event.target).next().slideDown(190);
            button.setAttribute("class","card-footer hide-comments");
            button.innerText = "Comments ▲"
        } else if(button.getAttribute("class") === "card-footer hide-comments"){
            $(event.target).next().slideUp(190);
            button.setAttribute("class","card-footer show-comments");
            button.innerText = "Comments ▼"
        }
    })
})


var submit = $(".submitComment")
const submitComment = async(event) => {

    var comment_content = $(event.target).prev().val();
    var blog_id = $(event.target).prev().attr("value")
    if(comment_content){
        const response = await fetch('/api/comments',{
            method:"POST",
            body: JSON.stringify({ comment_content,blog_id }),
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok){
            document.location.reload();
        }
    }
}

$.each(submit, function(index, button){
    button.addEventListener("click",submitComment)
})
