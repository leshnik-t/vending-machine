import './items-list.css';
import { nanoid } from '@reduxjs/toolkit';
import Item from './Item';

const ItemsList = () => {
    const emptyItemsSlots = [
        {"itemKey": nanoid(), "itemLabel": "A1", "itemPrice": 0.56, "itemImage": "https://img.freepik.com/premium-vector/realistic-lollipop-composition-with-image-sweet-candy-wooden-stick-transparent-background-vector-illustration_1284-67177.jpg"},
        {"itemKey": nanoid(), "itemLabel": "A2", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "A3", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "A4", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "B1", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "B2", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "B3", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "B4", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "C1", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "C2", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "C3", "itemPrice": 0,"itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "C4", "itemPrice": 0,"itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "D1", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "D2", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "D3", "itemPrice": 0, "itemImage": ""},
        {"itemKey": nanoid(), "itemLabel": "D4", "itemPrice": 0, "itemImage": ""}
    ]
    
    return (
        <section className="items-list">
            <div className="container-fluid">
                <div className="row row-cols-2 row-cols-md-4 g-2">
                    {emptyItemsSlots.map((item) => (
                        <div className="col" key={item.itemKey}>
                            <Item props={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ItemsList;