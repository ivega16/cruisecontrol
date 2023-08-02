document.addEventListener("DOMContentLoaded", () => {
    const exchangeRatesEndpoint = "https://api.exchangerate-api.com/v4/latest/USD";
    const exchangeSection = document.getElementById("exchange-rates");

    async function fetchExchangeRates() {
        try {
            const response = await fetch(exchangeRatesEndpoint);
            if (!response.ok) {
                throw new Error("Failed to fetch exchange rates.");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    function showExchangeRates(data) {
        exchangeSection.innerHTML = "";

        if (!data) {
            exchangeSection.innerText = "Failed to fetch exchange rates. Please try again later.";
            return;
        }

        const { base, rates } = data;
        const currencies = Object.keys(rates);
        currencies.forEach((currency) => {
            const rate = rates[currency].toFixed(2);
            const countryName = getCountryName(currency);
            const rateElement = document.createElement("li");
            rateElement.innerText = `1 ${base} = ${rate} ${countryName ? countryName : currency}`;
            exchangeSection.appendChild(rateElement);
        });
    }

    async function updateExchangeRates() {
        exchangeSection.innerHTML = '<div class="loader"></div>'; 

        const data = await fetchExchangeRates();
        showExchangeRates(data);
    }

    function getCountryName(currencyCode) {
        const countryNames = {
            USD: "USD: United States",
            EUR: "EUR: Eurozone",
            GBP: "GBP: United Kingdom",
            JPY: "JPY: Japan",
            AUD: "AUD: Australia",
            CAD: "CAD: Canada",
            CHF: "CHF: Switzerland",
            CNY: "CNY: China",
            SEK: "SEK: Sweden",
            NZD: "NZD: New Zealand",
            INR: "INR: India",
            AED: "AED: United Arab Emirates",
            BRL: "BRL: Brazil",
            SGD: "SGD: Singapore",
            HKD: "HKD: Hong Kong",
            MXN: "MXN: Mexico",
            ZAR: "ZAR: South Africa",
            SAR: "SAR: Saudi Arabia",
            KRW: "KRW: South Korea",
            RUB: "RUB: Russia",
            IDR: "IDR: Indonesia",
            TRY: "TRY: Turkey",
            THB: "THB: Thailand",
            PLN: "PLN: Poland",
            ILS: "ILS: Israel",
            NOK: "NOK: Norway",
            DKK: "DKK: Denmark",
            MYR: "MYR: Malaysia",
            HUF: "HUF: Hungary",
            CZK: "CZK: Czech Republic",
            PHP: "PHP: Philippines",
            BGN: "BGN: Bulgaria",
            BRL: "BRL: Brazil",
            CLP: "CLP: Chile",
            CNY: "CNY: China",
            COP: "COP: Colombia",
            HRK: "HRK: Croatia",
            HUF: "HUF: Hungary",
            IDR: "IDR: Indonesia",
            ILS: "ILS: Israel",
            INR: "INR: India",
            ISK: "ISK: Iceland",
            JPY: "JPY: Japan",
            KRW: "KRW: South Korea",
            MXN: "MXN: Mexico",
            MYR: "MYR: Malaysia",
            NOK: "NOK: Norway",
            NZD: "NZD: New Zealand",
            PHP: "PHP: Philippines",
            PLN: "PLN: Poland",
            RON: "RON: Romania",
            RUB: "RUB: Russia",
            SEK: "SEK: Sweden",
            SGD: "SGD: Singapore",
            THB: "THB: Thailand",
            TRY: "TRY: Turkey",
            ZAR: "ZAR: South Africa",
           
        };

        return countryNames[currencyCode];
    }

    updateExchangeRates(); 

  
    setInterval(updateExchangeRates, 10000);
});
