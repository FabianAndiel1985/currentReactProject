export const giveAction = (event,item)=>{
    return  {
                type:"addProductToCart",
                product:item
            }
}

export const removeProductFromCart = (event)=>{
    console.log("§");
    return  {
                type:"removeProductFromCart",
                
            }
}