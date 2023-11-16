import './coins-container.css';
import { nanoid } from '@reduxjs/toolkit';

import { amountToCoins } from '../../helpers/convertAmount';

import Coin from '../coin/Coin';

const CoinsContainer = ({ deposit }) => {
    const depositInCoins = amountToCoins(deposit);

    return (
        <div className="coins-container">
            <div className="row gy-3">
                {[...depositInCoins.entries()].map((coin) => {
                    return (
                        <Coin props={coin} key={nanoid()}/>   
                    )}
                )}
                
            </div>
        </div>
    )
}

export default CoinsContainer;