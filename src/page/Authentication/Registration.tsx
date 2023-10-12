import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
type FormData = {
  firstName: string;
  lastName: string;
};
const Registration = () => {
  // const {
  //     register,
  //     setValue,
  //     handleSubmit,
  //     // formState: { errors }
  //   } = useForm<FormData>();
  // const onSubmit = handleSubmit(({ firstName, lastName }) => {
  //   console.log(firstName, lastName);
  // });
  return (
    <div className="registration">
      <div className="box">
        <form>
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input type="text" required />
            <span>User Name</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>

          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    </div>
  );
};

export default Registration;
