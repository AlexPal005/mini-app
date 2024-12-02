import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Page1 = () => {
  const address = useSelector(state => state.wallet.address)

  if (!!address) {
    return <div>{`Your address is ${address}`}</div>
  } else {
    return <Navigate to="/" />
  }
}
