import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/product-item";
import {useSearchParams} from 'react-router-dom'
let categories = ["shoes", "pants", "t-shirt", "socks"];
export default function Shop() {
  const [products, setProducts] = useState([])
  const [selectedCategorie, setSelectedCategorie] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [search, setSearch] = useState("")
  const [order, setOrder] = useState(1)
  const [searchParams] = useSearchParams();

  const nav = ()=>{
    let url = "/shop?order="+order+"&"
    if(search) url += "search="+search+"&"
    if(selectedCategorie != null) url += "categorie="+categories[selectedCategorie]+"&"
    if(selectedPrice != null) url += "minprice="+(selectedPrice*50)+"&maxprice="+(selectedPrice*50+50)
    window.location = url
  }

  useEffect(()=>{
    axios.get("http://localhost:5000/products"+window.location.search).then(res=>{
      setProducts(res.data)
    })
  }, [])
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
                    <input type="text" placeholder="Search..." value={search} onChange={e=>{setSearch(e.target.value)}} />
                    <button onClick={nav}>
                      <span class="icon_search"></span>
                    </button>
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
                              {categories.map((categorie, index)=>(
                                <li onClick={()=>setSelectedCategorie(index)}>
                                  <a style={selectedCategorie == index?{color: "#111111"}: {}}>{categorie}</a>
                                </li>
                              ))}
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
                              <li onClick={()=>setSelectedPrice(0)}>
                                <a  style={selectedPrice == 0?{color: "#111111"}: {}}>$0.00 - $50.00</a>
                              </li>
                              <li onClick={()=>setSelectedPrice(1)}>
                                <a style={selectedPrice == 1?{color: "#111111"}: {}}>$50.00 - $100.00</a>
                              </li>
                              <li onClick={()=>setSelectedPrice(2)}>
                                <a style={selectedPrice == 2?{color: "#111111"}: {}}>$100.00 - $150.00</a>
                              </li>
                              <li onClick={()=>setSelectedPrice(3)}>
                                <a style={selectedPrice == 3?{color: "#111111"}: {}}>$150.00 - $200.00</a>
                              </li>
                              <li onClick={()=>setSelectedPrice(4)}>
                                <a style={selectedPrice == 4?{color: "#111111"}: {}}>$200.00 - $250.00</a>
                              </li>
                              <li onClick={()=>setSelectedPrice(5)}>
                                <a style={selectedPrice == 5?{color: "#111111"}: {}}>250.00+</a>
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
                      <p>Showing {products.length} results</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select onChange={e=>{setOrder(e.target.value)}}>
                        <option value="1">Low To High</option>
                        <option value="-1">High To Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                {products.map((product, index) => (
                  <Product
                    key={index}
                    product={product}                  />
                ))}
              </div>
              {/*<div class="row">
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
              </div>*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
