import './coin.css';
import { useDispatch } from 'react-redux';
import { decrementWallet } from '../../user/userSlice';
import { incrementDeposit } from '../../deposit/depositSlice';
import { decrementCoins } from '../../coins/coinsSlice';

const Coin = ({props}) => {
    const [ value, count] = props;
    const dispatch = useDispatch();
    const processedValue = parseFloat(value/100).toFixed(2);

    const handleClick = (e) => {
        dispatch(decrementWallet(processedValue));
        dispatch(incrementDeposit(processedValue));
        dispatch(decrementCoins(value));
    }
    return (
        <div className="col">
            <div className="coin-container">
                <div className="quantity-label">
                    <p>{count} x</p>
                </div>
                <button 
                    type="button"
                    className={`coin ${count === 0 ? "disabled" : ''}`}
                    onClick={handleClick}
                    disabled={count === 0 ? true : false}
                >
                    {value >= 100 ? 
                        `€${value/100}` : value
                    }
                </button>
            </div>
        </div>
    )
}

export default Coin;