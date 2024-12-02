import './main.css'
import { GoRuby } from 'react-icons/go'
import { useTonConnectUI } from '@tonconnect/ui-react'
import { useEffect, useState } from 'react'
import { Menu } from '../../conponents/Menu/Menu'

export const Main = () => {
  const [TonConnectUI] = useTonConnectUI()
  const [tonWalletAddress, setTonWalletAddress] = useState('')
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
  }

  const handleConnection = adress => {
    setTonWalletAddress(adress)
    setIsLoading(false)
  }

  const handleDisconnection = () => {
    setTonWalletAddress('')
    setIsLoading(false)
  }

  useEffect(() => {
    if (TonConnectUI.account?.address) {
      handleConnection(TonConnectUI.account?.address)
    } else {
      handleDisconnection()
    }

    const unsubscribe = TonConnectUI.onStatusChange(wallet => {
      if (wallet) {
        handleConnection(TonConnectUI.account?.address)
      } else {
        handleDisconnection()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [TonConnectUI])

  useEffect(() => {
    console.log(tonWalletAddress)
  }, [tonWalletAddress])

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  return (
    <div className="main-page">
      <button
        className={!!tonWalletAddress ? ['button', 'button-err'].join(' ') : ['button', 'button-blue'].join(' ')}
        onClick={handleConnect}
      >
        {!!tonWalletAddress ? (
          <span className="button__title">Disconnect Wallet</span>
        ) : (
          <>
            <GoRuby className="button__icon" />
            <span className="button__title">Connect Wallet</span>
          </>
        )}
      </button>
      <Menu />
    </div>
  )
}
