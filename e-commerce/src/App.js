import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Sign from "./pages/sign";
import Shop from "./pages/shop";
import ProductDetail from "./pages/product-detail";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import AddProduct from "./pages/add-product";
import UpdateProduct from "./pages/update-product";
import Header from "./components/header";
import Footer from "./components/footer";
import MyProducts from "./pages/my-product";
import Payment from "./pages/payment";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myspace" element={<MyProducts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<h1>Error 404 Page not found </h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
