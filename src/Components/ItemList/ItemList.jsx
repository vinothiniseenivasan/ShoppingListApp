import Item from "../Item/Item";
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus ,faMinus } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from "react";
import { showError } from "../../Utils/showToast";
import { shoppingItemsContext } from "../../providers/ShoppingContext";

import { shoppingDispatchContext } from "../../providers/ShoppingContext";

function ItemList()
{

  const shoppingItems = useContext(shoppingItemsContext);

  const dispatch = useContext(shoppingDispatchContext);

   
  return(
    <div className="shopping-items-wrapper">
    {
     shoppingItems &&   shoppingItems.map((eachItem) =>
        {
           return(
            <div   key = {eachItem.id}  className="item-list">

              <div className="change-quantity add-item"
                 onClick={  () => 

                  dispatch(
                    {
                      type : 'increment_item',
                      itemId: eachItem.id

                    }
                  )
                   } > 

                   <FontAwesomeIcon icon={faPlus} /> 
              </div>

              <Item 
              itemName={eachItem.name}
             
              quantity = {eachItem.quantity} /> 

               <div className="change-quantity remove-item"
                   onClick={  () => {
                    if(eachItem.quantity === 1)
                    {
                      showError(`${eachItem.name} is removed from the list`);
                    }
                    dispatch(
                      {
                        type : 'decrement_item' ,
                        itemId: eachItem.id
  
                      } )
                   
                   
                   }
                   } > 
               
              
               <FontAwesomeIcon icon={faMinus} /> 
               </div>
            
            </div>
            
          
           ) 
        })

    }
    

</div>

  )
    

}
export default React.memo(ItemList);