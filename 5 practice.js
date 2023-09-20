let a = 'pramod';
let b = 46;
console.log(a+b)

console.log(typeof a,b)
console.log(typeof (a+b))


// creating object:-

// use only as much you can const for creating Object.

const a2={
    name:'pramod',
    sec : 4,
    'isprincipal' : false
}


// we can't change constant and loop value
// a2 =45

// we can schange inner loop value by adding syntax:-

// for adding:-
a2['giga'] = 'pro'
a2['this is is ']='kya likha hai l'

// for editing:-
a2['name']='boy'

a2['sec']='this is get edied..!'

console.log(a2)

// for only to access perticualar object use this Syntax

console.log(a2.sec)
// or
console.log(a2['name'])
