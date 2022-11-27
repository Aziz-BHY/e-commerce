import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import CartProduct from "../components/cart-product";

export default function Cart() {
  const [cookies] = useCookies(['token']);
  const [products, setProducts] = useState([])
  const [sum, setSum] = useState(0)
  useEffect(()=>{
     axios.get("http://localhost:5000/cart/"+cookies.token).then(res=>{
       setProducts(res.data.products)
     })
   }, [])
   useEffect(()=>{
    let somme = 0;
    for(let product of products){
      somme += product.product.price*product.quantity
    }
    setSum(somme)
   }, [products])

   const updateQuantity = (index, qte)=>{
    let varProd = [...products];
    varProd[index].quantity += qte;
    setProducts(varProd)
   }
   const deleteProduct = (index)=>{
    let varProd = [...products];
    varProd.splice(index, 1)
    setProducts(varProd)
   }
   const updateCart = ()=>{
    axios.put("http://localhost:5000/cart/"+cookies.token, products).then(res=>{
      console.log(res)
    })
   }
  return (
    <div>
      <section class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__text">
                <h4>Shopping Cart</h4>
                <div class="breadcrumb__links">
                  <a href="./index.html">Home</a>
                  <a href="./shop.html">Shop</a>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="shopping-cart spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index)=>(
                      <CartProduct product={product} updateQuantity={updateQuantity} index={index} deleteProduct={deleteProduct}/>
                    ))}
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="continue__btn">
                    <a href="#">Continue Shopping</a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="continue__btn update__btn" onClick={updateCart}>
                    <a >
                      <i class="fa fa-spinner" ></i> Update cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Total <span>{sum}TND</span>
                  </li>
                </ul>
                <a href="#" class="primary-btn">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
