import React from 'react'

type AppProps = {
  tickers: string[],
  result: ObjectData,
  index: number,
  name: DataResult
}

type ObjectData = {
  data: QuoteData,
  isLoading: boolean
}

type QuoteData = {
  data: {
    c: number,
    d: number,
    dp: number,
  }
}

type DataResult = {
  data: NameData,
  isLoading: boolean
}

type NameData = {
  data: {
    name: string;
  }
}
export const Card = ({tickers, result, index, name}: AppProps) => {

  const { isLoading: nameLoading } = name
  const { isLoading: resultLoading } = result

  if(nameLoading || resultLoading) return <h2>Loading...</h2>

  return (
    <div className='h-full flex flex-col items-center justify-between'>
      <div className='w-full flex flex-row items-center justify-between'>
        <div>
          <div className='font-semibold text-base text-light-gray11 dark:text-dark-gray11'>{tickers[index]}</div>
          <div className='text-light-gray8 dark:text-dark-gray8'>{name?.data.data.name}</div>
        </div>
        <div className='font-semibold text-base text-light-gray11 dark:text-dark-gray11'>${result?.data.data.c}</div>
      </div>
      <div className='w-full flex flex-row items-center justify-between'>
        <div className='text-light-gray8 dark:text-dark-gray8'>Daily</div>
        {result?.data.data.d > 0 ? (
          <div className='font-semibold text-sm text-light-color2 dark:text-dark-color2'>+${result?.data.data.d}</div>
        ): (
          <div className='font-semibold text-sm text-light-color1 dark:text-dark-color1'>${result?.data.data.d}</div>
        )}
        {result?.data.data.dp > 0 ? (
          <div className='bg-light-bg2 dark:bg-dark-bg2 font-semibold text-light-color2 dark:text-dark-color2 rounded-[60px] p-1'>+{result?.data.data.dp.toFixed(2)}%</div>
          ): (
            <div className='bg-light-bg1 dark:bg-dark-bg1 font-semibold text-light-color1 dark:text-dark-color1 rounded-[60px] p-1'>{result?.data.data.dp.toFixed(2)}%</div>
        )}
      </div>
    </div>
  )
}
