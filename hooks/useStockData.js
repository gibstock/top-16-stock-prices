import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchStockData = (symbol) => {
  return axios.get(`${process.env.NEXT_PUBLIC_FINNHUB_BASE_URL}quote?symbol=${symbol}&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`)
}

export const fetchCompanyName = (symbol) => {
  return axios.get(`${process.env.NEXT_PUBLIC_FINNHUB_BASE_URL}/stock/profile2?symbol=${symbol}&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`)

}

export const fetchSymbols = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_FINNHUB_BASE_URL}/stock/symbol?exchange=US&mic=XNYS&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`)
}

const timeCheck = () => {
  const d = new Date()
  const h = d.getHours()
  if(h >= 15) {
    return false
  } else {
    return 10000
  }
}

export const useStockData = (symbols) => {
  return useQueries({
    queries: symbols.map((symbol, i) => {
      return {
        queryKey: ['quote', symbol],
        queryFn: () => fetchStockData(symbol),
        refetchInterval:() => timeCheck(),
        refetchOnReconnect: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: false,
        onError: (error) => {
          console.log('Error fetching the symbol', error)
        }
      }
    })
  })
}

export const useStockNameData = (symbols) => {
  return useQueries({
    queries: symbols.map((symbol, i) => {
      return {
        queryKey: ['company-name', symbol],
        queryFn: () => fetchCompanyName(symbol),
        refetchInterval: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: false,
      }
    })
  })
}
export const useSymbolData = () => {
  return useQuery(['symbols'], fetchSymbols, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  } )
}




