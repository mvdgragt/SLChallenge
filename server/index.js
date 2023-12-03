const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const API_KEY = "eaaa8c18c46044559501af89ec532e5c";

app.use(cors());

app.get('/api', async (req, res) => {
    try {
        const top10Lines = await getTop10BusLines();
        res.json(top10Lines);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Kunde inte hämta data om buslinjer eller hållplatser");
    }
});

const getTop10BusLines = async () => {
    try {
        const busLinesData = await fetchBusLinesData();
        const busStopsData = await fetchBusStopsData();
        const stopsCountPerLine = countStopsPerLine(busLinesData);
        const top10Lines = getTopLinesSortedByStops(stopsCountPerLine, busLinesData, busStopsData);
        return top10Lines;
    } catch (err) {
        console.error(err.message);
        throw err; // Re-throw the error so it can be caught in the calling function
    }
};

const fetchBusLinesData = async () => {
    try {
        const response = await axios.get(`https://api.sl.se/api2/LineData.json?model=jour&key=${API_KEY}&DefaultTransportModeCode=BUS`);
        return response.data.ResponseData.Result;
    } catch (err) { 
        console.error(err.message);
    }   
};

const fetchBusStopsData = async () => {
    try {
        const response = await axios.get(`https://api.sl.se/api2/LineData.json?model=stop&key=${API_KEY}&DefaultTransportModeCode=BUS`);
        return response.data.ResponseData.Result;
    } catch (err) { 
        console.error(err.message);
    }   
};

const countStopsPerLine = (busLinesData) => {
    try {
        const stopsCountPerLine = {};

        busLinesData.forEach(line => {
            const lineNumber = line.LineNumber;
            stopsCountPerLine[lineNumber] = stopsCountPerLine[lineNumber] ? stopsCountPerLine[lineNumber] + 1 : 1;
        });
    
        return stopsCountPerLine;
    
    } catch (err) {
        console.error(err.message);
    }
};

const getTopLinesSortedByStops = (stopsCountPerLine, busLinesData, busStopsData) => {
    try {
        const linesWithStops = Object.keys(stopsCountPerLine).map(lineNumber => ({
            lineNumber,
            stops: stopsCountPerLine[lineNumber],
            stopPointNames: getStopPointNamesForLine(lineNumber, busLinesData, busStopsData)
        }));
        linesWithStops.sort((a, b) => b.stops - a.stops);
    
        return linesWithStops.slice(0, 10);
    } catch (err) {
        console.error(err.message); 
    }
};
const getStopPointNamesForLine = (lineNumber, busLinesData, busStopsData) => {
    try {
        const lineStops = busLinesData
            .filter(busLine => busLine.LineNumber === lineNumber)
            .map(busLine => busLine.JourneyPatternPointNumber);

        const stopPointNames = busStopsData
            .filter(stop => lineStops.includes(stop.StopPointNumber))
            .map(stop => stop.StopPointName);

        // Remove duplicates from stopPointNames
        const uniqueStopPointNames = Array.from(new Set(stopPointNames));

        return uniqueStopPointNames.length > 0 ? uniqueStopPointNames : ['Unknown'];
    } catch (err) {
        console.error(err.message);
        return ['Unknown'];
    }
};

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
