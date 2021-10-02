//We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']
//  let array = ["apple","mango","banana","orange"];
//  let [v1,v2,v3,v4] = array;
//  console.log(v3);

//We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}

// let obj ={
//     name:'Tooba',
//     age:'22',
//     email:'tooba.fazal75@gmail.com'
// }
// let {name,age,email} = obj;
// console.log(email,age,name);
//A function is taking 5 arguments and You have to pass it through an array.
// let arr = [1,2,3,4,5]

//  func = ((v1,v2,v3,v4,v5) => {
//     console.log(v1,v2,v3,v4,v5);
// })
// let myfunc =[1,2,3,4,5]
// func(...myfunc)



//Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value
//let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
//let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']


let firstNames = ['maryam', 'hira', 'faiza', 'aisha'];
let lastNames = ['khan', 'ayub', 'aziz', 'yasin'];

if (firstNames.length === lastNames.length){
    let std1 = firstNames.map((a)=>{
        // let std2 = lastNames.map((b)=>{
    
        //     return std1[a] + std2[b];
        // })
                return a + lastNames[0];

    })
    console.log(std1);
}
else{
    console.log("array length is not equal")
}



//Create an arrow function that takes array as an input and make each element double and then return an array 
// let arr = [1,2,3]
// let array = +prompt("enter your array value");
// arr.push(array);

// let double = arr.map((a)=>{
//     return a*a;
// })
// console.log(arr);
// console.log(double)


//Create an arrow function that takes a number and return square of a number

// let arrow = ()=>{
//     let input = +prompt("enter your number");
//     return input * input;

// }
// console.log(arrow());


/*question: `var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
which alert will run
*/
// var authenticated=false;
// var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed'));
// console.log(allowed);

// The answer is you are not allowed 
/*
question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        */
//         var age = 12;
//         var canDrive = age > 18 ? 'yes' : 'no';
//          console.log(canDrive);
//          no you can not drive 
/*
question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */
        // const dog='snickers'
        // logdog(dog);
        // function logdog(dog){
        //     console.log(dog)
        // }
        //  function go(){
        //      const dog='sunny';
        //      logdog(dog)
        //  }

//let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here
// let text = `He's often called "Johnny"`;
// console.log(text);
// answer is "He is often called Johnny"

 
/*function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
// welcomeMsg("Faiza")
// welcomeMsg()
I have called funtion twice , share the answer what is printed each time
*/

// function welcomeMsg(name = "Everyone") {
//     let msg = "Welcome " + name
//     console.log(msg)
// }
// welcomeMsg("Faiza")
// welcomeMsg()

//make a promise that resolves after 5 sec. Use setTimeOut for resolve.
// let sec = 4;
// var mypromise = new Promise((resolved , reject)=>{
//     setTimeout(()=>{
//         sec > 5 ? resolve('yes') : reject('no');
//         // if(sec<5){
//         //     resolved("resolved");
//         // }
//         // else{
//         //     reject("reject");

//         // }

//     },5000);
// });
// mypromise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

//  let timer = 5;
// let prom = new Promise((resolve , reject)=>{
     
//         setTimeout(() => {
//             if(timer < 6){
//             resolve('resolve after 5 sec')}
//             else{
//                 reject('sorry')
//             };
//           }, 5000);
          
// });
// prom
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
