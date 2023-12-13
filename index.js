function scuberGreetingForFeet(feet){
  let ride;
  if (feet <= 400){
      return ride = "This one is on me!"
  } else if (feet <= 2000){
      return ride = "That will be twenty bucks."
  } else if (feet < 2500){
      return ride = "I will gladly take your thirty bucks."
  } else if (feet > 2500){
      return ride = "No can do."
  }
}

console.log(scuberGreetingForFeet(2600))


function ternaryCheckCity(city){
  return city === "NYC"? "Ok, sounds good." : "No go."
}

console.log(ternaryCheckCity("NYC"))

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    case "thanks for everything":
      return "Bye."
  }
}

console.log(switchOnCharmFromTip("if anything else"))