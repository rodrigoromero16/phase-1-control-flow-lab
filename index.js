
function scuberGreetingForFeet(ride){
  // Write your code here!
  let result;
  if (ride <= 400){
    result = "This one is on me!";
  }else if (ride > 400 && ride < 2000){
    result =  "That will be twenty bucks.";
  }else if (ride > 2000 && ride <2500){
    result = 'I will gladly take your thirty bucks.';
  }else if(ride > 2500){
    result =  "No can do.";
  }
  return result;
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  // Write your code here!
  let isName;
  city === "NYC" ? (isName = "Ok, sounds good.") : (isName = "No go.");
  return isName;
}
ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(response){
  // Write your code here!
  let result;
  switch (response){
    case "generous":
      result = "Thank you so much.";
      break;
    case "not as generous":
      result = "Thank you.";
      break;
    case "thanks for everything":
      result = "Bye."
      break;
  }
  return result;
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');
