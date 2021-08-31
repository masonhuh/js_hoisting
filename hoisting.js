// EXAMPLE
// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


// 1.
// GIVEN //
console.log(hello);
var hello = 'world';
// AFTER HOISTING //
// var hello
// console.log(hello); // log undefined
// hello = 'world';

// 2.
// GIVEN //
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING //
// var needle
// function test()
// needle = 'haystack';
// test();
// var needle = 'magnet';
// console.log(needle); // output 'magnet'

// 3.
// GIVEN //
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING //
// var brendan
// function print(); defined
// console.log(brendan) // output 'super cool'
// 

// 4.
// GIVEN //
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING //
// var food
// function eat() defined
// console.log(food) // output 'chicken'
// food = 'chicken'
// eat();
// food = 'half-chicken';
// console.log(food) // output 'half-chicken'

// 5.
// GIVEN //
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING //
// mean(); // ERROR; mean is not a function

// 6.
// GIVEN //
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING //
// var genre
// function rewind()
// console.log(genre) // output undefined
// genre = "disco"
// rewind()
// var genre
// genre = "rock"
// console.log(genre) // output "rock"
// genre = "r&b"
// console.log(genre) // output "r&b"
// console.log(genre) // output "disco"

// 7.
// GIVEN //
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING //
// var dojo
// function learn()
// dojo = "san jose"
// console.log(dojo) // output "san jose"
// learn()
// dojo = "seattle"
// console.log(dojo) // output "seattle"
// dojo = "burbank"
// console.log(dojo) // output "burbank"
// console.log(dojo) // output "san jose"

// 8.
// GIVEN //
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING //
