//Anonymous function
// function does not have any name 
// it execute logic there itself 

// 2 function with parameter & without return type 

let temp=function(a:number,b:number){
    console.log("Addition is: "+(a+b));
}

temp(10,20);


// 3 function without parameter & with return type

let temmp =function():number{
    return (8+8);

}


let ress=temmp();
console.log("Addition:"+ress);


///Fat arrow function/ Arrow function 
// 2 function with parameter & without return type 

let m=  (a:number,b:number)=>{
  console.log("Addition :"+(a+b));
}

m(10,20);

// 3 function without parameter & with return type
let n=():number =>{
    return 90+100;
}

let result=n();
console.log("Result: "+result);
