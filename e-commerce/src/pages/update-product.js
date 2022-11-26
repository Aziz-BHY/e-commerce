import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';



export default function UpdateProduct() {
    const {id} = useParams();
    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price , setPrice] = useState(0)
    const [categorie, setCategorie] = useState("")
    const [cookies] = useCookies(['token']);

    useEffect(()=>{
      axios.get("http://localhost:5000/products/"+id).then(res=>{
        if(res.data._id){
          setName(res.data.name);
          setDescription(res.data.description);
          setQuantity(res.data.quantity);
          setPrice(res.data.price);
          setCategorie(res.data.categorie);
        }else{

        }
      })
    },[])

    const updateProd= ()=>{
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("quantity", quantity)
      formData.append("price", price)
      formData.append("categorie", categorie)
      formData.append("file", file)
      formData.append("token", cookies.token)
      const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
      }
      axios.put("http://localhost:5000/products/"+id, formData, config).then(res=>{
        console.log(res.data)
      })
    }
    return (
      <section class="checkout spad">
        <div class="container">
          <div class="checkout__form">
              <div class="row">
                <div class="col-lg-12 col-md-6">
                  <h6 class="checkout__title">Add Product</h6>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="checkout__input">
                        <p>
                          Product Name<span>*</span>
                        </p>
                        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div>
                        <p>
                          Picture<span>*</span>
                        </p>
                        <input type="file" onChange={e=>setFile(e.target.files[0])}/>
                      </div>
                    </div>
                  </div>
                  <div class="checkout__input">
                    <p>
                      Description<span>*</span>
                    </p>
                    <input type="text" value={description} onChange={e=>setDescription(e.target.value)} />
                  </div>
                  <div class="checkout__input">
                    <p>
                      How many are you selling<span>*</span>
                    </p>
                    <input
                      type="number"
                      placeholder="Street Address"
                      class="checkout__input__add"
                      value={quantity} onChange={e=>setQuantity(e.target.value)}
                    />
                  </div>
                  <div class="checkout__input">
                    <p>
                      Price<span>*</span>
                    </p>
                    <input type="number" value={price} onChange={e=>setPrice(e.target.value)} />
                  </div>
                  <div class="checkout__input">
                    <p>
                      Categories<span>*</span>
                    </p>
                    <input type="text" value={categorie} onChange={e=>setCategorie(e.target.value)}/>
                  </div>
                  <button class="site-btn" onClick={updateProd} >Update Profile</button>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
  