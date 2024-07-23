import React, { useContext, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase";
import { Context } from "../../Context/Context";
const Signup = () => {
  //use navigate....
  const navigator = useNavigate();
  // state .......
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { setUsername} = useContext(Context);

  // handle form inputs......
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle form submit......
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username == "") {
      alert("please enter username");
    } else if (formData.email == "") {
      alert("please enter email");
    } else if (formData.password == "") {
      alert("please enter password");
    } else {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((res) => {
          updateProfile(auth.currentUser, {
            displayName: formData.username,
          });
          setUsername(formData.username);

          navigator("/");
          setFormData({
            username: "",
            email: "",
            password: "",
          });
          toast.success("Signup sucessfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // ..
        });
    }
  };
  return (
    <div className="signup-container">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h2>Signup</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInput}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInput}
            required
          />
          <button>Signup</button>
        </div>
      </form>
      <div className="message">
        <p>
          If you have already accout? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
