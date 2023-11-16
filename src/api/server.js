import { http, HttpResponse, delay } from 'msw';
import { nanoid } from '@reduxjs/toolkit';

// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 1000

const items = [
    {
        "slotLabel": "C3", 
        "name": "lollipop", 
        "imageUrl": "https://img.freepik.com/premium-vector/realistic-lollipop-composition-with-image-sweet-candy-wooden-stick-transparent-background-vector-illustration_1284-67177.jpg",
        "sku": nanoid(),
        "price": "0.10",
        "quantity": "15", 
    },
];
const users = [
    {
        "id": nanoid(), 
        "username": "fakeuser",
        "firstName": "Fake",
        "lastName": "User",
        "wallet": "3.46",
        "currency": "EUR"
    }
];

export const handlers = [
    http.get('/items/:slotLabel', async (req) => {
        const { slotLabel } = req.params;
        const item = items.find((item) => item.slotLabel === slotLabel);
        await delay(ARTIFICIAL_DELAY_MS);
        
        return HttpResponse.json(item);
    }),
    http.get('/users/:username', async (req) => {
        const { username } = req.params;
        const user = users.find((user) => user.username === username);
        await delay(ARTIFICIAL_DELAY_MS); 
        
        return HttpResponse.json(user);
    }),
]