console.log(document);
document.title = "learning Dom";
console.log(document.title);
console.log(document);

//selctors: 1. getElementById
        //  2.getElementsByClassName
        //  3. getElementsByTagName
        //  4.querySelector
        //  5.querySelectorAll

let hello = document.getElementById("jam");
console.log(hello);

let helo = document.getElementsByClassName("box");
console.log(helo);

let hel = document.getElementsByTagName("p");
console.log(hel);

let he = document.querySelector("h3");
console.log(he);

let hero = document.querySelectorAll("#jam");
console.log(hero);

let her = document.querySelectorAll(".box");
console.log(her);