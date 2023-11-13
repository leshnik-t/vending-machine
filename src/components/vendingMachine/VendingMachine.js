import './vending-machine.css';
import ItemsList from '../../features/items/ItemsList';
import KeyboardContainer from '../keyboardContainer/KeyboardContainer';
import WalletInput from '../walletInput/WalletInput';

const VendingMachine = () => {
    return (
        <section className="vending-machine">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <ItemsList />
                    </div>
                    <div className="col-md-4">
                        <WalletInput />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <KeyboardContainer />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendingMachine;