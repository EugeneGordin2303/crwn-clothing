import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers ({
    directory: directoryReducer,
    shop: shopReducer
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist:['cart']
}

export default persistReducer(persistConfig, rootReducer);