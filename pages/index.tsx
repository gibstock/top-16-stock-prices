import type { NextPage } from 'next'
import { Header } from '../components/header/header'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full p-6 bg-light-primary5 dark:bg-dark-primary5">
        <Header />
    </div>
  )
}

export default Home
