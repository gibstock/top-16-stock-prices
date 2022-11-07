import create from "zustand";
import { devtools, persist } from 'zustand/middleware'

let darkModestore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
})

let newQuoteStore = (set) => ({
  newQuote: '',
  addNewQuote: (symbol) => set(() => ({ newQuote: symbol}))
})

darkModestore = devtools(darkModestore)
darkModestore = persist(darkModestore, {name: 'darkmode_user_pref'})

newQuoteStore = devtools(newQuoteStore)

export const useDarkModeStore = create(darkModestore)
export const useNewQuoteStore = create(newQuoteStore)