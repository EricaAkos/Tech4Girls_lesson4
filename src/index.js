//let num1 = 10;
//let num2 = 15;
//let result = num1 + num2;
//console.log(result);
//alert(result)

//let num3 = 3;
//let num4 = 5;
//let result2 = num3 + num4;
//console.log(result2);
//alert(result2)

//function addTwoNumbers(n01, n02){
   // let additon = n01 + n02;
   // console.log(additon)
//}

//addTwoNumbers(123, 321);
//addTwoNumbers(98, 100);
//addTwoNumbers(13, 103);

//function sayHello(){
    //let user = prompt("What is your name?");
    //alert(`Hello ${user}`);
//}
//sayHello();

//function cookRice(salt, water, rice){
    //alert(`I cooked ${rice} cups of rice with ${salt} a pinch of salt, with ${water} cups of water`)
//}
//cookRice("half", "500ml", 10);

// function order(howmany, size){
//    let many = prompt(`How many burgers would you like?`);
//    let big = prompt(`How big should the burger be?`);

//    function order(howmany, size){
//      alert(`you just ordered ${howmany} ${size} burgers.`)
//    }
// }

// order(many, big);

function checkAge(){
    let age = prompt("What is your age?");
    if (age && age < 6){
        alert(`You are ${age} years old and you are too young.`);
    }else if (age && age >= 6 && <= 17){
        alert(`You are ${age} years old and you have limited options.`);
    }else if (age && age >= 18){

    }
}
