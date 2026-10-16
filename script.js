
const guideName = "The Must-Visit Attractions in Hong Kong";
const currentYear = 2026;

let runningCount = 0;


const guideTitleEl = document.getElementById("guide-title");
if (guideTitleEl) {
    guideTitleEl.textContent = guideName;
}

const footerEl = document.getElementById("footer-copyright");
if (footerEl) {
    footerEl.textContent = `© ${currentYear} ${guideName}`;
}

const ratings = [4.5, 5.0, 4.0];
let totalRatingSum = 0;

for (let i = 0; i < ratings.length; i++) {
    totalRatingSum += ratings[i];
    runningCount++; 
}

const averageRating = (totalRatingSum / ratings.length).toFixed(1);


document.getElementById("calc-output").textContent = `${runningCount} places reviewed with an average rating of ${averageRating} stars.`;


console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Running Count:", runningCount);
console.log("Average Rating:", averageRating);



const placeRating = 4.5; 
let ratingMessage = "";

if (placeRating >= 4) {
    ratingMessage = "Highly recommended";
} else if (placeRating >= 2.5 && placeRating <= 3.9) {
    ratingMessage = "Worth a visit";
} else {
    ratingMessage = "Only if you're nearby";
}

const ratingLabelEl = document.getElementById("rating-label");
if (ratingLabelEl) {
    ratingLabelEl.textContent = ratingMessage;
}




const priceLevel = 2;       
const isOpenNow = true;     


const isGoodOption = (priceLevel <= 3) && (isOpenNow === true);
const budgetText = isGoodOption ? "Good option right now" : "Maybe another time";

const budgetOutputEl = document.getElementById("budget-output");
if (budgetOutputEl) {
    budgetOutputEl.textContent = budgetText;
}


const isNearby = true; 


const distanceText = isNearby ? "Walking distance" : "Better to commute";

const distanceOutputEl = document.getElementById("distance-output");
if (distanceOutputEl) {
    distanceOutputEl.textContent = distanceText;
}


console.log("Rating Label:", ratingMessage);
console.log("Budget Check:", budgetText);
console.log("Distance Note:", distanceText);