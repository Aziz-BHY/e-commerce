import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Header() {
   const [sum, setSum] = useState(0)
   const [cookies] = useCookies(['token']);

    useEffect(()=>{
      axios.get("http://localhost:5000/cart/"+cookies.token).then(res=>{
        let somme = 0;
        for(let product of res.data.products){
          somme += product.product.price*product.quantity
        }
        setSum(somme)
      })
    }, [])
    return (
      <header class="header">
        <div class="header__top">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-7"></div>
              <div class="col-lg-6 col-md-5">
                <div class="header__top__right">
                  <div class="header__top__links">
                    <a href="/sign">Sign in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3">
              <div class="header__logo">
                <a href="/">
                  <img src="/img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <nav class="header__menu mobile-menu">
                <ul>
                  <li class="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul class="dropdown">
                      <li>
                        <a href="/shop">Shop</a>
                      </li>
                      <li>
                        <a href="/cart">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="/profile">My Space</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="header__nav__option">
                <a href="/product" class="search-switch">
                  <img src="/img/icon/search.png" alt="" />
                </a>
                <a href="/inventory">
                  <img src="/img/icon/cart.png" alt="" /> <span>0</span>
                </a>
                <div class="price">{sum}TND</div>
              </div>
            </div>
          </div>
          <div class="canvas__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
    );
  }
  