const csvFilePath='/volvo/20230705_Heico.csv'
//const csvFilePath='/volvo/lynco.csv'
const csv=require('csvtojson')
csv({delimiter: ';', flatKeys :  true})
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})
 
 //csv().fromFile(csvFilePath);