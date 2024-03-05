import './InputItem.css';
import { showError, showSuccess } from '../../Utils/showToast';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { shoppingDispatchContext } from '../../providers/ShoppingContext';
import { shoppingItemsContext } from '../../providers/ShoppingContext';


function InputItem({ addItem }) {
  
    // useForm hook 
    const {register , handleSubmit , formState: {errors} } = useForm();
    // import context
    const dispatch = useContext(shoppingDispatchContext);


    const handleFormSubmission = (data) => {
        dispatch(
            {
                type: 'add_item',
                itemName: data.item
            }
        )
        console.log(data.item)
        // setItemName("");
        showSuccess("Successfully added an item");
    };

  // for errors
  useEffect(() =>
  {
    if(errors.item && errors.item.type === 'required')
    {
        showError("item cannot be empty")
    }
    if(errors.item && errors.item.type === 'minLength')
    {
        showError("item cannot be less than 3 letters")
    }

  } , [errors.item && errors.item.type])
   
    return (
        <div className="item-input-wrapper">
            <form   onSubmit={  handleSubmit(handleFormSubmission)  } >
                <input
                    className='item-input'
                    type="text"
                    placeholder="Add an item ..."
                    // value={itemName}
                    name="item"
                    
                    {...register("item", { required: true, minLength:3 })}
                />
               

                <button className='add-item-button'>
                    Add
                </button>

            </form>


        </div>



    )

}
export default InputItem; 