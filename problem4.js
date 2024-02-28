// 4. Group items based on the Vitamins that they contain in the following format:
//         {
//             "Vitamin C": ["Orange", "Mango"],
//             "Vitamin K": ["Mango"],
//         }
        
//         and so on for all items and all Vitamins.

//let data=require("./vitaminsData.js");

function itemsBasedOnVitamins(array){

    let res=array.reduce((acc,cv)=>{
        let vitamins=cv.contains.split(",");
        for(let vitamin of vitamins){
            let v='';
            if(vitamin[0]===" "){
                v=vitamin.slice(1,vitamin.length);
            }else{
                v=vitamin.slice(0,vitamin.length);
            }

            if(v in acc){
                acc[v].push(cv.name);
            }else{
                acc[v]=[cv.name];
            }
        }

        return acc;
    },{})

    return res;
}

module.exports=itemsBasedOnVitamins;


//console.log(itemsBasedOnVitamins(data));