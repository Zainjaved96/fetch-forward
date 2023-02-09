console.log("connected");
var cardBody = document.getElementById("card-body");
var users;

function home() {
  location.href = "/";
}

// Event Listener for User Button
function getUsers() {
  // Fetching Data
  console.log("getting users");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    // Getting Response
    .then(function (response) {
      users = response;
      // Removing Whatever was in the Card
      cardBody.innerHTML = "";
      users.forEach((user, index) => {
        const userName = user.name;
        const userId = user.id;
        const html = `<div class="profile py-3 px-3 mt-2 d-flex justify-content-start align-items-center">
                <div class="img-div text-center">
                    <img  class="profile-img" src="https://xsgames.co/randomusers/assets/avatars/male/${
                      index + 1
                    }.jpg" width="40%" alt="">
                </div>
                <div class="profile-text text-start d-flex flex-column gap-1">
                    <span class="profile-name ">${userName}</span>
                    <span class="text-muted">${user.email}</span>
                    <div>
                    <a href="users.html?id=${userId}" class="btn btn-outline-light visit-btn">Visit Profile</a>
                    </div>
                </div>
          </div>`;
        cardBody.innerHTML += html;
      });
    });
}

// Event Listener for Comments Button
function getComments() {
  // Fetching Data
  console.log("getting comments");
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    // Getting Response
    .then(function (json) {
      comments = json;
      this.comments = json;
      comments = comments.slice(0, 9);
      // Removing Whatever was in the Card
      cardBody.innerHTML = "";
      comments.forEach((comment, index) => {
        const html = `<div class="profile py-3 px-3 mt-2 d-flex justify-content-start align-items-center">

                <div class="profile-text text-start d-flex flex-column gap-1">
                    <h4 class="">${comment.name}</h4>
                    <span class="text-muted">${comment.body.substring(
                      0,
                      20
                    )}...<a href="comments.html?id=${comment.id}" >Read More</a>
                    </span>
                    <span class="text-muted">Author : ${comment.email}</span>
                    <div>
                </div>
                </div>`;
        cardBody.innerHTML += html;
      });
    });
}

// Event Listener for Posts Button
function getPosts() {
  // Fetching Data
  console.log("getting posts");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    // Getting Response
    .then(function (json) {
      console.log("converted to json");
      posts = json;
      console.log(posts);
    //   reducing to 10 
      posts = posts.slice(0, 9);
      // Removing Whatever was in the Card
      cardBody.innerHTML = "";
      posts.forEach((post, index) => {
       const html =  `<div class="profile py-3 px-3 mt-2 d-flex justify-content-start align-items-center">
        <div class="profile-text text-start d-flex flex-column gap-1">
            <h4 class="">${post.title}</h4>
            <span class="text-muted">${post.body} <a href="posts.html?id=${post.id}"> read more</a>
            </span>
            <span class="text-muted">Post ID : ${post.id}</span>
            <div>
        </div>
        </div>`;
        cardBody.innerHTML  += html
      });

      
    });
}

// Run Script Based on Urls Routing

if (location.href.includes("/users")) {
  const url = location.href;
  const userId = url.split("=")[1];
  // Fetching Data
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    // Getting Response
    .then(function (json) {
      this.user = json;
      const user = json;
      //  increment id and set on next url
      // if it exceeds 10 then go back to 1
      const nextId = user.id + 1;
      const nextUrl =
        nextId <= 10 ? `/users.html?id=${nextId}` : "/users.html?id=1";
      const html = `<div class="profile py-3 px-3 d-flex flex-column">
                    <div class="profile-intro d-flex justify-content-start align-items-center">
                        <div class="img-div text-center">
                            <img  class="profile-img" src="https://xsgames.co/randomusers/assets/avatars/male/${userId}.jpg" width="40%" alt="">
                        </div>
                        <div class="profile-text text-start d-flex flex-column gap-1">
                            <span class="profile-name ">${user.name}</span>
                            <span class="text-muted text-center">${
                              user.company.name
                            }</span>
                        </div>
                    </div>
                    <div class="profile-desc mt-5 mb-2">
                        <h4 class="text-center" >More About Me </h4>
                        <p class="email"> <span class="text-muted"> Email </span>:  ${
                          user.email
                        }</p>
                        <p class="address"> <span class="text-muted"> Address </span>: ${
                          user.address.street
                        }, ${user.address.city}.</p>
                        <p class="address"> <span class="text-muted"> Phone </span>: ${
                          user.phone.split(" ")[0]
                        }</p>
                        <p class="address"> <span class="text-muted"> Catch Phrase </span>: ${
                          user.company.catchPhrase
                        }</p>
                        <p class="address"> <span class="text-muted"> Website </span>: ${
                          user.website
                        }</p>
                    </div>
                    <div class="next-button">
                        <a class="btn btn-outline-light" href="${nextUrl}" >Next </a>
                    </div>
             </div>`;
             console.log(html)
           document.getElementById("user-body").innerHTML  = html 
    });
}

if (location.href.includes("/comments")) {
  console.log("you are in comments");
  const url = location.href;
  const userId = url.split("=")[1];
  // Fetching Data
  fetch(`https://jsonplaceholder.typicode.com/comments/${userId}`)
    .then((response) => response.json())
    // Getting Response
    .then(function (json) {
      this.user = json;
      const comment = json;
      //  increment id and set on next url
      // if it exceeds 10 then go back to 1
      const nextId = comment.id + 1;
      const nextUrl =
      nextId <= 10 ? `/comments.html?id=${nextId}` : "/comments.html?id=1";
      const html = `<div class="profile  py-3 px-3 d-flex justify-content-start align-items-center">

           <div class="profile-text text-start d-flex flex-column gap-1">
               <h4 class="">${comment.name}</h4>
               <span class="text-muted">${comment.body}</span>
               <span class="text-muted">Author : ${comment.email}</span>
               <div>
           </div>
          
           <div class="next-button">
            <a class="btn btn-outline-light" href="${nextUrl}" >Next </a>
            </div>
        </div>
           
       `;

      document.getElementById("comment-body").innerHTML = html;
    });
}

if (location.href.includes("/posts")) {
  console.log("you are in posts");
  const url = location.href;
  const userId = url.split("=")[1];
  // Fetching Data
  fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then((response) => response.json())
    // Getting Response
    .then(function (json) {
        this.user = json;
        const post = json;
        //  increment id and set on next url
        // if it exceeds 10 then go back to 1
        const nextId = post.id + 1;
        const nextUrl =
        nextId <= 10 ? `/posts.html?id=${nextId}` : "/posts.html?id=1";
        const html = `<div class="profile  py-3 px-3  d-flex justify-content-start align-items-center">
  
             <div class="profile-text text-start d-flex flex-column gap-1">
                 <h4 class="">${post.title}</h4>
                 <span class="text-muted">${post.body}</span>
                 <span class="text-muted">Post ID : ${post.id}</span>
                 <div>
             </div>
            
             <div class="next-button">
              <a class="btn btn-outline-light" href="${nextUrl}" >Next </a>
              </div>
          </div>
             
         `;
  
        document.getElementById("post-body").innerHTML = html;
    });
}

if (location.href.includes("/all-users")){
  getUsers()
}
if (location.href.includes("/all-comments")){
  getComments()
}
if (location.href.includes("/all-posts")){
  getPosts()
}


