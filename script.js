// /* Exercise One */

let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user); //{ surname: 'Smith' }


/*Exercise Two*/
let obj = {};
function isEmpty(obj){
    if(Object.keys(obj).length === 0){
        return true;
    }else{
        return false; 
    }
}
console.log(isEmpty(obj)); //true;


// /*Exercise Three*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;
  for(let key in salaries){
    sum += salaries[key];
  }
//   let sum = salaries.John + salaries.Ann + salaries.Pete;

  console.log(sum) //390

// /*Exercise Four */
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
 function multiplyNumeric(menu){
    for(let key in menu){
        if(typeof menu[key] == "number"){
           console.log(menu[key] *= 2) 
        }
    }
  }
  multiplyNumeric(menu)
  console.log(multiplyNumeric(menu));