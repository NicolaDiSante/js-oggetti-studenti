var objStudent = {
  firstName: "Nicola",
  lastName: "Di Sante",
  age: 31
}

//console.log(objStudent)

for(var key in objStudent){
  console.log("La key è: " + key + " e Il valore è : " + objStudent[key])
}


console.log('------------------------------');
console.log('------------------------------');
console.log('------------------------------');

var arrStudents = [
  {
    firstName: "Claudio",
    lastName: "Marocco",
    age: 23
  },
  {
    firstName: "Alagare",
  lastName: "Werrrao",
  age: 39
  },
  {
    firstName: "Peter",
  lastName: "Pan",
  age: 99
  }
]

/* for(var i = 0; i<arrStudents.length; i++){

  var student = arrStudents[i];
  console.log("Il nome è: " + student.firstName);
  console.log("Il cognome è: " + student.lastName);
  console.log("L'età è: " + student.age);
  console.log('------------------------------');

}
 */



var userName = prompt('Inserisci il tuo nome');
var userSurname = prompt('Inserisci il tuo cognome');
var userAge = parseInt(prompt('Quanti anni hai?'));

addStudent(arrStudents, userName, userSurname, userAge)


for(var student of arrStudents){


  for(var key in student){
    console.log("La chiave è: " + key + " ed il valore è: " + student[key])
  }
}




/* arrStudents.push({
  firstName: userName,
  lastName: userSurname,
  age: userAge
})
 */




function addStudent(target, fName, fSurname, fAge){
  target.push({
    firstName: fName,
    lastName: fSurname,
    age: fAge
  })
}

