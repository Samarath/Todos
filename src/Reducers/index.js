import storeTheInputs from "./StoreInputs";
import removeTheItems from "./RemoveItems";
import checkingTheDelete from "./CheckingDelete";
import userLogin from "./IsLogin";
import loginOrRegister from "./LoginOrRegister";
import { combineReducers} from "redux";

const rootReducers = combineReducers({
    storeTheInputs,
    removeTheItems,
    checkingTheDelete,
    userLogin,
    loginOrRegister
});

export default rootReducers;