import './Register.css';

const Register = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value

    e.target[0].value = '';
    e.target[1].value = '';
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