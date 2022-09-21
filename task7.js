// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async ()=>{
//     const promiseWifeBringingTickets = new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             resolve('ticket');
//     }, 3000)
//     });

// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     console.log('wife: i have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject)=>resolve(`${t} popcorn`));
//     });
//     const getButter = getPopcorn.then((t)=>{
//         console.log('husband: i got some popcorn');
//         console.log('husband: we should go in');
//         console.log('wife: i need butter on my popcorn');
//         return new Promise((resolve, reject)=>resolve(`${t} butter`));
//         });

        //getButter.then((t)=> console.log(t));

// const getcolddrinks = getButter.then((t)=>{
//             console.log('wife: i got colddrinks');
//             console.log('husband: we should go in');
//             console.log('wife: ok lets go');
//             return new Promise((resolve, reject)=>resolve(`${t} colddrink`));
//             });
    
//        getcolddrinks.then((t)=> console.log(t));
    


    // const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));
    // const addButter = new Promise((resolve, reject)=> resolve(`butter`));
    // const getColdDrinks = new Promise((resolve, reject)=> resolve(`colddrinks`));
    


    //let ticket = await promiseWifeBringingTickets;
    // console.log(`wife: i have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no i am hungry')

    //let popcorn = await getPopcorn;
    // console.log(`husband: i got some ${popcorn}`);
    //     console.log('husband: we should go in');
    //     console.log('wife: i need butter on my popcorn');

      //  let butter = await addButter;
// console.log(`husband: i got some ${butter} on popcorn`);
// console.log(`husband: anything else darling?`);
// console.log(`wife: lets go we are getting late`);
// console.log(`husband: thank you for the reminder*grins*`);

// let colddrinks = await getColdDrinks;
// console.log(`wife: i got colddrink`);
 
// let [popcorn, butter, colddrinks] = await Promise.all([getPopcorn, addButter, getColdDrinks])
//     console.log(`${popcorn}, ${butter}, ${colddrinks}`)

//     return ticket;
// }
// preMovie().then((m)=> console.log(`person3: shows ${m}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

//how to handle with array
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async ()=>{
//     const promiseWifeBringingTickets = new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             reject('ticket');
//     }, 3000)
//     });
//     let ticket
//     try{
//      ticket = await promiseWifeBringingTickets;
//     }
//     catch(e){
//      ticket = 'sad face';
//     }
//     return ticket;
// }
// preMovie().then((m)=> console.log(`person3: shows ${m}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

//testing

const testUserForm = async ()=>{
    const loadUserForm = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve('page loaded');
    }, 3000)
    });
    const enterUserName = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve('user enterd');
    }, 3000)
    });
    const verifyUserDetails = ()=>{

    }
    await loadUserForm;
    await enterUserName;
    const testResult = verifyUserDetails();
    
    return testResult;
}
// preMovie().then((m)=> console.log(`shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');