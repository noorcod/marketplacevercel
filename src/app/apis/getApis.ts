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
  const res = await api.get(`/shop/one/${name}`);
  return res;
}
export async function fetchIndependentFilter(shopId: number | number[] | undefined, filters: any) {
  let paramss = new URLSearchParams(filters);
  // if (filters?.city_id?.length > 0) {
  //   paramss.append("city_id", filters?.city_id[filters?.city_id?.length - 1].id);
  // }
  // if (filters?.city_id?.length > 0) {
  //   paramss.append("category_id", filters?.category_id[filters?.category_id?.length - 1].id);
  // }
  // if (filters?.color_ids?.length > 0) {
  //   paramss.append("color_ids", `[${filters?.color_ids}]`);
  // }
  // if (filters?.condition_ids?.length > 0) {
  //   paramss.append("condition_ids", `[${filters?.condition_ids}]`);
  // }

  // if (filters?.location_ids?.length > 0) {
  //   paramss.append("location_ids", `[${filters?.location_ids}]`);
  // }
  paramss.delete("priceFrom");
  paramss.delete("priceTo");

  let request = {
    params: paramss,
  };
  const res = await api.get(`/listings/filters/shop/${shopId}`, request);

  return res;
}
export async function fetchdependentFilter(shopId: number | number[] | undefined, categoryId: number | number[] | undefined, dParams: any) {
  let params = new URLSearchParams(dParams);
  params.delete("category_id");

  let request = {
    params: params,
  };
  const res = await api.get(`/listings/filters/shop/${shopId}/c/${categoryId}`, request);

  return res;
}
export async function fetchItems(filters: filters, currentPage: number, size: number, shopId: number, dParams: any) {
  let params = new URLSearchParams();

  let request = {
    params: dParams,
  };
  const res = await api.get(`shop/${shopId}/items?page=${currentPage}&size=${size}`, request);

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

export async function fetchPLPListing(currentPage: number, size: number, lparam: any) {
  let params = new URLSearchParams(lparam);
  let request = {
    params: lparam,
  };
  const res = await api.get(`/listings?page=${currentPage}&size=${size ? size : ""}`, request);
  return res;
}

export async function fetchIndependentFilterListing(filters: any) {
  let paramss = new URLSearchParams(filters);
  // if (filters?.category_id?.length > 0) {
  //   paramss.append("category_id", filters?.category_id[filters?.category_id?.length - 1].id);
  // }
  // if (filters?.city_id?.length > 0) {
  //   paramss.append("city_id", filters?.city_id[filters?.city_id?.length - 1].id);
  // }
  // if (filters?.color_ids?.length > 0) {
  //   paramss.append("color_ids", `[${filters?.color_ids}]`);
  // }
  // if (filters?.condition_ids?.length > 0) {
  //   paramss.append("condition_ids", `[${filters?.condition_ids}]`);
  // }
  // if (filters?.location_ids?.length > 0) {
  //   paramss.append("location_ids", `[${filters?.location_ids}]`);
  // }
  // if (filters?.title) {
  //   paramss.append("search", filters?.title);
  // }
  paramss.delete("priceFrom");
  paramss.delete("priceTo");
  let request = {
    params: paramss,
  };

  const res = await api.get(`/listings/filters`, request);

  return res;
}
export async function fetchdependentFilterListing(categoryId: number | number[] | undefined, fParam: any) {
  let params = new URLSearchParams(fParam);
  params.delete("category_id");
  params.delete("sort");

  let request = {
    params: params,
  };
  const res = await api.get(`/listings/filters/c/${categoryId}`, request);

  return res;
}

export async function fetchRecommendedListing() {
  const res = await api.get(`/listings/random?count=` + 15);

  return res;
}

export async function fetchTopSeller() {
  const res = await api.get(`/shop/all?page=${1}&size=${27}`);
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

export async function getUserWishlist(token: string, id: string, currentPage?: number, sizeOfPage?: number) {
  if (currentPage && sizeOfPage) {
    const res = await api.get(`/user-wishlist/${id}?page=${currentPage}&size=${sizeOfPage}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } else {
    const res = await api.get(`/user-wishlist/${id}?returnIds=1`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  }
}

// Navbar methods
export async function getCity() {
  const res = await api.get(`/city`);
  return res;
}
export async function getCondition() {
  const res = await api.get(`/condition`);
  return res;
}
export async function getNavMenuData() {
  const res = await api.get(`/home/nav-categories`);
  return res;
}

export async function getSearchSuggestions(search: string) {
  const res = await api.get(`/listings/search-suggestions?search=${search}`);
  return res;
}

export async function getReservations(token: string, status: string) {
  const res = await api.get(`/reservation?status=${status}`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
}

export async function fetchModels(page: number, size: number, category_id: number, fParam: any) {
  let params = new URLSearchParams(fParam);

  let request = {
    params: params,
  };
  let uri;
  if (category_id === 6) {
    // Fix the typo here, remove the extra '?'
    uri = `/model/${category_id}/all?${encodeURIComponent(`at_id=${params.get("at_id")}&page=${page}&size=${size}`)}`;
  } else {
    uri = `/model/${category_id}/all?page=${page}&size=${size}`;
  }

  const res = await api.get(uri, request);
  return res;
}

export async function fetchAccessoriesType() {
  const res = await api.get(`/model/accessory-types`);
  return res;
}

export async function fetchModelFilter(category_id: number, fParam: any) {
  let params = new URLSearchParams(fParam);
  params.delete("sort");

  let request = {
    params: params.size === 0 ? "" : params,
  };
  const res = await api.get(`/model/filters/${category_id}`, request);
  return res;
}

export async function fetchItem(model_id: number) {
  const res = await api.get(`/model/${model_id}`);
  return res;
}

export async function fetchRecommendedModels(model_id: number) {
  const res = await api.get(`/model/${model_id}/related-models?page=1&size=10&criteria=mix`);
  return res;
}
export async function fetchIsListingAvailableForModel(model_id: number) {
  const res = await api.get(`/model/${model_id}/related-listing`);
  return res;
}

export async function fetchAllStores(page: number, size: number) {
  const res = await api.get(`/shop/all?page=${page}&size=${size}`);
  return res;
}
