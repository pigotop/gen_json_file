import fs from 'fs-extra';
import dotenv from 'dotenv';
import util from 'util';
dotenv.config()
var prod_cd = [
    '0502548',
'0502549',
'6200815',
];
var jsondata = [];
prod_cd.forEach(element => {
    let jsdata = { PROD_CD: element , INV_MVMNT_QTY: process.env.NUM_INV_MVMNT_QTY };
    jsondata.push(jsdata)
    console.log(jsondata)
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
    let nameJson = util.format('put-config-%s%s%s.json',year,padTo2Digits(month),padTo2Digits(day));

    return nameJson
}

function padTo2Digits(num) {
    return num.toString().padStart(2,'0');
}
