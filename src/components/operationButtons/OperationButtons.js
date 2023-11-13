import './operation-buttons.css';

const OperationButtons = () => {
    return (
        <section className="operation-buttons">
            <h3>3. Pay or cancel</h3>
            <div className="row row-cols-1 g-3">
                <div className="col">
                    <button className="btn btn-success btn-lg">Purchase</button>
                </div>
                <div className="col">
                    <button className="btn btn-outline-secondary btn-lg">Cancel</button>
                </div>
            </div>
        </section>
    )
}

export default OperationButtons;