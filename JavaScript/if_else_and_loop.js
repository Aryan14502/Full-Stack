var a = "aryan";


if (typeof a === "string"){
    console.log("a is a string");
} else if (typeof a === "number"){
    console.log("a is a number");
} else {
    console.log("a is neither a string nor a number");
}


var c = 0;
for (let i = 0; i<a.length; i++) {
    c = c+i;
}

console.log(c);

const course = "OS";

switch (course) {
    case "DSA":
        console.log("This is DSA course");
        break;
    case "DBMS":
        console.log("This is DBMS course");
        break;
    case "OS":
        console.log("This is OS course");
        break;
    default:
        console.log("This is not a valid course");
        break;
}

let i = 0;

while(i < a.length) {
    console.log(a[i]);
    i++;
}

let b = 10;

do {
    console.log(b);
    b = b - 1;
} while (b > 0);

