import Product from "../components/product-item";

export default function Shop() {
  return (
    <div>
      <section class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__text">
                <h4>Shop</h4>
                <div class="breadcrumb__links">
                  <a href="/">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="shop spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="shop__sidebar">
                <div class="shop__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span class="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div class="shop__sidebar__accordion">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-heading">
                        <a data-toggle="collapse" data-target="#collapseOne">
                          Categories
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <div class="shop__sidebar__categories">
                            <ul class="nice-scroll">
                              <li>
                                <a href="#">Men</a>
                              </li>
                              <li>
                                <a href="#">Women</a>
                              </li>
                              <li>
                                <a href="#">Bags</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-heading">
                        <a data-toggle="collapse" data-target="#collapseThree">
                          Filter Price
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <div class="shop__sidebar__price">
                            <ul>
                              <li>
                                <a href="#">$0.00 - $50.00</a>
                              </li>
                              <li>
                                <a href="#">$50.00 - $100.00</a>
                              </li>
                              <li>
                                <a href="#">$100.00 - $150.00</a>
                              </li>
                              <li>
                                <a href="#">$150.00 - $200.00</a>
                              </li>
                              <li>
                                <a href="#">$200.00 - $250.00</a>
                              </li>
                              <li>
                                <a href="#">250.00+</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="shop__product__option">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="shop__product__option__left">
                      <p>Showing 1–12 of 126 results</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select>
                        <option value="">Low To High</option>
                        <option value="">High To Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                {[0, 0, 0, 0].map((product, index) => (
                  <Product
                    key={index}
                    name={"produit" + index}
                    price={index * 10}
                    id={index}
                    image={""}
                  />
                ))}
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="product__pagination">
                    <a class="active" href="#">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <span>...</span>
                    <a href="#">21</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
