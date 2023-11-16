import './coins-list.css';
import { useSelector } from 'react-redux';

import { selectAllCoins } from '../coinsSlice';

import Coin from '../coin/Coin';

const CoinsList = () => {
    const coins = useSelector(selectAllCoins);
    return (
        <div className="coins-list">
            <div className="row gy-3">
                {coins.map((coin) => {
                    return (
                        <Coin props={coin} key={coin[0]}/>   
                    )}
                )}
            </div>
        </div>
    )
}

export default CoinsList;