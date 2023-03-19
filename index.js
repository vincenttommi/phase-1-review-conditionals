// // const age = 20;


// // let isAdult;


// // if(age >= 18){

// //     isAdult = true;
// // }


// // console.log(isAdult);


// // 

// // const age = 50;

// // let isAdult;

// // if(age >= 80 ){


// // isAdult = true;

// // }

// // console.log(isAdult);


// //using tenary expressions

// // const age = 30;

// // let isAdult;

// // age >= 18 ? (isAdult = true) : (isAdult = false);

// // console.log(isAdult);

// //Remember that a ternary is an expression 



// // const age = 26;
// // const  isAdult = age >= 18 ? true : false;

// // console.log(isAdult);


// // else if statemens

// const age = 20;

// let isAdult, canWork, canEnlist, canDrink;

// if (age >= 21) {
//     isAdult = true;
//     canWork = true;
//     canEnlist = true;
//     canDrink = true;
// } else if (age >= 18) {
//     isAdult = true;
//     canWork = true;
//     canEnlist = true;
// } else if (age >= 16) {
//     canWork = true;
// }
// // => true

// isAdult;
// // => true

// canWork;
// // => true

// canEnlist;
// // => true

// canDrink;

// // => undefined
// console.log(isAdult,canEnlist,canEnlist,canDrink);


// Nested if statements


const age = 17;

let isAdult,canWork,canEnlist, canDrink;

if(age >= 16){

    canWork = true;


    if(age >= 18){

    isAdult = true;
    canEnlist = true;

    if(age >= 21){


        canDrink = true;
    }

    }

}

console.log(canWork);