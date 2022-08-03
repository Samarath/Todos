import './Navbar.css';
import LogIn from '../LogIn/login';
import Register from '../Register/Register';
import { login, register, isLogin} from '../../Action';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({loginValue}) => {
    const showLoginOrRegister = useSelector(state => state.loginOrRegister)
    const dispatch = useDispatch();

    const LR = (value) => {
         if(value === 'login'){
            dispatch(login(value));
            dispatch(isLogin(false))
         }else if(value === 'register'){
            dispatch(register(value));
         }
    }

    const showConditonalData = () => {
        if(loginValue){
           return <span onClick={() => LR('login')}>Logout</span>
        }else if(showLoginOrRegister === 'login' || showLoginOrRegister === 'register'){
            
            return (
                <>
                <span onClick={() => LR('login')}>Login</span>
                <span onClick={() => LR('register')}>Register</span>
                </>
            )
        }
    }

    return (
        <div className="navbar">
            <div>Logo</div>
            
            <div>
                {showConditonalData()}
            </div>
        </div>
    )
}

export default Navbar;