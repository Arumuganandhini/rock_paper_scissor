/*async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/users"); // corrected URL
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("First Name:", data.users[1].firstName);
        console.log("Last Name:", data.users[1].lastName);
        console.log("Email:", data.users[1].email);
        console.log("ID:", data.users[1].id);
        console.log("Image URL:", data.users[1].image);
        console.log("Hair Color:", data.users[1].hair.color);
        console.log("Hair Type:", data.users[1].hair.type);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchData(); // call placed outside

//<h1>Call Back Function</h1>

setTimeout(function(){
    console.log("Executed after 5 seconds");
},5000);

//Method Function
const person ={
    speak:function(){
        console.log("Hello, I am a person Speaking ");
    }
};
person.speak();
class Animal{
    sound(){
        console.log("Roar");
    }
}
const lion =new Animal();
lion.sound();

if(true){
    console.log("Pass the condition")
} 
else{
   console.log("false");
}

var i =1;
while(i<=5){
;
    console.log("Skipping the rest of the loop when i is:",i);
    i++;
    continue;
    

}
var i=4;
if(i==4){
    console.log("i is now 4, exiting the loop");
}

let i=1;
do{
    console.log("Current value of i is:",i);
    i++;
    if (i==5);
    continue;
    continue;
}while(true);

//for in loop
var person =[1,2,3,4,5];
for (let i in person){
    console.log("Current value of i is:", i);
    console.log("Current value of person[i] is:", person[i]);
}
//for of loop
var x ="JavaScript";
for(let char of x){
    console.log("Current character is:", char);
}
//forEach loop
var numbers =[1,2,3,4,567,83456];
numbers.forEach(function(num, index) {
    console.log("Current number is:", num);
    console.log("Current index is:", index);
})
++++++++++++++++++++++++++=======================
///day 3 
let date = new Date();
console.log("Current Date and Time:", date.toString());
console.log("Current Year:", date.getFullYear());
console.log("Current Month:", date.getMonth() + 1); // Months are zero-based
console.log("Current Day:", date.getDate());



//Array


let fruits = ["Apple", "Banana", "Cherry"];
console.log("Original Array:", fruits[0]);
fruits.push("Mango"); // Add an element to the end
console.log("After Push:", fruits);
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow"); // Add an element to the end
console.log("Colors Array:", colors);
//1.pop()
// Remove the last element
console.log("After Pop:", fruits.pop());
//2.shift()
// Remove the first element
console.log("After Shift:", fruits.shift());
//3.unshift()
// Add an element to the beginning  
console.log("After Unshift:", fruits.unshift("orange"));
//4.splice()
// Remove elements from a specific index
console.log("After Splice:", fruits);
//5.slice()
// Create a new array with a portion of the original array
console.log("After Slice:", fruits.slice(1, 3)); // Get elements from index 1 to 2
//6.indexOf()
// Find the index of an element
console.log("Index of 'Banana':", fruits.indexOf("Banana"));
//7.includes()
// Check if an element exists in the array
console.log("Includes 'Cherry':", fruits.includes("Cherry"));
///8.join()
// Join array elements into a string
console.log("Joined Array:", fruits.join(", "));
//9.reverse()
// Reverse the order of elements
console.log("Reversed Array:", fruits.reverse());
//10.sort()
// Sort the array in ascending order
console.log("Sorted Array:", fruits.sort())

console.log("Reduced Value:", fruits.reduce((acc, fruit) => acc + fruit.length, 0))


//Objects
let student= {
    name: "John",
    age: 20,
    subjects: ["Math", "Science", "English"],
    
}
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);       
console.log("Student Subjects:", student.subjects.join(", "));


   let person = {
       name: "Nandhini",
       age: 19,
       address:{
              street: "Erode",
              city: {
                area:"Alampalayam",
                pincode: 638002
              }
         },
   };
   console.log("Person Name:", person.name);
    console.log("Person Age:", person.age);
    console.log("Person Street:", person.address.street);   
    console.log("Person City:", person.address.city);
    console.log("Person Area:", person.address.city.area);

    

    //higher order Function:
    function greet(name){
        return "HEllo " +name;
        }
        function ProcessUser(callback){
        let username ="Asha";
        console.log(callback(username));
        }
        ProcessUser(greet);
     //set
        let set1 =new Set(['apple','banana','grapes','mango']);
        console.log(set1)
        set1.add('Strawberry');
        set1.add('Pomogranet');
        set1.add('cherry');
        set1.delete('mango');
        console.log(set1);
        console.log(set1.has('banana'));
        console.log(set1.delete('cherry'));

    
    
      const employees =new Map()
      employees.set("id",101);
      employees.set("fullname","Nandhini");
      employees.set("age",30);
      console.log(employees.size);
      console.log(employees)
      console.log(employees.get("fullname"));
      employees.delete("age");
      console.log(employees.has("age"));
      employees.clear();
      console.log(employees.size);
       

      //Desturcturing datas
      const student= {
        name: "Asha",
        age : 19,
        course: "BCA"
        };
        const {name,age,course } =student;
        console.log(name); //"Asha"
        console.log(course);//"BCA"
        console.log(age); //19
        
        //Spread Operator;
    
         let names =["Nandhu","kavya","Asha","KavyaDharshinin"];
         let missingnames=["John","Dev","Karthick"]
         const allnames =[...names, ...missingnames];
         console.log(allnames);
         
           const obj1 ={ name:"Nandhu"};
           const obj2 ={age: 19};
           const merged =(...obj1, ...obj2);
           console.log(merged);
          
         //console Object
         console.log("Hello, World!"); 
        console.error("This is an error message");
        console.warn("This is a warning message"); 
        console.info("This is an informational message");
        console.table([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }])
        console.group("My Group");                                                                                                                        
        console.time("My Timer"); 
        console.clear(); 

// Local and Session Storage(Web Srtorage)

        localStorage.setItem("name", "Nandhini");
        console.log(localStorage.getItem("name")); // "Nandhini"
        sessionStorage.setItem("Name", "Kavya");
        console.log(sessionStorage.getItem("Name")); // "Kavya"

        */
       const para = document.getElementById("demo");
       para.innerHTML ="Welcome";
       para.style.color = "blue";

       const img =document.getElementById("id");
       img.src = "https://wallpaperaccess.com/full/4723250.jpg";