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

interface filters {
  title?: string;
  category_ids?: number[] | undefined;
  color_ids?: number[] | undefined;
  condition_ids?: number[];
  location_ids?: number[];
  price?: {
    from: number;
    to: number;
  };
}
export async function fetchShopByUser(name: string | string[] | undefined) {
  const res = await api.get(`/shop/${name}`);
  return res;
}
export async function fetchIndependentFilter(
  shopId: number | number[] | undefined,
) {
  const res = await api.get(`/listings/filters/shop/${shopId}`);

  return res;
}
export async function fetchdependentFilter(
  shopId: number | number[] | undefined,
  categoryId: number | number[] | undefined,
) {
  const res = await api.get(`/listings/filters/shop/${shopId}/c/${categoryId}`);

  return res;
}
export async function fetchItems(
  filters: filters,
  currentPage: number,
  size: number,
  shopId: number,
) {
  let params = new URLSearchParams();
  if (filters?.title) {
    params.append("title", filters?.title);
  }
  if (filters?.category_ids?.length > 0) {
    params.append(
      "category_id",
      filters?.category_ids[filters?.category_ids?.length - 1].id,
    );
  }
  if (filters?.color_ids?.length > 0) {
    params.append("color_ids", `[${filters?.color_ids}]`);
  }
  if (filters?.condition_ids?.length > 0) {
    params.append("condition_ids", `[${filters?.condition_ids}]`);
  }
  if (filters?.location_ids?.length > 0) {
    params.append("location_ids", `[${filters?.location_ids}]`);
  }
  if (filters?.brand_ids?.length > 0) {
    params.append("brand_ids", `[${filters?.brand_ids}]`);
  }
  if (filters?.orderBy?.price) {
    params.set("sort", `price:${filters?.orderBy?.price}`);
  }

  if (filters?.price && filters?.price?.from && filters?.price?.to) {
    params.append("priceFrom", `${filters?.price?.from}`);
    params.append("priceTo", `${filters?.price?.to}`);
  }

  let request = {
    params: params,
  };
  const res = await api.get(
    `shop/${shopId}/items?page=${currentPage}&size=${size}`,
    request,
  );

  return res;
}
export async function fetchItemDetails(id: string) {
  const res = await api.get(`/listings/detail/${id}`);
  return res;
}
export async function fetchRelatedItems(id: string) {
  const res = await api.get(`Listings/related-items/${id}`);
  return res;
}
export async function fetchGoogleUser(token: any) {
  const res = await api.get(`/auth/google/${token}`);
  return res;
}
export async function fetchFacebookUser(token: any) {
  const res = await api.get(`/auth/facebook/${token}`);
  return res;
}

export async function fetchPLPListing(
  filters: Object,
  currentPage: number,
  size: number,
) {
  let params = new URLSearchParams();
  if (filters?.title) {
    params.append("title", filters?.title);
  }
  if (filters?.category_ids?.length > 0) {
    params.append(
      "category_id",
      filters?.category_ids[filters?.category_ids?.length - 1].id,
    );
  }
  if (filters?.color_ids?.length > 0) {
    params.append("color_ids", `[${filters?.color_ids}]`);
  }
  if (filters?.condition_ids?.length > 0) {
    params.append("condition_ids", `[${filters?.condition_ids}]`);
  }
  if (filters?.location_ids?.length > 0) {
    params.append("location_ids", `[${filters?.location_ids}]`);
  }
  if (filters?.brand_ids?.length > 0) {
    params.append("brand_ids", `[${filters?.brand_ids}]`);
  }
  if (filters?.orderBy?.price) {
    params.set("sort", `price:${filters?.orderBy?.price}`);
  }
  if (filters?.price && filters?.price?.from && filters?.price?.to) {
    params.append("priceFrom", `${filters?.price?.from}`);
    params.append("priceTo", `${filters?.price?.to}`);
  }

  let request = {
    params: params,
  };
  const res = await api.get(
    `/listings?page=${currentPage}&size=${size}`,
    request,
  );
  return res;
}

export async function fetchIndependentFilterListing() {
  const res = await api.get(`/listings/filters`);

  return res;
}
export async function fetchdependentFilterListing(
  categoryId: number | number[] | undefined,
) {
  const res = await api.get(`/listings/filters/c/${categoryId}`);

  return res;
}

export async function fetchRecommendedListing() {
  const res = await api.get(`/listings/random`);

  return res;
}

export async function getUserByToken(token: string) {
  const res = await api.get(`/auth/get-user`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
}

export async function refreshToken(token: string) {
  const res = await api.get(`/auth/refresh-token/`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
}
