import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import accountReducer from './featurs/accounts/accountSlice'
import customerReducer from './featurs/customers/customerSlice'


const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;