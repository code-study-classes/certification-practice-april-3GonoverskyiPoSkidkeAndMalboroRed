import { doesNotThrow } from 'assert';
import { parse } from 'path';

// task 1

// доп. функции
const normalizeData = (content) => content.trim().split('\n');
// получаем рейтинг всех приложений из AppStore и PlayMarket
const getDataRaiting = (str) => {
  const [name, company, plmar, appStore, ...rest] = str.split(';');
  const rating = parseFloat(plmar, 10) + parseFloat(appStore, 10);
  return [name, company, rating];
};
// Получаем количество скачиваний в Индии
const getCountDownload = (str) => parseInt(str.split(';')[6], 10);
// Получаем кол. скачиваний  из Австралии
const getRaitingAus = (str) => parseInt(str.split(';').at(5), 10);

// сортировка по количеству от боль к меньшему
const compare = (a, b) => {
  if (a[0] > b[0]) {
    return -1;
  } if (a[0] === b[0]) {
    return 0;
  }
  return 1;
};

// Основные функции
const getTopMessenger = (data) => {
  // step 1: Обработка рейтинга приложений из AppStore и PlayMarket
  const step1 = data.reduce((acc, app) => {
    const [name, company, rating] = getDataRaiting(app);
    const [nameAcc, compnyAcc, ratingAcc] = acc;
    return rating > ratingAcc ? getDataRaiting(app) : acc;
  }, ['', '', 0]);
  return step1;
};
// step 2: Австрия)
const getAustraliaByName = (data) => data.map((app) => {
  const name = app.split(';')[0];
  const Download = getRaitingAus(app);
  return [Download, name];
});

const getAlphabeticalSorting = (data) => {
  const AustraliaByName = getAustraliaByName(data).sort(compare).slice(0, 3);
  const onlyName = AustraliaByName.map((app) => app[1]);
  return onlyName.sort();
};

// step 3

const getAvgDownloads = (downloads) => {
  const AvgDownloads = downloads.reduce((summ, app) => {
    summ + parseInt(app, 10);
  }, 0) / downloads.leght;
  return AvgDownloads;
};

const getAvgDownloads1 = (data) => data.map((map) => {
  const [name,,,, ...downloads] = app.split(';');
  const AvgDownloads = getAvgDownloads(downloads);
  return [AvgDownloads, name];
});

// вывод результатов
const tableParsing = (content) => {
  const [, ...tableParsed] = normalizeData(content);
  // step 1 result
  const [name, company] = getTopMessenger(tableParsed);
  console.log(`General top massenger: ${name}, Owner: ${company}`);
  // step 2 result
  const IndiaCount = tableParsed.map((item) => getCountDownload(item));
  console.log(`Download count: Max count: ${Math.max(...IndiaCount)}, Min count: ${Math.min(...IndiaCount)}`);
  // step 3 result
  const topAustralia = getAlphabeticalSorting(tableParsed);
  console.log(`Top 3 Australia ${topAustralia.join(', ')}`);
  // step 4 result
  const topGeneral = getAvgDownloads1(tableParsed).sort(compare)
    .console.log();
};

// task 2
const candidateAssessment = (content) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
