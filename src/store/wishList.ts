import { create } from "zustand";

import zukeeper from "zukeeper";

interface wishlist {
wishlistItems : any[];
count: number;
addToWishlist: (item : any) => void;
removeFromWishlist: (item: any) => void;
setWishlist: (item: any) => void;
}

export const useWishlistStore = create<wishlist>(zukeeper((set:any) =>({
    wishlistItems : [],
    count: 0,
    addToWishlist: (item: any) =>  set((state: any) => ({...state,wishlistItems: [...state.wishlistItems, item],count:state.count+1})),
    removeFromWishlist: (item: any) => set((state: any) => {
        return({...state,wishlistItems: state.wishlistItems.filter((fav:any) => fav !== item), count: state.count-1})}),
    setWishlist: (items: any) =>  set((state: any) => ({...state,wishlistItems: items, count: items.length})),
})));
