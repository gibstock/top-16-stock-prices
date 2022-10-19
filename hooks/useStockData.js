import { useQueries } from "react-query";
import axios from "axios";

const fetchStockData = (symbol) => {
  return axios.get(`${process.env.NEXT_PUBLIC_FINNHUB_BASE_URL}quote?symbol=${symbol}&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`)
}

const fetchCompanyName = (symbol) => {
  return axios.get(`${process.env.NEXT_PUBLIC_FINNHUB_BASE_URL}/stock/profile2?symbol=${symbol}&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`)

}


export const useStockData = (symbols) => {
  return useQueries(
    symbols.map( (symbol, i) => {
      return {
        queryKey: ['quote', symbol],
        queryFn: () => fetchStockData(symbol),
        refetchInterval: 10000,
        retry: false,
        onSuccess: (data) => {console.log('Successfully fetched', data, i)},
        onError: (error) => {console.log('There was an error', error, i)},
        // disabled: true,
      }
    })
  )
}
export const useStockNameData = (symbols) => {
  return useQueries(
    symbols.map( (symbol, i) => {
      return {
        queryKey: ['company-name', symbol],
        queryFn: () => fetchCompanyName(symbol),
        // refetchInterval: 10000,
        retry: false,
        onSuccess: (data) => {console.log('Successfully fetched', data, i)},
        onError: (error) => {console.log('There was an error', error, i)},
        // disabled: true,
      }
    })
  )
}


