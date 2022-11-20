export default function Signin() {
    return (
      <div class="col-lg-5 col-md-6">
        <h6 class="checkout__title">Sign In</h6>
        <div class="checkout__input">
          <p>
            Email<span>*</span>
          </p>
          <input type="text" />
        </div>
        <div class="checkout__input">
          <p>
            Password<span>*</span>
          </p>
          <input type="password" />
        </div>
        <button class="site-btn">Sign in</button>
      </div>
    );
  }
  