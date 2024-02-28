//Sort items based on number of Vitamins they contain.

//let data=require("./vitaminsData");

function sortItemsBasedOnNumberOfVitamins(array){
    let res=array.sort((a,b)=>{
        return a.contains.split(",").length-b.contains.split(",").length;
    })

    return res;
}

module.exports=sortItemsBasedOnNumberOfVitamins;


//console.log(sortItemsBasedOnNumberOfVitamins(data));
