
let homePoint = 0;
let guestPoint = 0;

let homePointDisplay = document.getElementById("home-team");
let guestPointDisplay = document.getElementById("guest-team");
// addpoints() function passes two parameters- team and points
// home and guess are class to compare with which team it is
function addpoints(team, points) {
    if (team === "home") {
        homePoint += points;
        homePointDisplay.textContent = homePoint;
    }
    else if (team === "guest") {
        guestPoint += points;
        guestPointDisplay.textContent = guestPoint;
    }
}
