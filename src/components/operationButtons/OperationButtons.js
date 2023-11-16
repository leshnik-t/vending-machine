import './operation-buttons.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
    incrementWallet, 
} from '../../features/user/userSlice';
import { 
    selectDeposit,
    deleteDeposit 
} from '../../features/deposit/depositSlice';
import { 
    selectCurrentOrder,
    deleteCurrentOrder,
    selectAllOrders,
    updateOrder,
} from '../../features/orders/ordersSlice';
import { decrementItemQuantity } from '../../features/items/itemsSlice';

const OperationButtons = () => {
    const [order, setOrder] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isPurchaseMessage, setIsPurchaseMessage] = useState(false);
    const [change, setChange] = useState("0.00");
    const deposit = +useSelector(selectDeposit);
    const currentOrder = useSelector(selectCurrentOrder);
    const orders = useSelector(selectAllOrders)
    const isReadyForPurchase = deposit && currentOrder;

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentOrder !== null) {
            const existingOrder = orders.find((order) => 
                order.id === currentOrder.id
            )
            if (existingOrder) {
                setOrder(existingOrder);
            }
        }
    },[currentOrder, orders]);

    const handlePurchase = (e) => {
        if (order) {
            const diffDepositPrice = +deposit - +order.itemPrice;
            if (diffDepositPrice >= 0) {
                setChange(diffDepositPrice);
                dispatch(deleteCurrentOrder());
                dispatch(decrementItemQuantity(order.itemSlotLabel));
                dispatch(updateOrder({id: currentOrder.id, status: 'fulfilled'}));
                dispatch(deleteDeposit());
                dispatch(incrementWallet(diffDepositPrice));

                setOrder(null);
                setIsPurchaseMessage(true);
                setTimeout(() => {
                    setIsPurchaseMessage(false);
                }, 3000);
            } else {
                setIsError(true);
                setTimeout(() => {
                    setIsError(false);
                }, 3000);
            }
        }
    }

    const handleCancel = (e) => {
        if (currentOrder !== null) {
            dispatch(deleteCurrentOrder());
            dispatch(updateOrder({id: currentOrder.id, status: 'rejected'}));
        }

        dispatch(deleteDeposit());
        dispatch(incrementWallet(deposit));
    }

    return (
        <section className="operation-buttons">
            {isError && 
                <p className="alert alert-warning message" role="alert">Please, enter more coins!</p>
            }
            {isPurchaseMessage && 
                <p className="alert alert-success message" role="alert">
                    Your Change: {parseFloat(change).toFixed(2)}
                </p>
            }
            <h3>3. Pay or cancel</h3>
            <div className="row row-cols-1 g-3">
                <div className="col">
                    <button 
                        className="btn btn-success btn-lg"
                        onClick={handlePurchase}
                        disabled={isReadyForPurchase ? false : true}
                    >
                        Purchase
                    </button>
                </div>
                <div className="col">
                    <button 
                        className="btn btn-outline-secondary btn-lg"
                        onClick={handleCancel}
                        disabled={deposit ? false : true}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OperationButtons;