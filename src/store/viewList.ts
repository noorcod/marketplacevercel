import { create } from "zustand";
import zukeeper from "zukeeper";

export const useViewListStore = create(
  zukeeper((set) => ({
    viewList: [],
    setViewList: (data) => {
      set((prev) => {
        // Check if the ID already exists in the viewList
        const idExists = prev.viewList.some((item) => item.listing_id === data.listing_id);

        if (!idExists) {
          // If the ID doesn't exist, proceed to update the viewList
          let updatedList = [...prev.viewList];

          if (prev.viewList.length >= 6) {
            // Remove the oldest item (last element in the array)
            updatedList.pop();
          }
          updatedList.unshift(data);
          return { viewList: updatedList };
        } else {
          // If the ID already exists, return the previous state without modification
          return { viewList: prev.viewList };
        }
      });
    },
  }))
);