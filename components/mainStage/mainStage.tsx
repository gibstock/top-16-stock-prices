import React from 'react'
import { useStockData } from '../../hooks/useStockData'



const tickers = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH','JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA', 'HD']

export const MainStage = () => {

  const queryResults: any | unknown = useStockData(tickers)

  return (
    <div className='grid grid-cols-4 mt-6 gap-3'>
      {
        queryResults?.map((result: any, i: number) => {
          console.log(result)
          return <div className=' h-44 border border-blue-800 rounded-xl p-4' key={i}>
            <div>Symbol: {tickers[i]}</div>
            <div>${result?.data.data.c}</div>
            <div>Change: {result?.data.data.d}</div>
            <div>%: {result?.data.data.dp}</div>
          </div>
        })
      }
    </div>
  )
}
