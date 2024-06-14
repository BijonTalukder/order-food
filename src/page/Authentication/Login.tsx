import { useState, useEffect } from "react";
import "../../../public/Assets/CSS/ComponentCSS/login.scss";
import { loginUser } from "../../redux/feature/Auth/AuthSlice";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

type ILoginUser = {
  email: string;
  password: string;
};

const Login = () => {
  const [data, setData] = useState<ILoginUser>({
    email: "",
    password: "",
  });
  const dispatch:AppDispatch = useDispatch();
  // const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginUser(data));
  };
  useEffect(() => {
    // if (userData) {
    //   navigate("/");
    // }
  }, );
  return (
    <div className="login">
      <div className="box">
        <form onSubmit={handleLogin}>
          <h2>Sign In</h2>

          <div className="inputBox">
            <input
              name="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              required
            />
            <span>email </span>
            <i></i>
          </div>

          <div className="inputBox">
            <input
              type="password"
              name="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
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
