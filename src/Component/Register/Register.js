import './Register.css';
import { isLogin, login } from '../../Action';
import {useDispatch } from 'react-redux';

const Register = () => {

  const dispatch = useDispatch();


  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value;
    const password = e.target[2].value

    // console.log(name, email, password)
    dispatch(isLogin(true));
    dispatch(login(''));
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  }

    return(
      <div className="forms">
        <form onSubmit={onSubmit}>
        <label htmlFor='name'>
            Name
            <br />
            <input type='text' id="name" name="login_email" placeholder="Enter your name"/>
        </label>
        <br />
        <label htmlFor='email'>
            Email
            <br />
            <input type='email' id="email" name="login_email" placeholder="Enter your email"/>
        </label>
         <br />
        <label htmlFor='password'>
            Password
            <br />
            <input type='password' id="password" name="login_password" placeholder="Enter your password"/>
        </label>
        <label htmlFor='Register'>
          <br />
            <input type='submit' id="Register" name="Register_button" value='Register'/>
        </label>
      </form>
      </div>
    )
}

export default Register;