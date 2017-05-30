"use strict";

let loadFamily = require("./load-family.js"),
    calls = require("./calls.js");


$(document).on("click", "#table-delete-btn", function(){
    let familyId = $(this).data("delete-id");
    calls.removeFamilyMember(familyId)
    .then((response)=>{
        loadFamily.loadTable();
    });
});
