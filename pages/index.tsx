import { useEffect } from 'react'
import type { NextPage } from 'next'
import { header, main } from '../components'
import { useDarkModeStore } from '../store/store'

const Home: NextPage = () => {
  const dark = useDarkModeStore(state => state.dark)

  useEffect(() => {
    if(dark) {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className=" w-full p-12 ">
        <header.Header />
        <main.MainStage />
    </div>
  )
}

export default Home
