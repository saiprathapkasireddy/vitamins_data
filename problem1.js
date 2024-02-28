// Get all items that are available 



function allItems(array){
    let all_items=array.map((element)=>{
        return element.name;
    })

    return all_items;
}

module.exports=allItems;