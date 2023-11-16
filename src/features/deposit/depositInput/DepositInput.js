import './deposit-input.css';
import { useSelector } from 'react-redux';

import { selectWallet }  from '../../user/userSlice';
import { selectDeposit }  from '../depositSlice';

import CoinsContainer from '../../../components/coinsContainer/CoinsContainer';

const DepositInput = () => {
    const wallet = useSelector(selectWallet);
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
                    <CoinsContainer deposit={wallet ? wallet : "0.00"}/>
                </div>
            </div>
        </section>
    )
}

export default DepositInput;