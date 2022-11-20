import ElProduct from "../components/element-product";

export default function MyProducts() {
  return (
    <section class="shopping-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6"></div>

          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="continue__btn update__btn">
              <a href="/add-product"> Add New Product</a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div class="row">
          <div class="col-lg-12">
            <div class="shopping__cart__table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <ElProduct />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
