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
const output=isJavaScriptFile("Shakil.m");
console.log(output);

// ==========================