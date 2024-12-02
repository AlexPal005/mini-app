import './main.css'
import { GoRuby } from 'react-icons/go'
import { TonConnectUI, useTonConnectUI } from '@tonconnect/ui-react'
import { useState } from 'react'

export const Main = () => {
  const { connect, disconnect, account, connected } = useTonConnectUI()
  const [isConnected, setIsConnected] = useState(connected)

  const handleConnect = async () => {
    try {
      await connect()
      setIsConnected(true)
    } catch (error) {
      console.error('Error connecting to wallet:', error)
    }
  }

  const handleDisconnect = () => {
    disconnect()
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
