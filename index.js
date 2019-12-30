// Your code here
function saturdayFun(activity = "roller-skate") {
  // return "This Saturday, I want to " + ${activity} + "!";
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(theSymbol = "*") {
  return function(theAdjective) {
    return `You are ${theSymbol}${theAdjective}${theSymbol}!`;
  }
}

const Calculator() {
  
}
