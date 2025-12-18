import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Footer from "./Footer";
import Navi from "./Navi";
import SidebarMenu from "./Sides";
import ScrollProgressBar from './ScrollProgressBar';


export default function MoneyTransferComparison({ darkMode, toggleMode }) {
  const navigate = useNavigate();
  const [fromAmount, setFromAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
    { code: 'PHP', name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭' },
    { code: 'MXN', name: 'Mexican Peso', symbol: 'Mex$', flag: '🇲🇽' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿' },
    { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭' },
    { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', flag: '🇻🇳' },
    { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' },
  ];

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  useEffect(() => {
    const fetchRate = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await response.json();
        const rate = data.rates[toCurrency];
        setExchangeRate(rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        try {
          const response = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`
          );
          const data = await response.json();
          const rate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];
          setExchangeRate(rate);
        } catch (fallbackError) {
          console.error('Fallback API also failed:', fallbackError);
          setExchangeRate(null);
        }
      }
      setLoading(false);
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  const amount = parseFloat(fromAmount) || 0;
  const googleRate = exchangeRate;
  const receivedAmount = googleRate ? amount * googleRate : 0;

  const fromCurrencyData = currencies.find(c => c.code === fromCurrency);
  const toCurrencyData = currencies.find(c => c.code === toCurrency);

  const transferServices = [
    {
      name: 'Remitly',
      type: 'Express',
      fee: amount * 0.0199,
      exchangeMarkup: 0.015,
      deliveryTime: '15-30 minutes',
      rating: 4.6,
      features: ['Bank deposit', 'Cash pickup', 'Mobile money'],
      ctaText: 'Send Money Now',
      className: 'remitly',
      url: 'https://www.remitly.com'
    },
    {
      name: 'Remitly',
      type: 'Economy',
      fee: amount * 0.0099,
      exchangeMarkup: 0.01,
      deliveryTime: '3-5 business days',
      rating: 4.6,
      features: ['Bank deposit', 'Lower fees'],
      ctaText: 'Send Money Now',
      className: 'remitly',
      url: 'https://www.remitly.com'
    },
    {
      name: 'Western Union',
      type: 'Online',
      fee: amount < 500 ? 5.99 : amount * 0.015,
      exchangeMarkup: 0.035,
      deliveryTime: 'Minutes to days',
      rating: 4.1,
      features: ['Global network', 'Cash pickup', '500K+ locations'],
      ctaText: 'Send Money',
      className: 'western-union',
      url: 'https://www.westernunion.com'
    },
    {
      name: 'MoneyGram',
      type: 'Express',
      fee: amount * 0.016,
      exchangeMarkup: 0.03,
      deliveryTime: '10 minutes to 3 days',
      rating: 4.0,
      features: ['Cash pickup', 'Bank deposit', '350K+ locations'],
      ctaText: 'Send Now',
      className: 'moneygram',
      url: 'https://www.moneygram.com'
    },
    {
      name: 'Ria Money Transfer',
      type: 'Bank deposit',
      fee: amount * 0.012,
      exchangeMarkup: 0.025,
      deliveryTime: '1-3 business days',
      rating: 4.3,
      features: ['Bank deposit', 'Cash pickup', 'Mobile wallet'],
      ctaText: 'Transfer Money',
      className: 'ria',
      url: 'https://www.riamoneytransfer.com'
    },
    {
      name: 'Wise',
      type: 'Bank transfer',
      fee: amount * 0.0065 + 0.5,
      exchangeMarkup: 0.003,
      deliveryTime: '1-2 business days',
      rating: 4.3,
      features: ['Real mid-market rate', 'Low fees', 'Transparent'],
      ctaText: 'Send Money',
      className: 'wise',
      url: 'https://wise.com'
    },
    {
      name: 'Xoom',
      type: 'PayPal Service',
      fee: amount < 1000 ? 4.99 : amount * 0.01,
      exchangeMarkup: 0.02,
      deliveryTime: 'Minutes to 3 days',
      rating: 4.2,
      features: ['PayPal integration', 'Fast transfer'],
      ctaText: 'Send with Xoom',
      className: 'xoom',
      url: 'https://www.xoom.com'
    },
  ];

  const calculateReceived = (service) => {
    if (!googleRate) return 0;
    const rateWithMarkup = googleRate * (1 - service.exchangeMarkup);
    const amountAfterFee = amount - service.fee;
    return amountAfterFee * rateWithMarkup;
  };

  return (
    <>
    <ScrollProgressBar darkMode={darkMode} />
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu />

      <div className="money-transfer-page">
        {/* Hero Section - Similar to Resources Page */}
        <div className="transfer-hero-section">
          <h1 className="transfer-hero-title">Money Comparison Tool</h1>
          <p className="transfer-hero-intro">Compare real-time exchange rates and fees across multiple providers to find the best deal for your international money transfers</p>
        </div>

        {/* Content Section */}
        <div className="transfer-content-section">
          <div className="converter-card">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center' }}>
              <div className="currency-section">
                <label className="currency-label">You Send</label>
                <div className="currency-input-group">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="amount-input"
                    placeholder="1000"
                    min="0"
                    max="9999999999"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="currency-select"
                  >
                    {currencies.map((curr) => (
                      <option key={curr.code} value={curr.code}>
                        {curr.flag} {curr.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="currency-info-box">
                  <span className="currency-flag">{fromCurrencyData?.flag}</span>
                  <div className="currency-details">
                    <span className="currency-code">{fromCurrencyData?.code}</span>
                    <span className="currency-name"> - {fromCurrencyData?.name}</span>
                    <span className="currency-symbol">({fromCurrencyData?.symbol})</span>
                  </div>
                </div>
              </div>

              <div className="swap-container">
                <button onClick={swapCurrencies} className="swap-button" title="Swap currencies">
                  <span className="swap-icon">⇄</span>
                </button>
              </div>

              <div className="currency-section">
                <label className="currency-label">Recipient Gets</label>
                <div className="currency-input-group">
                  <div className="amount-input amount-display" style={{ background: '#fff7ed', color: '#F47600', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {loading ? '...' : receivedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="currency-select"
                  >
                    {currencies.map((curr) => (
                      <option key={curr.code} value={curr.code}>
                        {curr.flag} {curr.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="currency-info-box">
                  <span className="currency-flag">{toCurrencyData?.flag}</span>
                  <div className="currency-details">
                    <span className="currency-code">{toCurrencyData?.code}</span>
                    <span className="currency-name"> - {toCurrencyData?.name}</span>
                    <span className="currency-symbol">({toCurrencyData?.symbol})</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rate-display">
              <div className="rate-header">
                <div className="rate-title-section">
                  <h3>Live Exchange Rate</h3>
                  <p className="rate-value">
                    1 {fromCurrency} = {loading ? '...' : googleRate ? googleRate.toFixed(4) : 'N/A'} {toCurrency}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>
                    Updated in real-time from European Central Bank
                  </p>
                </div>
              </div>

              <div className="rate-note">
                <p>
                  <strong>Note:</strong> This is the mid-market rate (real exchange rate). Transfer services add their own fees and exchange rate markups to this base rate.
                </p>
              </div>
            </div>
          </div>

          <div className="services-section">
            <div className="services-header">
              <h2>Money Transfer Services</h2>
            </div>

            <div className="services-grid">
              {transferServices.map((service, idx) => {
                const received = calculateReceived(service);
                const totalCost = googleRate ? amount - (received / googleRate) : 0;
                const savingsVsWorst = Math.max(
                  ...transferServices.map((s) => googleRate ? amount - calculateReceived(s) / googleRate : 0)
                ) - totalCost;

                return (
                  <div key={idx} className={`service-card ${service.className}`}>
                    <div className="service-card-content">
                      <div className="service-info">
                        <div className="service-header">
                          <div style={{ marginBottom: '1rem' }}>
                            <div className={`service-name-badge ${service.className}`}>
                              {service.name}
                            </div>
                            {service.type && (
                              <span className="service-type">{service.type}</span>
                            )}
                          </div>
                          <div className="service-rating">
                            <span className="service-rating-star">★</span>
                            <span className="service-rating-value">{service.rating}</span>
                          </div>
                        </div>

                        <div className="service-features">
                          {service.features.map((feature, i) => (
                            <span key={i} className="feature-tag">
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="service-delivery">
                          <span><strong>Delivery:</strong> {service.deliveryTime}</span>
                        </div>
                      </div>

                      <div className="cost-breakdown">
                        <h4>Cost Breakdown</h4>
                        <div className="cost-items">
                          <div className="cost-item">
                            <span className="cost-label">Transfer Fee:</span>
                            <span className="cost-value">
                              {fromCurrencyData?.symbol}{service.fee.toFixed(2)}
                            </span>
                          </div>
                          <div className="cost-item">
                            <span className="cost-label">Rate Markup:</span>
                            <span className="cost-value markup">
                              {(service.exchangeMarkup * 100).toFixed(2)}%
                            </span>
                          </div>
                          <div className="cost-item cost-total">
                            <span className="cost-label">Total Cost:</span>
                            <span className="cost-value">
                              {fromCurrencyData?.symbol}{totalCost.toFixed(2)}
                            </span>
                          </div>
                          {savingsVsWorst > 1 && (
                            <div className="savings-badge">
                              Save {fromCurrencyData?.symbol}{savingsVsWorst.toFixed(2)} vs highest
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="recipient-section">
                        <div className="recipient-label">Recipient Receives</div>
                        <div className="recipient-amount">
                          {toCurrencyData?.symbol}{received.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <div className="recipient-currency">{toCurrencyData?.code}</div>
                        <div className="recipient-rate">
                          Rate: 1 {fromCurrency} = {googleRate ? (googleRate * (1 - service.exchangeMarkup)).toFixed(4) : 'N/A'} {toCurrency}
                        </div>

                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`service-cta-button ${service.className}`}
                        >
                          {service.ctaText}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="disclaimer-section">
            <p>
              <strong>Important Disclaimer:</strong> Exchange rates are fetched in real-time from the European Central Bank via Frankfurter API. Service fees and markups are estimates based on typical transactions and may vary.
              Actual costs depend on payment method, delivery speed, destination country, and current promotions.
              Always verify final costs on the provider's official website before completing your transfer.
              This tool is for comparison purposes only.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}