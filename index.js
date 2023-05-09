import fs from 'fs';

var prod_cd = ["111"];
var jsondata = [];

var jsdata = {"PROD_CD": "","INV_MVMNT_QTY": "999"};

prod_cd.forEach(element => {
    jsdata.PROD_CD = element
    jsondata.push(jsdata)
});

var jsonContent = JSON.stringify(jsondata);

fs.writeFileSync("../gen_json_file/output/output.json", jsonContent);
console.log("========== finish ==========");

