var $ = function(id) {
    return document.getElementById(id);
};

function getDate() {
    var today = new Date();
    $("date").firstChild.nodeValue = today.toDateString();
}

window.onload = function() {
    getDate();
};