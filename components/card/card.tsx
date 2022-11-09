import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'

type AppProps = {
  tickers: string[],
  result: ObjectData,
  index: number,
  name: DataResult,
  handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

type ObjectData = {
  data: QuoteData,
  isInitialLoading: boolean,
  isError: boolean,
  error: Error
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
  isInitialLoading: boolean,
  isError: boolean,
  error: Error
}

type NameData = {
  data: {
    name: string;
  }
}
export const Card = ({tickers, result, index, name, handleClick}: AppProps) => {

  const { isInitialLoading: nameLoading, isError: nameIsError, error: nameError } = name
  const { isInitialLoading: resultLoading, isError: resultIsError, error: resultError} = result

  if(nameLoading || resultLoading) return <h2>Loading...</h2>
  if(nameIsError) {
    console.log(nameError.message)
  }
  if(resultIsError) {
    console.log("result error", resultError.message)
  }

  return (
    <div className='h-full flex flex-col items-center justify-between'>
      <div className='w-full flex flex-row items-center justify-between'>
        <div className='flex flex-col items-start'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <div className='font-semibold text-base text-light-gray11 dark:text-dark-gray11 outline outline-1 outline-black px-1 rounded-lg cursor-pointer shadow-[0px_3px_4px] shadow-light-shadow  dark:shadow-dark-shadow hover:bg-light-primary5' onClick={handleClick} data-symbol={tickers[index]}>{tickers[index]}</div>
            <div className='flex flex-row items-center gap-2 text-xs text-[#a0a0a0]'><AiOutlineArrowLeft /> Click to change</div>
          </div>
          <div className='text-light-gray8 dark:text-dark-gray8'>{name?.data?.data.name}</div>
        </div>
        <div className='font-semibold text-base text-light-gray11 dark:text-dark-gray11'>${result?.data?.data.c}</div>
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
