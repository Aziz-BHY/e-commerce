import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams } from 'react-router-dom'
export default function Payment() {
  const [searchParams] = useSearchParams();
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    axios.post("http://localhost:5000/cart/pay/" + cookies.token, {
      token: searchParams.get("payment_token")
    }).then(res => {
      if (res.data.message == "Sucess") {
        window.location = "/"
      }
    })
  }, [])
  return (
    <>
    </>
  );
}
