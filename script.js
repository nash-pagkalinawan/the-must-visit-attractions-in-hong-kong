
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
