import { useSelector } from 'react-redux'
import './page1.css'

export const Page1 = () => {
  const address = useSelector(state => state.wallet.address)

  if (!!address) {
    return (
      <div className="announce announce-address">
        <span>Your address is</span>
        <span className="address">{address.slice(0, 20) + '...' + address.slice(40, address.length)}</span>
      </div>
    )
  } else {
    return <div className="announce">Connect wallet to see your address!</div>
  }
}
