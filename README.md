# SBAB Challenge: Top 10 Bus Lines in Stockholm

## Project Overview

This project is a small-scale fullstack application designed to identify which bus lines in Stockholm have the most bus stops along their routes and display the top ten choices. The application provides details such as the bus line's name and the names of all associated bus stops. Data used by this application is fetched from [Trafiklab's](https://www.trafiklab.se/) open API.

The frontend of the application is developed with React.js, JavaScript, and TypeScript, while the backend uses Node.js and Express.js.

## System Requirements

- Node
- API key for Trafiklab's open API ["SL Hållplatser och Linjer 2"](https://www.trafiklab.se/api/sl-hallplatser-och-linjer-2)

## Installation Instructions

To install the project, follow these steps:

1. Install dependencies:
   - In the client directory, run `npm install`
   - In the server directory, run `npm install`

2. Obtain an API key:
   - Follow the instructions on Trafiklab's website [here](https://www.trafiklab.se/docs/using-trafiklab/getting-api-keys/).
   - Create an account, create a new project, and select the API "SL Hållplatser och Linjer 2".
   - Insert your API key into the `API_KEY` variable in `server/index.js`.

## Getting Started

From the root directory:

1. Go to the client directory and run: `npm run client`
2. Go to the server directory and run: `npm run server`

Visit [http://localhost:3000/api](http://localhost:3000/api) in your browser to view the application.

---

# SBAB Challenge: Topp 10 Busslinjer i Stockholm

## Projektöversikt

Detta projekt är en kompakt fullstack-applikation som är utformad för att identifiera vilka busslinjer i Stockholm som har flest hållplatser längs sina rutter och visa de topp tio valen. Applikationen ger detaljer såsom busslinjens namn och namnen på alla tillhörande hållplatser. Data som används av denna applikation hämtas från [Trafiklabs](https://www.trafiklab.se/) öppna API.

Frontenden av applikationen är utvecklad med React.js, JavaScript och TypeScript, medan backend använder Node.js och Express.js.

## Systemkrav

- Node
- API-nyckel för Trafiklabs öppna API ["SL Hållplatser och Linjer 2"](https://www.trafiklab.se/api/sl-hallplatser-och-linjer-2)

## Installationsinstruktioner

För att installera projektet, följ dessa steg:

1. Installera beroenden:
   - I klientmappen, kör `npm install`
   - I servermappen, kör `npm install`

2. Skaffa en API-nyckel:
   - Följ instruktionerna på Trafiklabs webbplats [här](https://www.trafiklab.se/docs/using-trafiklab/getting-api-keys/).
   - Skapa ett konto, skapa ett nytt projekt och välj API:et "SL Hållplatser och Linjer 2".
   - Lägg in din API-nyckel i variabeln `API_KEY` i `server/index.js`.

## Kom igång

Från rotkatalogen:

1. Gå till klientmappen och kör: `npm run client`
2. Gå till servermappen och kör: `npm run server`

Besök [http://localhost:3000/api](http://localhost:3000/api) i din webbläsare för att se applikationen.

## Testning

För testning används [Jest](https://jestjs.io/) och [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Jest fungerar som testkörare och React Testing Library är ett testbibliotek byggt för React som använder Jest som sin testkörare.

För att köra tester i frontend, navigera till klientmappen och kör följande kommando, vilket startar Jest i bevakningsläge:
```bash
npm test
