export default function CartProduct({ product, updateQuantity, index, deleteProduct }) {
    return (
      <tr>
        <td class="product__cart__item">
          <div class="product__cart__item__pic">
            <img src={"http://localhost:5000/image/"+product.product.image} alt="" />
          </div>
          <div class="product__cart__item__text">
            <h6>{product.product.name}</h6>
            <h5>{product.product.price}TND</h5>
          </div>
        </td>
        <td class="quantity__item">
          <div class="quantity">
            <div class="pro-qty-2">
              <span class="fa fa-angle-left inc qtybtn" onClick={()=>updateQuantity(index, -1)}></span>
              <input type="text" value={product.quantity} />
              <span class="fa fa-angle-right inc qtybtn" onClick={()=>updateQuantity(index, 1)}></span>
            </div>
          </div>
        </td>
        <td class="cart__price">{product.product.price*product.quantity}TND</td>
        <td class="cart__close" onClick={()=>deleteProduct(index)}>
          <i class="fa fa-close"></i>
        </td>
      </tr>
    );
  }
  