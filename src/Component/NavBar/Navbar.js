import './Navbar.css';
import LogIn from '../LogIn/login';
import Register from '../Register/Register';
import { login, register} from '../../Action';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({loginValue}) => {

    const dispatch = useDispatch();

    const LR = (value) => {
         if(value === 'login'){
            dispatch(login(value));
         }else if(value === 'register'){
            dispatch(register(value));
         }
    }

    const showConditonalData = () => {
        if(loginValue){
           return <span onClick={() => LR('login')}>Logout</span>
        }else {
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