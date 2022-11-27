import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [town, setTown] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['token']);

  useEffect(()=>{
    if(!cookies.token){
      window.location = "/"
    }
    axios.get("http://localhost:5000/users/"+cookies.token).then(res=>{
      if(!res.data._id) window.location="/"
    setFirstName(res.data.firstName);
    setLastName(res.data.lastName)
    setAdress(res.data.adress);
    setTown(res.data.town)
    setCountry(res.data.country);
    setZip(res.data.zip)
    setPhone(res.data.phone)
  })
  }, [])

  const updateUser = ()=>{
    axios.put("http://localhost:5000/users/"+cookies.token, {
      firstName,
      lastName,
      adress,
      town,
      country,
      zip,
      phone,
      password
    }).then(res=>{
      console.log(res.data)
    })
  }
  return (
    <section class="checkout spad">
      <div class="container">
        <div class="checkout__form">
            <div class="row">
              <div class="col-lg-12 col-md-6">
                <h6 class="checkout__title">Profile</h6>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>
                        Fist Name<span>*</span>
                      </p>
                      <input type="text" value={firstName} onChange={e=> setFirstName(e.target.value)}/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>
                        Last Name<span>*</span>
                      </p>
                      <input type="text" value={lastName} onChange={e=> setLastName(e.target.value)}/>
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
                    value={adress} onChange={e=> setAdress(e.target.value)}
                  />
                </div>
                <div class="checkout__input">
                  <p>
                    Town/City<span>*</span>
                  </p>
                  <input type="text" value={town} onChange={e=> setTown(e.target.value)}/>
                </div>
                <div class="checkout__input">
                  <p>
                    Country/State<span>*</span>
                  </p>
                  <input type="text" value={country} onChange={e=> setCountry(e.target.value)}/>
                </div>
                <div class="checkout__input">
                  <p>
                    Postcode / ZIP<span>*</span>
                  </p>
                  <input type="text" value={zip} onChange={e=> setZip(e.target.value)}/>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>
                        Phone<span>*</span>
                      </p>
                      <input type="text" value={phone} onChange={e=> setPhone(e.target.value)}/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                  <div class="checkout__input">
                  <p>
                    Password<span>*</span>
                  </p>
                  <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                </div>
                  </div>
                </div>
                
                <button class="site-btn" onClick={updateUser}>Update Profile</button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
