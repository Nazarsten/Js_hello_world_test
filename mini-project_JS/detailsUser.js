

fetch(' https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        let newbodyUsers =response.json();
        return newbodyUsers
    }).then(fullUsers =>{
    let   currentUsers= JSON.parse(localStorage.getItem("users") || "[]");

    let userWrap = document.createElement('div');
    document.body.append(userWrap);
    userWrap.classList.add('wrapUser');

fullUsers.forEach(user=>{
    if( user.id === currentUsers) {

        let useR = document.createElement('div');
        document.body.append(useR);

        let arr =[
            {id:user.id},
            {Name:user.name},
            {Username:user.username},
            {Email:user.email},
            {street:user.address.street},
            {Suite:user.address.suite},
            {City:user.address.city},
            {Zipcode:user.address.zipcode},
            {Suite:user.address.suite},
            {Lat:user.address.geo.lat},
            {Lng:user.address.geo.lng},
            {Phone:user.phone},
            {Website:user.website},
            {Name:user.company.name},
            {CatchPrase:user.company.catchPhrase},
            {Bs:user.company.bs}];

     arr.forEach(obj=>{
         Object.keys(obj).forEach(key=>{

             let userInfo = document.createElement("p");
             userWrap.appendChild(userInfo);
             userInfo.innerText =`${key}:${obj[key]}`
         })
     })
   }
 });
    let buttonPost = document.createElement('button');
        buttonPost.innerText='post of current user';
        buttonPost.classList.add('buttonPostCurrentUser');
        userWrap.appendChild(buttonPost);

        buttonPost.onclick=function () {
            wrapPosts.classList.toggle('hide')
         };

        let wrapPosts = document.createElement('div');
        wrapPosts.classList.add('wrapPosts','hide' );
        document.body.append(wrapPosts);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                let newbodyUsers =response.json();
                return newbodyUsers

            }).then(posts =>{
                for ( let post of posts){
                    if (post.userId === currentUsers){
                        let tittleDiv = document.createElement('div');
                        tittleDiv.classList.add('postTitle');
                        wrapPosts.appendChild(tittleDiv);
                        tittleDiv.innerText=`Title: ${post.title}`;

                        let detailPost = document.createElement('button');
                        detailPost.classList.add('buttonPostCurrentUser');
                        detailPost.innerText='details';
                        tittleDiv.appendChild(detailPost);

                        detailPost.onclick =function () {
                            window.location.href = 'post.html';
                            localStorage.setItem("post", JSON.stringify(post.id));
                        }
                    }
                }
        })
});

















































//----------------------------------------------------------------------------------
// useR.innerHTML =`id${user.id}
//                        <p>name:${user.name}
//                        <p>username:${user.username}
//                       <p>email:${user.email}
//                       <p>address:
//                        street:${user.address.street}
//                       <p> suite:${user.address.suite}
//                       <p> city:${user.address.city}
//                        <p>zipcode:${user.address.zipcode}
//                       <p> suite:${user.address.suite}<p>
//                             <p>geo:at: ${user.address.lat}<p>
//                             lng: ${user.address.lng}
//                             phone:${user.phone}
//                             website:${user.website}
//                           company:
//                             name:${user.company.name}
//                            catchPrase:${user.company.catchPhrase}
//                             bs:${user.company.bs}`
//---------------------------------------------------------------------------------------------------
//     let   currentUsers= JSON.parse(localStorage.getItem("users") || "[]");
//
//         for(fullUser of fullUsers) {
//            for (item in fullUser) {
//                if (currentUsers === fullUser.id && typeof fullUser[item] =='string') {
//                    let infoAboutUser = document.createElement('div');
//                    infoAboutUser.innerText = item + ":" + fullUser[item];
//                    document.body.append(infoAboutUser);
//                }
//               else if( typeof fullUser[item] ==='object' && currentUsers === fullUser.id){
//
//                    let ul = document.createElement('ul');
//                    ul.innerText=item;
//                    document.body.append(ul);
//
//                    for( newitem in fullUser[item]){
//                        if(newitem !== 'geo') {
//                            let li = document.createElement('li');
//                            ul.appendChild(li);
//                            li.innerText = newitem + ':' + fullUser[item][newitem];
//                        }
//                    }
//                     if (typeof fullUser[item][newitem] !=='string' && currentUsers === fullUser.id){
//                         console.log(3);
//
//                        let ul = document.createElement('ul');
//                         ul.innerText=newitem;
//                        document.body.append(ul);
//
//                        for(newitem1 in fullUser[item][newitem] ){
//                            let li = document.createElement('li');
//                            ul.appendChild(li);
//                            li.innerText = newitem1+':'+fullUser[item][newitem][newitem1]
//                        }
//                    }
//                }
//            }
//         }
//
//
// });

