import './keyboard-container.css';
import Keyboard from '../keyboard/Keyboard';
import OperationButtons from '../operationButtons/OperationButtons';

const KeyboardContainer = () => {
    return (
        <section className="keyboard-container">
            <div className="row row-cols-md-2 row-cols-xs-1">
                <div className="col">
                    <Keyboard />
                </div>
                <div className="col">
                    <OperationButtons />
                </div>
            </div>
            
        </section>
    )
}

export default KeyboardContainer;