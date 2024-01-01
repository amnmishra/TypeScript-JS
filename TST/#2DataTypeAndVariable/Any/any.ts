// Any is type that disables type checking and effectively allows all types to  used
let v: any = true;
v = "string"; 
console.log(Math.round(v));