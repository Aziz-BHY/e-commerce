

export default function Inventory() {
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
                    <div class="col-lg-4 col-md-6">
                    </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="checkout__order">
                                <h4 class="order__title">Your order</h4>
                                <div class="row">
                                <div class="col-lg-2 col-md-6">QTE</div>
                                    <div class="col-lg-4 col-md-6">Product</div>
                                    <div class="col-lg-2 col-md-6">Price</div>
                                    <div class="col-lg-4 col-md-6 " ><span style={{float: "right"}}>Total</span></div>
                                </div>
                                <br/>
                                <ul class="checkout__total__products">
                                    <li class="row"> {/*Vanilla salted caramel <span>$ 300.0</span>*/}
                                    <div class="col-lg-2 col-md-6">2</div>
                                    <div class="col-lg-4 col-md-6">Produit1</div>
                                    <div class="col-lg-2 col-md-6">100</div>
                                    <div class="col-lg-4 col-md-6 " ><span style={{right: "0px"}}>200</span></div>

                                    </li>
                                </ul>
                                <ul class="checkout__total__all">
                                    <li>Total <span>$750.99</span></li>
                                </ul>
                                <button class="site-btn">PLACE ORDER</button>
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
  