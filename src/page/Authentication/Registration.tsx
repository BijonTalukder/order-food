import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { createUser } from "../../redux/feature/Auth/AuthSlice";
import {useDispatch} from 'react-redux'
// import {} from '@/redu'
type FormData = {
  name: string;
  email: string;
  password:string
};

const Registration = () => {
  const dispatch = useDispatch()
  const {
      register,
      setValue,
      handleSubmit,
      // formState: { errors }
    } = useForm<FormData>();
  const handleRegisttration = (value:FormData):void => {
    // return console.log(value);
    dispatch(createUser(value)) 
    
  };
  return (
    <div className="registration">
      <div className="box">
        <form onSubmit={handleSubmit(handleRegisttration)}>
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input type="text" required  {...register("name", {required:true})}/>
            <span>User Name</span>
            <i></i>
          </div>


          <div className="inputBox">
            <input type="email" required {...register("email", {required:true})} />
            <span>email </span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password" required  {...register("password", {required:true})}/>
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
