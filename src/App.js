import "./App.css";
import { useModal } from "./hooks/useModal";
import Modal from "./components/modal";
import { useState, useEffect, useCallback, useMemo } from "react";
import { snapshot } from "./data/stocks";

function StockPrice({ price, lastPrice }) {
  return (
    <div>
      Current Price: ${`${price.toFixed(2)}`}
      <div>
        Change in price:{" "}
        <span style={{ color: `${price - lastPrice > 0 ? "green" : "red"}` }}>
          ${`${price - lastPrice}`}
        </span>{" "}
      </div>
    </div>
  );
}
function Header({ name, symbol }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>Symbol {symbol}</p>
    </header>
  );
}

function App() {
  let [lastPrice, setLastPrice] = useState(0);
  let [price, setPrice] = useState(snapshot[0].currentPrice);
  let [name] = useState(snapshot[0].name);
  let [symbol] = useState(snapshot[0].symbol);
  let i = 0;
  let timer = useCallback(() => {
    setInterval(() => {
      if (i < snapshot.length - 1) {
        setPrice(snapshot[i].currentPrice);
        setLastPrice(price);
        i++;
      } else {
        i = 0;
      }
    }, 1000);
  }, [snapshot]);

  useEffect(() => {
    timer();
    return () => {
      clearInterval(timer);
    };
  }, [timer]);
  return (
    <div className="App">
      <Header name={name} symbol={symbol} />
      <StockPrice price={price} lastPrice={lastPrice} />
    </div>
  );
}

export default App;
