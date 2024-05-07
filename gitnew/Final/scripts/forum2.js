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
        message: "Ты знаешь, мне наплевать.",
        date: "4-04-3005 10:00:32 AM"
    },
    {
        name: "Anonymous",
        message: "Где ты и с кем.   Ты сегодня меня потеряла.",
        date: "4-05-3005 10:30:45 AM"
    },
    {
        name: "Anonymous",
        message: "Я растворяюсь в толпе. Заливаю печаль, закрываю глаза.",
        date: "4-07-3005 11:00:04 AM"
    },
    {
        name: "Anonymous",
        message: "И лучше мне не мешать, я хочу танцевать.",
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
const pageID = "page2"; // Unique identifier for each HTML page
postBtn.addEventListener("click", () => addPost(pageID));
window.addEventListener('load', () => loadPosts(pageID));