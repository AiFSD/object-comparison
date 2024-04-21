// comparing two objets with different order with for each loop


let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

let equal = false;

Object.keys(obj1).forEach(key => {
    if (obj1[key] === obj2[key]) {
        equal = true;
    }
});
console.log(equal); 
