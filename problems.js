// First Problem radianToDegree 

function radianToDegree(radian)
{
    if(isNaN(radian)){
        return "Please Enter Number"
    }
    else{
        const pi = 3.14159;
        const degree = radian * (180/pi);
        const output = degree.toFixed(2);
        return (output);
    }
}

// ====================================

// Problem Number 2

function isJavaScriptFile(name) {
if(isNaN(name)){
    const last3 = name.slice(-3);
    if (last3 == ".js") {
        return true;
    } else {
        return false;
    }
}else{
        return "Please Enter a Valid name"
    }
}
const output = isJavaScriptFile(00052);
console.log(output);

// ==========================

// Problem-3 
function oilPrice(disel, petrol, octen) {
    if(typeof disel == 'number' || typeof petrol !== 'number' || typeof octen !== 'number'){
        return "Oil Unit should be number"
    }
    else{
        let sum = (disel * 114) + (petrol * 130) + (octen * 135);
        return sum;
    }
   
}
console.log(oilPrice(1, "sd" , 1));


// problem 4 
function publicBusFare(traveller) {
    if(typeof traveller =='number'){
        let fair = 0;
        if (traveller <= 50) {
            fair = (traveller%11) * 250;
            return fair;
        }
        else if (traveller >= 50) {
            fair = ((traveller % 50) % 11) * 250;
            return fair;
        }
        else {
            fair = 0;
            return fair;
        }
    }
    else{
        return "Please Enter Valid Number"
    }
}
console.log(publicBusFare(51));

// problem-5 

function isBestFriend(object1, object2) {
    if(typeof object1 == 'object'  && typeof object2 == 'object'){
        if (object1.name === object2.friend  && object1.friend === object2.name) {
            return true;
        }
        else {
            return false;
        }
    }
    else{
        return "Error, Please type two object with values";
    }
    
}
let list1 = {name: 'shakil', friend: 'tonni'};
let list2 = {name: 'tonni', friend: 'shakil'};
let bestFriendList = isBestFriend(list1, list2);
console.log(bestFriendList);