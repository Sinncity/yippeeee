`use strict`;
/*
let hasDriverslicense = false;
const passTest = true;

if (passTest ) hasDriverslicense = true;
if (hasDriverslicense) console.log (`i can drive 👌`);



function logger(params) {
      console.log (`My name is Terrance Parker`)
      
}

// calling /running / invoking function
 logger();
 logger();
 logger();

 function fruitProcessor(apples, oranges) {
       //console.log(apples, oranges);
       const juice = `juices with ${apples} apples and ${oranges} oranges`;
       return juice;
 }


 const appleJuice = fruitProcessor(5, 0);
 console.log (appleJuice)
 console.log(fruitProcessor(5, 0));
 const appleOrangeJuice = fruitProcessor(2, 4);
 console.log (appleOrangeJuice);

// function declaration
 function Age1(birthYear) {
  return 2037 - birthYear;
    }

const age1 = calcAge1(1991);
console.log (age1);
// 

// Function expression
  const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log (age1, age2);









// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



 console.log (yearsUntilRetirement(1991, `Terrance`));
 console.log (yearsUntilRetirement(1999, `Timmy`));


function cutFruitPieces(fruit,) {

      return fruit * 4;
}


const fruitProcessor =   function fruitProcessor(apples, oranges) {

      const applePieces =  cutFruitPieces(apples,);
      const orangePieces = cutFruitPieces(oranges);
       
       const juice = `juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
       return juice;
}
console.log(fruitProcessor(2, 3));

 

const calcAge = (birthYear) => 2037 - birthYear

const yearsUntilRetirement = (birthYear, firstName) => {
      const age = calcAge(birthYear);
      const retirement = 65 - age;

      if (retirement > 0) {
            console.log(`${ firstName} retires in ${ retirement} years`);
            return (`${retirement} years to Go you got this man🎇🎆🎈🎉🎊`);
      } else {
            console.log( `${firstName} has already retired.🥳`);
            return (`Sip Pina Colada🎊🎉🍷`);
      }
}

 console.log (yearsUntilRetirement(1991, `Terrance` ));
 console.log (yearsUntilRetirement(1950, `James` ));
 


 

 const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
 console.log(calAverage(3, 4, 5))
 const scoreDolphins = (calAverage(65, 54, 49));
 const scoreKoalas = (calAverage(66, 54, 44));
 console.log(scoreDolphins, scoreKoalas)
 
     const checkWinner = function (avgDolphins,avgKoalas) {
           if (avgDolphins >= 2 * avgKoalas) {
                 console.log (`Dolphins win ${avgDolphins } vs. ${avgKoalas}`)
                 
           } else if  (avgKoalas >= 2 * avgDolphins) {
           console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`) 
          
                 
       } else { 
           console.log(`No team wins`);
     }
} 
 checkWinner(scoreDolphins, scoreKoalas);

 
 // [arrays]/ data structures

const friend1 = `Micheal`;
const friend2 = `Steven`;
const friend3 =`Peter`;
const friends = [`Michael`,`Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984 , 2008 , 2020);
console.log(friends[ 0 ])
console.log(friends[ 2 ])

console.log((friends [friends.length -1]))

friends[3] = `Jay`
console.log(friends);
// friends =[`bob`, ` alice`];
const firstName = ` Terrance`
const Terrance = [`Terrance`, `Parker`, 2027- 1991,
`SoftwareEngineer`, friends];
friends[4] = `terrance`
console.log(Terrance);
console.log(friends)
console.log(Terrance.length )
console.log(friends.length )



const calcAge = (birthYear) => {

    return   2037- birthYear


}
const years = [1990, 1967, 2002 , 2010 , 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1,age2, age3) ;
const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length -1])];
console.log(ages);




const friends = [`Michael`,`Steven`,`Peter`];
// add elements
const newLength = friends.push(`Jay` , `Terrance`) ;
// adds elements to the beginning of the array
friends.unshift(`Sarah`) 
console.log(newLength ,friends);

// remove elements
friends.pop()  //remove the last element of the array);
friends.shift();
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Terrance`));
// includes to write unconditional
friends.push(23)
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Terrance`));
console.log(friends.includes(`23`));

if (friends.includes(`Peter`)) {
      console.log(`Peter is Right by my side`);
      
} else {console.log(`Where are  you Bro`)
      
}


// objects another data structure
// This first object data structure is called an object literal syntax
const terranceParker = {
      // in this section everything is called a property
      firstName: `Terrance`,
      lastName: `Parker`,
      age: 2022 - 1985,
      job: `Software Engineer`,
      Friends: [`Michael`, `Steven` , `Peter`]



}




// dot notation Vs Bracket notation

const terranceParker = {
      // in this section everything is called a property
      firstName: `Terrance`,
      lastName: `Parker`,
      age: 2022 - 1985,
      job: `Software Engineer`,
      friends: [`Michael`, `Steven` , `Peter`]

}

      console.log(terranceParker.age);
      console.log(terranceParker[`lastName`]);
// with bracket elements your can add more to it
      const nameKey = `Name` ;
      console.log(terranceParker[`first`+ nameKey]);
      console.log(terranceParker[`last` + nameKey]);

const interestedIn =  prompt(`what do you what to know about Terrance? choose between firstName, lastName, age, job, and friends`);


if (terranceParker[interestedIn])  {
      console.log(terranceParker[interestedIn]);
      
} else { 
      console.log(`Hold on lets find this Out until then🤓😏choose between firstName, lastName, age, job, and friends`);

}
// dot and bracket to add elements to the object
terranceParker.location = `Denver`;
terranceParker[`twitter`] = `@pawka8855`;



console.log (`${terranceParker.firstName} has ${terranceParker.friends.length} friends and his best friend is ${terranceParker.friends[0]}`);




const terranceParker = {
      // in this section everything is called a properties
      firstName: `Terrance`,
      lastName: `Parker`,
      birthYear: 1985,
      job: `Software Engineer`,
      friends: [`Michael`, `Steven` , `Peter`],
      hasDriverLicense: true,

      // any function that is attached to an object is called a METHOD
//       calcAge: function () {
//             console.log(this);
//             return 2037 - this.birthYear ;
            
//       }

// }


calcAge: function () {
 this.age = 1985 - this.birthYear;
                  return 2037 - this.age ;
                  
}
// console.log( terranceParker.Age(1985));

// console.log( terranceParker.Age(1985));
// console.log( terranceParker.Age(1985));
// console.log(terranceParker.firstName);


// console.log ( terranceParker [`Age`] (1985));




//  for loop keeps running while condition is TRUE
for  (let  i = 1; i <= 10;  i++) {
      console.log( `I love HxH ` , `And Black Clover ${i}`) ;
}



const terrance = [
`Terrance `,
`Parker`,
2022 - 1985,
`Student`,
[`Micheal`, `Peter`, `Steven`],
true,
`your looping arrays man🙌🙌🙌🙌🎉`,


];
 
 for (let birthYear  = 0; birthYear  <= 36 ; birthYear ++) {
  console.log ([birthYear]);
       
 }



// console.log(terrance[0, 1, 2, ])
const types = [];

// perfect forward loop
for(let i = 0; i <= terrance.length  ; i ++) {
      // reading the terrance array
 console.log(terrance[i], typeof terrance[i]);
 

// filling types array
// types[i] = typeof terrance[i];
types.push(typeof terrance[i]) ;

}

console.log (types);

const years = [1991, 2007, 1985, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
ages.push(2022 -  years[i]);

}
console.log(ages);

//  continue and break loops
console.log(`onlyyyyyy strings`)
for(let i = 0; i <= terrance.length  ; i ++) {
    if(typeof terrance[i] !== `string`) continue;

terrance
 console.log(terrance[i], typeof [i]);

};

console.log(`------break with number---------`)
for(let i = 0; i <= terrance.length  ; i ++) {
    if(typeof terrance[i] !== `number`) break;


 console.log(terrance[i], typeof terrance[i]);

};


const terrance = [
      `Terrance `,
      `Parker`,
      2022 - 1985,
      `Student`,
      [`Micheal`, `Peter`, `Steven`],
      true,
      `your looping arrays man🙌🙌🙌🙌🎉`,
];

// backwarrds loop
for(let i = terrance.length -1; i  >= 0; i--){
console.log(i,terrance[i]);
}


// loop in loop
for(let exercise = 1; exercise < 4; exercise++) {
      console.log(`------------- starting exercise ${exercise}`)

      for( let rep = 1; rep < 6; rep ++) {
            console.log(`Exercise ${exercise}: Lifting weight reps ${rep}🏋️`)
      }
}

// while loop
for( let rep = 1; rep <= 10; rep ++) {
      // console.log(` Lifting weight reps ${rep}🏋️`);
}


let rep = 1;
while (rep <= 10) {
      // console.log(`While: Lifting weight reps ${rep}🏋️‍♂️`);
      rep++

      
}
let dice = Math.trunc(Math.random() * 10) +1;


while(dice !==6) {
      console.log(`you rolled a ${dice}`);
      dice = Math.trunc(Math.random(dice) * 10) +1;
      if(dice ===6) console.log(`🎊🎈🎆Your the Winner🎊🎈🎆`)

JAVASCRIPT FUNDMENTALS
*/
while(dice !==6) {
      console.log(`you rolled a ${dice}`);
      dice = Math.trunc(Math.random(dice) * 10) +1;
      if(dice ===6) console.log(`🎊🎈🎆Your the Winner🎊🎈🎆`)
};

// trying sometthing
