
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
let newPosts = response.json();
return newPosts
}).then(posts=>{

    const currentPost = JSON.parse(localStorage.getItem('post'));


   posts.forEach(post=>{
       if(post.id === currentPost){

           let postDiv = document.createElement('div');
           postDiv.classList.add('mainsPostDiv');
           document.body.append(postDiv);

           let arrPost=[
               {userId:post.userId},
               {postId:post.id},
               {title:post.title},
               {body:post.body}
           ];

           arrPost.forEach(obj=>{
               Object.keys(obj).forEach(key=>{

                   let postInfo = document.createElement("p");
                   postDiv.appendChild(postInfo);
                   postInfo.innerText =`${key}:${obj[key]}`
               })
           })
       }
   });

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function (response){
            let coments = response.json();
            return coments
        })
        .then(coments=>{

            let comentsWrap = document.createElement('div');
            comentsWrap.classList.add('hide');
            document.body.append(comentsWrap);

            coments.forEach(coment=>{

                if(coment.postId === currentPost){


                    let comentDiv = document.createElement('div');
                    comentDiv.classList.add('coment');
                    comentsWrap.appendChild(comentDiv);

                    let arrComent = [
                        {postId:coment.postId},
                        {id:coment.id},
                        {User_name:coment.name},
                        {email: coment.email},
                        {body:coment.body}
                    ];

                    arrComent.forEach(obj=>{
                        Object.keys(obj).forEach(key=>{
                            let comentInfo = document.createElement("p");
                            comentDiv.appendChild(comentInfo);
                            comentInfo.classList.add('comentText');
                            comentInfo.innerText =`${key}: ${obj[key]}`
                        })
                    });

                }
            })

        })
});

