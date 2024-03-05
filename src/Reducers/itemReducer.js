
import { v4 as uuidv4 } from 'uuid';
// action => object
// action => { type => 'add.item}

function itemReducer(shoppingItems , action)
{

    if(action.type === 'add_item')
    {
        return  [...shoppingItems ,
            {
                id:uuidv4() ,
                name:action.itemName ,
                quantity : 1 
            }
        ]

    }
    else if(action.type === 'increment_item')
    {

        const newShoppingItems = shoppingItems.map((eachItem) =>
        {
            if(eachItem.id === action.itemId)
            {
                eachItem.quantity++;
                
            }
            return eachItem;
        });

        return newShoppingItems;
        
    }
    if(action.type === 'decrement_item')
    {

        const newShoppingItems = shoppingItems.map((eachItem) =>
        {
            if(eachItem.id === action.itemId)
            {
                eachItem.quantity--;
                
            }
            return eachItem;
        });

        return newShoppingItems.filter((eachItem) => eachItem.quantity > 0);  
        
    }

}
export default itemReducer;