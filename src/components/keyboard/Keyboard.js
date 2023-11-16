import './keyboard.css';
import  { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { selectAllItems } from '../../features/items/itemsSlice';
import { selectUser } from '../../features/user/userSlice';
import { 
    addOrder,
    addCurrentOrder,
    selectCurrentOrder, 
} from '../../features/orders/ordersSlice';

import KeyboardButtons from '../keyboardButtons/KeyboardButtons';


const Keyboard = () => {
    const [itemLabel, setItemLabel] = useState(null);
    const [isError, setIsError] = useState(false);

    const dispatch = useDispatch();
    const currentOrder = useSelector(selectCurrentOrder);
    const items = useSelector(selectAllItems);
    const user = useSelector(selectUser);

    useEffect(() => {
        if(currentOrder === null && itemLabel?.length === 2) {
            const existingItem = items.find(item => item.slotLabel === itemLabel && +item.quantity !== 0);

            if (existingItem) {
                setItemLabel(null);
                const order = {
                    id: nanoid(),
                    status: 'pending',
                    date: new Date().toUTCString(),
                    userId: user.id,
                    itemSku: existingItem.sku,
                    itemPrice: existingItem.price,
                    itemSlotLabel: existingItem.slotLabel,
                }
                const currentOrder = {
                    id: order.id,
                    itemSlotLabel: order.itemSlotLabel,
                    itemPrice: order.itemPrice
                }
                dispatch(addOrder(order));
                dispatch(addCurrentOrder(currentOrder));
            } else {
                setIsError(true);
                setItemLabel(null);
                setTimeout(() => {
                    setIsError(false);
                }, 3000);
            }
        } 
    }, [itemLabel, dispatch, items, user.id, currentOrder]);

    const handleClick = (e) => {
        setItemLabel((prev) => {
            if (!prev) { 
                return e.target.innerHTML
            } else {
                if (prev.length < 2) {
                    return prev + e.target.innerHTML 
                } else {
                    return prev;
                }
                
            }
        });
    }
    return (
        <section className="keyboard">
            {isError && <p className="alert alert-warning message" role="alert">Please, choose instock item!</p>}
            <h3>2. Select item code</h3>
            <div className="row">
                <div className="col">
                    <KeyboardButtons handleClick={handleClick} currentOrder={currentOrder}/>
                </div>
                <div className="col">
                    <div className="selected-item-number mb-3">
                        <label 
                            htmlFor="user-selected-item-number"
                            className="form-label"
                        >
                            Chosen item:
                        </label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="user-selected-item-number"
                            value={currentOrder?.itemSlotLabel ?  currentOrder.itemSlotLabel : "Ex. A1"} 
                            maxLength="2"
                            disabled
                        />
                    </div>
                    <div className="selected-item-price mb-3">
                        <label 
                            htmlFor="user-selected-item-price"
                            className="form-label"
                        >
                            Price:
                        </label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="user-selected-item-price"
                            value={currentOrder?.itemPrice ? currentOrder.itemPrice : ""}  
                            disabled
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Keyboard;