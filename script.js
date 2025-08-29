// calculate the discounted price 
// let price = 100;
// let discount = 20;
// let finalPrice = price - discount;

let names = ["peter", "John", "james", "Mathew"];


names.forEach((name) => {
    console.log(name);
})

// for (let name of names) {
//     console.log(name)
// }

// DRY -> Do not repeat yourself 
// for (let i = 0; i < names.length; i = i + 1) {
//     // console.log(names[i]);
// }

// let i = 0;

// while (i < names.length) {
//     console.log(names[i]);
//     i += 1
// }



// let adult = false;
// let age = 20;

// if (age >= 18 && age <= 25) {
//     console.log("You are a young adult");
// }else if(age >= 26 && age <=35) {
//     console.log("you are a youthful Adul");
// }
//  else if(age > 35) {
//     console.log("you are a senior citizen");
    
//  } else {
//     console.log("You are still a child");
// }

// if (!adult) {
//     console.log("kindly go home");
// }

// console.log(age == 20);



// let num1 = 10;
// let num2 = 20;

// let total = num1 + num2;

let test = (num1, num2) => {
    console.log(num1 + num2);
}



// console.log("pass function as a value", test());


test(1000, 2000)
// greetings()


let name = "peter";

// console.log(name.toUpperCase());

function greetings() {
    console.log("Hello world");
}

function highOrder(func) {
    func()
}


// highOrder(function() {
//     console.log("Hello world from ananymous");
// }
// )