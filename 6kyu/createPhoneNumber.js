//Difficulty: 6kyu

// Wite a function that accepts an array of 10 integers(between 0 and 9), that returns a string of hose numbers in the form of a phone number.

//Example:
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


//Solution:

function createPhoneNumber(numbers){
    let phoneNumber = ''
    for(let i = 0; i < numbers.length; i++){
      if(i == 0){
        phoneNumber = phoneNumber + '(' + numbers[i]
      } else if(i == 3 ){
        phoneNumber = phoneNumber + ')' + ' ' + numbers[i]
        }
      else if(i == 6){
        phoneNumber = phoneNumber + '-' + numbers[i]
      } 
      else phoneNumber = phoneNumber + numbers[i]
    }
    return phoneNumber
  }


