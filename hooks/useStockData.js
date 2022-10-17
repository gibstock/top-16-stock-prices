import { useQueries } from "react-query";
import axios from "axios";

const fetchStockData = (symbol) => {
  return axios.get(`${process.env.NEXT_PUBLIC_FINNHUB_BASE_URL}quote?symbol=${symbol}&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`)
}


export const useStockData = (symbols) => {
  return useQueries(
    symbols.map( symbol => {
      return {
        queryKey: ['quote', symbol],
        queryFn: () => fetchStockData(symbol)
      }
    })
  )
}
