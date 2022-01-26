import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./RegisterForm.css";
import BloodGroups from "../BloodGroups/BloodGroups";

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function RegisterForm(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [blood, setblood] = useState("");
  const [phone, setphone] = useState("");
  const [place, setplace] = useState('');
    let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = { name: name, blood: blood, email: email, phone: phone,place:place };

    addDoc(collection(db, "donors"), newUser).then(() => {
      setblood(false);
      setemail("");
      setname("");
      setphone("");
      console.log("Registerd successfully");
      navigate("/")
      
    });
  }

  function handleBlood(blood) {
    setblood(blood);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name..."
            required
            value={name}
            onChange={(event) => {
              setname(event.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="email address..."
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            placeholder="Phone number"
            required
            value={phone}
            onChange={(event) => {
              setphone(event.target.value);
            }}
          />
          
        </div>

        <div className="form-input">
          <label htmlFor="">Place</label>
          <input
            type="text"
            placeholder="Place..."
            required
            value={place}
            onChange={(event) => {
              setplace(event.target.value);
            }}
          />
          
        </div>

        <div className="form-input">
          <BloodGroups setActive={handleBlood} />
        </div>

        <div className="form-input form-checkbox">
          <input type="checkbox" name="terms" id="terms" required />{" "}
          <p> I agree to publish my details</p> <br />
          <br />
        </div>

        <div className="register-btn">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
