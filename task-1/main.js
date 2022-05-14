const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

// Create a function that takes in a string and outputs that string + "is now a legend"
  //create a function with argument
  //create a variable with string saved and reassign it value of string + new string

function makeLegend(name){
  let legend = name + " is now a legend.";
  return legend;
}

// Using a for loop and the makeLegend function, 
//create a new array which includes 'is now a legend' for each item. 
//Save this new array to the variable legendaryCelebs.


  let legendaryCelebs = [];
  for(i=0; i<celebs.length; i++){
    legendaryCelebs.push(makeLegend(celebs[i]))}



//Create an array of vowels
//Create a for loop where we check first letter of each element in celebs
// use include method 
// celebs[i]="David Beckham" so does vowels.include(celebs[i][0])
let vowels = ['A','E','I','O','U']
let vowelCelebs = []
for (i=0;i<celebs.length;i++){
  if(vowels.includes(celebs[i][0])){
    vowelCelebs.push(celebs[i])
  } console.log(celebs[i])
}

