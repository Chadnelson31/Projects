window.onload = function () {
    var email = localStorage.xemail;
    var fname = localStorage.xfname;
    var lname = localStorage.xlname;
    var phone = localStorage.xphone;
    var comment = localStorage.xcomment;

    //prints submitted user info
    document.getElementById("email_output").innerHTML = "The email you submitted is: " + email;
    if (fname !== undefined && lname !== undefined) {
        document.getElementById("name_output").innerHTML = "The name you submitted is: " + fname + " " + lname;
    }
    if (phone !== undefined) {
        document.getElementById("phone_output").innerHTML = "The phone number you submitted is: " + phone;
    }
    if (comment !== undefined) {
        document.getElementById("comment_output").innerHTML = "The comment you submitted is: " + comment;
    }
};