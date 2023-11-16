import './item.css';

const Item = ({ props }) => {
    const { slotLabel, ...item } =  props;
    return (
        <div className="item" data-label={slotLabel}>
            <div className="item-label">
                {slotLabel}
            </div>
            <div className="item-quantity">
                {`${item?.quantity ? item.quantity : 0}`}
            </div>
            {(item?.imageUrl && item?.quantity && item.quantity > 0 ) ?
                <div className="item-image">
                    <img 
                        src={item.imageUrl} 
                        alt={`${item.name} ${item.sku}`}
                    />
                </div>
                : null
            }
            <div className="item-price">
                {`€ ${item?.price && item?.quantity && item.quantity > 0 ? item.price : 0}`}
            </div>
        </div>
    )
}

export default Item;