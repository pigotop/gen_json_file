import fs from 'fs-extra';
import dotenv from 'dotenv';
import util from 'util';
dotenv.config()
var prod_cd = [
    "0502869",
    "0502887"
];
var jsondata = [];
var jsdata = { PROD_CD: "" , INV_MVMNT_QTY: process.env.NUM_INV_MVMNT_QTY };

prod_cd.forEach(element => {
    jsdata.PROD_CD = element
    jsondata.push(jsdata)
});

fs.removeSync('./output');
fs.outputJsonSync('./output/'+genJsonFileName(),jsondata);

console.log("========== finish ==========");

function genJsonFileName(){
    const today = new Date();
    console.log("========== today ==========",today);
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let nameJson = util.format('%s%s%s.json',year,padTo2Digits(month),padTo2Digits(day));

    return nameJson
}

function padTo2Digits(num) {
    return num.toString().padStart(2,'0');
}
