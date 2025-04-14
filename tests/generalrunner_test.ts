import { environment } from "../config/basicConfig";
import { AssertionError } from "assert";
import assert from 'assert';
//const addContext = require('mochawesome/addContext');

Feature('HomeLab report');

Before(({ I, casaosPage }) => {
    console.log("🚀 Running a new test");
    I.amOnPage(environment.LAN.casaOSpage);

    try {
        I.waitForElement('body', 10);
    } catch (err) {
        console.error('❌ Page did not load properly: <body> not found');
        assert.fail('Critical: <body> element not found — aborting tests');
    }

    casaosPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
});

Scenario('get Downloading list', async ({ I, casaosPage, qbittorrentPage }) => {
    casaosPage.goToQbittorrentContainer();
    qbittorrentPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
    await qbittorrentPage.getQElements();
}).tag('qbittorrent');

Scenario('get Disk health report', async ({ I, casaosPage, scrutinyPage }) => {
    await casaosPage.goToScrutinyContainer();
    await scrutinyPage.getDiskHealthInfo();
}).tag('getDiskHealth');

Scenario('get CPU and RAM Info', async ({ I, casaosPage }) => {
    await casaosPage.getPcInfo();
}).tag('getPcInfo');

Scenario('get Temperature Info', async ({ I, casaosPage }) => {
    await casaosPage.getTemperature();
}).tag('getTemperature');

Scenario('get Storage Info', ({ I, casaosPage }) => {
    casaosPage.getStorageInfo();
}).tag('getStorage');

Scenario('Refresh Movie Library', ({ I, casaosPage, jellyfinPage }) => {
    casaosPage.goToJellyfinContainer();

    jellyfinPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
    jellyfinPage.goToDashboard();
    jellyfinPage.refreshMoviesLibrary();
}).tag('JupdateMovieLibrary');

Scenario('Refresh Series Library', ({ I, casaosPage, jellyfinPage }) => {
    casaosPage.goToJellyfinContainer();

    jellyfinPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
    jellyfinPage.goToDashboard();
    jellyfinPage.refreshSeriesLibrary();
}).tag('JupdateSeriesLibrary');


Scenario('API Jellyfin - Get List of Libraries', async ({ I, jellyfinPage }) => {
    jellyfinPage.getListOfLibraries();
}).tag("jellyfin_api_getListOfLibraries");

Scenario('API Jellyfin - Get Count of Movies', async ({ I, jellyfinPage }) => {
    jellyfinPage.getCountOfMovies();
}).tag("jellyfin_api_count_movies");