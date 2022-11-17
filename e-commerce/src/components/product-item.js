
export default function Product({name, price, id, image}) {
    return (
        <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg={image}>
                        </div>
                        <div class="product__item__text">
                            <h6>{name}</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <h5>{price}TND</h5>
                        </div>
                    </div>
                </div>
    )
}