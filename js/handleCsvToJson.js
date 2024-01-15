const { updateUploadExtJSON } = require("./updateIdasDB.js");
const csv = require('csvtojson');


async function omzettenCsvToJSON (externalPartner, pathFile)
 {
    
    //console.log('externalPartner ' + externalPartner);
    //console.log('pathFile '  + pathFile);
	if (externalPartner === 'HEICO')
	{	
    const csvJSON = await 
    csv({delimiter: ';', flatKeys :  true, headers : ["partNumbers", "partName_not_for_customers", "partName_aftermarket" , "leeg",  "purchasePrice" , "retailPrice"] })
    .fromFile(pathFile)
    .then((jsonObj)=>{
      //  console.log(jsonObj);
       updateUploadExtJSON(externalPartner, jsonObj);

    });
   
	} 
    


}



module.exports = {
  omzettenCsvToJSON: omzettenCsvToJSON
  };