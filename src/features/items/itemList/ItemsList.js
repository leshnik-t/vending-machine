import './items-list.css';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../itemsSlice';

import Item from '../item/Item';

const ItemsList = () => {
    const items = useSelector(selectAllItems);
    return (
        <section className="items-list">
            <div className="container-fluid">
                <div className="row row-cols-2 row-cols-md-4 g-2">
                    {items.map((item) => (
                        <div className="col" key={item.slotLabel}>
                            <Item props={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ItemsList;