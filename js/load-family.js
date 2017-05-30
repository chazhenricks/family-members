"use strict";

let calls=require("./calls.js"),
    familyTableTemplate = require("../templates/family-table.hbs");

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





module.exports =
{
    loadTable
};
