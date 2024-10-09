
// function untuk menambah komentar
const form = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    //ngambil value dari inputan
    const commentText = document.getElementById("comment").value;
    //menambah komen ke list
    const newComment = document.createElement("li");
    newComment.className = "list-group-item";
    newComment.innerHTML = `
        <p>${commentText}</p>
        <div class="comment-actions">
        <button class="btn btn-sm btn-warning edit">Edit</button>
        <button class="btn btn-sm btn-danger delete">Delete</button>
        </div>
    `;
    commentList.appendChild(newComment);
    //reset input
    document.getElementById("comment").value = "";
});
{/* <button   button class="btn btn-sm btn-primary like">Like</button>
<button class="btn btn-sm btn-danger dislike">Dislike</button> */}