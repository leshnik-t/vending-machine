import './deposit-input.css';
import { useSelector } from 'react-redux';

import { selectDeposit }  from '../depositSlice';

import CoinsList from '../../coins/coinsList/CoinsList';

const DepositInput = () => {
    const deposit = useSelector(selectDeposit);
    
    return (
        <section className="deposit-input">
            <h3>1. Click on coins to enter amount</h3>
            <div className="row">
                <div className="col">
                        <label 
                            htmlFor="user-deposit"
                            className="form-label"
                        >
                            Your deposit:
                        </label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="user-deposit"
                            value={deposit ? deposit : "0.00"}
                            disabled
                        />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CoinsList />
                </div>
            </div>
        </section>
    )
}

export default DepositInput;