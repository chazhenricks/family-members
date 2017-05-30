"use strict";

console.log("MAIN.JS");

//bwoeserify requires
let calls = require("./calls.js"),
    Handlebars = require("hbsfy/runtime"),
    addMemberTemplate = require("../templates/add-family-member.hbs"),
    familyInfoPartial = require("../templates/family-info.hbs"),
    loadFamily = require("./load-family.js"),
    submitFamily = require("./submit-family.js"),
    removeFamily = require("./remove-family.js"),
    familyTableTemplate = require("../templates/family-table.hbs");


//Event Listeners
$(document).on("click", "#table-add-btn", function(){
    addMemberForm();
});

$(document).on("click", "#add-family-submit", function(){
    submitFamily.submitNewMember();
    loadFamily.loadTable();
});

// $(document).on("click", "#table-delete-btn", function(){
//     let familyId = $(this).data("delete-id");
//     calls.removeFamilyMember(familyId)
//     .then((response)=>{
//         loadFamily.loadTable();
//     });
// });



//handlebars template
Handlebars.registerPartial("familyInfo", familyInfoPartial);



let addMemberForm = function(){
    $("#family-content").html(addMemberTemplate());
};


loadFamily.loadTable();



























