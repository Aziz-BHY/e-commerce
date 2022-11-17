import Product from "../components/product-item";


export default function Main() {
    return (
      <>
     <section class="banner spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 offset-lg-4">
                    <div class="banner__item">
                        <div class="banner__item__pic">
                            <img src="img/banner/banner-1.jpg" alt="" />
                        </div>
                        <div class="banner__item__text">
                            <h2>Best C2C Platform</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="filter__controls">
                        <li className="active">Products</li>
                    </ul>
                </div>
            </div>
            <div class="row product__filter">
                {[0,0,0,0,0,0].map((product, index)=>(
                    <Product key={"product"+index} name={"produit" + index} price={index} id={index} image={""}/>  
                ))}
            </div>
        </div>
    </section>

    
    </>
  
    );
}
  