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
