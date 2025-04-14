import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import "./CSS/CurrencyExchange.css";
import { countryOptions } from "../data/countries";

const CurrencyExchange = () => {
    const [exchangeRates, setExchangeRates] = useState({});
    const [loading, setLoading] = useState(true);
    const [baseCountry, setBaseCountry] = useState(null);
    const [targetCountry, setTargetCountry] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
            .then((response) => response.json())
            .then((data) => {
                setExchangeRates(data.rates);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching exchange rates:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (baseCountry && targetCountry) {
            const rate = exchangeRates[targetCountry.value] / exchangeRates[baseCountry.value];
            setExchangeRate(rate);
            setConvertedAmount(amount * rate);
        }
    }, [amount, baseCountry, targetCountry, exchangeRates]);

    const handleBaseCountryChange = (selectedOption) => {
        setBaseCountry(selectedOption);
    };

    const handleTargetCountryChange = (selectedOption) => {
        setTargetCountry(selectedOption);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleConvert = () => {
        if (baseCountry && targetCountry) {
            const rate = exchangeRates[targetCountry.value] / exchangeRates[baseCountry.value];
            setExchangeRate(rate);
            setConvertedAmount(amount * rate);
        }
    };

    const handleSwapCountries = () => {
        const temp = baseCountry;
        setBaseCountry(targetCountry);
        setTargetCountry(temp);
    };

    const handleReset = () => {
        setBaseCountry(null);
        setTargetCountry(null);
        setAmount(1);
        setExchangeRate(null);
        setConvertedAmount(null);
    };

    const filterCountryOptions = (inputValue) => {
        return countryOptions.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const loadCountryOptions = (inputValue, callback) => {
        callback(filterCountryOptions(inputValue));
    };

    return (
        <div className="currency-exchange-container">
            <h1 className="currency-exchange-title">Currency Exchange Rates</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="currency-exchange-select-container">
                        <AsyncSelect
                            value={baseCountry}
                            onChange={handleBaseCountryChange}
                            loadOptions={loadCountryOptions}
                            defaultOptions={countryOptions}
                            className="currency-exchange-select small-select"
                            placeholder="Base Country"
                        />
                        <AsyncSelect
                            value={targetCountry}
                            onChange={handleTargetCountryChange}
                            loadOptions={loadCountryOptions}
                            defaultOptions={countryOptions}
                            className="currency-exchange-select small-select"
                            placeholder="Target Country"
                        />
                    </div>
                    <div className="currency-exchange-input-container">
                        <label htmlFor="amount" className="currency-exchange-input-label">
                            Amount:
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            className="currency-exchange-input currency-exchange-input-large"
                            placeholder="Enter amount"
                        />
                    </div>
                    <div className="currency-exchange-button-container">
                        <button onClick={handleConvert} className="currency-exchange-button">
                            Convert
                        </button>
                        <button onClick={handleSwapCountries} className="currency-exchange-button">
                            Swap
                        </button>
                        <button onClick={handleReset} className="currency-exchange-button">
                            Reset
                        </button>
                    </div>
                    {exchangeRate !== null && (
                        <div className="currency-exchange-rate">
                            <p>1 {baseCountry.label} = {exchangeRate.toFixed(2)} {targetCountry.label}</p>
                            <p>Converted Amount: {amount} {baseCountry.label} = {convertedAmount.toFixed(2)} {targetCountry.label}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CurrencyExchange;
