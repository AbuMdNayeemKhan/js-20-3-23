//====================JS OBJECT START====================//
// myInfo = {
//     name : "Nayeem Khan",
//     age : 32,
//     phone : "Nokia",
//     salary : 5000
// }

// console.log(myInfo.age);
// var singleData = myInfo.phone;

// console.log(singleData);

function MyObj(name, age, phone, salary){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.salary = salary;
    this.showMe = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.phone);
        console.log(this.salary);
    }
}

var ofNayeem = new MyObj("Nayeem", 24, 01619981998, 5000);
var ofZioun = new MyObj("Zioun", 20, 01619971997, "NaN");

console.log(ofZioun.showMe());

//====================JS OBJECT ENDED====================//  