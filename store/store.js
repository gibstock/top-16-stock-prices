import create from "zustand";
import { devtools, persist } from 'zustand/middleware'

let darkModestore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
})

darkModestore = devtools(darkModestore)
darkModestore = persist(darkModestore, {name: 'darkmode_user_pref'})

export const useDarkModeStore = create(darkModestore)