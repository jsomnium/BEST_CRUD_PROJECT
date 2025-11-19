import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { User } from './types/user-type';

interface AuthState {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      isLoggedIn: false,
      login: (userData) => set({ user: userData, isLoggedIn: true }),
      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
