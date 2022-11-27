import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/product-item";
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
 
export default function ProductDetail(props) {
  const {id} = useParams();
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [cookies] = useCookies(['token']);

  useEffect(()=>{
    axios.get("http://localhost:5000/products/"+id).then(res=>{
        if(res.data._id){
          setProduct(res.data)
        }else{
          window.location = "/shop"
        }
      })
    },[])

    const addCart = ()=>{
        axios.put("http://localhost:5000/cart/add/"+cookies.token, {
          product: id,
          quantity: quantity
        }).then(res=>{

        })
    } 
    
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
                      <img src={"http://localhost:5000/image/"+product.image} alt="" />
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
                  <h4>{product.name}</h4>
                  <h3>{product.price}TND</h3>
                  <p>
                    {product.description}
                  </p>
                  <div class="product__details__cart__option">
                    <div class="quantity">
                      <div class="pro-qty">
                        <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} />
                      </div>
                    </div>
                    <a href="#" class="primary-btn" onClick={addCart}>
                      add to cart
                    </a>
                  </div>

                  <div class="product__details__last__option">
                    <ul>
                      <li>
                        <span>Categories:</span> {product.categorie}
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
                product={{}}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
