import './main.css'
import { GoRuby } from 'react-icons/go'
import { useTonConnectUI } from '@tonconnect/ui-react'
import { useState } from 'react'

export const Main = () => {
  const [TonConnectUI] = useTonConnectUI()
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = async () => {
    try {
      if (TonConnectUI.connected) {
        setIsLoading(true)
        await TonConnectUI.disconnect()
      } else {
        await TonConnectUI.openModal()
      }
    } catch (err) {
      console.log('Error of connection!')
    }
    console.log(isLoading)
  }

  return (
    <div className="main-page">
      <button className="button" onClick={handleConnect}>
        <GoRuby className="button__icon" />
        <span className="button__title">Connect Wallet</span>
      </button>
    </div>
  )
}
