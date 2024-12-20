import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TonConnectUIProvider manifestUrl="https://brown-important-rabbit-172.mypinata.cloud/ipfs/QmbmLu1ZpVioZxXxWc2T2KQQQjTqdBPoxkoA2nsXE8tbcf">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TonConnectUIProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
