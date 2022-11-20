export default function UpdateProduct() {
    return (
      <section class="checkout spad">
        <div class="container">
          <div class="checkout__form">
            <form action="#">
              <div class="row">
                <div class="col-lg-12 col-md-6">
                  <h6 class="checkout__title">Add Product</h6>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="checkout__input">
                        <p>
                          Product Name<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div>
                        <p>
                          Picture<span>*</span>
                        </p>
                        <input type="file" />
                      </div>
                    </div>
                  </div>
                  <div class="checkout__input">
                    <p>
                      Description<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div class="checkout__input">
                    <p>
                      How many are you selling<span>*</span>
                    </p>
                    <input
                      type="number"
                      placeholder="Street Address"
                      class="checkout__input__add"
                    />
                  </div>
                  <div class="checkout__input">
                    <p>
                      Price<span>*</span>
                    </p>
                    <input type="number" />
                  </div>
                  <div class="checkout__input">
                    <p>
                      Categories<span>*</span>
                    </p>
                    <input type="text" />
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
  