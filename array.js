//This program takes numbers, converts them to strings, so that way they can output the number+ the next number for each index of the array
//Example: 203421 should output [2,20,203,2034,20342,203421]

function createArrayOfTiers(num) {   
    let x = num.toString();             //Converts the number to a string, so it is able to be worked on.
    let z = x.length;                   //Sets a variable equal to the length of the string, so we know what value to iterate up to in our for loop
    let string = [];                    //Creates an empty string which will be added into 
    for (let i = 0; i<z; i++){           //For loop with necessary parameters
        let q = (x.substring(0,i+1));   //This reads over the string and accounts for the first index, and up to i+1. The first argument represents the first index inclusive, up to the last index, exclusive. Example: 1341 on the third iteration will use(0,i+1), with i being 2. Therefore it starts at index 0 and goes up to the fourth index(i=3) but won't include it. That is why we need to go one index ahead because the 2nd argument is exclusive. Therefore, for the third iteration it will print out "134" 
        string.push(q);                 //this adds the value we just received for that iteration to the end of the array. 
        
    
    
    }
    console.log(string);               //console logs the string after all the iterations of the for loop have fired
}
createArrayOfTiers(54326534);
