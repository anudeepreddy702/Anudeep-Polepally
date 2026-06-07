import React, { useEffect, useState } from 'react';

export default function MoneyTransferComparison() {
  const [fromAmount, setFromAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);

  const currencies = [
    { code: 'USD', name: 'United States Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: 'EUR' },
    { code: 'GBP', name: 'British Pound', symbol: 'GBP' },
    { code: 'INR', name: 'Indian Rupee', symbol: 'INR' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'PHP', name: 'Philippine Peso', symbol: 'PHP' },
    { code: 'MXN', name: 'Mexican Peso', symbol: 'MXN' },
    { code: 'JPY', name: 'Japanese Yen', symbol: 'JPY' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: 'CNY' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
    { code: 'THB', name: 'Thai Baht', symbol: 'THB' },
    { code: 'VND', name: 'Vietnamese Dong', symbol: 'VND' },
    { code: 'KRW', name: 'South Korean Won', symbol: 'KRW' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'AED' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
  ];

  const amount = parseFloat(fromAmount) || 0;
  const receivedAmount = exchangeRate ? amount * exchangeRate : 0;
  const fromCurrencyData = currencies.find((currency) => currency.code === fromCurrency);
  const toCurrencyData = currencies.find((currency) => currency.code === toCurrency);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    const fetchRate = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`,
        );
        const data = await response.json();
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);

        try {
          const response = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`,
          );
          const data = await response.json();
          setExchangeRate(data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()]);
        } catch (fallbackError) {
          console.error('Fallback API also failed:', fallbackError);
          setExchangeRate(null);
        }
      }

      setLoading(false);
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  return (
    <div className="money-transfer-page">
      <div className="transfer-hero-section">
        <p className="portfolio-kicker">CMC Tool</p>
        <h1 className="transfer-hero-title">Currency Mid-Market Converter</h1>
        <p className="transfer-hero-intro">
          Compare live mid-market exchange rates between currencies with a simple converted amount.
        </p>
      </div>

      <div className="transfer-content-section">
        <div className="converter-card">
          <div className="rate-display">
            <div className="rate-header">
              <div className="rate-title-section">
                <p className="portfolio-kicker">Live Rate</p>
                <p className="rate-value">
                  1 {fromCurrency} = {loading ? '...' : exchangeRate ? exchangeRate.toFixed(4) : 'N/A'} {toCurrency}
                </p>
              </div>
              <p className="rate-update-text">
                Updated from the European Central Bank
              </p>
            </div>

            <div className="converter-grid">
              <div className="currency-section">
                <label className="currency-label">You Send</label>
                <div className="currency-input-group">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(event) => setFromAmount(event.target.value)}
                    className="amount-input"
                    placeholder="100"
                    min="0"
                    max="9999999999"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(event) => setFromCurrency(event.target.value)}
                    className="currency-select"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="currency-info-box">
                  <div className="currency-details">
                    <span className="currency-code">{fromCurrencyData?.code}</span>
                    <span className="currency-name">{fromCurrencyData?.name}</span>
                  </div>
                </div>
              </div>

              <div className="swap-container">
                <button onClick={swapCurrencies} className="swap-button" title="Swap currencies">
                  <span className="swap-icon">Swap</span>
                </button>
              </div>

              <div className="currency-section">
                <label className="currency-label">Recipient Gets</label>
                <div className="currency-input-group">
                  <div className="amount-input amount-display">
                    {loading
                      ? '...'
                      : receivedAmount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                  </div>
                  <select
                    value={toCurrency}
                    onChange={(event) => setToCurrency(event.target.value)}
                    className="currency-select"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="currency-info-box">
                  <div className="currency-details">
                    <span className="currency-code">{toCurrencyData?.code}</span>
                    <span className="currency-name">{toCurrencyData?.name}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cmc-summary-row" aria-label="Conversion summary">
              <div>
                <span className="cmc-summary-label">Amount</span>
                <strong>{amount.toLocaleString()} {fromCurrency}</strong>
              </div>
              <div>
                <span className="cmc-summary-label">Converted</span>
                <strong>
                  {loading
                    ? '...'
                    : receivedAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })} {toCurrency}
                </strong>
              </div>
              <div>
                <span className="cmc-summary-label">Rate Source</span>
                <strong>ECB</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="rate-note">
          <p>
            <strong>Note:</strong> This tool shows only the mid-market exchange rate and converted amount.
            It is designed as a clean currency converter, not a provider comparison.
          </p>
        </div>

        <div className="disclaimer-section">
          <p>
            <strong>Important Disclaimer:</strong> Live rates are fetched from the European Central Bank via Frankfurter API.
            Always confirm final details with the platform you choose before making a transfer.
          </p>
        </div>
      </div>
    </div>
  );
}
