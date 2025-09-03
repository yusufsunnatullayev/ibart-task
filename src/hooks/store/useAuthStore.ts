import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: string;
  isAuthenticated: boolean;
  setUser: (user: string) => void;
  setIsAuthenticated: (payload: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: "",
      isAuthenticated: false,
      setUser: (user) => set({ user }),
      setIsAuthenticated: (payload: boolean) =>
        set({ isAuthenticated: payload }),
    }),
    {
      name: "auth-storage",
    }
  )
);
