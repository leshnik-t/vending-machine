import './wallet.css';
import { useSelector } from 'react-redux';
import { selectUser }  from '../userSlice';

const Wallet = () => {
    const user = useSelector(selectUser);
    return (
        <section className="wallet fixed-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h1>Your wallet: <span>&euro; {user?.wallet ? user.wallet : "0.00"}</span></h1>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Wallet;