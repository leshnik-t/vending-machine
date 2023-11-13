import './coins-container.css';
import { nanoid } from '@reduxjs/toolkit';
import { amountToCoins } from '../../helpers/convertAmount';
import Coin from '../coin/Coin';

const CoinsContainer = () => {
    const walletInCoins = amountToCoins('5.45');
    
    return (
        <div className="coins-container">
            <div className="row gy-3">
                {[...walletInCoins.entries()].map((coin) => {
                    return (
                        <Coin props={coin} key={nanoid()}/>   
                    )}
                )}
                
            </div>
        </div>
    )
}

export default CoinsContainer;