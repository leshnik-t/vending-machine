import './vending-machine.css';
import KeyboardContainer from '../keyboardContainer/KeyboardContainer';
import DepositInput from '../../features/deposit/depositInput/DepositInput';
import ItemsList from '../../features/items/itemList/ItemsList';

const VendingMachine = () => {
    return (
        <section className="vending-machine">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <ItemsList />
                    </div>
                    <div className="col-md-4">
                        <DepositInput />
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