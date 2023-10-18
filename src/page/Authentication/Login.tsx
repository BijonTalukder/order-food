import '../../../public/Assets/CSS/ComponentCSS/login.scss'
const Login = () => {
  return (
    <div className="login">
      <div className="box">
        <form>
          <h2>Sign In</h2>

          <div className="inputBox">
            <input type="email" required />
            <span>email </span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Login;
