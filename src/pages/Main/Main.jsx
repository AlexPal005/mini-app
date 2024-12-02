import './main.css'
import { GoRuby } from 'react-icons/go'
import { useTonConnectUI } from '@tonconnect/ui-react'
import { useEffect, useState } from 'react'
import { Menu } from '../../conponents/Menu/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from './../../redux/walletSlice'
import { useCallback } from 'react'

export const Main = () => {
  const [TonConnectUI] = useTonConnectUI()
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const address = useSelector(state => state.wallet.address)

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

  const handleConnection = useCallback(
    adress => {
      dispatch(setAddress(adress))
      setIsLoading(false)
    },
    [dispatch]
  )

  const handleDisconnection = useCallback(() => {
    dispatch(setAddress(''))
    setIsLoading(false)
  }, [dispatch])

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
  }, [TonConnectUI, handleConnection, handleDisconnection])

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  useEffect(() => {
    console.log(address)
  }, [address])

  return (
    <div className="main-page">
      <button
        className={!!address ? ['button', 'button-err'].join(' ') : ['button', 'button-blue'].join(' ')}
        onClick={handleConnect}
      >
        {!!address ? (
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
