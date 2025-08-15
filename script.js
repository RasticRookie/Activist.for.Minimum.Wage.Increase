/* .js files add interaction to your website */

var factList = [
  "Since January 2023, the poverty threashold in the US is 29,960$ for a family of four. (<span class= 'link'>https://usafacts.org/articles/what-does-living-at-the-poverty-line-look-like/#:~:text=These%20poverty%20thresholds%20are%20used,family%20of%20four%20is%20%2429%2C960.</span>) ",  
  
  "Since January 2023, the poverty threashold in the US is 14,861$ for an individual. (<span class= 'link'>https://usafacts.org/articles/what-does-living-at-the-poverty-line-look-like/#:~:text=These%20poverty%20thresholds%20are%20used,family%20of%20four%20is%20%2429%2C960.</span>) ",
  
  "A recent Urban Institute analysis predicts that no workers would loose their jobs and 7.6 million Americans would be lifted out of poverty after a national 15$ wage increase in Scenario 1. (<span class= 'link'>https://www.workrisenetwork.org/working-knowledge/raising-federal-minimum-wage-would-lift-millions-out-poverty-despite-risks#:~:text=Nonetheless%2C%20a%20%2415%2Dper%2D,decrease%20by%202.1%20percentage%20points.</span>)",
  
  "20 percent of working families earning the $7.25 minimum wage or below live in poverty (<span class= 'link'>https://www.sanders.senate.gov/press-releases/minimum-wage-too-low-to-keep-working-families-out-of-poverty-new-report-finds/#:~:text=While%2020%20percent%20of%20working,per%20hour%20live%20in%20poverty.</span>)",
  
   "A recent Urban Institute analysis predicts that some workers would loose their jobs and 6.9 million Americans would be lifted out of poverty after a national 15$ wage increase in Scenario 3. (<span class= 'link'>https://www.workrisenetwork.org/working-knowledge/raising-federal-minimum-wage-would-lift-millions-out-poverty-despite-risks#:~:text=Nonetheless%2C%20a%20%2415%2Dper%2D,decrease%20by%202.1%20percentage%20points.</span>)",
]

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

/*
const textOptions = ["Hello, world!", "JavaScript is fun!", "Random text generator"];

// Generate a random index
const randomIndex = Math.floor(Math.random() * textOptions.length);

// Select the random text
const randomText = textOptions[randomIndex];

// Print the random text
console.log(randomText);
*/