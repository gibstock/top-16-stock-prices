import ScaleLoader from 'react-spinners/ScaleLoader'

type AppProps = {
  loading: boolean;
}

export const LoadingSpinner = ({loading}: AppProps) => {
  return (
    <>
      <ScaleLoader 
        loading={loading}
      />
    </>
  )
}