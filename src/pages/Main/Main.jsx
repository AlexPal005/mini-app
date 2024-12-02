import './main.css'
import { GoRuby } from 'react-icons/go'
import { TonConnectUI, useTonConnectUI } from '@tonconnect/ui-react'
import { useState } from 'react'

export const Main = () => {
  const [TonConnectUI] = useTonConnectUI()
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = async () => {
    try {
      await TonConnectUI.openModal()
      setIsConnected(true)
    } catch (error) {
      console.error('Error connecting to wallet:', error)
    }
  }

  const handleDisconnect = () => {
    TonConnectUI.disconnect()
    setIsConnected(false)
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
