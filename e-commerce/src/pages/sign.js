import Signin from "../components/signin";
import Signup from "../components/signup";
export default function Sign() {
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
            <form action="#">
              <div class="row">
                <Signup />
                <div class="col-lg-1 col-md-6 vl"></div>
                <Signin />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
