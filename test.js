window.onload = () => {


function random_item(who){
who[Math.floor(Math.random()*who.length)];

}

function random_item(what){

return what[Math.floor(Math.random()*what.length)];
}
function random_item(when){
return when[Math.floor(Math.random()*when.length)];
}
let who =[ 'Mama', 'Madonna', 'Prince', 'Trump'];
let what=[ 'calls', 'jumps', 'gets', 'goes'];
let when=[ 'after the elections', 'right of the bat', 'now', 'later'];

//console.log(random_item(who) + " "+ random_item(what)+ " "+ random_item (when));
document.querySelector('#excuse').innerHTML= random_item(who) + " "+ random_item(what)+ " "+ random_item (when)
}
// function arrayposition(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// let firstwordposition= console.log (arraposition (0,3));

// let secondwordposition= console.log (arraposition (0,3));

// let thirdwordposition= console.log (arraposition (0,3));

// let excuse =

// const firstwordposition = [];
// const secondwordposition = [];
// const thirdwordposition =[]
// console.log(array1.concat(array2));


// console.log(str1.concat(' ', str2));
//console.log('hello worl');
//alert('hi');


