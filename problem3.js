//Get all items containing Vitamin A.


function itemsContainingVitaminA(array){
    let items=array.reduce((acc,cv)=>{
        if(cv.contains.includes("Vitamin A")){
            acc.push(cv.name);
        }
        return acc;

    },[]);

    return items;
}

module.exports=itemsContainingVitaminA;