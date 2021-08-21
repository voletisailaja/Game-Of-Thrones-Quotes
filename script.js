//async function foo(){
 //let response=await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random')
 //let result=await response.json();
 //console.log(result);
//}
//foo()

async function start(){
let response=await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random')
let result=response.json();
return result
.then((response)=>
{
console.log(result);
document.getElementById('quote').innerHTML=response.sentence;
document.getElementById('author').innerHTML=response.character.name;


});
}
start();
async function getQuote(){
   /* let response=await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random')
    let result=response.json();
    return result
    .then((response)=>
    {
    console.log(result);
    document.getElementById('quote').innerHTML=response.sentence;
    document.getElementById('author').innerHTML=response.character.name;
     });*/
    start();
    }

