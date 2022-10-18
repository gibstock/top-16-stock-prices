import type { NextPage } from 'next'

export const Header: NextPage = () => {
  return (
    <header className='flex flex-row justify-between items-center'>
      <h1 className='font-semibold text-2xl text-light-gray11 dark:text-dark-gray11'>Home</h1>
      <div className='font-semibold text-xs text-light-gray11 dark:text-dark-gray11'>Dark Mode</div>
    </header>
  )
}
