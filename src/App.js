import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemBySlotLabel } from './features/items/itemsSlice';

import Wrapper from './components/wrapper/Wrapper';
import Wallet from './components/wallet/Wallet';
import VendingMachine from './components/vendingMachine/VendingMachine';

function App() {
  const dispatch = useDispatch();
  const itemStatus = useSelector(state => state.items.status);
  const error = useSelector(state => state.items.error)

  useEffect(() => {
        if (itemStatus === 'idle') {
          dispatch(fetchItemBySlotLabel("A1"));
        }
  }, [itemStatus, dispatch]);


  let content

  switch(true) {
    case (itemStatus=== 'loading'): {
      content = <p>Loading items ...</p>
      break;
    }
    case (itemStatus === 'succeeded'): {
      break;
    }
    case (itemStatus === 'failed'): {
      content = <div>Something went wrong. Please try again later!</div>;
      console.log("ERROR", error);
      break;
    }
    default: break;
  }
  
  return (
    <div className="App">
      <header>
        <Wrapper>
          <Wallet />
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          {content}
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
