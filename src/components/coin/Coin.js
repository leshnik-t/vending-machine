import './coin.css'

const Coin = ({props}) => {
    const [ value, count] = props;

    return (
        <div className="col">
            <div className="coin-container">
                <div className="quantity-label">
                    <p>{count} x</p>
                </div>
                <div className={`coin ${count === 0 ? "disabled" : null}`}>
                    {value >= 100 ? 
                        `€${value/100}` : value
                    }
                </div>
            </div>
        </div>
    )
}

export default Coin;