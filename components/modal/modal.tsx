import React from 'react'
import { useNewQuoteStore } from '../../store/store'
import { useSymbolData } from '../../hooks/useStockData'
import { binarySearch } from '../../utils/binarySearch'
import {AiOutlineClose} from 'react-icons/ai'

type AppProps = {
  curr: string;
  setCurrentSymbol: (sym: string) => void;
  setTickerSymbols: (s: string[]) => void;
  tickerSymbols: string[];
  setLaunchModal: (b: boolean) => void;
  listOfSymbols: string[]
}

export const Modal = ({curr, setCurrentSymbol, setTickerSymbols, tickerSymbols, setLaunchModal, listOfSymbols}: AppProps) => {
  const addNewSymbol = useNewQuoteStore(state => state.addNewQuote)
  // const {data} = useSymbolData()
  // let testArr: string[] = []
  // const test = data?.data.map((sym: any) => {
  //   testArr.push(sym.symbol)
  // })

  //@ts-ignore

  // const checkSymbol = (haystack: Array<string>, needle: string): number | never =>  {
  //   let starting: number = 0
  //   let ending: number = haystack.length - 1
  //   while (starting <= ending) {
  //     let midPoint: number = Math.floor((starting + ending) / 2)

  //     if(haystack[midPoint] === needle) {
  //       return midPoint;
  //     }
  //     if(haystack[midPoint] < needle) {
  //       starting = midPoint + 1
  //     }
  //     if(haystack[midPoint] > needle) {
  //       ending = midPoint - 1
  //     }
  //   }
  //   throw new Error('Value not in array') 

  // }

  const handleAddQuoteClick = async (e: any) => {
    e.preventDefault()
    let searchTerm = e.target[0].value.toUpperCase()
    if(binarySearch(listOfSymbols, e.target[0].value.toUpperCase()) === -1) {
      alert('Not a valid US Stock Exchange symbol')
    } else {
      const updatedSymbol = await addNewSymbol(searchTerm)
      const index = tickerSymbols.findIndex(x => x === curr)
      let copyOfTickers = [...tickerSymbols]
      copyOfTickers[index] = searchTerm
      setTickerSymbols(copyOfTickers)
      setLaunchModal(false)
    }
  }

  return (
    <>
      <div className='fixed flex flex-col justify-center items-center p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg  z-10'>
        <div className="close-btn absolute -top-2 -right-2 cursor-pointer outline outline-1 outline-black bg-light-primary5 rounded-full" onClick={() => setLaunchModal(false)}><AiOutlineClose size={24} /></div>
        <form className='flex flex-col justify-center items-center ' onSubmit={handleAddQuoteClick}>
          <input 
            className=' text-xl  px-3 py-2 rounded-xl shadow-[0px_1px_4px] shadow-light-shadow  dark:shadow-dark-shadow'
            name='newQuote'
            type='text' 
            placeholder={curr}
            autoFocus={true}
          />
          <button className='bg-blue-500 px-3 py-2 mt-2 rounded-full w-full text-light-primary5 font-bold text-xl shadow-[0px_1px_4px] shadow-light-shadow  dark:shadow-dark-shadow' type='submit'>Add Quote</button>
        </form>
      </div>
        <div className="absolute left-0 top-0 bg-black opacity-30 h-screen w-screen"></div>
    </>
  )
}
