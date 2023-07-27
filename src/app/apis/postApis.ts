import axios from "axios";
import { marketplaceUrl } from "../../utility/env";

const api = axios.create({
  baseURL: marketplaceUrl,
});
// const config = {
//     headers: {
//       Authorization: localStorage.getItem("refreshToken"),
//     },
//   };

  export async function SignupUser(data:any) {
    console.log("api",data)
    const res = await api.post(`/auth`,data);
    return res;
  }
  export async function SigninUser(data:any) {
    console.log("api",data)
    const res = await api.post(`/auth/login`,data);
    return res;
  }