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


  export async function fetchShopByUser(name: string | string[] | undefined) {
    const res = await api.get(`/shop/Ammar-Ali`);
    return res;
  }
  export async function fetchFilter(shopId: number | number[] | undefined) {
      const res = await api.get(`/item/filters/3`);
    
      return res;
    }
    export async function fetchItems(filters:Object,currentPage:number,size:number) {
      const res = await api.get(`/item/3?page=${currentPage}&size=${size}`,{headers:{filters: JSON.stringify(filters)}});
    
      return res;
    }