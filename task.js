const users = [
    {
        name : "yagnesh",
        age : 30,
        gender : "male",
    },
    {
        name : "virat",
        age : 28,
        gender : "Male"
    },
    {
        name : "rohit",
        age : 32,
        gender : "Male"
    },
    {
        name : "dipika",
        age : 34,
        gender : "female"
    },
    {
        name : "Alia",
        age : 19,
        gender : "female"
    },
    {
        name : "rekha",
        age : 64,
        gender : "female"
    },
    {
        name : "Taimur",
        age : 8,
        gender : "Male"
    }
]

// Some 
// Array Method
const isRohitExistTeam = users.some((item) => item.name === "rohit");
console.log(isRohitExistTeam);

// Reduce Method
const _isRohitExistTeam = users.reduce((p, c) => {
        console.log(p);
        if(c.name === "rohit"){
            return !!c;
        }
        return p;
},false);
console.log(_isRohitExistTeam);

// every
// using Array Methods
const isEveryoneAdult = users.every((item) => {
    console.log(item.age);
    return item.age > 20;
  });  
console.log(isEveryoneAdult);
  
// using Reduce Method
const _isEveryoneAdult = users.reduce((p,c)=>{ return c.age > 20; },false);
console.log(_isEveryoneAdult);

//Map
const arr = [1,2,3,4,5,6,7,8,9,10];

//using Array Methods
const newArr = arr.map((item) => {
    if (item % 2 === 0) {
      return item * 2;
    }
    return item;
  });
  
console.log(newArr);
  
// using Reduce Method
const _newArr = arr.reduce((p,c) => {
    console.log(p);
    if(c % 2 === 0){
        c = c * 2;
    }
    p.push(c);
    return p;
},[]);
console.log(_newArr);

// find 
// using Array Methods
const rohitData = users.find((item) => {
    console.log(item.name);
    return item.name === "rekha";
  });
  
  console.log(rohitData);

// using Reduce Method
const _rohitData = users.reduce((p,c) => {
    console.log(p);
    if(c.name === "rohit"){
        p = c;
    }
    return p;
},{});
console.log(_rohitData);