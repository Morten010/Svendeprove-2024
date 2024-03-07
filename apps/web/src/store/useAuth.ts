// den her state er halvt taget fra mit eget repo og videre udviklet på nu
// https://github.com/Morten010/mediesuset/blob/main/src/store/userStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { JWTProps, UserProps } from "../types";
import { useZustand } from "./useZustand";

interface UserState {
  user: UserProps | undefined;
  jwt: JWTProps | undefined;
  setUser: (user: UserProps, jwt: JWTProps) => void;
  logout: () => void;
}

export const store = create(
  persist<UserState>(
    (set, get) => ({
      user: undefined,
      jwt: undefined,
      setUser: (user, jwt) => {
        set((state) => ({
          ...state,
          user: user,
          jwt,
        }));
      },
      logout: () => {
        set((state) => ({
          ...state,
          user: undefined,
          jwt: undefined,
        }));
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useAuth = () => {
  return useZustand(store, (state) => state);
};
