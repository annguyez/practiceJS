
//Flattening

let arrays = [[1, 2, 3], [4, 5], [6]];

const result = arrays.reduce((a,b)=>{
    return a.concat(b);
});
console.log(result);
console.log(arrays);

function every(array, testparam) {
    // Your code here.
    for(let i=0;i<array.length;i++){
        if(testparam(array[i])){
            return true;
        }
    }
    return false;
}
  
  console.log(every([1, 3, 16], a => a > 15));
class Vec{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    plus(c){
        this.a += c.a;
        this.b += c.b;
        return this;
    }
    minus(d){
        this.a -= d.a;
        this.b -= d.b;
        return this;
    }
    length(){
        let a = this.a * this.a;
        let b = this.b * this.b;
        let rs = Math.sqrt(a+b);
        return rs
    }


}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(6, 7).length());



let map = {one: true, two: true, hasOwnProperty: true};

// // Fix this call
// console.log(Object.prototype.hasOwnProperty(one));
// // → true
let a = Math.random();
console.log(a);


function reliableMultiply(a, b) {
    // Your code here.
    return a*b;
  }
  
  console.log(reliableMultiply(8, 8));
  // → 64

  const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  

  function withBoxUnlocked(body) {
    let locked = box.locked;
    box.unlock();
    try { 
      body();
    } finally {
      if (locked) {
        box.lock();
      }
    }
  }

  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);
  // → true

  let cat = /ca[r|t]/, longer = /\w{7,}/ , whitespace =/\s[.|,|:|;|]/;
  verify(/cat/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/.../,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/.../,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/.../,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/.../,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/longer/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

verify(/whitespace/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
// Ignore unfinished exercises
if (regexp.source == "...") return;
for (let str of yes) if (!regexp.test(str)) {
 console.log(`Failure to match '${str}'`);
}
for (let str of no) if (regexp.test(str)) {
 console.log(`Unexpected match for '${str}'`);
}
}

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/'/, "\""));
// → "I'm the cook," he said, "it's my job."



let number = /^[+-]?(\d+(\.\d*)?)$/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}