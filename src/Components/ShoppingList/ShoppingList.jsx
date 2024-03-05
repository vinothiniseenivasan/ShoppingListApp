import { useReducer } from "react";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import './ShoppingList.css';
import { ToastContainer } from 'react-toastify';


// context import
import { shoppingItemsContext } from "../../providers/ShoppingContext";
import { shoppingDispatchContext } from "../../providers/ShoppingContext";

// const shoppingItems =  [
//     {   id:1 , name :'Apples' ,quantity:1  } ,

//     {   id:2 , name :'Rice' ,quantity:4  }

// reducer import
import itemReducer from "../../Reducers/itemReducer";



function ShoppingList() {

    const [shoppingItems, dispatch] = useReducer(itemReducer, []);

    // function handleAddItem(name) {
    //     dispatch(
    //         {
    //             type: 'add_item',
    //             itemName: name
    //         }
    //     )
    // } 

    // function handleAddQuantity(id) {
    //     dispatch(
    //         {
    //             type: 'increment_item',
    //             itemId: id
    //         }
    //     )


    // }


    // function handleDecreaseQuantity(id) {
    //     dispatch(
    //         {
    //             type: 'decrement_item',
    //             itemId: id
    //         }
    //     )

    // }




    return (
        <>

            <shoppingItemsContext.Provider value={ shoppingItems  }>
            <shoppingDispatchContext.Provider  value={ dispatch  }>
                <Header />
                <ToastContainer />
                <div className="current-shopping-list">
                    <InputItem/>
                    <ItemList/>

                </div>
                </shoppingDispatchContext.Provider>
            </shoppingItemsContext.Provider>
        </>
    )

}

export default ShoppingList;