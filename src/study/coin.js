import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [buyCoin, setBuyCoin] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setCoinPrice(json[0].quotes.USD.price);
        setLoading(false);
      });
  }, []);

  const moneyValue = (event) => {
    const value = event.target.value;
    setMoney(value);
    setBuyCoin(value / coinPrice);
    console.log("moneyValue실행");
  };

  const coinMonyValue = (event) => {
    const price = event.target.value;
    setCoinPrice(price);
    setBuyCoin(money / price);
    console.log("coinMonyValue실행");
    console.log(price);
    console.log("coinMonyValue실행");
  };

  return (
    <div>
      <h1>The Coins{loading ? "" : `(${coins.length})`}</h1>

      <input value={money} onChange={moneyValue} type="number"></input>

      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={coinMonyValue}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}

      <h2>({buyCoin.toFixed(6)}개)</h2>
    </div>
  );
}

export default App;
