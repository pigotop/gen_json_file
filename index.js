import fs from 'fs-extra';
import dotenv from 'dotenv';
import util from 'util';
import csv from 'csv-parser';
dotenv.config()

let prod_cd = [];
let jsondata = [];

fs.createReadStream("data.csv")
.pipe(csv())
.on('data', (data) => {
    console.log("jsondata =>",data);
    prod_cd.push(data.prod_cd)
})
.on('end', ()=> {
    console.log("END READ");
    console.log("prod_cd =>",prod_cd);

    prod_cd.forEach(element => {
        let jsdata = { PROD_CD: element , INV_MVMNT_QTY: process.env.NUM_INV_MVMNT_QTY };
        jsondata.push(jsdata)
    });
    
    console.log(jsondata)
    fs.removeSync('./output');
    fs.outputJsonSync('./output/'+genJsonFileName(),jsondata);
    console.log("========== finish ==========");
    
})



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
