//Get all items containing only Vitamin C.



function itemsContainingVitaminC(array){
    let items=array.reduce((acc,cv)=>{
        if(cv.contains.includes("Vitamin C")){
            acc.push(cv.name);
        }
        return acc;

    },[]);

    return items;
}

module.exports=itemsContainingVitaminC;