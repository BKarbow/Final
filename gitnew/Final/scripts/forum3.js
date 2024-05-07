/* setting to null */
const userID = {
    name: "Anonymous",
    identity: null,
    message: null,
    date: null
}
/* setting variables */
const userComment = document.querySelector(".usercomment");
const postBtn = document.querySelector("#post");
const comments = document.querySelector(".comments");
/* Some validation to post */
userComment.addEventListener("input", e => {
    if(!userComment.value) {
        postBtn.setAttribute("disabled", "disabled");
        postBtn.classList.remove("abled")
    }else {
        postBtn.removeAttribute("disabled");
        postBtn.classList.add("abled")
    }
})

// Pre-made comments array
const preMadeComments = [
    {
        name: "Anonymous",
        message: "生身のまま行けるとこまで.",
        date: "4-04-3005 10:00:32 AM"
    },
    {
        name: "Anonymous",
        message: "教科書に無い 問題集に無い 超 bad な呪(まじな)い 鏡よ鏡 答えちゃって.",
        date: "4-05-3005 10:30:45 AM"
    },
    {
        name: "Anonymous",
        message: "あ キレてる呆れてる周り 恵まれてる家族友達 (happy).",
        date: "4-07-3005 11:00:04 AM"
    },
    {
        name: "Anonymous",
        message: "誰の七光も要らないお前の ice より icy (icy).",
        date: "4-10-3005 11:30:15 AM"
    },
    // Add more pre-made comments as needed
];

/* Adding the post to the forum */
function addPost(pageID) {
    if (!userComment.value) return;
    userID.message = userComment.value;

    let currentDate = new Date();
    currentDate.setFullYear(3005);
    userID.date = currentDate.toLocaleString();

    let allPosts = JSON.parse(localStorage.getItem('forumPosts_' + pageID)) || [];
    allPosts.push(userID);
    localStorage.setItem('forumPosts_' + pageID, JSON.stringify(allPosts));
    let sideClass = allPosts.length % 2 === 0 ? 'right-comment' : 'left-comment';
    let published =
        `<div class="parents ${sideClass}">
            <div>
                <h1>${userID.name}</h1>
                <p>${userID.message}</p>
                <span class="date">${userID.date}</span>
            </div>
        </div>`;
    comments.innerHTML += published;
    userComment.value = "";
    comments.scrollTop = comments.scrollHeight;

    /* counting the amount of posts */
    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentsNum;
}

// Function to load pre-made comments
function loadPreMadeComments() {
    preMadeComments.forEach(comment => {
        let sideClass = preMadeComments.indexOf(comment) % 2 === 0 ? 'left-comment' : 'right-comment';
        let published =
        `<div class="parents ${sideClass}">
            <div>
                <h1>${comment.name}</h1>
                <p>${comment.message}</p>
                <span class="date">${comment.date}</span>
            </div>
        </div>`;
        comments.innerHTML += published;
    });
}

function loadPosts(pageID) {
    loadPreMadeComments(pageID);

    let allPosts = JSON.parse(localStorage.getItem('forumPosts_' + pageID)) || [];
    allPosts.forEach(post => {
        let sideClass = allPosts.indexOf(post) % 2 === 0 ? 'left-comment' : 'right-comment';
        let published =
            `<div class="parents ${sideClass}">
                <div>
                    <h1>${post.name}</h1>
                    <p>${post.message}</p>
                    <span class="date">${post.date}</span>
                </div>
            </div>`;
        comments.innerHTML += published;
    });
    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentsNum;
}

// Usage:
const pageID = "page3"; // Unique identifier for each HTML page
postBtn.addEventListener("click", () => addPost(pageID));
window.addEventListener('load', () => loadPosts(pageID));