import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import Wallet from './features/wallet/Wallet';
import VendingMachine from './components/vendingMachine/VendingMachine';

function App() {
  return (
    <div className="App">
      <header>
        <Wrapper>
          <Wallet />
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          <h2>Look at the items and click on the coins below to enter amount</h2>
          <VendingMachine />
        </Wrapper>
      </main>
      <footer>
        <Wrapper>
          &copy; 2023
        </Wrapper>
      </footer>
    </div>
  );
}

export default App;
