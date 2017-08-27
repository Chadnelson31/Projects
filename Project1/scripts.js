var $ = function(id) {
    return document.getElementById(id);
};
function calculateMpg(desktops, laptops) {
    var mpg = ((desktops * 40) + (laptops * 20));
    mpg = mpg.toFixed(1);
    return mpg;
};