import {useState} from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'
export default function Signin() {
  const [cookies, setCookie] = useCookies(['token']);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signin = ()=>{
    axios.post("http://localhost:5000/users/signin", {email, password}).then(res=>{
      if ( !res.data.error) {setCookie("token", res.data.token); window.location = "/myspace"}
      else alert("email or password is incorrect")
    })
  }
    return (
      <div class="col-lg-5 col-md-6">
        <h6 class="checkout__title">Sign In</h6>
        <div class="checkout__input">
          <p>
            Email<span>*</span>
          </p>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div class="checkout__input">
          <p>
            Password<span>*</span>
          </p>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button class="site-btn" onClick={signin}>Sign in</button>
      </div>
    );
  }
  