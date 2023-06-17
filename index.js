var x = "Global Scope";

function smile() {
    var x = "Local scope"
    console.log(x); // Local Scope 
}

smile();
console.log(x) // global scope 
