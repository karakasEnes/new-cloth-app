import {combineReducers} from "redux";
import userReducer from "./user-reducer/userReducer";
import cardReducer from "./card-reducer/cardReducer";

export default combineReducers({
    user: userReducer,
    card: cardReducer
})