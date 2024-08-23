import { createStore } from "redux";
import RootReducer from "../reducer/reducer";

const Store = createStore(RootReducer);

export default Store;