import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  amountDisable = false,
  selectCurrency = "usd",
  currencyOptions = [],
  onCurrencyChange,
}) {
  const amountId = useId();

  return (
    <div className="flex flex-wrap justify-between font-semibold">
      <div className="w-1/2">
        <label className="inline-block" htmlFor={amountId}>
          {label}
        </label>
        <input
          className="text-slate-300 w-full bg-transparent text-xs"
          type="number"
          placeholder="Amount"
          id={amountId}
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div>
        <p>Select Currency</p>
        <select
          className=" text-black rounded-lg text-center"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
