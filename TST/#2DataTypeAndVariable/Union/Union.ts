// Union types are used when a value can be more than a single type.

function stausCode(code:string | number | boolean){
    console.log(`My Status is ${code}`);
}

stausCode(404)
stausCode('404')
stausCode(true)
