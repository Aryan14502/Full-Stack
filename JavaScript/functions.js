function add(a,b,c){
    return a+b+c;
}

console.log(add(2,3,0));

function addInfiniteNums(a,b,...numbers) {
    let sums = a+b;
    for (let i=0; i<numbers.length; i++) {
        sums += numbers[i];
    }
    return sums;
}

console.log(addInfiniteNums(2,3,4,5,6,7,8,9,0,-1.2))

function a( ) { 
    var i = 20; 
    function b( ) { 
        function c( ) { 
        console.log(i); // Prints - 20 
        } 
        c( );
    }
    b( );
}
a( );

print = ()=> {
    console.log("Hello World");
}
print();

sum = (a,b)=> a+b;
console.log(sum(10,20));