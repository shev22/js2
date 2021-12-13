// Exercise 1

let myName= prompt('What is your name?')
      age = prompt('How old are you?')
     city = prompt("What's your city name?")
     phone= prompt("What's your phone number?")
     email= prompt("What's your email?")
   company= prompt("What's is your company name?");

  document.write( "My name is "+ myName + "<br/>")
  document.write("I am " + age + " years old" + "<br/>" )
  document.write("I live in " + city + "<br/>")
  document.write("My phone number is " + phone + "<br/>")
  document.write("My email is "+ email + "<br/>")
  document.write("I work at " + company + "<br/>")
 
  //Exercise 2
   let currentYear = 2021,
       currentAge =   currentYear - age;
       document.write("<br>" + "EXERCISE 2" + "<br>" + myName + " was born in " + currentAge);

  //Exercise 3
  let numSeries1 = (1+2+3)
      numSeries2 = (4+5+6);

  if(numSeries1 == numSeries2){
     console.log("Da")
  }else{console.log("Net");
}

//Exercise 4

let a = 0;
if (a > 0){
  console.log("верно")
}else if(a <= 0){
  console.log("неверно")
}

//Exercise 5

let a1 = 10
    b1 = 2
   sum = a1 + b1
   sub = a1 - b1
   div = a1 / b1
  mult = a1 * b1
console.log(sum,sub,div,mult); 
(sum > 1) ? console.log (sum**2) :console.log('do nothing')

// Exercise 6

 (a1 > 2 && a1 < 11 || b1 >= 6 && b1 > 14) ? 
  console.log("bepno") : 
    console.log("dsfefse");
// Exercise 7



let n = prompt("type in numbers 0 - 59");
switch (Math.floor(n/15)){
    case 0: 
        console.log ("1 quater");
        break;
    case 1:
        console.log ("2 quater");
        break;
    case 2:
        console.log ("3 quater");
        break;
    case 3:
        console.log ("4 quater");
        break;
    case 4:
        console.log ("4 quater");
        break;
    default:
        console.log ("out of bounds");
}

let n = prompt("type in numbers 0 - 31");
switch (Math.floor(n/10)){
    case 0: 
        console.log ("0 quater");
        break;
    case 1:
        console.log ("1 quater");
        break;
    case 2:
        console.log ("2 quater");
        break;
    case 3:
        console.log ("3 quater");
        break;
    default:
        console.log ("out of bounds");
}


   //Exercise 9
let      daysCheck = prompt("enter year"),
        yearCheck  = (daysCheck / 365),
       monthsCheck = (daysCheck / 31),
         weekCheck = (daysCheck / 7 ),
         hourCheck = (daysCheck * 24),
         secCheck  = (daysCheck * 86400);
      
 (yearCheck >= 1) ? console.log(yearCheck + " year(s)") : console.log("less than a year");
 (monthsCheck >= 1) ? console.log(monthsCheck + " month(s)") : console.log("less than a month(s)");
 (weekCheck >= 1) ? console.log(weekCheck + " week(s)") : console.log("less than a week(s)");
 (hourCheck >= 1) ? console.log(hourCheck + " hour(s)") : console.log("less than a hour(s)");
 (secCheck >= 1) ? console.log(secCheck + " seconds(s)") : console.log("less than a second(s)");

 //Exercise 10

