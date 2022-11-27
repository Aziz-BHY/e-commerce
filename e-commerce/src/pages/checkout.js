import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Inventory() {
  const [cookies] = useCookies(['token']);
  const [products, setProducts] = useState([])
  const [sum, setSum] = useState(0)
  const [token, setToken] = useState("")
  useEffect(()=>{
    if(!cookies.token){
      window.location = "/"
    }
     axios.get("http://localhost:5000/cart/"+cookies.token).then(res=>{
       setProducts(res.data.products)
       let somme = 0;
       for(let product of res.data.products){
         somme += product.product.price*product.quantity
       }
       setSum(somme)
       axios.post("https://sandbox.paymee.tn/api/v1/payments/create",{
        "vendor": 1862,
        "amount": somme,
        "note" : "Order #1000132"
     }, {
      headers: {
        'Authorization': 'Token 6959e271e6ace674ee06e8790ee8d059abb5076c'
      }
     }).then(paymeeRes=>{
      if(paymeeRes.data.message == "Success")
      setToken(paymeeRes.data.data.token)
     })
     })
    
   }, [])
    return (
      <div>
        <section class="breadcrumb-option">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="breadcrumb__text">
                  <h4>Check Out</h4>
                  <div class="breadcrumb__links">
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <span>Check Out</span>
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
                  <div class="col-lg-4 col-md-6"></div>
                  <div class="col-lg-4 col-md-6">
                    <div class="checkout__order">
                      <h4 class="order__title">Your order</h4>
                      <div class="row">
                        <div class="col-lg-2 col-md-6">QTE</div>
                        <div class="col-lg-4 col-md-6">Product</div>
                        <div class="col-lg-2 col-md-6">Price</div>
                        <div class="col-lg-4 col-md-6 ">
                          <span style={{ float: "right" }}>Total</span>
                        </div>
                      </div>
                      <br />
                      <ul class="checkout__total__products">
                        {products.map((product, index)=>(
                          <li class="row">
                          {/*Vanilla salted caramel <span>$ 300.0</span>*/}
                          <div class="col-lg-2 col-md-6">{product.quantity}</div>
                          <div class="col-lg-4 col-md-6">{product.product.name}</div>
                          <div class="col-lg-2 col-md-6">{product.product.price}</div>
                          <div class="col-lg-4 col-md-6 ">
                            <span style={{ right: "0px" }}>{product.product.price*product.quantity}</span>
                          </div>
                        </li>
                        ))}
                      </ul>
                      <ul class="checkout__total__all">
                        <li>
                          Total <span>{sum} TND</span>
                        </li>
                      </ul>
                      <form method="post" action="https://sandbox.paymee.tn/gateway/">
                        <input type="hidden" name="payment_token" value={token} />
                        <input type="hidden" name="url_ok" value="http://localhost:3000/payment" />
                        <input type="hidden" name="url_ko" value="http://localhost:3000/checkout" />
                        <button class="site-btn">PLACE ORDER</button>
                      </form>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
  