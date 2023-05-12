import fs from 'fs-extra';
import dotenv from 'dotenv';
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

    if(day < 10) day = '0'+ day;
    if(month < 10) month = '0'+ month;

    return 'put-config-'+year+month+day+'.json'
}