import ScaleLoader from 'react-spinners/ScaleLoader'

type AppProps = {
  loading: boolean;
}

export const LoadingScale = ({loading}: AppProps) => {
  return (
    <>
      <ScaleLoader 
        loading={loading}
      />
    </>
  )
}