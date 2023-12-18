import { create } from "zustand";
import userData from "../utility/types/userData.interface";
interface userStore {
  user: userData | null;
  token: string | null;
  setUser: (user: userData) => void;
  setToken: (token: string) => void;
  updatePhoneNumberOfUser: (phoneNumber: string) => void;
}

const useUserStore = create<userStore>((set: any) => ({
  user: null,
  token: null,
  setUser: (user: userData) => {
    set((oldState: userStore) => ({ ...oldState, user }));
  },
  setToken: (token: string) => {
    set((oldState: userStore) => ({ ...oldState, token }));
  },
  updatePhoneNumberOfUser: (phoneNumber: string) => {
    set((oldUser: userStore) => ({
      ...oldUser,
      user: { ...oldUser.user, phone_number: phoneNumber },
    }));
  },
}));

export { useUserStore };
