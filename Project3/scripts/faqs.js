"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler
var toggle = function() {
    var link = this;
    var h2 = link.parentNode;                    // h2 tag
    var div = h2.nextElementSibling;



    if (div.className === "open") {

        div.className = "minus";
    } else {

        div.className = "open";
    }
};

window.onload = function() {

    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("a");

    // attach event handler for each h2 tag
    for (var i = 0; i < h2Elements.length; i++ ) {
        h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].focus();
};
