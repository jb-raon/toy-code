// 프로토 타입 체이닝

// var add = function sum(x, y) {
//     return x + y;
// }
// console.log(add(3, 4));
// console.log(sum(3, 4));

// function add(x, y) {
//     return x + y;
// }

// console.dir(add);

// add.result = add(3, 2);
// console.dir(add.result);
// add.status = "ok";
// console.dir(add.status);
// console.dir(add);

// var foo = function(func) {
//     func();
// }
// foo(function() {
//     console.log('Function');
// })
// console.dir(foo);

var foo = function() {
    return function() {
        console.log('this');
    }
}

foo();
var bar = foo();
bar();

function child() {
    var b = 300;
    console.log(b);
}
child();