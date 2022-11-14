import PacmanLoader from 'react-spinners/PacmanLoader'

type AppProps = {
  loading: boolean;
}

export const LoadingSpinner = ({loading}: AppProps) => {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <PacmanLoader 
        loading={loading}
      />
    </div>
  )
}