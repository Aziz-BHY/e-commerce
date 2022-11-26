export default function Product({ product }) {
    return (
      <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
        <div class="product__item">
          <div class="product__item__pic"><img src={"http://localhost:5000/image/"+product.image} alt="" /></div>
          <div class="product__item__text">
            <h6>{product.name}</h6>
            <a href="#" class="add-cart">
              + Add To Cart
            </a>
            <h5>{product.price}TND</h5>
          </div>
        </div>
      </div>
    );
  }
  