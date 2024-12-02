import './main.css'
import { GoRuby } from 'react-icons/go'

export const Main = () => {
  return (
    <div className="main-page">
      <button className="button">
        <GoRuby className="button__icon" />
        <span className="button__title">Connect Wallet</span>
      </button>
    </div>
  )
}
