import { useState } from "react";
import useCurrencyInfo from "./custom_hooks/useCurrencyInfo";
import { InputBox } from "./component";
import bgImage from "./assets/bgImage.jpg";
function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currncyInfo = useCurrencyInfo(from);
  const options = Object.keys(currncyInfo);

  const handleAmountChange = (newAmount) => {
    if (newAmount > 0) {
      setAmount(newAmount);
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currncyInfo[to]);
  };
  return (
    <div
      className="flex flex-wrap justify-center items-center h-screen w-screen bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-1/2 h-1/2 border border-slate-300 border-solid rounded-lg backdrop-blur-md flex flex-wrap justify-center items-center">
        <form
          className="text-slate-300 flex justify-evenly items-center flex-col w-11/12 h-4/5"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className=" border border-white rounded-lg w-11/12 p-4">
            <InputBox
              label={"From"}
              amount={amount}
              onAmountChange={handleAmountChange}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div className="w-11/12  text-center p-1">
            <button
              type="button"
              className="border bg-blue-500 text-lg text-black font-medium rounded-md px-3"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className=" border border-white rounded-lg w-11/12  p-4">
            <InputBox
              label={"To"}
              amount={convertedAmount}
              amountDisable
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
            />
          </div>
          <div
            className=" border border-white rounded-lg w-11/12 text-black font-medium text-center p-1 bg-slate-400 cursor-pointer"
            onClick={convert}
          >
            Convert
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
