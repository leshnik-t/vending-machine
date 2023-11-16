import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserByUsername } from './features/user/userSlice';
import { 
        fetchItemBySlotLabel, 
        updateNumberOfProducts,
        selectNumberOfProducts 
} from './features/items/itemsSlice';
import { initializeCoins } from './features/coins/coinsSlice';


import Wrapper from './components/wrapper/Wrapper';
import Wallet from './features/user/wallet/Wallet';
import VendingMachine from './components/vendingMachine/VendingMachine';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVendingMachineEmpty, setIsVendingMachineEmpty] = useState(false);

  const numberOfProducts = useSelector(selectNumberOfProducts);

  useEffect(() => {
    if (numberOfProducts === 0) {
      setIsVendingMachineEmpty(true);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 3000);
      
    }
  }, [numberOfProducts]);

  useEffect(() => {
    const fetchData = async () => {
      return await Promise.all([
        dispatch(fetchUserByUsername('fakeuser')),
        dispatch(fetchItemBySlotLabel('C3'))
      ])
    }

    fetchData()
      .then((result) => {
        setIsLoading(false);
        
        result.forEach((promiseResult) => {
          if (promiseResult.meta.requestStatus
            !== 'fulfilled') {
            throw Error('Something went worng! Please, try again later!')
          } else {
            if (promiseResult.type === 'user/fetchUserByUsername/fulfilled') {
              dispatch(initializeCoins([promiseResult.payload.wallet, promiseResult.payload.currency]));
            }
            if (promiseResult.type === 'items/fetchItemBySlotLabel/fulfilled') {
              dispatch(updateNumberOfProducts(promiseResult.payload.quantity));
            }
          }
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      })

  }, [dispatch]);
  
  return (
    <div className="App">
      {isVendingMachineEmpty && <p className="alert alert-danger message">Vending Machine is empty!</p>}
      {isLoading && <p className="alert alert-primary message">Loading application. Please wait!</p>}
      {error && <p className="alert alert-danger message">{error}</p>}
      {!isLoading && !error && 
      <>
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
      </>}
    </div>
  );
}

export default App;
