// First Problem radianToDegree 


function radianToDegree(radian)
{
  const pi = 3.14159;
  const degree = radian * (180/pi);
  const output = degree.toFixed(2);
  return (output);
}
          
console.log(radianToDegree(10));

// ====================================