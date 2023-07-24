import { createStore, applyMiddleware, combineReducers,compose} from "redux";
import unitdata from "./ProductReducer/Reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({course:unitdata});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
 



