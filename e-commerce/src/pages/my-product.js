import axios from "axios";
import { useEffect, useState } from "react";
import ElProduct from "../components/element-product";
import { useCookies } from "react-cookie";
export default function MyProducts() {
  const [cookies] = useCookies(['token']);
  const [myProducts, setProducts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/products/me?token="+cookies.token).then(res=>{
      setProducts(res.data)
    })
  }, [])
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
                  {myProducts.map(product=>(
                     <ElProduct product={product} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
