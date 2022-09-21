const posts = [
    {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()},
   //{title: 'Post Three', body: 'This is post three', createdAt: new Date().getTime()}
];

let intervalId = 0;
function getPosts(){
    clearInterval(intervalId);
    intervalId=setInterval(()=> {
let output = '';
for(let i=0; i<posts.length; i++){
    output+= `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`;
};
    document.body.innerHTML = output;
    },1000);
}
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push(post);
    
            const error = false;
    
            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong');
            }
        }, 2000)
    });
    }
    const user = {
        username: 'Pragya',
        lastActivityTime: '1st of September'
    }
    function updateLastActivityTime(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                user.lastActivityTime = new Date().getTime();
                resolve(user.lastActivityTime)
            },1000)
        })
    }

    function userUpdatesAPost(){
        Promise.all([createPost, updateLastActivityTime]).then(([createPostresolve, updateLastActivityTimeresolve])=>{
            console.log(updateLastActivityTimeresolve)
        })
        .catch(err=>console.log(err))
    }
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(posts.length>0){
                const lastelement = posts.pop()
                resolve(lastelement);
            }
            else{
                reject("Array is empty now");
            }
        },1000)
    })
}


function create4thPost (post){
    setTimeout(() => {
        posts.push(post);
      
    }, 2000);
}

createPost({title: 'Post three', body: 'This is post three', createdAt: new Date().getTime()})
 .then(()=>{
    getPosts();
    deletePost().then(()=>{
        console.log('Array is empty now')
      getPosts();  
      deletePost().then(()=>{
        getPosts();  
      deletePost().then(()=>{
        getPosts();  
      deletePost().then(()=>{
        getPosts();  
      deletePost().then(()=>{})
        .catch((err)=>{
            console.log('Inside catch block', err)
        })
    }).catch((err) =>{})
    }).catch((err) =>{})
    }).catch((err) =>{})
 }).catch((err) =>{})
}).catch((err) =>{})
.catch(err=> console.log(err));
create4thPost ({title: 'Post Four', body: 'This is post four',  createdAt: new Date().getTime()});
//Async / Await
//  async function init(){
//    await createPost({title: 'Post Three', body: 'This is post three'
//  });
//  getPosts();
// }

// init();

//async await  fetch 
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
     const data = await res.json();

     console.log(data);
}
fetchUsers();


createPost({title: 'Post Three', body: 'This is post three'
})
.then(getPosts)
.catch(err=> console.log(err));

//Promise all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>
setTimeout(resolve, 2000, 'Goodbye')
);

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then (res=> res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));       
