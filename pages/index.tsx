import type { NextPage } from 'next'
// import { Header } from '../components/header/header'
// import { MainStage } from '../components/mainStage/mainStage'
import { header, main } from '../components'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full p-12 bg-light-primary5 dark:bg-dark-primary5">
        <header.Header />
        <main.MainStage />
    </div>
  )
}

export default Home
