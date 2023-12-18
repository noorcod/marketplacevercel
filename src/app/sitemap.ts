import { marketplaceWeb } from "../utility/env";
import { fetchPLPListing,fetchAccessoriesType,fetchModels } from "./apis/getApis";

export default async function Sitemap() {
  const baseURL = marketplaceWeb;
  const pageSize = 10; // Adjust the page size as needed
  const data = await fetchPLPListing(1, pageSize, {});

  const pdpRes = data.data.body.data.map((item: any) => ({
    url: `${baseURL}product/${encodeURIComponent(item.listing_title.replaceAll(" ", "-"))}/${item.listing_id}`,
    lastModified: new Date(item.activation_date),
    changeFrequency: 'yearly',
    priority: 1,
  }));

  const storeRes = data.data.body.data.map((item: any) => ({
    url: `${baseURL}store/${item.item.shopTable.username}`,
    lastModified: new Date(item.item.shopTable.created_at),
    changeFrequency: 'yearly',
    priority: 1,
  }));

const Accessories=await fetchAccessoriesType() 
const specsRes = Accessories.data.body.data.map((item: any) => ({
  url: `${baseURL}specs/${item.at_id}`,
  lastModified: new Date(),
  changeFrequency: 'yearly',
  priority: 1,
}))


Accessories.data.body.data.forEach(async (element:any) => {
    const specsListing= await  fetchModels(1,pageSize,element.at_id,{});
    specsRes.push(...specsListing.data.body.data.map((item: any) => ({
      url: `${baseURL}specs/${element.at_id}/${item.model_id}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    })))

  

 });
  const pdptotalItems = data.data.body.paginationInfo.totalItems;
  const pdptotalPages = Math.ceil(pdptotalItems / pageSize);

  for (let i = 2; i <= pdptotalPages; i++) {
    const nextPageData = await fetchPLPListing(i, pageSize, {});
    pdpRes.push(
      ...nextPageData.data.body.data.map((item: any) => ({
        url: `${baseURL}product/${encodeURIComponent(item.listing_title.replaceAll(" ", "-"))}/${item.listing_id}`,
        lastModified: new Date(item.activation_date),
        changeFrequency: 'yearly',
        priority: 1,
      }))
    );
    storeRes.push(
      ...nextPageData.data.body.data.map((item: any) => ({
        url: `${baseURL}store/${item.item.shopTable.username}`,
        lastModified: new Date(item.item.shopTable.created_at),
        changeFrequency: 'yearly',
        priority: 1,
      }))
    )
  }





  return [
    {
      url: `${baseURL}product/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  {
    url: `${baseURL}specs`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: `${baseURL}become-seller`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },{
    url: `${baseURL}contact-us`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },{
    url: `${baseURL}wishlist`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: `${baseURL}products`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...pdpRes,
    ...storeRes,
    ...specsRes
  ];
}