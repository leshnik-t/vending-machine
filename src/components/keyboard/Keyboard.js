import './keyboard.css';

const Keyboard = () => {
    return (
        <section className="keyboard">
            <h3>2. Select item code</h3>
            <div className="row">
                <div className="col">
                    <div className="buttons">
                        <div className="row g-2">
                            <div className="col">
                                <button>A</button>
                                <button>B</button>
                                <button>C</button>
                                <button>D</button>
                            </div>
                            <div className="col">
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="selected-item-number mb-3">
                        <label 
                            htmlFor="user-selected-item-number"
                            className="form-label"
                        >
                            Chosen item:
                        </label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="user-selected-item-number"
                            placeholder="Ex. A1" 
                            disabled
                        />
                    </div>
                    <div className="selected-item-price mb-3">
                        <label 
                            htmlFor="user-selected-item-price"
                            className="form-label"
                        >
                            Price:
                        </label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="user-selected-item-price" 
                            disabled
                        />
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Keyboard;