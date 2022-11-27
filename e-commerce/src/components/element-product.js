import axios from "axios";

export default function CartProduct({ product, deleteProduct, index}) {
  
    return (
      <tr>
        <td class="product__cart__item">
          <div class="product__cart__item__pic">
            <img src={"http://localhost:5000/image/"+product.image} alt="" />
          </div>
          <div class="product__cart__item__text">
            <h6>{product.name}</h6>
          </div>
        </td>
        <td
          class="product_update"
          onClick={() => {
            window.location = "/update-product/"+product._id;
          }}
        >
          <i class="fa fa-pencil"></i>
        </td>
        <td class="product_delete" onClick={()=>deleteProduct(index)}>
          <i class="fa fa-close"></i>
        </td>
      </tr>
    );
  }
  