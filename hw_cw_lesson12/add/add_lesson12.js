//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
    let userJson = response.json();
    return userJson
}).then( users =>{
    for ( let user of users){
        let wrapp = document.createElement('div');
        wrapp.classList.add('wrapper');
        document.body.append(wrapp);

        let userDiv = document.createElement("div");
        userDiv.innerText =user.name;
        wrapp.appendChild(userDiv);

        let buttonUser = document.createElement('button');
        buttonUser.innerText='show posts';
        wrapp.appendChild(buttonUser);

            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                let postJson = response.json();
                return postJson

            }).then(posts =>{

                let postWrapper = document.createElement('div');
                postWrapper.classList.add('postWrapper');
                wrapp.appendChild(postWrapper);

                for ( let post of posts){
                    if(post.userId === user.id) {
                            let postDiv = document.createElement('div');
                            postDiv.innerText = post.id+'.'+post.title;
                            postDiv.classList.add('post');
                            postWrapper.appendChild(postDiv);

                            let comentsButton = document.createElement('button');
                            comentsButton.innerText='read comments';
                            comentsButton.classList.add('button_of_coments');
                            postDiv.appendChild(comentsButton);

                        fetch('https://jsonplaceholder.typicode.com/comments')
                            .then(function (response) {
                                let comentsJson = response.json();
                                return comentsJson

                            }).then(coments=>{

                            let comentWrapper = document.createElement('div');
                            comentWrapper.classList.add('comentWrapper');
                            postDiv.appendChild(comentWrapper);

                            for ( let coment of coments){
                                if(coment.postId === post.id){
                                    let textComent = document.createElement('div');
                                    textComent.classList.add('coments');
                                    textComent.innerText = coment.id +'.'+coment.body;
                                    comentWrapper.appendChild(textComent);
                                }
                                comentsButton.onclick = ()=>{
                                    comentWrapper.classList.toggle('comentWrapper');
                                };
                                buttonUser.onclick = ()=>{
                                    postWrapper.classList.toggle('postWrapper');
                                };

                            }
                        })

                    }

                }

         })
    }
});

/////-------------------------------------

