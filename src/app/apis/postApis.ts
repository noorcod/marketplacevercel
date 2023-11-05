import axios from "axios";
import { headers } from "next/dist/client/components/headers";
import { marketplaceUrl } from "../../utility/env";

const api = axios.create({
  baseURL: marketplaceUrl,
});

export async function SignupUser(data: any) {
  const res = await api.post(`/auth/signup`, data);
  return res;
}
export async function SigninUser(data: any) {
  const res = await api.post(`/auth/login`, data);
  return res;
}
export async function UpdateUser(data: any, token: string) {
  const res = await api.put(
    `/auth/update-user/${data.customer_id}`,
    { phone_number: data.customer_number },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return res;
}
export async function ReserveItem(data: any, token: string) {
  console.log(data, token);
  const res = await api.post(`/reservation`, data?.data, {
    headers: {
      Authorization: token,
    },
  });
  return res;
}

export async function BeocmeSeller(data: any) {
  const res = await api.post(`/become-seller`, data);
  return res;
}

export async function SendEmail(data: any, token: string) {
  const { name, email, phone, message, recaptchaValue } = data.formData;

  await api.post(
    data.listingId === undefined
      ? `/shop/lead/${data.storeUsername}`
      : `/listings/lead/${data.storeUsername}/${data.listingId}`,
    {
      name: name,
      email: email,
      phone: phone,
      message: message,
      token: data.formData.token,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );


}

export async function UpdateListingViews(data: any) {
  const { fk_listing_id, fk_user_id } = data;
  const requestBody = fk_user_id
    ? { fk_listing_id, fk_user_id }
    : { fk_listing_id };
  const res = await api.post(`/listing-views`, requestBody);
  return res;
}
