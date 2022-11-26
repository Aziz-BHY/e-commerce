import axios from "axios";
import { useState } from "react";
import {useCookies} from 'react-cookie'

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [town, setTown] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['token']);

  const signup = ()=>{
    axios.post("http://localhost:5000/users/signup", {
      firstName,
      lastName,
      adress,
      town,
      country,
      zip,
      phone,
      email,
      password
    }).then(res=>{
      if(res.data.error) alert(res.data.error)
      else {setCookie("token", res.data.token); window.location = "/myspace"}
    })
  }
      return (
      <div class="col-lg-6 col-md-6">
        <h6 class="checkout__title">Sign Up</h6>
        <div class="row">
          <div class="col-lg-6">
            <div class="checkout__input">
              <p>
                Fist Name<span>*</span>
              </p>
              <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="checkout__input">
              <p>
                Last Name<span>*</span>
              </p>
              <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)}/>
            </div>
          </div>
        </div>
        <div class="checkout__input">
          <p>
            Address<span>*</span>
          </p>
          <input
            type="text"
            placeholder="Street Address"
            class="checkout__input__add"
            value={adress} onChange={e=>setAdress(e.target.value)}
          />
        </div>
        <div class="checkout__input">
          <p>
            Town/City<span>*</span>
          </p>
          <input type="text" value={town} onChange={e=>setTown(e.target.value)}/>
        </div>
        <div class="checkout__input">
          <p>
            Country/State<span>*</span>
          </p>
          <input type="text" value={country} onChange={e=>setCountry(e.target.value)} />
        </div>
        <div class="checkout__input">
          <p>
            Postcode / ZIP<span>*</span>
          </p>
          <input type="text" value={zip} onChange={e=>setZip(e.target.value)} />
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="checkout__input">
              <p>
                Phone<span>*</span>
              </p>
              <input type="text" value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="checkout__input">
              <p>
                Email<span>*</span>
              </p>
              <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
          </div>
        </div>
        <div class="checkout__input">
          <p>
            Password<span>*</span>
          </p>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button class="site-btn" onClick={signup}>Sign up</button>
      </div>
    );
  }
  