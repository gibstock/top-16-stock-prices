import type { NextPage } from 'next'
import { useDarkModeStore} from '../../store/store'

export const Header: NextPage = () => {
  const dark = useDarkModeStore(state => state.dark)
  const darkModeToggle = useDarkModeStore(state => state.toggleDarkMode)
  return (
    <header className='flex flex-row justify-between items-center'>
      <h1 className='font-semibold text-2xl text-light-gray11 dark:text-dark-gray11'>Home</h1>
      <div className='font-semibold text-xs text-light-gray11 dark:text-dark-gray11 cursor-pointer' onClick={darkModeToggle}>{!dark ? 'Dark Mode' : 'Light Mode'}</div>
    </header>
  )
}
