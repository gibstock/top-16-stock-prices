import type { NextPage } from 'next'
import { Header } from '../components/header/header'
import { MainStage } from '../components/mainStage/mainStage'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full p-6 bg-light-primary5 dark:bg-dark-primary5">
        <Header />
        <MainStage />
    </div>
  )
}

export default Home
