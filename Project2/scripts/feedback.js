"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var processEntries = function() {
    var firstName = $("fName").value;
    var lastName = $("lName").value;
    var email = $("email").value;
    var phone = $("phone").value;
    var comments = $("feedback").value;
    var check = 0;

    if (firstName === "") {
        $("fnameError").firstChild.nodeValue = "Required Field"
    } else { check++; }
    if (lastName === "") {
        $("lnameError").firstChild.nodeValue = "Required Field"
    } else { check++; }
    if (email === "") {
        $("emailError").firstChild.nodeValue = "Required Field"
    } else { check++; }
    if (phone === "") {
        $("phoneError").firstChild.nodeValue = "Required Field"
    } else { check++; }
    if (!(email.indexOf("@") > -1)) {
        $("emailError").firstChild.nodeValue = "Please enter a valid email"
    } else { check++; }

    if (check === 5) {

        $("feedback_form").submit();
        //$("check").firstChild.nodeValue = check;
    }
    else {
        $("feedback_form").reset();
    }

};

var resetEntries = function() {
    $("feedback_form").reset();
    $("fnameError").firstChild.nodeValue = "*";
    $("phoneError").firstChild.nodeValue = "*";
    $("emailError").firstChild.nodeValue = "*";
    $("lnameError").firstChild.nodeValue = "*";
}

window.onload = function() {
    $("submitbtn").onclick = processEntries;
    $("resetbtn").onclick = resetEntries;
};