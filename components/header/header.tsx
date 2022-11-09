import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '../Button.components'
import { useDarkModeStore, useNewQuoteStore} from '../../store/store'
import {BsFillMoonFill, BsSunFill} from 'react-icons/bs'

export const Header: NextPage = () => {
  const dark = useDarkModeStore(state => state.dark)
  const darkModeToggle = useDarkModeStore(state => state.toggleDarkMode)
  const setUserSymbols = useNewQuoteStore(state => state.setUserSymbols)

  const router = useRouter()

  const handleReset = () => {
    setUserSymbols([])
    console.log("Tickers reset to top 16")
    router.reload()
  }

  return (
    <header className='grid grid-cols-4'>
      <div className='col-start-2 col-span-2 flex flex-row justify-center items-center text-light-gray11 md:col-start-1 md:col-span-1 md:justify-self-start'>
        <div className='flex flex-col justify-start items-center self-start'>
          <h1 className='font-bold text-2xl text-light-gray11 dark:text-dark-gray11'>Stock Chops</h1>
          <img className='w-[150px]' src="/steak.png" alt="" />
          <h2 className='text-light-gray11 dark:text-dark-gray11 -mt-4'>Your Daily Cut</h2>
        </div>
      </div>
      <div className='flex flex-row items-center gap-4 col-start-4 self-start justify-self-end'>
        <Button px='8px' py='4px' version='clear' size='1em' onClick={handleReset}>Reset</Button>
        <div className=' font-semibold text-xl text-light-gray11 dark:text-dark-gray11 cursor-pointer' onClick={darkModeToggle}>{!dark ? <BsFillMoonFill /> : <BsSunFill />}</div>
      </div>
    </header>
  )
}
