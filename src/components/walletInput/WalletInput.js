import './wallet-input.css';
import CoinsContainer from '../coinsContainer/CoinsContainer';

const WalletInput = () => {
    return (
        <section className="wallet-input">
            <h3>1. Click on coins to enter amount</h3>
            <div className="row">
                <div className="col">
                        <label 
                            htmlFor="user-amount"
                            className="form-label"
                        >
                            Your amount:
                        </label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="user-amount" 
                            disabled
                        />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CoinsContainer />
                </div>
            </div>
        </section>
    )
}

export default WalletInput;