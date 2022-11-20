import Product from "../components/product-item";

export default function ProductDetail(props) {
  return (
    <div>
      <section class="shop-details">
        <div class="product__details__pic">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="product__details__breadcrumb">
                  <a href="./index.html">Home</a>
                  <a href="./shop.html">Shop</a>
                  <span>Product Details</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-3"></div>
              <div class="col-lg-6 col-md-9">
                <div class="tab-content">
                  <div class="tab-pane active">
                    <div class="product__details__pic__item">
                      <img src="/img/shop-details/product-big-2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product__details__content">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <div class="product__details__text">
                  <h4>Hooded thermal anorak</h4>
                  <h3>$270.00</h3>
                  <p>
                    Coat with quilted lining and an adjustable hood. Featuring
                    long sleeves with adjustable cuff tabs, adjustable
                    asymmetric hem with elastic side tabs and a front zip
                    fastening with placket.
                  </p>
                  <div class="product__details__cart__option">
                    <div class="quantity">
                      <div class="pro-qty">
                        <input type="text" value="1" />
                      </div>
                    </div>
                    <a href="#" class="primary-btn">
                      add to cart
                    </a>
                  </div>

                  <div class="product__details__last__option">
                    <ul>
                      <li>
                        <span>Categories:</span> Clothes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="related spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="related-title">Related Product</h3>
            </div>
          </div>
          <div class="row">
            {[0, 0, 0, 0].map((product, index) => (
              <Product
                key={"product" + index}
                name={"produit" + index}
                price={index}
                id={index}
                image={""}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
