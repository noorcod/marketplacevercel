import {create} from "zustand"

import zukeeper from "zukeeper"

export const useViewListStore = create(zukeeper((set) => ({
    viewList: [],
    setViewList: (data) => {
        set((prev) => {
          let updatedList=[...prev.viewList];
    
          if (prev.viewList.length >= 6) {
            // Remove the oldest item (last element in the array)
            updatedList.pop();
          } 
          updatedList.unshift(data)
          return { viewList: updatedList };
        });
      },
})))