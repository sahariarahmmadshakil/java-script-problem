// First Problem radianToDegree 


// function radianToDegree(radian)
// {
//   const pi = 3.14159;
//   const degree = radian * (180/pi);
//   const output = degree.toFixed(2);
//   return (output);
// }
          
// ====================================

// Problem Number 2

function isJavaScriptFile(name){
const last3 = name.slice(-3);
if (last3==".js"){
    return true;
}else{
    return false;
}
}
const output=isJavaScriptFile("Shakil.js.lkm");
console.log(output);

// ==========================

// Problem-3 
function oilPrice(disel, petrol, octen){
    let sum = (disel*114)+(petrol*130)+(octen*135);
    return sum;
}
console.log(oilPrice(1, 1 , 1));