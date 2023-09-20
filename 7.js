// conditional expressions:-
// if else elseif

let a = prompt('hey whats your age..?') //the prompt o/p always a string so you have to do a type casting to number.
a = Number.parseInt(a)//did type casting
console.log(typeof a) 
 if (a<0) {
    alert('not vaild age..!');
 }
  else if (a<9 ||a==9 ) {
    alert('go to home kid');
  } 
  else if(a>9 && a<18)
  {
    alert('come when you get 18 years old');
 }
 else if(a>18 || a==18){
    alert('you are welcome..!')
 }
 else{
    alert('invalid input entered..!')
 }

//  very important ternary operators:-
 console.log('you can',(a<18? 'not drink' : 'drink'))
