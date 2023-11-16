import './keyboard-buttons.css';

const KeyboardButtons = ({handleClick, currentOrder}) => {
    return (
        <div className="keyboard-buttons">
            <div className="row g-2">
                <div className="col">
                    <button 
                        type="button"
                        onClick={handleClick}
                        disabled={currentOrder ? true : false}
                    >
                        A
                    </button>
                    <button 
                        type="button"
                        onClick={handleClick}
                        disabled={currentOrder ? true : false}
                    >
                        B
                    </button>
                    <button 
                        type="button"
                        onClick={handleClick}
                        disabled={currentOrder ? true : false}
                    >
                        C
                    </button>
                    <button 
                        type="button"
                        onClick={handleClick}
                        disabled={currentOrder ? true : false}
                    >
                        D
                    </button>
                </div>
                <div className="col">
                    <button 
                        type="button"
                        onClick={handleClick}
                        disabled={currentOrder ? true : false}
                    >
                        1
                    </button>
                    <button 
                        type="button"
                        onClick={handleClick}
                        disabled={currentOrder ? true : false}
                    >
                        2
                    </button>
                    <button 
                        type="button"
                        onClick={handleClick}
                        disabled={currentOrder ? true : false}
                    >
                        3
                    </button>
                    <button 
                        type="button"
                        onClick={handleClick}
                        disabled={currentOrder ? true : false}
                    >
                        4
                    </button>
                </div>
            </div>
        </div>
    )
}

export default KeyboardButtons;