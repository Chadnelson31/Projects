"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

function phoneValidation(userInput) {
    var phoneMatch = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(userInput.match(phoneMatch)){
        return true;
    }
    else
        return false;
};

var processEntries = function() {
    var firstName = $("fName").value;
    var lastName = $("lName").value;
    var email = $("email").value;
    var phone = document.forms["feedback_form"]["phone"].value;
    var comment = $("feedback").value;
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
    } else {
        check++;
        if (!(phoneValidation(phone))) {
            $("phoneError").firstChild.nodeValue = "Ex. XXX-XXX-XXXX (XXX).XXX.XXXX "
        } else { check++; }
    }
    if (!(email.indexOf("@") > -1)) {
        $("emailError").firstChild.nodeValue = "Please enter a valid email"
    } else { check++; }

    if (check === 6) {
        //stores variables in localstorage
        localStorage.setItem("xemail", email);
        localStorage.setItem("xfname", firstName);
        localStorage.setItem("xlname", lastName);
        localStorage.setItem("xphone", phone);
        localStorage.setItem("xcomment", comment);


        //alert("phone number is: " + phone);
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