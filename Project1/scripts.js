"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
function calculateOffer(desktops, laptops) {
    var offer = ((desktops * 20) + (laptops * 10));
    return offer;
};

var processEntries = function() {
    var desktops = parseInt($("desktops").value);
    var laptops = parseInt($("laptops").value);

    if (isNaN(desktops)) {
        $("desktopsError").firstChild.nodeValue = "Please enter a number above 0";
    }
    if (isNaN(laptops)) {
        $("laptopsError").firstChild.nodeValue = "Please enter a number above 0";
    } else {
        $("desktopsError").firstChild.nodeValue = "";
        $("laptopsError").firstChild.nodeValue = "";
        $("offer").value = calculateOffer(desktops, laptops);
    }
};

var clearEntries = function () {
    $("desktops").value = "";
    $("laptops").value = "";
    $("desktopsError").firstChild.nodeValue = "*";
    $("laptopsError").firstChild.nodeValue = "*";
    $("offer").value = "";
    };

window.onload= function () {
    $("submit").onclick = processEntries;
    $("reset").onclick =  clearEntries;
};

