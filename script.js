// script.js

'use strict';

const apiKey = 'demo';
const symbol = 'IBM';
const interval = '5min';
const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Data is successfully parsed as a JSON object
    console.log(data);
    // Display the latest price
    const latestPrice = data['Time Series (5min)'][Object.keys(data['Time Series (5min)'])[0]]['4. close'];
    const latestPriceContainer = document.getElementById('latest-price');
    latestPriceContainer.textContent = `Latest Price: $${latestPrice}`;
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
