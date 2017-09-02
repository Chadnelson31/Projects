"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var processEntries = function() {
    var check = 0;
    var email = $("userEmail").value;
    if (email === "") {
        $("emailError").firstChild.nodeValue = "Required Field"
    } else { check++; }
    if (!(email.indexOf("@") > -1)) {
        $("emailError").firstChild.nodeValue = "Please enter a valid email"
    } else { check++; }

    if (check === 2) {

        $("newsletter_form").submit();
        //$("check").firstChild.nodeValue = check;
    }
    else {
        $("newsletter_form").reset();
    }

};

var resetEntries = function() {
    $("feedback_form").reset();
    $("fnameError").firstChild.nodeValue = "*";
    $("phoneError").firstChild.nodeValue = "*";
    $("emailError").firstChild.nodeValue = "*";
    $("lnameError").firstChild.nodeValue = "*";
};

window.onload = function() {
    $("submitbutton").onclick = processEntries;
};
