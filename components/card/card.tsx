import React from 'react'

type AppProps = {
  tickers: string[],
  result: ObjectData,
  index: number,
  name: DataResult
}

type ObjectData = {
  data: QuoteData
}

type QuoteData = {
  data: {
    c: number,
    d: number,
    dp: number,
  }
}

type DataResult = {
  data: NameData
}

type NameData = {
  data: {
    name: string;
  }
}
export const Card = ({tickers, result, index, name}: AppProps) => {
  return (
    <div className='h-full flex flex-col items-center justify-between'>
      <div className='w-full flex flex-row items-center justify-between'>
        <div>
          <div className='font-semibold text-base'>{tickers[index]}</div>
          <div>{name?.data.data.name}</div>
        </div>
        <div className='font-semibold text-base'>${result?.data.data.c}</div>
      </div>
      <div className='w-full flex flex-row items-center justify-between'>
        <div>Daily</div>
        {result?.data.data.d > 0 ? (
          <div className='font-semibold text-sm text-light-color2'>+${result?.data.data.d}</div>
        ): (
          <div className='font-semibold text-sm text-light-color1'>-${result?.data.data.d}</div>
        )}
        {result?.data.data.dp > 0 ? (
          <div className='bg-light-bg2 font-semibold text-light-color2 rounded-[60px] p-1'>+{result?.data.data.dp.toFixed(2)}%</div>
          ): (
            <div className='bg-light-bg2 font-semibold text-light-color1 rounded-[60px]'>-{result?.data.data.dp.toFixed(2)}%</div>
        )}
      </div>
    </div>
  )
}
