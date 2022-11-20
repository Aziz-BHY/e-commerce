import Signup from "../components/signup";

export default function Profile() {
  return (
    <section class="checkout spad">
      <div class="container">
        <div class="checkout__form">
          <form action="#">
            <div class="row">
              <div class="col-lg-12 col-md-6">
                <h6 class="checkout__title">Profile</h6>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>
                        Fist Name<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>
                        Last Name<span>*</span>
                      </p>
                      <input type="text" />
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
                  />
                </div>
                <div class="checkout__input">
                  <p>
                    Town/City<span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div class="checkout__input">
                  <p>
                    Country/State<span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div class="checkout__input">
                  <p>
                    Postcode / ZIP<span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>
                        Phone<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>
                        Email<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div class="checkout__input">
                  <p>
                    Password<span>*</span>
                  </p>
                  <input type="password" />
                </div>
                <button class="site-btn">Update Profile</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
