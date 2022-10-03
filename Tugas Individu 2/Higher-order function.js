const hiFunction = function(){
    return 'Hello'
};
hiFunction();

function iUseFunction(func){
    return func();
}
iUseFunction(function (){ return 42 });

function iRetrunFunction() {
    return function() { return 42 };
}
const myFunc = iReturnFunction();
myFunc();