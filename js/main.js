"use strict";

console.log("MAIN.JS");

//bwoeserify requires
let calls = require("./calls.js"),
    Handlebars = require("hbsfy/runtime"),
    addMemberTemplate = require("../templates/add-family-member.hbs"),
    familyInfoPartial = require("../templates/family-info.hbs"),
    familyTableTemplate = require("../templates/family-table.hbs");


//Event Listeners
$(document).on("click", "#table-add-btn", function(){
    addMemberForm();
});

$(document).on("click", "#add-family-submit", function(){
    submitNewMember();
    loadTable();
});

$(document).on("click", "#table-delete-btn", function(){
    let familyId = $(this).data("delete-id");
    calls.removeFamilyMember(familyId)
    .then((response)=>{
        loadTable();
    });
});



//handlebars template
Handlebars.registerPartial("familyInfo", familyInfoPartial);


//main.js functions
let loadTable = function(){
    $("#family-content").html("");
    calls.getFamily()
    .then((family)=>{
        console.log(family);
        let idArray = Object.keys(family.family);
        idArray.forEach(function(key){
            family.family[key].id = key;
        });
        console.log("family with keys", family);
        $("#family-content").html(familyTableTemplate(family));
    });
};

let addMemberForm = function(){
    $("#family-content").html(addMemberTemplate());
};

let submitNewMember = function(){
    let skills = $("#add-family-skills").val().split(",");

    let newMemberInfo = {};
        newMemberInfo.name = $("#add-family-name").val();
        newMemberInfo.age = $("#add-family-age").val();
        newMemberInfo.gender = $("#add-family-gender").val();
        newMemberInfo.skills = skills;
    calls.addNewMember(newMemberInfo)
    .then((result)=>{
        console.log(result);
    });
};


let removeFamilyMember = function(event){
    let familyId = $(this).data("delete-id");
    console.log(event);
    // calls.removeFamilyMember()
    // .then((response)=>{
    //     console.log(response);
    // });
};

loadTable();



























