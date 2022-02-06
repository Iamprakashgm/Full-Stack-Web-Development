// async function
// async function demo(){         //Returns a Promise
//     return 5;                  //Without return it acts as normal function
// }
// demo().then(function(result){
//     console.log(result)
// })
// async function fetchPosts()
// {
//     // try{             //Tries to findout error
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts') //waits and returns JS object
//     let posts = await response.json()                //waits and returns JS array of objects
//     // console.log(response.json())                     //returns Promise
//     console.log(posts)
//     // }
//     // catch{              //logs error
//     //     console.error('Error Occured')
//     // }
// }
// fetchPosts()

async function getFetchPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  posts.forEach(async (post) => {
    let commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    );
    let comments = await commentsResponse.json();
    // console.log(posts, comments)
    let postDiv = document.createElement("div");
    postDiv.classList.add("posts");
    let title = document.createElement("h2");
    title.classList.add("title");
    let body = document.createElement("p");
    body.classList.add("body");
    let commentsTitle = document.createElement("h3");
    title.innerText = post.title;
    body.innerText = post.body;
    postDiv.appendChild(title);
    postDiv.appendChild(body);
    document.body.appendChild(postDiv);
    commentsTitle.innerText = "Comments:";
    document.body.appendChild(commentsTitle);
    comments.forEach((comment) => {
      let postDiv1 = document.createElement("div");
      postDiv1.classList.add("comments");
      let commentbody = document.createElement("p");
      let name = document.createElement("p");
      let email = document.createElement("p");

      commentbody.innerHTML = `<strong>Comment:</strong> <i> ${comment.body} </i>`;
      name.innerText = `Name: ${comment.name}`;
      email.innerText = `Email: ${comment.email}`;

      postDiv1.appendChild(commentbody);
      postDiv1.appendChild(name);
      postDiv1.appendChild(email);
      document.body.appendChild(postDiv1);
    });
  });
}
getFetchPosts();
