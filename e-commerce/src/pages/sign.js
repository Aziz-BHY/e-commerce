import { useEffect } from "react";
import { useCookies } from "react-cookie";
import Signin from "../components/signin";
import Signup from "../components/signup";
export default function Sign() {
  const [cookies] = useCookies(['token']);

  useEffect(()=>{
    if(cookies.token){
      window.location = "/"
    }
  }, [])
  return (
    <div>
      <section class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__text">
                <h4>Sign In/Sign up</h4>
                <div class="breadcrumb__links">
                  <a href="/">Home</a>
                  <a href="/shop">Shop</a>
                  <span>Sign In/Sign up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="checkout spad">
        <div class="container">
          <div class="checkout__form">
              <div class="row">
                <Signup />
                <div class="col-lg-1 col-md-6 vl"></div>
                <Signin />
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
