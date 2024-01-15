
const { omzettenCsvToJSON } = require("./handleCsvToJson.js");
 


	 
	 

async function startConsumeWebserviceCsvToJSON (externalPartner , pathFile ) {
   try{
   
    
     
    
   let resolve = await consumeCsvToJSON(externalPartner, pathFile);;
    
    } catch (e) {
        console.error(e);
		 
    } finally {
        console.log('CsvToJSON ready');
		return ({ message: 'CsvToJSON succesvol uitgevoerd'});
    }
}



async function consumeCsvToJSON(externalPartner, pathFile) {
	try{
	//console.log('createAndSendRequest ' + JSON.stringify(jsonApilog));
	
    const respOmzettenCsvToJSON = await omzettenCsvToJSON(externalPartner, pathFile);
	let resultOmzettenCsvToJSON = await respOmzettenCsvToJSON;
	//console.log('resultCreateAndSendRequest: ' + resultCreateAndSendRequest);
	//logger.info('createAndSendRequestWebservice ' );
    return 'geslaagd';
	} catch (e) {
        console.error(e);
		 
    }
}

	
//startConsumeWebserviceApiWeb (setletter, guid, applicatie);
 
async function handleConsumeWebserviceCsvToJSON (externalPartner , pathFile)
{
    try{	
	//console.log('setletter:' + setletter);
	//logger.info('handleConsumeWebserviceApiWeb');
	
	var resolve = await startConsumeWebserviceCsvToJSON (externalPartner, pathFile);
	return (resolve);
    }
	catch(err) { console.error('foutmelding startConsumeWebserviceCsvToJSON ' + err);}
	
}


module.exports = {
    handleConsumeWebserviceCsvToJSON: handleConsumeWebserviceCsvToJSON
  }; 