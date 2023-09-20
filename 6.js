// variables and data types:-

// BBUNNSS=Boolean Bigint undefined null Number String Symbol

let a4= true;
let b4 = BigInt('972965923');
let c4 = undefined; //not necessory to enter this type default is undefined.
let d4 = null;
let e4 = 374;
let f4 = 'pease';
let g4 = Symbol('this is symbol');
console.log(typeof(a4))
console.log(typeof(b4))
console.log(typeof(c4))
console.log(typeof(d4))
console.log(typeof(e4))
console.log(typeof(f4))
console.log(typeof(g4))

const a3 ={
    pro :'mdsjoihkgger',
    cs : 'chennai super kings'
}
a3['pro']='pramod'
console.log(a3)
console.log(a3['pro'])

// type operators in js:-

// 1.airthmatic operator:-
let a = 5;
let b = 5;
console.log('this is a+b=', a + b);
console.log('a-b is',a-b);
console.log('a/b is',a/b);
console.log('a*b is',a*b);
console.log('a**b is',a**b);
console.log('a**b is',a**b);
console.log('a%b is',a%b);
console.log('--a is',--a);
console.log('a-- is',a--);
console.log('a++ is',a++);
console.log('++a is',++a);

// 2.Assignment operators-
// =, += ,-= , *= ,/= ,%= ,**=

a +=2//same as a=a+2
console.log('this is for a+=_', a)
a -=2 //same as a=a-2
console.log('this is for a-=_', a)


// 3.comparision operators:-
// ==, != ,=== ,!== , > ,< ,>= , =< , ? and they return value
console.log('a==b',a==b)
console.log('a!=b',a!=b)
console.log('a===b',a===b)
console.log('a!==b',a!==b)//if type also diffrent then false is output


//4. logical operators:-
// && add, ! not , || or
let x =5;
let y = 6;
// for or operator
console.log(x>y && x==5)
console.log(x<y && x==5)
// for not operators:-
c6 = true
console.log(!c6)
// for or operators:-
console.log(x<y || y<x)
console.log(x>y || y<x)