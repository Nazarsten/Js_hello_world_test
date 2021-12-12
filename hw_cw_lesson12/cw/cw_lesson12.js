//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
    let jsonBody = response.json();
    return jsonBody;
}).then(posts=>{
    for ( let post of posts) {
        let postDiv = document.createElement('div');
        let button = document.createElement('button');

        postDiv.innerText = post.id + ' - post';
        button.innerText = 'coments';
        postDiv.classList.add('post');

        document.body.append(postDiv);
        postDiv.appendChild(button);

                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(function (response) {
                        let comentBodyJson = response.json();
                        return comentBodyJson
                    })
                    .then(coments => {
                        let wrapp = document.createElement("div");
                        wrapp.classList.add('wrapp');
                        postDiv.appendChild(wrapp);

                    for (let coment of coments){
                        if (coment.postId === post.id) {
                            let divComents = document.createElement('div');
                            divComents.innerText = `${coment.id} -coment \n ${coment.body} `;
                            wrapp.appendChild(divComents);
                            divComents.classList.add('coment');
                            }
                    }
                    button.onclick =function () {
                        wrapp.classList.toggle('wrapp')
                    }
                });

    }
});