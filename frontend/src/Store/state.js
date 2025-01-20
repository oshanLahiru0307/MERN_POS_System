import {proxy} from 'valtio'

const state = proxy({
    currentUser: null,
    activeIndex: 1,
    Customers: [],
    Shops: [],
    Inventory: [],
    Sales: [],
    Suppliers: []
});

export default state;