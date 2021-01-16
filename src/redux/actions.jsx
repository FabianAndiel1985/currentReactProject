export const giveAction = (event,item)=>{
    return  {
                type:"addProductToCart",
                product:item
            }
}