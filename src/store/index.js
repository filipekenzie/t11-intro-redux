import { legacy_createStore as createStore, combineReducers } from "redux";

import resultReducer from "./modules/results/reducer";

const reducers = combineReducers({ result: resultReducer });

const store = createStore(reducers);

export default store;