"use strict";

let firebase = require("./firebaseConfig");


function getFamily(){
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/.json`
        }).done((data)=>{
            resolve(data);
        }).fail((response)=>{
            reject(response);
        });
    });
}

function addNewMember(newMemberInfo){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:`${firebase.getFBsettings().databaseURL}/family.json`,
            method: "POST",
            data: JSON.stringify(newMemberInfo),
            dataType: "json"
        }).done((response)=>{
            resolve(response);
        });
    });
}

function removeFamilyMember(memberId) {
    return new Promise(function(resolve, reject){
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/family/${memberId}.json`,
            method: 'DELETE'
        }).done(function(response){
            resolve(response);
        });
    });

}


module.exports=
{
    getFamily,
    addNewMember,
    removeFamilyMember
};
