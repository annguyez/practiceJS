let min = function(x, y){
    if(x<y) return x
    else 
    return y
}
console.log(min(1, 10));
console.log(min(0, -110));


//Test even od
// đỆ QUY
function isEven(number) {
    if (number < 0) {
        // CACH 1 DÙNG ABS ĐỂ CHUYỂN VỀ SỐ DƯƠNG
        //CACH 2 KO TÍNH NỮA
        return '??';
    } else if (number == 1) {
        return false;
    } else if  (number == 0) {
        return true;
    } else {
        return isEven(number - 2);
    }
}
console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));
let arr = 
{
    type: "apply",
    operator: {type: "word", name: ">"},
    args: [
      {type: "word", name: "x"},
      {type: "value", value: 5}
    ]
  }

  console.log(arr.type);
  console.log(arr.operator.type);
  console.log(arr.args[1].value);

  //Looping a triangle
let tag = "#"
for(i = 0 ; i < 7 ;i++){
    tag = tag+"#";
    console.log(tag);
}
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " +
//               theNumber * theNumber);
// }
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }

//   switch (prompt("What is the weather like?")) {
//     case "rainy":
//       console.log("Remember to bring an umbrella.");
//       break;
//     case "sunny":
//       console.log("Dress lightly.");
//     case "cloudy":
//       console.log("Go outside.");
//       break;
//     default:
//       console.log("Unknown weather type!");
//       break;
//   }
// FizzBuzz
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else
    if(i%3==0){
        console.log("Fizz");
    }else
    if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
   

}


const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

let animal_names = animals.map((animal, index, animals) => {
    return console.log(animal.name);
})

let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
    /* and so on... */
  ];

  console.log(journal[0].events[1]);

  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function add1(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
  }
  
  add1(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
  });
  
  async function add2(x) {
    var a = await resolveAfter2Seconds(20);
    var b = await resolveAfter2Seconds(30);
    return x + a + b;
  }
  
  add2(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
  });

  for(let i=0; i<10;i++){
    while(i==5){
      console.log(i);
      break;
    }
    
  }
  console.log("A");
  const numbers = [1,2,3,4,5,6,7,8];
  let odds = numbers.filter(num => num % 2);
  console.log(odds);//[1,3,5,7]

  