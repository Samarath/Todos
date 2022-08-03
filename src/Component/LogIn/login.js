import './login.css';
import {useDispatch, useSelector} from 'react-redux'
import { isLogin, login} from '../../Action';

const LogIn = () => {

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin);


  const dataBase = [
    {
      email: 's@gmail.com',
      password: '123'
    },
    {
      email: 'p@gmail.com',
      password: '456'
    }
  ]

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value
    
    dataBase.forEach(item => {
      if(item['email'] === email && item['password'] === password){
        dispatch(isLogin(true));
        dispatch(login(''));
      }
      
    })
    console.log(userLogin, 'user login  ')

    e.target[0].value = '';
    e.target[1].value = '';
  }

    return(
      <div className="forms">
        <form onSubmit={onSubmit}>
        <label htmlFor='email'>
            Email
            <br />
            <input type='email' id="email" name="login_email"/>
        </label>
         <br />
        <label htmlFor='password'>
            Password
            <br />
            <input type='password' id="password" name="login_password"/>
        </label>
        <label htmlFor='submit'>
          <br />
            <input type='submit' id="submit" name="submit_button" value='Login'/>
        </label>
      </form>
      </div>
    )
}

export default LogIn;