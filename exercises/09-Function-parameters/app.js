// Your code goes here:
function renderPerson(name, birthdate, eyecolor, age, gender){
  return (name + " is a " + age +  " years old " + gender + " born in " + birthdate + " with " + eyecolor + " eyes")
}

var person = renderPerson ('Bob', '05/22/1983', 'green', 23, 'male');

///*** Do not edit below this line ****/
console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));

console.log(person);
