const odbc = require("odbc");

function updateUploadExtJSON (externalPartner, csvJSON) {
	 
    return new Promise(function(resolve)
    {
    
   
      //csvJSON = 'Marco van Meel';
       
       //const sSql = 'UPDATE DASFP@V.UPLEXTJSON set  CONVERTEDJSON =\'' + JSON.stringify(csvJSON) + '\'   where EXTERNALPARTNER  =\'' + externalPartner + '\' with NONE';
       const sSql = 'UPDATE HEICO.UPLEXTJSON set  CONVERTEDJSON = ?  where EXTERNALPARTNER  =\'' + externalPartner + '\' with NONE';
        

      // Binding elements 
      //console.log(JSON.stringify(response.headers));
      // const arrayElements = [csvJSON]; 
      const arrayElements = [JSON.stringify(csvJSON).trim()];
      const conn = odbc.connect('DSN=*LOCAL;NAM=1;CMT=0;',  (error, connection) => { 
      console.log('sSQL '+sSql); 
      
       connection.query( sSql, arrayElements, (error, result) => {
       if (error) {
         throw error;
       }	
       
       //console.log(`Result Set: ${JSON.stringify(result)}`);
        
       // let resultaat = result;
       // console.log('Resultaat:' +JSON.stringify(resultaat));
       resolve(result);
        connection.close().then(() => {
          console.log('closed');
          });
  }); 
       
  }); 
        
      
   });   
   
    }

    module.exports = {
     
      updateUploadExtJSON: updateUploadExtJSON
     };