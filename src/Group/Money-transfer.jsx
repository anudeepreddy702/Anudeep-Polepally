import React, { useEffect, useState } from 'react';

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

const quickPairs = [
  ['USD', 'INR'],
  ['USD', 'EUR'],
  ['EUR', 'USD'],
  ['GBP', 'INR'],
  ['CAD', 'INR'],
  ['AUD', 'INR'],
];

const formatNumber = (value, digits = 4) => (
  Number.isFinite(value)
    ? value.toLocaleString(undefined, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    })
    : 'N/A'
);

export default function MoneyTransferComparison() {
  const [fromAmount, setFromAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [rateDate, setRateDate] = useState('');
  const [rateSource, setRateSource] = useState('Frankfurter');
  const [supportedCurrencies, setSupportedCurrencies] = useState({});
  const [loading, setLoading] = useState(false);

  const amount = parseFloat(fromAmount) || 0;
  const receivedAmount = exchangeRate ? amount * exchangeRate : 0;
  const fromCurrencyData = currencies.find((currency) => currency.code === fromCurrency);
  const toCurrencyData = currencies.find((currency) => currency.code === toCurrency);
  const inverseRate = exchangeRate ? 1 / exchangeRate : null;
  const isPairSupported = Boolean(
    supportedCurrencies[fromCurrency] && supportedCurrencies[toCurrency],
  );

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const applyQuickPair = (from, to) => {
    setFromCurrency(from);
    setToCurrency(to);
  };

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch('https://api.frankfurter.app/currencies');
        const data = await response.json();
        setSupportedCurrencies(data);
      } catch (error) {
        console.error('Error fetching supported currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchRate = async () => {
      setLoading(true);

      if (fromCurrency === toCurrency) {
        setExchangeRate(1);
        setRateDate(new Date().toISOString().split('T')[0]);
        setRateSource('Same currency');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`,
        );
        const data = await response.json();
        setExchangeRate(data.rates[toCurrency]);
        setRateDate(data.date);
        setRateSource('Frankfurter');
      } catch (error) {
        console.error('Error fetching exchange rate:', error);

        try {
          const response = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`,
          );
          const data = await response.json();
          setExchangeRate(data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()]);
          setRateDate(new Date().toISOString().split('T')[0]);
          setRateSource('Fallback currency feed');
        } catch (fallbackError) {
          console.error('Fallback API also failed:', fallbackError);
          setExchangeRate(null);
          setRateDate('');
          setRateSource('Unavailable');
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
                  1 {fromCurrency} = {loading ? '...' : formatNumber(exchangeRate)} {toCurrency}
                </p>
              </div>
              <p className="rate-update-text">
                {rateDate ? `Updated ${rateDate}` : 'Fetching latest reference rate'}
              </p>
            </div>

            <div className="cmc-quick-pairs" aria-label="Quick currency pairs">
              {quickPairs.map(([from, to]) => (
                <button
                  key={`${from}-${to}`}
                  type="button"
                  className={fromCurrency === from && toCurrency === to ? 'active' : ''}
                  onClick={() => applyQuickPair(from, to)}
                >
                  {from} to {to}
                </button>
              ))}
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
                <strong>{rateSource}</strong>
              </div>
            </div>
          </div>
        </div>

        <section className="cmc-panel cmc-rate-insight">
          <div className="cmc-panel-heading">
            <p className="portfolio-kicker">Rate Insight</p>
            <h2>{fromCurrency} / {toCurrency}</h2>
          </div>
          <div className="cmc-insight-stack">
            <div>
              <span className="cmc-summary-label">Direct Rate</span>
              <strong>1 {fromCurrency} = {loading ? '...' : formatNumber(exchangeRate)} {toCurrency}</strong>
            </div>
            <div>
              <span className="cmc-summary-label">Inverse Rate</span>
              <strong>1 {toCurrency} = {loading ? '...' : formatNumber(inverseRate, 6)} {fromCurrency}</strong>
            </div>
            <div>
              <span className="cmc-summary-label">Rate Basis</span>
              <strong>Mid-market reference</strong>
            </div>
          </div>
        </section>

        <section className="cmc-panel cmc-details-panel">
          <div className="cmc-panel-heading">
            <p className="portfolio-kicker">Currency Details</p>
            <h2>Selected pair profile</h2>
          </div>
          <div className="cmc-details-grid">
            <div>
              <span className="cmc-summary-label">From Currency</span>
              <strong>{fromCurrencyData?.symbol} {fromCurrency}</strong>
              <p>{supportedCurrencies[fromCurrency] || fromCurrencyData?.name}</p>
            </div>
            <div>
              <span className="cmc-summary-label">To Currency</span>
              <strong>{toCurrencyData?.symbol} {toCurrency}</strong>
              <p>{supportedCurrencies[toCurrency] || toCurrencyData?.name}</p>
            </div>
            <div>
              <span className="cmc-summary-label">API Support</span>
              <strong>{Object.keys(supportedCurrencies).length ? (isPairSupported ? 'Supported' : 'Limited') : 'Checking'}</strong>
              <p>Rates come from Frankfurter when available, with a fallback feed for resilience.</p>
            </div>
            <div>
              <span className="cmc-summary-label">History Window</span>
              <strong>Current rate</strong>
              <p>This view is focused on the latest available reference rate.</p>
            </div>
          </div>
        </section>

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
