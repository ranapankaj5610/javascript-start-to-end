// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //Basiically previously we see that we are not using that much colon ; in js but here to stop the execution of the iife we have to use the colon.


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('pankaj') //here pankaj is an argument which is passed to the parameter name.
