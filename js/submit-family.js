"use strict";

let calls=require("./calls.js");


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


module.exports =
{
    submitNewMember
};
