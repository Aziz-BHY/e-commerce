import axios from "axios";

export default function CartProduct({ product, deleteProduct, index}) {
  
    return (
      <tr>
        <td class="product__cart__item col-md-4">
          <div className="">
            <div class="product__cart__item__text mb-3">
              <h4>{product.name}</h4>
            </div>
            <div class="product__cart__item__pic">
              <img src={"http://localhost:5000/image/"+product.image} alt="" />
            </div> <br/>
            
          </div>
          
        </td>
        <td class="product__cart__item col-md-4">
          <ul>
          <li className="mb-2" ><b>Description : </b><h5>{product.description}</h5></li>
          <li className="mb-2" ><b>Price : </b><h5>{product.price}</h5></li>
          <li className="mb-2" ><b>Category :</b> <h5>{product.categorie}</h5> </li> 
          <li className="mb-2" ><b>Quantity : </b><h5>{product.quantity}</h5></li> 
          </ul>
          
        </td>
        <td
          class="product_update col-md-2"
          onClick={() => {
            window.location = "/update-product/"+product._id;
          }}
        >
          <i class="fa fa-pencil"></i>
        </td>
        <td class="product_delete col-md-2" onClick={()=>deleteProduct(index)}>
          <i class="fa fa-close"></i>
        </td>
      </tr>
    );
  }
  