import storeTheInputs from "./StoreInputs";
import removeTheItems from "./RemoveItems";
import checkingTheDelete from "./CheckingDelete";
import { combineReducers} from "redux";

const rootReducers = combineReducers({
    storeTheInputs,
    removeTheItems,
    checkingTheDelete
});

export default rootReducers;