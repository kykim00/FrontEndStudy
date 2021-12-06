function myFunc() {
    var val1 = "hello";
    return function (){ return val1}
}

let result = myFunc();
result(); // 'hello'

function myFunction(){

    var val1 = "hello";
    return {getVal1 : function(){return val1}}
}

let resultt = myFunction();
resultt.getVal1(); // 'hello'