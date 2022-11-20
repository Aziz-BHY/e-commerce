export default function CartProduct({ productName, price, quantity, id }) {
    return (
      <tr>
        <td class="product__cart__item">
          <div class="product__cart__item__pic">
            <img src="img/shopping-cart/cart-1.jpg" alt="" />
          </div>
          <div class="product__cart__item__text">
            <h6>T-shirt Contrast Pocket</h6>
          </div>
        </td>
        <td
          class="product_update"
          onClick={() => {
            window.location = "/update-product";
          }}
        >
          <i class="fa fa-pencil"></i>
        </td>
        <td class="product_delete">
          <i class="fa fa-close"></i>
        </td>
      </tr>
    );
  }
  