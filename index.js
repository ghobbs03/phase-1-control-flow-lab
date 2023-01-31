function scuberGreetingForFeet(ride) {
  // Write your code here!
  if (ride < 400) {
    return "This one is on me!";

  } else if (ride > 400 && ride <= 2000) {
    return "That will be twenty bucks.";

  } else if (ride > 2000 && ride < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  let statement;
  city === 'NYC' ? (statement = "Ok, sounds good.") : (statement = "No go.");
  return statement;
}

function switchOnCharmFromTip(generosity) {
  // Write your code here!
  switch (generosity) {
    case 'not as generous':
      return 'Thank you.';
    case 'generous':
      return 'Thank you so much.';
    default:
      return'Bye.';
  }
}