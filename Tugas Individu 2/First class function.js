const foo = function() {
    console.log("foobar");
}
foo();

function nightmare() {
    return "Synyster, ";
}
function mia(syn, name){
    console.log(syn()+name);
}
mia(nightmare,"Javascript!");

function nightmare(){
    return function(){
        console.log("Hello!");
    }
}