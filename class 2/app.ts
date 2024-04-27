type objType = {
    name:string,
    age:number,
    id:number,
    address?:"Abdullah"|"Humza",
}

let obj:objType = {
    name:"Abdullah",
    age:20,
    id:1,
}

obj.address = "Abdullah";

// ========================Arrays========================

let a:objType[] = [
    {
        name:"Abdullah",
        age:20,
        id:1,
    },
     
]

// ========================Fucntions========================
function abc(){
    console.log("Hello World")
    return function(){
        console.log("Inside Function")
    }
}

let functionCall  = abc();
functionCall();

// or by this

abc()();


// a function returning a function is called higher order function
// a function taking a function as an argument is called callback function


let arrowFunction = () => {}
//or but only when single parameter is there
let anotherArrowFunction = parameter => {}