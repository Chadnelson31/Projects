var $ = function(id) {
    return document.getElementById(id);
};
function calculateMpg(miles, gallons) {
    var mpg = (miles / gallons);
    mpg = mpg.toFixed(1);
    return mpg;
};