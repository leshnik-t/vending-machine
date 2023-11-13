import './item.css';

const Item = ({ props }) => {
    const { itemKey, itemLabel, itemPrice, itemImage } =  props;
    return (
        <div className="item" data-label={itemLabel}>
            <div className="item-label">
                {itemLabel}
            </div>
            { itemImage !== "" &&
                <div className="item-image">
                    <img 
                        src={itemImage} 
                        alt={`item sku ${itemKey}`}
                    />
                </div>
            }
            <div className="item-price">
                {`€ ${itemPrice}`}
            </div>
        </div>
    )
}

export default Item;