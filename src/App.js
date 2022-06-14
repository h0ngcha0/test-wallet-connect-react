import logo from './logo.svg';
import './App.css';
import WalletConnectClient from '@walletconnect/client'

function App() {
  async function walletConnectCallback() {
    const walletConnect = await WalletConnectClient.init({
      projectId: '6e2562e43678dd68a9070a62b6d52207',
      relayUrl: 'wss://relay.walletconnect.com',
      metadata: {
        name: 'Alphium NFT',
        description: 'Alpephium NFT Marketplace',
        url: 'https://walletconnect.com/',
        icons: ['https://walletconnect.com/walletconnect-logo.png']
      }
    })

    console.log(walletConnect)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
