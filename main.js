// This code initializes a library called Typed.js, which allows for typewriter-style text animation on a web page. 
// The library creates an instance of the Typed object, which takes a selector as its first parameter and an options object as its second parameter.
var typed = new Typed(".text", {
    strings: ["Software Engineer" , "Full Stackdeveloper" , "Web Design"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});