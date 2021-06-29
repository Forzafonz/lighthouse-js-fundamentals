const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);

  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (var count = 0; count < ingredients.length; count++){
  
  console.log(ingredients[count]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var count = ingredients.length-1; count >=0; count--){
  console.log(ingredients[count]);
}