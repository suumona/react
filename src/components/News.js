import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  
  static defaultProps = {
    country:'us',
    pageSize:8,
    category:'general'
  }

  static propTypes={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string,
  }
// articles= [
//   {
//     "source": { "id": null, "name": "Slashdot.org" },
//     "author": "msmash",
//     "title": "First Bitcoin ETF Could Be Coming Soon as Court Rules in Favor of Grayscale Over SEC",
//     "description": "The U.S. Court of Appeals for the D.C. Circuit has paved the way for bitcoin exchange-traded funds. From a report: On Tuesday, the court sided with Grayscale in a lawsuit against the Securities and Exchange Commission which had denied the company's applicatio…",
//     "url": "https://slashdot.org/story/23/08/29/1816233/first-bitcoin-etf-could-be-coming-soon-as-court-rules-in-favor-of-grayscale-over-sec",
//     "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
//     "publishedAt": "2023-08-29T19:20:00Z",
//     "content": "On Tuesday, the court sided with Grayscale in a lawsuit against the Securities and Exchange Commission which had denied the company's application to convert the Grayscale Bitcoin Trust to an ETF. The… [+1393 chars]"
//   },
//   {
//     "source": { "id": "google-news", "name": "Google News" },
//     "author": null,
//     "title": "Binance Australia customers seen selling bitcoin at a discount – Reuters.com - CryptoSaurus",
//     "description": "Binance Australia customers seen selling bitcoin at a discount – Reuters.com  CryptoSaurus",
//     "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vY3J5cHRvc2F1cnVzLnRlY2gvYmluYW5jZS1hdXN0cmFsaWEtY3VzdG9tZXJzLXNlZW4tc2VsbGluZy1iaXRjb2luLWF0LWEtZGlzY291bnQtcmV1dGVycy1jb20v0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
//     "urlToImage": null,
//     "publishedAt": "2023-08-14T10:04:42Z",
//     "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Matthew Fox",
//     "title": "Bitcoin plunges more than 10% after Elon Musk's SpaceX reportedly sold the cryptocurrency",
//     "description": "The Wall Street Journal reported that SpaceX wrote down the value of its bitcoin holdings by a total of $373 million and has sold the cryptocurrency.",
//     "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-plunge-elon-musks-spacex-sold-373-million-stake-2023-8",
//     "urlToImage": "https://i.insider.com/64df7ff3b698ac0019dc43a3?width=1200&format=jpeg",
//     "publishedAt": "2023-08-18T15:14:49Z",
//     "content": "AP\r\n<ul><li>Bitcoin plunged about 10% after it was revealed that SpaceX sold the cryptocurrency.</li><li>The Wall Street Journal reported that SpaceX wrote down the value of bitcoin it owns by $373 m… [+1842 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Phil Rosen",
//     "title": "Bitcoin just had its 2nd-straight losing month as crypto sold off in August along with stocks and bonds",
//     "description": "The world's biggest cryptocurrency failed to eke out a gain in August even as crypto investors cheered Grayscale's win over the SEC.",
//     "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-token-august-stocks-bonds-equities-markets-investors-2023-9",
//     "urlToImage": "https://i.insider.com/64f217441e6afd00196a380f?width=1200&format=jpeg",
//     "publishedAt": "2023-09-01T17:42:25Z",
//     "content": "bitcoin cryptocurrency digital currencyEdward Smith/Getty Images\r\n<ul>\n<li>Bitcoin finished August about 10% lower, its second consecutive losing month. </li>\n<li>Crypto was caught up in a tough sell… [+2148 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Zahra Tayeb",
//     "title": "About 200 million people trade bitcoin – but only 6 are billionaires",
//     "description": "The findings from the Henley & Partners' Crypto Wealth Report come as bitcoin struggles to maintain its 2023 rally.",
//     "url": "https://markets.businessinsider.com/news/currencies/crypto-wealth-six-bitcoin-billionaires-globally-2023-9",
//     "urlToImage": "https://i.insider.com/6418595ffa3bcb001907f72c?width=1200&format=jpeg",
//     "publishedAt": "2023-09-07T08:11:22Z",
//     "content": "Bitcoin is up about 55% this year.Getty Images\r\n<ul>\n<li>Of about 200 people globally who trade bitcoin, just six are billionaires, Henley & Partners found.</li>\n<li>Meanwhile, 22 people worldwide ha… [+1504 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Matthew Fox",
//     "title": "Bitcoin could drop to the $20,000 range if a key price level is breached",
//     "description": "\"We remain long-term neutral, but we are wary of negative catalysts that could develop from a bigger retracement,\" Katie Stockton said.",
//     "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-broken-support-20000-range-technical-analysis-2023-8",
//     "urlToImage": "https://i.insider.com/64e62a424c17ff0019bb16bc?width=1200&format=jpeg",
//     "publishedAt": "2023-08-23T16:42:26Z",
//     "content": "Wenjin Chen/Getty Images\r\n<ul><li>Bitcoin is testing a key support level that, if broken, could send the cryptocurrency back to the $20,000 range.</li><li>That's according to Fairlead Strategies' Kat… [+2149 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Zahra Tayeb",
//     "title": "Cathie Wood's ARK and 21Shares plan America's first ether ETF as race to open spot bitcoin funds heats up",
//     "description": "The joint SEC filing comes as the race to launch the first exchange-traded fund backed by bitcoin gathers pace.",
//     "url": "https://markets.businessinsider.com/news/etf/cathie-wood-ark-21shares-file-first-ether-etf-bitcoin-race-2023-9",
//     "urlToImage": "https://i.insider.com/633c32e96427060019ef2f65?width=1200&format=jpeg",
//     "publishedAt": "2023-09-07T10:33:27Z",
//     "content": "Cathie Wood controls ARK.Rebecca Blackwell/AP\r\n<ul>\n<li>Cathie Wood's Ark fund and 21Shares are planning America's first spot ether ETF. </li>\n<li>They filed an SEC application Wednesday as a race to… [+1827 chars]"
//   },
//   {
//     "source": { "id": null, "name": "ReadWrite" },
//     "author": "Alan Draper",
//     "title": "15 Best Bitcoin Casinos for 2023 – Compare Crypto Casino Sites",
//     "description": "Bitcoin casinos offer many advantages that cannot be rivaled by regular gambling sites. This includes huge welcome packages, instant payouts, […]\nThe post 15 Best Bitcoin Casinos for 2023 – Compare Crypto Casino Sites appeared first on ReadWrite.",
//     "url": "https://readwrite.com/cryptocurrency/best-crypto-casinos/",
//     "urlToImage": "https://readwrite.com/wp-content/uploads/2023/08/dice-5012425_1280.jpg",
//     "publishedAt": "2023-08-30T10:28:43Z",
//     "content": "Bitcoin casinos offer many advantages that cannot be rivaled by regular gambling sites. This includes huge welcome packages, instant payouts, 24/7 customer support, and an anonymous gambling experien… [+47670 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Zahra Tayeb",
//     "title": "Bitcoin has plunged almost 20% since Standard Chartered predicted the crypto could surge to $120,000",
//     "description": "The world's largest cryptocurrency has had a weak August, finishing 10% lower for the second month in a row amid a broader sell-off in stocks and bonds.",
//     "url": "https://markets.businessinsider.com/news/currencies/bitcoin-plunges-almost-20-percent-since-standard-chartered-predicted-120000-2023-9",
//     "urlToImage": "https://i.insider.com/63d9258f0a08ae0018a62696?width=1200&format=jpeg",
//     "publishedAt": "2023-09-05T13:38:23Z",
//     "content": "Namthip Muanthongthae/Getty Images\r\n<ul>\n<li>Bitcoin has plunged almost 20% since the second week of July, when Standard Chartered predicted it could surge to $120,000. </li>\n<li>The cryptocurrency h… [+1768 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Phil Rosen",
//     "title": "Bitcoin is headed to $180,000 if regulators approve the first spot ETF in the US, Fundstrat's Tom Lee says",
//     "description": "The macro strategist broke down how regulators' decision to approve a new spot bitcoin ETF could send the token soaring next year.",
//     "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-spot-etf-cryptocurrency-fundstrat-tom-lee-btc-2023-8",
//     "urlToImage": "https://i.insider.com/5fa1884c1df1d500182188f7?width=1200&format=jpeg",
//     "publishedAt": "2023-08-16T18:27:23Z",
//     "content": "Cindy Ord/Getty Images\r\n<ul>\n<li>Fundstrat's Tom Lee said the approval of a new spot bitcoin ETF could send the token soaring in 2024.</li>\n<li>He told CNBC Wednesday that bitcoin could reach $180,00… [+2298 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Slashdot.org" },
//     "author": "BeauHD",
//     "title": "Texas Cryptomining Outfit Earns More From Idling Rigs Than Digging Bitcoin",
//     "description": "Bitcoin mining outfit Riot Platforms earned $31.7 million from Texas power authorities last month for curtailing operations -- far more than the value of the Bitcoin it mined in the same period. The Register reports: In a press release yesterday, Riot said it…",
//     "url": "https://slashdot.org/story/23/09/08/0556225/texas-cryptomining-outfit-earns-more-from-idling-rigs-than-digging-bitcoin",
//     "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
//     "publishedAt": "2023-09-08T10:00:00Z",
//     "content": "In a press release yesterday, Riot said it produced 333 Bitcoin at its mining operations in Rockdale, Texas, which would have been worth just shy of $9 million on August 31. All the cash earned from … [+1055 chars]"
//   },
//   {
//     "source": { "id": null, "name": "ReadWrite" },
//     "author": "Michael Graw",
//     "title": "10 Best Bitcoin Casinos with Instant Withdrawals & Payouts 2023",
//     "description": "A smooth and efficient payment system is the foundation of every successful gaming website. That’s even more important when you’re […]\nThe post 10 Best Bitcoin Casinos with Instant Withdrawals & Payouts 2023 appeared first on ReadWrite.",
//     "url": "https://readwrite.com/cryptocurrency/instant-withdrawal-bitcoin-casinos/",
//     "urlToImage": "https://readwrite.com/wp-content/uploads/2023/08/instant-withdrawal-crypto-casinos.png",
//     "publishedAt": "2023-08-31T14:47:28Z",
//     "content": "A smooth and efficient payment system is the foundation of every successful gaming website. Thats even more important when youre gaming with Bitcoin. Besides security, casino players opt for this cry… [+27569 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Filip De Mott",
//     "title": "FTX taps Mike Novogratz's Galaxy Digital to help sell crypto stash",
//     "description": "FTX is looking for approval in appointing Galaxy Digital to manage its digital token assets, filings from Wednesday show.",
//     "url": "https://markets.businessinsider.com/news/currencies/ftx-mike-novogratz-galaxy-digital-sell-crypto-bitcoin-sbf-ether-2023-8",
//     "urlToImage": "https://i.insider.com/64c8fcf1cf077800196853a9?width=1200&format=jpeg",
//     "publishedAt": "2023-08-24T18:33:49Z",
//     "content": "Mike Novogratz speaks during Bitcoin 2022.Marco Bello / Stringer /Getty Images\r\n<ul>\n<li>FTX is looking for help from Galaxy Digital in managing its digital assets, filings show.</li>\n<li>The investm… [+1879 chars]"
//   },
//   {
//     "source": { "id": null, "name": "ReadWrite" },
//     "author": "Alan Draper",
//     "title": "15 Best Bitcoin Gambling Sites in 2023 – Compare Crypto Gambling Sites",
//     "description": "Crypto gambling sites are becoming increasingly popular. Some of the offered perks include instant deposits and withdrawals, anonymous accounts, and […]\nThe post 15 Best Bitcoin Gambling Sites in 2023 – Compare Crypto Gambling Sites appeared first on ReadWrit…",
//     "url": "https://readwrite.com/cryptocurrency/best-bitcoin-gambling-sites/",
//     "urlToImage": "https://readwrite.com/wp-content/uploads/2023/08/image17-2-900x504.png",
//     "publishedAt": "2023-08-31T09:59:50Z",
//     "content": "Crypto gambling sites are becoming increasingly popular. Some of the offered perks include instant deposits and withdrawals, anonymous accounts, and huge welcome packages for new players. But sifting… [+45916 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Xataka.com" },
//     "author": "Enrique Pérez",
//     "title": "La victoria legal de Grayscale es una alegría para el Bitcoin. Y ya se está notando en el precio",
//     "description": "El mundo cripto aplaude la decisión de los tribunales con Grayscale. La Comisión de Bolsa y Valores de los Estados Unidos (SEC) ha perdido su batalla contra la firma de inversiones Grayscale. En juego estaba si los ETF de Bitcoin eran legales. Y la Corte de D…",
//     "url": "https://www.xataka.com/criptomonedas/victoria-legal-grayscale-alegria-para-bitcoin-se-esta-notando-precio",
//     "urlToImage": "https://i.blogs.es/2c3785/grayscale/840_560.jpeg",
//     "publishedAt": "2023-08-30T09:01:27Z",
//     "content": "El mundo cripto aplaude la decisión de los tribunales con Grayscale. La Comisión de Bolsa y Valores de los Estados Unidos (SEC) ha perdido su batalla contra la firma de inversiones Grayscale. En jueg… [+3031 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Xataka.com" },
//     "author": "Enrique Pérez",
//     "title": "La repentina caída del Bitcoin es un aviso: quedan muchos frentes abiertos antes del esperado \"halving'",
//     "description": "Los últimos meses habían sido un oasis de calma para el Bitcoin, pero esta semana la volatilidad ha vuelto a hacer acto de presencia por todo lo alto. Con una caída de más del 11%, el Bitcoin ha vivido su peor semana desde el colapso de FTX en noviembre del a…",
//     "url": "https://www.xataka.com/criptomonedas/repentina-caida-bitcoin-aviso-quedan-muchos-frentes-abiertos-antes-esperado-halving",
//     "urlToImage": "https://i.blogs.es/289c1d/bitcoin-caida/840_560.jpeg",
//     "publishedAt": "2023-08-21T17:00:32Z",
//     "content": "Los últimos meses habían sido un oasis de calma para el Bitcoin, pero esta semana la volatilidad ha vuelto a hacer acto de presencia por todo lo alto. Con una caída de más del 11%, el Bitcoin ha vivi… [+2695 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Matthew Fox",
//     "title": "US stocks surge after jobs data takes pressure off of interest rates",
//     "description": "A decline in job openings means wage pressures should ease, which would give the Federal Reserve some breathing room in its interest rate plans.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-jolts-job-data-interest-rates-fall-2023-8",
//     "urlToImage": "https://i.insider.com/626ff9cb86fa90001905fcd2?width=1200&format=jpeg",
//     "publishedAt": "2023-08-29T20:16:18Z",
//     "content": "Traders work on the floor at the opening bell of the Dow Industrial Average at the New York Stock Exchange on March 18, 2020 in New York.Bryan R. Smith/AFP/Getty Images\r\n<ul><li>US stocks surged on T… [+2780 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Gizmodo.com" },
//     "author": "Kyle Barr",
//     "title": "Dropbox Is Dropping Unlimited Storage, Blames Crypto Miners",
//     "description": "Dropbox is no longer offering new customers unlimited cloud storage. The company says crypto miners and other dastardly individuals pooled or resold storage space. Now, none of us can have nice things.Read more...",
//     "url": "https://gizmodo.com/dropbox-ends-unlimited-storage-blames-crypto-miners-1850773843",
//     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cdcdab520fde65cd63b7cab335d72f46.jpg",
//     "publishedAt": "2023-08-25T14:10:00Z",
//     "content": "Dropbox is no longer offering new customers unlimited cloud storage. The company says crypto miners and other dastardly individuals pooled or resold storage space. Now, none of us can have nice thing… [+2867 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Slashdot.org" },
//     "author": "msmash",
//     "title": "LSE Group Draws Up Plans for Blockchain-based Digital Assets Business",
//     "description": "The London Stock Exchange Group has drawn up plans for a new digital markets business, saying this will make it the first major exchange to offer extensive trading of traditional financial assets on the blockchain technology best known for powering cryptocurr…",
//     "url": "https://tech.slashdot.org/story/23/09/04/154248/lse-group-draws-up-plans-for-blockchain-based-digital-assets-business",
//     "urlToImage": "https://a.fsdn.com/sd/topics/technology_64.png",
//     "publishedAt": "2023-09-04T15:05:00Z",
//     "content": "Murray Roos, head of capital's markets at the LSE Group, told the Financial Times that the company had been examining the potential for a blockchain-powered trading venue for about a year, and had re… [+743 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Phil Rosen",
//     "title": "US stocks trade mixed as the Dow caps off its worst week since March",
//     "description": "The S&P 500 and Nasdaq Composite both notched their third consecutive week of declines.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-china-fed-deflation-bonds-bankruptcy-2023-8",
//     "urlToImage": "https://i.insider.com/64dfbe81b698ac0019dcc01e?width=1200&format=jpeg",
//     "publishedAt": "2023-08-18T20:07:00Z",
//     "content": "Traders work on the floor of the New York Stock Exchange shortly after the opening bell in New York, U.S., February 6, 2020.Lucas Jackson/Reuters\r\n<ul>\n<li>US stocks finished mixed on Friday, with th… [+2428 chars]"
//   },
//   {
//     "source": { "id": null, "name": "CNET" },
//     "author": "Gael Fashingbauer Cooper",
//     "title": "Verizon Makes It Easier for You to Stop Getting Spam Texts - CNET",
//     "description": "You can now block all of those text messages that appear to come from random email addresses.",
//     "url": "https://www.cnet.com/tech/mobile/verizon-makes-it-easier-for-you-to-stop-getting-spam-texts/",
//     "urlToImage": "https://www.cnet.com/a/img/resize/43683c31fdcf15b86407d3efb1c5b4a4f132f65f/hub/2023/08/29/06d03640-84be-4172-bfb2-4ee91d29fff3/email-to-text-spam-1230x690.jpg?auto=webp&fit=crop&height=675&width=1200",
//     "publishedAt": "2023-08-29T19:27:00Z",
//     "content": "Text messaging can be a helpful and effective way to communicate -- if only your phone wasn't cluttered with creepy spam texts hyping Bitcoin, or trying to romance you into sharing your bank password… [+1299 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "fdemott@insider.com (Filip De Mott)",
//     "title": "US stocks rise as tech sector leads rally amid high hopes for Nvidia earnings",
//     "description": "Stocks looked to break out of the August slump as investors gear up for Nvidia earnings and the Federal Reserve's Jackson Hole summit.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-tech-sectorsrally-nvidia-ai-earnings-2023-8",
//     "urlToImage": "https://i.insider.com/64e4b6e5b698ac0019df0159?width=1200&format=jpeg",
//     "publishedAt": "2023-08-22T13:38:51Z",
//     "content": "US stocks were mostly higher Tuesday, extending gains sparked by expectations around upcoming earnings reports and the Federal Reserve's Jackson Hole meeting.\r\nFollowing a three week sell-off, market… [+1181 chars]"
//   },
//   {
//     "source": { "id": null, "name": "heise online" },
//     "author": "Michael Plura, Daniel AJ Sokolov",
//     "title": "Bitcoin-Fonds: Grayscale erringt Teilsieg gegen SEC",
//     "description": "Grayscale gewinnt vor Gericht und kommt der Umwandlung seines Bitcoin Trust (GBTC) in einen Spot-ETF einen Schritt näher.​",
//     "url": "https://www.heise.de/news/Bitcoin-Fonds-Grayscale-erringt-Teilsieg-gegen-SEC-9288886.html",
//     "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/9/4/0/0/2/shutterstock_1937129161-91f75b37827ffe38.jpg",
//     "publishedAt": "2023-08-30T03:20:00Z",
//     "content": "Die US-Kapitalmarktbehörde SEC (Securities Exchange Commission) hätte den Antrag von Grayscale Investments auf Zulassung eines börsengehandelten Bitcoin-Spot-Fonds genehmigen müssen. Das hat ein US-B… [+3318 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Joseph Wilkins",
//     "title": "SEC's Gary Gensler is waging war against crypto. Here's a look at how his views on the industry have evolved over the years",
//     "description": "The SEC chair has waged all-out war on the digital token sector since his appointment in 2021 – now the battle is getting messier.",
//     "url": "https://markets.businessinsider.com/news/currencies/gary-gensler-sec-cryptocurrencies-bitcoin-ftx-binance-roundup-views-2023-9",
//     "urlToImage": "https://i.insider.com/64f1e0e15114270019af0cca?width=1200&format=jpeg",
//     "publishedAt": "2023-09-03T10:05:01Z",
//     "content": "Tom Williams, Roll Call Inc/Getty Images\r\n<ul>\n<li>The SEC has waged war against the cryptocurrency industry this year with a string of lawsuits.</li>\n<li>At the heart of it is SEC chief Gary Gensler… [+4001 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Matthew Loh",
//     "title": "Crypto has minted tens of thousands of new millionaires, but they're still only 0.02% of everyone who's ever bought digital currency, a new wealth report says",
//     "description": "At least 88,000 people have $1 million or more in cryptocurrency, and most of them got their wealth through crypto trading, per Henley & Partners.",
//     "url": "https://www.businessinsider.com/cryptocurrency-millionaires-new-wealth-digital-currency-henley-partners-2023-9",
//     "urlToImage": "https://i.insider.com/64f991598a7840001961db88?width=1200&format=jpeg",
//     "publishedAt": "2023-09-07T09:15:08Z",
//     "content": "People pass the Chanel store on Bond Street on 14th August 2023 in London, United Kingdom.Mike Kemp/In Pictures via Getty Images\r\n<ul>\n<li>At least 88,200 people have $1 million or more in cryptocurr… [+3033 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Max Adams",
//     "title": "US stocks fall as Fed minutes show officials think hot inflation could still require more rate hikes",
//     "description": "Meeting minutes showed that officials believe policy needs to be aggressive enough to solidly get inflation back down to the 2% target.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-inflation-sp500-dow-economy-2023-8",
//     "urlToImage": "https://i.insider.com/6054c0bea7446d0018c85192?width=1200&format=jpeg",
//     "publishedAt": "2023-08-16T20:05:50Z",
//     "content": "Traders work on the floor of the New York Stock Exchange during morning trading on May 17, 2023 in New York City.Michael M. Santiago/Getty Images\r\n<ul>\n<li>US stocks closed lower on Wednesday after F… [+3696 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Filip De Mott",
//     "title": "US stocks rise to gain for the week as traders assess August jobs report",
//     "description": "Wage growth slowed in August and unemployment climbed, calming investors worried about more aggressive moves by the Fed.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-equities-unemployment-august-jobs-report-inflation-2023-9",
//     "urlToImage": "https://i.insider.com/648359eca460da00192438f5?width=1200&format=jpeg",
//     "publishedAt": "2023-09-01T20:07:02Z",
//     "content": "US Federal Reserve Chair Jerome Powell attends a press conference in Washington, DC, on March 22, 2023.Liu Jie/Xinhua via Getty Images\r\n<ul>\n<li>Stocks were mostly higher on Friday with major indexes… [+2735 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "madams@businessinsider.com (Max Adams)",
//     "title": "US stocks rise after CPI shows inflation came in cooler than expected in July",
//     "description": "Inflation in July was higher than June but still lower than what was expected, with markets still eyeing a Fed pause on rate hikes next month.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-reoort-july-cpi-fed-markets-2023-8",
//     "urlToImage": "https://i.insider.com/64d4d6124dd2b50019c2aef4?width=1200&format=jpeg",
//     "publishedAt": "2023-08-10T13:35:12Z",
//     "content": "US stocks jumped on Thursday as July Consumer Price Index data showed inflation rose last month at a slower rate than economists were predicting. \r\nInflation rose 3.2% on an annualized basis in July.… [+1445 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Kagi.com" },
//     "author": "Vladimir Prelovac",
//     "title": "Kagi now accepts PayPal, EUR and Bitcoin payments",
//     "description": "One of the most frequently requested features on Kagi has been the expansion of our payment methods so that more people can more easilly enjoy the benefits of Kagi Search.",
//     "url": "https://blog.kagi.com/accepting-paypal-bitcoin",
//     "urlToImage": null,
//     "publishedAt": "2023-08-31T23:34:04Z",
//     "content": "One of the most frequently requested features on Kagi has been the expansion of our payment methods so that more people can more easilly enjoy the benefits of Kagi Search.\r\nWe are happy to announce t… [+1588 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Xataka.com" },
//     "author": "Enrique Pérez",
//     "title": "Este misterioso monedero Bitcoin con menos de tres meses ya es el tercero mayor del mundo",
//     "description": "En menos de tres meses, un monedero se ha alzado con el puesto de tercer mayor cuenta de Bitcoin del mundo. Según los datos de BitInfoCharts, ese monedero recibió su primera transacción el día 8 de marzo y ya posee unos 118.000 BTC, que al precio actual es el…",
//     "url": "https://www.xataka.com/criptomonedas/este-misterioso-monedero-bitcoin-tres-meses-tercero-mayor-mundo",
//     "urlToImage": "https://i.blogs.es/39719f/bitcoin-monedero/840_560.jpeg",
//     "publishedAt": "2023-08-22T11:00:44Z",
//     "content": "En menos de tres meses, un monedero se ha alzado con el puesto de tercer mayor cuenta de Bitcoin del mundo. Según los datos de BitInfoCharts, ese monedero recibió su primera transacción el día 8 de m… [+1802 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Xataka.com" },
//     "author": "Javier Marquez",
//     "title": "PayPal quiere convertirse en un rey cripto: ahora tiene un nuevo CEO para conseguirlo",
//     "description": "El mercado de las criptomonedas. Algunos creen que está en ruta a alcanzar la madurez necesaria para convertirse en una alternativa (o complemento) de amplio alcance al sistema financiero tradicional mientras que otros sostienen que se trata de una burbuja or…",
//     "url": "https://www.xataka.com/criptomonedas/paypal-quiere-convertirse-rey-cripto-ahora-tiene-nuevo-ceo-para-conseguirlo",
//     "urlToImage": "https://i.blogs.es/7976ef/paypal-criptomonedas-portada/840_560.jpeg",
//     "publishedAt": "2023-08-15T17:01:37Z",
//     "content": "El mercado de las criptomonedas. Algunos creen que está en ruta a alcanzar la madurez necesaria para convertirse en una alternativa (o complemento) de amplio alcance al sistema financiero tradicional… [+3153 chars]"
//   },
//   {
//     "source": { "id": null, "name": "ReadWrite" },
//     "author": "Alan Draper",
//     "title": "15 Best Cryptocurrency to Invest in August 2023 – Compare Top Crypto to Buy Now",
//     "description": "Are you looking to gain exposure to cryptocurrencies but unsure which projects to invest in?  There are more than 25,000 […]\nThe post 15 Best Cryptocurrency to Invest in August 2023 – Compare Top Crypto to Buy Now appeared first on ReadWrite.",
//     "url": "https://readwrite.com/cryptocurrency/best-crypto-to-buy/",
//     "urlToImage": "https://readwrite.com/wp-content/uploads/2023/06/Crypto-IRA-Provider.jpeg",
//     "publishedAt": "2023-08-30T10:40:08Z",
//     "content": "Are you looking to gain exposure to cryptocurrencies but unsure which projects to invest in? \r\nThere are more than 25,000 cryptos available to purchase and while many offer the potential for massive … [+40568 chars]"
//   },
//   {
//     "source": { "id": null, "name": "ReadWrite" },
//     "author": "Mahabir Dash",
//     "title": "Cryptocurrency and Blockchain Security: Challenges and Solutions",
//     "description": "If we define cryptocurrency, it is a digital asset used for performing transitions digitally. Strong cryptography is employed in it […]\nThe post Cryptocurrency and Blockchain Security: Challenges and Solutions appeared first on ReadWrite.",
//     "url": "https://readwrite.com/cryptocurrency-and-blockchain-security-challenges-and-solutions/",
//     "urlToImage": "https://readwrite.com/wp-content/uploads/2023/06/cryptocurrency-and-blockchain-security.png",
//     "publishedAt": "2023-08-22T20:00:56Z",
//     "content": "If we define cryptocurrency, it is a digital asset used for performing transitions digitally. Strong cryptography is employed in it to safeguard financial transactions, restrict the creation of new u… [+13443 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Vexl.it" },
//     "author": "vexl",
//     "title": "Apple: Using cash is “clearly reckless”",
//     "description": "At the Vexl Foundation, we sponsor projects that promote and enable personal and financial freedoms and self-determination. Bitcoin is the ultimate tool of this mission and we spent countless…",
//     "url": "https://blog.vexl.it/apple-using-cash-is-clearly-reckless-77e2a519a3bc",
//     "urlToImage": "https://miro.medium.com/v2/resize:fit:1200/1*chyL2xBlyiX7dV8jD6Zk4A.png",
//     "publishedAt": "2023-08-30T08:43:33Z",
//     "content": "Apple: Using cash is clearly reckless\r\nAt the Vexl Foundation, we sponsor projects that promote and enable personal and financial freedoms and self-determination. Bitcoin is the ultimate tool of this… [+3590 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Grace Kay",
//     "title": "The wild life of billionaire Twitter co-founder Jack Dorsey, who is known for eccentricities like eating one meal a day, and taking ice baths",
//     "description": "Jack Dorsey is famous for his unusual life of luxury. He's friends with Elon Musk and stepped down as Twitter CEO in 2021 but continues to lead Block.",
//     "url": "https://www.businessinsider.com/jack-dorsey-twitter-creator-billionaire",
//     "urlToImage": "https://i.insider.com/60f93babfc253600181fbfd1?width=1200&format=jpeg",
//     "publishedAt": "2023-08-29T10:08:05Z",
//     "content": "Jack Dorsey has led an interesting life.Joe Raedle/Getty Images\r\n<ul>\n<li>Jack Dorsey cofounded Twitter in 2006 and the company made him a billionaire.</li>\n<li>He stepped down as Twitter CEO in 2021… [+22810 chars]"
//   },
//   {
//     "source": { "id": "bbc-news", "name": "BBC News" },
//     "author": "https://www.facebook.com/bbcnews",
//     "title": "Anonymous Sudan hacks X to put pressure on Elon Musk over Starlink",
//     "description": "Prolific hackers accused of being a front for Russian cyber-operation shares counter evidence with the BBC.",
//     "url": "https://www.bbc.co.uk/news/technology-66668053",
//     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/33D9/production/_130937231_21071135-919a-4cf4-8320-f1cb3c847dda.jpg",
//     "publishedAt": "2023-08-31T08:45:39Z",
//     "content": "A hacking group called Anonymous Sudan took X, formerly known as Twitter, offline in more than a dozen countries on Tuesday morning in an attempt to pressurise Elon Musk into launching his Starlink s… [+4609 chars]"
//   },
//   {
//     "source": { "id": null, "name": "MakeUseOf" },
//     "author": "Shubham Pandey",
//     "title": "What Are the Best Countries For Mining Bitcoin in 2023?",
//     "description": "Bitcoin mining is profitable, but it depends heavily on where you are located.",
//     "url": "https://www.makeuseof.com/what-are-the-best-countries-mining-bitcoin/",
//     "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/btc-mine-1.jpg",
//     "publishedAt": "2023-08-30T10:31:23Z",
//     "content": "Key Takeaways\r\n<ul><li> Bitcoin mining requires significant electricity consumption, making it crucial for miners to balance their expenses and earnings to make a profit. </li><li> The process of min… [+5672 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Beatrice Nolan",
//     "title": "Sergey Brin and Elon Musk's brother, Kimbal, spotted at Burning Man as attendees struggled to deal with swampy, chaotic conditions",
//     "description": "Many figures from the tech industry attended the Nevada event and some were unexpectedly caught up in the weather-related chaos.",
//     "url": "https://www.businessinsider.com/burning-man-sergey-brin-kimbal-musk-spotted-chaos-2023-9",
//     "urlToImage": "https://i.insider.com/64f59f2c781926001910cfd9?width=1200&format=jpeg",
//     "publishedAt": "2023-09-04T10:31:30Z",
//     "content": "Burning Man attendees were instructed to shelter in place and conserve food and water amid intensely muddy conditions on Saturday.DigitalGlobe via Getty Images\r\n<ul><li>Elon Musk's brother, Kimbal Mu… [+2116 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jason Ma",
//     "title": "US stocks trade mixed as rate fears persist amid signs of tight labor market",
//     "description": "Weekly jobless claims unexpectedly declined, and unit labor costs in the second quarter were revised higher.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-nasdaq-jobless-claims-labor-costs-2023-9",
//     "urlToImage": "https://i.insider.com/64fa1d8856f5190019fd3e91?width=1200&format=jpeg",
//     "publishedAt": "2023-09-07T20:06:04Z",
//     "content": "Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks trade mixed on Thursday amid fresh signs the labor market remains tight.</li>\n<li>Weekly jobless claims unexpectedly declined, and second-quarter unit l… [+2055 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Filip De Mott",
//     "title": "US stocks rise but indexes head for weekly losses on rate fears",
//     "description": "Market worries of further interest rate hikes flared back on labor market data, but dovish comments from a Fed official calmed investors.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-weekly-losses-fed-rate-hike-fears-2023-9",
//     "urlToImage": "https://i.insider.com/64fb1ed53d3923001976a4a5?width=1200&format=jpeg",
//     "publishedAt": "2023-09-08T13:37:43Z",
//     "content": "US Federal Reserve Chair Jerome Powell attends a press conference in Washington, DC, on March 22, 2023.Liu Jie/Xinhua via Getty Images\r\n<ul>\n<li>US stocks rose Friday, but all three of the major indi… [+2293 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jennifer Sor",
//     "title": "US stocks rise after 3-week selloff as traders look ahead to key earnings and Powell speech",
//     "description": "Markets are expecting key AI firms to report earnings and Powell to deliver his remarks on the US economy this week.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-wall-street-earnings-powell-jackson-hole-2023-8",
//     "urlToImage": "https://i.insider.com/60f5c6009addaf00191ead2a?width=1200&format=jpeg",
//     "publishedAt": "2023-08-21T13:37:38Z",
//     "content": "A trader works during the Fed rate announcement on the floor at the New York Stock Exchange (NYSE) in New York, U.S., March 20, 2019.Reuters/Brendan McDermid\r\n<ul>\n<li>US stocks eked a small recovery… [+2252 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Phil Rosen",
//     "title": "US stocks climb on fresh signs the labor market is cooling",
//     "description": "Tuesday's JOLTS data and Wednesday's ADP report both pointed to a cooling labor market, a welcome sign for the Federal Reserve.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-labor-jobs-jolts-fed-inflation-2023-8",
//     "urlToImage": "https://i.insider.com/64ef42380ce10a00183b6af9?width=1200&format=jpeg",
//     "publishedAt": "2023-08-30T13:35:11Z",
//     "content": "Michael M. Santiago/Getty Images\r\n<ul>\n<li>US stocks climbed Wednesday on fresh indications that the labor market is cooling.</li>\n<li>The ADP report showed private-sector job growth slowed more than… [+2298 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jennifer Sor",
//     "title": "US stocks head for a 5-day winning streak as investors assess Fed's favorite inflation gauge",
//     "description": "The Fed's favorite inflation gauge rose 4.2% year over year in July, in line with what economists were expecting.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-rally-winning-streak-fed-inflation-pce-2023-8",
//     "urlToImage": "https://i.insider.com/61645cf62f8ca900195f6bd4?width=1200&format=jpeg",
//     "publishedAt": "2023-08-31T13:37:45Z",
//     "content": "Getty Images / Mario Tama\r\n<ul>\n<li>Stocks headed for a five-day winning streak as investors digested the Fed's favorite inflation measure.</li>\n<li>Core PCE inflation rose 4.2% year per year in July… [+2336 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Phil Rosen",
//     "title": "US stocks rise after Nvidia's blowout earnings beat",
//     "description": "The AI chipmaker's stock jumped almost 8% in early trade, pushing the market cap to a new record of $1.25 trillion.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-nvidia-earnings-wall-street-nasdaq-tech-2023-8",
//     "urlToImage": "https://i.insider.com/64e75709a7adf7001906e3ce?width=1200&format=jpeg",
//     "publishedAt": "2023-08-24T13:34:06Z",
//     "content": "Jensen Huang, CEO of NVIDIA, at a 2023 press conference in Taipei.Sam Yeh / Contributor\r\n<ul>\n<li>Stocks rose Thursday after Nvidia's earnings blew Wall Street expectations out of the water.</li>\n<li… [+2169 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Matthew Fox",
//     "title": "US stocks edge lower as investors await slew of economic data",
//     "description": "The August employment report will be released Friday morning, with economists expecting a net gain of 186,000 new jobs.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-china-stimulus-economic-data-cpi-jobs-2023-8",
//     "urlToImage": "https://i.insider.com/5f5b6fa8e6ff30001d4e83fe?width=1200&format=jpeg",
//     "publishedAt": "2023-08-29T13:37:15Z",
//     "content": "Traders work on the floor of the New York Stock Exchange shortly after the opening bell in New York, U.S., March 17, 2020.Lucas Jackson/Reuters\r\n<ul><li>US stocks edged lower on Tuesday as investors … [+2285 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Filip De Mott",
//     "title": "US stocks end higher but Wall Street closes out losing week amid interest rate concerns",
//     "description": "A tighter-than-expected labor market renewed worries that the Federal Reserve may have to raise interest rates again this year.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-wall-street-interest-rate-concerns-federal-2023-9",
//     "urlToImage": "https://i.insider.com/64fb77bd3d392300197733e7?width=1200&format=jpeg",
//     "publishedAt": "2023-09-08T20:08:01Z",
//     "content": "U.S. Federal Reserve Board Chairman Jerome Powell speaks during a news conference following a meeting of the Federal Open Market Committee (FOMC) at the headquarters of the Federal Reserve on June 14… [+2495 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jason Ma",
//     "title": "US stocks tumble as 10-year yield keeps climbing to hit highest since 2007",
//     "description": "Stock market indexes gave up early gains to finish lower, with the Dow notching its third consecutive decline.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-10-year-yield-highest-2007-dow-2023-8",
//     "urlToImage": "https://i.insider.com/64de77aabd98a6001978718e?width=1200&format=jpeg",
//     "publishedAt": "2023-08-17T20:05:00Z",
//     "content": "Angela Weiss/AFP via Getty Images\r\n<ul>\n<li>US stocks tumbled Thursday as the 10-year Treasury yield kept climbing and hit the highest level since 2007.</li>\n<li>Measured on a daily basis, using a si… [+2056 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Filip De Mott",
//     "title": "US stocks rise as jobs data dampens fears of a tighter Fed",
//     "description": "The unemployment rate rose to 3.8% in August, and job gains from prior months were revised lower.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-august-jobs-report-fed-rate-hike-2023-9",
//     "urlToImage": "https://i.insider.com/64f1e2a95114270019af0ea2?width=1200&format=jpeg",
//     "publishedAt": "2023-09-01T13:37:43Z",
//     "content": "Traders work on the floor of the New York Stock Exchange (NYSE) on March 28, 2023 in New York City.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks rose as fears diminished that the Fed would raise int… [+2210 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Max Adams",
//     "title": "US stocks slip as traders wait for Fed meeting minutes",
//     "description": "Markets were eyeing the release of the Fed's July meeting minutes, due out at 2 p.m. ET on Wednesday.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-economy-inflation-china-2023-8",
//     "urlToImage": "https://i.insider.com/64dcc7905e5d5a00195f1749?width=1200&format=jpeg",
//     "publishedAt": "2023-08-16T13:31:33Z",
//     "content": "Michael M. Santiago/Getty Images\r\n<ul>\n<li>US stocks were lower Wednesday morning ahead of the release of the Fed's latest meeting minutes. </li>\n<li>Inflation has been falling but is still above the… [+2483 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Matthew Fox",
//     "title": "US stocks trade mixed as investors look to Fed comments for interest rate clues",
//     "description": "Any further interest rate hikes would be a surprise to investors, based on the CME FedWatch Tool, which is pricing in a rate cut in May 2024.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-nasdaq-fedspeak-interest-rate-clues-2023-9",
//     "urlToImage": "https://i.insider.com/64f729ed1b7ced0019c81efa?width=1200&format=jpeg",
//     "publishedAt": "2023-09-05T13:37:43Z",
//     "content": "Spencer Platt/Getty Images\r\n<ul><li>US stocks were mixed on Tuesday as investors look to comments from Fed officials for clues on interest rates.</li><li>Fed Governor Chris Waller said that recent ec… [+2252 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Max Adams",
//     "title": "Tech leads US stocks lower as Wall Street worries about path of interest rates",
//     "description": "The Nasdaq was down more than 1% as traders assessed the outlook for rates. Jobless claims fell to their lowest level since February.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-tech-stocks-drop-nasdaq-rates-fed-2023-9",
//     "urlToImage": "https://i.insider.com/64f9cffd8a78400019620635?width=1200&format=jpeg",
//     "publishedAt": "2023-09-07T13:35:42Z",
//     "content": "People test products at the Apple flagship store in Xi 'an, Shaanxi province, June 3, 2023. Apple stock fell Thursday on fears of China's crackdown on iPhone use.Cang Hai/CFOTO/Future Publishing/Gett… [+2379 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Phil Rosen",
//     "title": "US stocks fall as Fed official says more rate hikes could still be on the table",
//     "description": "Boston Fed President Susan Collins said policymakers should remain patient, and that \"further tightening could be warranted.\"",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-rate-hike-outlook-susan-collins-2023-9",
//     "urlToImage": "https://i.insider.com/64f87780a35dd100195ef923?width=1200&format=jpeg",
//     "publishedAt": "2023-09-06T13:32:06Z",
//     "content": "Traders work on the floor of the NYSE in New YorkBrendan McDermid/Reuters\r\n<ul>\n<li>US stocks moved lower Wednesday as a Federal Reserve official said more rate hikes are possible</li>\n<li>\"Further t… [+2271 chars]"
//   },
//   {
//     "source": { "id": null, "name": "MakeUseOf" },
//     "author": "Shubham Pandey",
//     "title": "What Are Bitcoin Spot ETFs and Why Won't the SEC Approve Them?",
//     "description": "It's been months of back and forth. What's going on?",
//     "url": "https://www.makeuseof.com/what-are-bitcoin-spot-etfs-why-wont-sec-approve/",
//     "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/btc-hands-computer.jpg",
//     "publishedAt": "2023-08-18T10:15:26Z",
//     "content": "Whether you're a seasoned investor or just starting, there are multiple avenues to invest and diversify your money. One of the portals to do so is via an exchange-traded fund (ETF). ETFs have evolved… [+8135 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Theregister.com" },
//     "author": "Brandon Vigliarolo",
//     "title": "Texas cryptomining outfit earns more from idling rigs than digging Bitcoin",
//     "description": "It's not a broken business model if the subsidies make up for cratering market and flagging demand\nBitcoin mining outfit Riot Platforms earned $31.7 million from Texas power authorities last month for curtailing operations – far more than the value of the Bit…",
//     "url": "https://www.theregister.com/2023/09/07/texas_crypto_mining_outfit_energy/",
//     "urlToImage": "https://regmedia.co.uk/2018/01/09/minewarning.jpg",
//     "publishedAt": "2023-09-07T17:30:08Z",
//     "content": "Bitcoin mining outfit Riot Platforms earned $31.7 million from Texas power authorities last month for curtailing operations far more than the value of the Bitcoin it mined in the same period. \r\nIn a … [+2589 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Golem.de" },
//     "author": "Daniel Ziegener",
//     "title": "Wieder Profitabel: SpaceX-Erfolgsbericht löst Kurseinbruch von Bitcoin aus",
//     "description": "Elon Musks Raumfahrtunternehmen soll seine gesamten Bestände an der Kryptowährung verkauft haben. (Bitcoin, Wirtschaft)",
//     "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fwieder-profitabel-spacex-erfolgsbericht-loest-kurseinbruch-von-bitcoin-aus-2308-176858.html&referer=https%3A%2F%2Ft.co%2Fe28997301d",
//     "urlToImage": null,
//     "publishedAt": "2023-08-18T06:50:02Z",
//     "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
//   },
//   {
//     "source": { "id": null, "name": "MakeUseOf" },
//     "author": "Katie Rees",
//     "title": "The Top 5 Cryptos Used By Cybercriminals on the Dark Web",
//     "description": "Many hackers now deal in cryptocurrency like Bitcoin. But why? And which cryptocurrencies do they actually use?",
//     "url": "https://www.makeuseof.com/top-cryptos-used-by-cybercriminals-dark-web/",
//     "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/08/crypto-criminal-laptops.jpg",
//     "publishedAt": "2023-08-11T15:00:25Z",
//     "content": "While there are plenty of benefits crypto can offer, this industry also has a more illicit side. Cryptocurrency has become popular among cybercriminals looking to launder money and make illegal trans… [+7114 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Makeamericawalkable.com" },
//     "author": null,
//     "title": "Lack of Walkability in the US is destroying mental health",
//     "description": "Tired of unwalkable suburban hellscapes littered with strip malls? Join our community.",
//     "url": "https://makeamericawalkable.com/",
//     "urlToImage": "http://makeamericawalkable.com/cdn/shop/files/Screenshot_2023-03-07_at_12.15.15_PM.png?v=1678209447",
//     "publishedAt": "2023-08-14T17:40:45Z",
//     "content": "Our film aims to shed light on how lobbyists destroyed the walkability of American towns and cities, and how it's affecting our health and happiness.\r\nWe'll be comparing the walkability of Europe to … [+463 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Golem.de" },
//     "author": "Marc Stöckel",
//     "title": "Gefälschte Streams: Kriminelle missbrauchen Spotify für Geldwäsche",
//     "description": "In Schweden sollen kriminelle Banden schon seit Jahren mit Bitcoin gefälschte Spotify-Streams kaufen, um Geldwäsche zu betreiben. (Cybercrime, Streaming)",
//     "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fgefaelschte-streams-kriminelle-missbrauchen-spotify-fuer-geldwaesche-2309-177508.html&referer=https%3A%2F%2Ft.co%2F67a8ec727a",
//     "urlToImage": null,
//     "publishedAt": "2023-09-08T09:15:02Z",
//     "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
//   },
//   {
//     "source": { "id": null, "name": "ReadWrite" },
//     "author": "Kanepepi",
//     "title": "15 Best Altcoins to Invest in 2023",
//     "description": "Seasoned investors are loading up on altcoins – as many are trading at huge discounts from their prior all-time highs. […]\nThe post 15 Best Altcoins to Invest in 2023 appeared first on ReadWrite.",
//     "url": "https://readwrite.com/cryptocurrency/best-altcoins/",
//     "urlToImage": "https://readwrite.com/wp-content/uploads/2023/08/Screenshot-2023-08-28-at-11.39.42.png",
//     "publishedAt": "2023-08-29T14:27:03Z",
//     "content": "Seasoned investors are loading up on altcoins – as many are trading at huge discounts from their prior all-time highs. There are thousands of altcoins to choose from, each offering its own upside pot… [+53183 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Golem.de" },
//     "author": "Marc Stöckel",
//     "title": "Lazarus: FBI spürt Bitcoin-Wallets prominenter Hackergruppe auf",
//     "description": "Das FBI hat sechs Krypto-Wallets aufgespürt, in denen die koreanische Hackergruppe Lazarus einen Teil ihrer millionenschweren Beute hält. (Cybercrime, Security)",
//     "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Flazarus-fbi-spuert-bitcoin-wallets-prominenter-hackergruppe-auf-2308-177042.html&referer=https%3A%2F%2Ft.co%2F68747aaf94",
//     "urlToImage": null,
//     "publishedAt": "2023-08-24T08:45:02Z",
//     "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Golem.de" },
//     "author": "Marc Stöckel",
//     "title": "Auf Kaution: Junger Hacker teilt GTA-6-Leak von einem Hotelzimmer aus",
//     "description": "Als ein 18-jähriger Lapsus$-Hacker im letzten Jahr Gameplay-Inhalte von GTA 6 teilt, hat er sich bereits auf Kaution in einem Hotel befunden. (Cybercrime, Bitcoin)",
//     "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fauf-kaution-junger-hacker-teilt-gta-6-leak-von-einem-hotelzimmer-aus-2308-177051.html&referer=https%3A%2F%2Ft.co%2F0759780c64",
//     "urlToImage": null,
//     "publishedAt": "2023-08-24T11:25:02Z",
//     "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Phil Rosen",
//     "title": "US stocks rise as investors try to shake off August slump ahead of retail data",
//     "description": "Tech led the market higher, with the Nasdaq up more than 1% after last Friday marked its first run of back-to-back weekly losses in 2023.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-traders-banks-wall-street-housing-2023-8",
//     "urlToImage": "https://i.insider.com/64da740f5e5d5a00195db4ef?width=1200&format=jpeg",
//     "publishedAt": "2023-08-14T20:09:22Z",
//     "content": "NYSE\r\n<ul>\n<li>US stocks ended higher as traders try to reinvigorate a rally that's stalled in August.</li>\n<li>The Nasdaq Composite was up over 1% after coming off back-to-back losing weeks for the … [+2872 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Filip De Mott",
//     "title": "US stocks trade mixed after giving up early gains as tech-led rally fizzles",
//     "description": "Investors are bracing for Nvidia's earnings report on Wednesday, while the Federal Reserve's upcoming Jackson Hole symposium may provide some upside.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-nvda-nvidia-tech-rally-federal-reserve2023-8",
//     "urlToImage": "https://i.insider.com/64e510fa912f290019a90b8b?width=1200&format=jpeg",
//     "publishedAt": "2023-08-22T20:16:07Z",
//     "content": "Jen-Hsun Huang, CEO of Nvidia Corp., gives a keynote presentation during the GPU Technology Conference in San Jose, California. Huang later unveiled the Titan X CPU operating with a GeForce GTX Titan… [+2897 chars]"
//   },
//   {
//     "source": { "id": "vice-news", "name": "Vice News" },
//     "author": "Matthew Gault, Jason Koebler",
//     "title": "CYBER: The Jason Koebler Exit Interview, Part Two",
//     "description": "This week on the show we’re saying goodbye to Motherboard’s longtime editor-in-chief, Jason Koebler.",
//     "url": "https://www.vice.com/en/article/7kxwmq/cyber-the-jason-koebler-exit-interview-part-two",
//     "urlToImage": "https://video-images.vice.com/articles/64e8396612db225893c4b5c4/lede/1692940667875-motherboardjason.png?image-resize-opts=Y3JvcD0xeHc6MC45OTk2MDkzNzV4aDtjZW50ZXIsY2VudGVyJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
//     "publishedAt": "2023-08-28T13:00:00Z",
//     "content": "It’s part two of our bittersweet episode of Cyber where we bid farewell to Motherboard editor-in-chief Jason Koebler. This week we do a deep dive into the Motherboard lore. The stories that broke us,… [+311 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jennifer Sor",
//     "title": "US stocks falls as markets assess downbeat China data",
//     "description": "China's economic slump continues, weighing on prospects for global growth. The US 10-year Treasury jumped further above 4%.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-china-economy-news-growth-outlook-fitch-2023-8",
//     "urlToImage": "https://i.insider.com/543f7c31ecad04fd6a2a820a?width=1200&format=jpeg",
//     "publishedAt": "2023-08-15T13:50:56Z",
//     "content": "A trader watches the screen at his terminal on the floor of the New York Stock Exchange in New York October 15, 2014. REUTERS/Lucas Jackson\r\n<ul>\n<li>US stocks fell in early morning trading as invest… [+2720 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jennifer Sor",
//     "title": "Nasdaq breaks 4-day losing streak as tech shares rise ahead of key earnings",
//     "description": "Investors have their eye on Nvidia, which is expected to release its quarterly earnings report this Wednesday.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-tech-rally-nasdaq-nvidia-stock-earnings-2023-8",
//     "urlToImage": "https://i.insider.com/5ec6a04f988ee34d862e7c37?width=1200&format=jpeg",
//     "publishedAt": "2023-08-21T20:05:41Z",
//     "content": "Goldman Sach's gives its list of high Sharpe ratio stocks.Andrew Kelly/Reuters\r\n<ul>\n<li>US stocks finished mixed on Monday as traders looked ahead to key earnings reports this week.</li>\n<li>The Nas… [+2508 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jennifer Sor",
//     "title": "US stocks close higher as traders brush off Powell's warnings of more potential rate hikes",
//     "description": "\"It is the Fed's job to bring inflation down to our 2% goal, and we will do so,\" Powell said at the Jackson Hole symposium Friday morning.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-powell-fed-jackson-hole-inflation-rates-2023-8",
//     "urlToImage": "https://i.insider.com/64e8d97b52bc2d001992470f?width=1200&format=jpeg",
//     "publishedAt": "2023-08-25T20:07:16Z",
//     "content": "Fed chief Powell reiterated that inflation was still above the Fed's 2% target.AP Photo/Susan Walsh, File\r\n<ul>\n<li>US stocks rose Friday as markets brushed off Powell's warnings of more possible Fed… [+3195 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jennifer Sor",
//     "title": "US stocks trade mixed to close out tough August as traders brace for jobs report",
//     "description": "Stocks had a rocky ride in August, shedding nearly a quarter of the year's gains by mid-month before paring some losses.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-selloff-fed-inflation-jobs-report-labor-market-2023-8",
//     "urlToImage": "https://i.insider.com/62bdd9de7a6bd200198d0dc8?width=1200&format=jpeg",
//     "publishedAt": "2023-08-31T20:06:04Z",
//     "content": "Getty Images / Drew Angerer\r\n<ul>\n<li>US stocks traded mixed on Thursday and ended August in the red.</li>\n<li>The S&P 500 closed off the month 1% lower, while the Dow and Nasdaq shed 2%.</li>\n<li>In… [+3175 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Max Adams",
//     "title": "US stocks whipsaw but close higher as Wall Street mulls Fed outlook after July CPI",
//     "description": "Stocks initially rallied hard after CPI data was published Thursday morning, but had given up most of those gains by the afternoon.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-july-cpi-inflation-dow-sp500-economy-2023-8",
//     "urlToImage": "https://i.insider.com/64d53e737e9149001aa4462c?width=1200&format=jpeg",
//     "publishedAt": "2023-08-10T20:03:47Z",
//     "content": "Photo by Michael Nagle/Xinhua via Getty Images)\r\n<ul>\n<li>US stocks closed higher Thursday but gave up their biggest gains as traders assess July CPI data. </li>\n<li>Inflation last month came in at 3… [+2565 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Matthew Fox",
//     "title": "US stocks finish the week mostly lower as July inflation data comes in mixed",
//     "description": "Wholesale prices for July edged up more than anticipated, muddling the outlook for when the Fed may declare victory over inflation.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-mixed-inflation-data-sends-stocks-lower-2023-8",
//     "urlToImage": "https://i.insider.com/5f732c1e0ab50d00184aced9?width=1200&format=jpeg",
//     "publishedAt": "2023-08-11T20:03:55Z",
//     "content": "Lucas Jackson/Reuters\r\n<ul><li>US stocks finished the week mostly lower as investors digest mixed inflation data.</li><li>While the July CPI report came in lower than expected, the producer price ind… [+2639 chars]"
//   },
//   {
//     "source": { "id": "business-insider", "name": "Business Insider" },
//     "author": "Jennifer Sor",
//     "title": "US Stocks edge higher as traders wait for Powell's Jackson Hole speech",
//     "description": "Stocks plunged after last year's Jackson Hole Symposium, where Powell warned markets of \"more pain\" ahead as the Fed would stay hawkish on inflation.",
//     "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-powell-jackson-hole-speech-fed-inflation-2023-08",
//     "urlToImage": "https://i.insider.com/64e61921912f290019a98806?width=1200&format=jpeg",
//     "publishedAt": "2023-08-25T13:40:33Z",
//     "content": "Federal Reserve Governor Jerome Powell attends the Federal Reserve Bank of Kansas City's annual Jackson Hole Economic Policy Symposium in Jackson Hole, WyomingThomson Reuters\r\n<ul>\n<li>US stocks rose… [+2999 chars]"
//   },
//   {
//     "source": { "id": null, "name": "ReadWrite" },
//     "author": "Alan Draper",
//     "title": "New Cryptocurrency Launches to Invest in for August 2023",
//     "description": "The crypto market is currently in an exciting place, with signs that the industry is finally emerging from the crypto […]\nThe post New Cryptocurrency Launches to Invest in for August 2023 appeared first on ReadWrite.",
//     "url": "https://readwrite.com/cryptocurrency/new-crypto-to-buy/",
//     "urlToImage": "https://readwrite.com/wp-content/uploads/2023/08/Sonik-Presale.png",
//     "publishedAt": "2023-08-26T07:29:53Z",
//     "content": "The crypto market is currently in an exciting place, with signs that the industry is finally emerging from the crypto winter and heading towards another bull market. New tokens are being launched alm… [+44205 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Theregister.com" },
//     "author": "Jessica Lyons Hardcastle",
//     "title": "North Korea may be itching to sell $40m of purloined Bitcoin",
//     "description": "Those weapons programs aren't going to fund themselves\nLazarus Group, the infamous cryptocurrency thieves backed by North Korea, may try to liquidate a stash of stolen Bitcoin worth more than $40 million, according to the FBI.…",
//     "url": "https://www.theregister.com/2023/08/23/fbi_dprk_cyber_crooks/",
//     "urlToImage": "https://regmedia.co.uk/2022/05/06/shutterstock_bitcoin_north_korea.jpg",
//     "publishedAt": "2023-08-23T18:45:06Z",
//     "content": "Lazarus Group, the infamous cryptocurrency thieves backed by North Korea, may try to liquidate a stash of stolen Bitcoin worth more than $40 million, according to the FBI.\r\nIn an alert issued on Tues… [+2647 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Small Business Trends" },
//     "author": "Michael Guta",
//     "title": "How to Make Money on Podcasts: 14 Successful Techniques",
//     "description": "Learn how to make money on Cash App through promotions, referrals, selling goods/services, and investing in Bitcoin or stocks.",
//     "url": "https://smallbiztrends.com/2023/08/how-to-make-money-podcasting.html",
//     "urlToImage": "https://media.smallbiztrends.com/2023/08/how-to-make-money-on-podcasts.png",
//     "publishedAt": "2023-08-28T13:00:08Z",
//     "content": "The growth of podcasting and its popularity over the past decade has been nothing short of amazing, with millions of listeners tuning in to their favorite shows every day. Thanks to this passionate a… [+26497 chars]"
//   },
//   {
//     "source": { "id": "die-zeit", "name": "Die Zeit" },
//     "author": "ZEIT ONLINE: News -",
//     "title": "Kryptowährung: Bitcoin fällt auf tiefsten Stand seit zwei Monaten",
//     "description": "",
//     "url": "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fnews%2F2023-08%2F18%2Fbitcoin-faellt-auf-tiefsten-stand-seit-zwei-monaten",
//     "urlToImage": null,
//     "publishedAt": "2023-08-18T09:22:48Z",
//     "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+821 chars]"
//   },
//   {
//     "source": { "id": "die-zeit", "name": "Die Zeit" },
//     "author": "ZEIT ONLINE: News -",
//     "title": "Finanzen: Vor 10 Jahren: Deutschland adelt Bitcoin als «privates Geld»",
//     "description": "",
//     "url": "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fnews%2F2023-08%2F15%2Fvor-10-jahren-deutschland-adelt-bitcoin-als-privates-geld",
//     "urlToImage": null,
//     "publishedAt": "2023-08-15T04:49:54Z",
//     "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+821 chars]"
//   },
//   {
//     "source": { "id": "abc-news", "name": "ABC News" },
//     "author": "The Associated Press",
//     "title": "Cash App and Square down? Payment services 'steadily' recovering after outages",
//     "description": "Thousands Cash App and Square customers were unable to access their accounts or send money Thursday and early Friday due to system outages impacting both payment services",
//     "url": "https://abcnews.go.com/Business/wireStory/cash-app-square-payment-services-steadily-recovering-after-103027089",
//     "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//     "publishedAt": "2023-09-08T14:05:44Z",
//     "content": "NEW YORK -- Thousands Cash App and Square customers were unable to access their accounts or send money Thursday and early Friday due to system outages impacting both payment services.\r\nOutage reports… [+1534 chars]"
//   },
//   {
//     "source": { "id": null, "name": "New Statesman" },
//     "author": "Megan Gibson",
//     "title": "“The biggest Ponzi of all time”: why Ben McKenzie became a crypto critic",
//     "description": "The secret behind most conspiracy-driven movements is that there is often a glimmer of truth at the centre of their beliefs. Anti-vaxxers, for instance, can point to the past behaviour of large pharma",
//     "url": "https://www.newstatesman.com/the-weekend-interview/2023/09/the-biggest-ponzi-of-all-time-why-ben-mckenzie-became-a-crypto-critic",
//     "urlToImage": "https://dl6pgk4f88hky.cloudfront.net/2023/09/01/McKenzieweb-800x418.jpg?1693787316",
//     "publishedAt": "2023-09-04T00:45:49Z",
//     "content": "The secret behind most conspiracy-driven movements is that there is often a glimmer of truth at the centre of their beliefs. Anti-vaxxers, for instance, can point to the past behaviour of large pharm… [+6777 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Techmeme.com" },
//     "author": null,
//     "title": "Bankrupt cryptocurrency lender Genesis sues its parent DCG, seeking to recover ~$620M in cash and bitcoin in outstanding loans despite ongoing settlement talks (Jonathan Randles/Bloomberg)",
//     "description": "Jonathan Randles / Bloomberg:\nBankrupt cryptocurrency lender Genesis sues its parent DCG, seeking to recover ~$620M in cash and bitcoin in outstanding loans despite ongoing settlement talks  —  - Suits seek to recover about $620 million in cash and Bitcoin  —…",
//     "url": "https://www.techmeme.com/230907/p14",
//     "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iXQqv46VzliU/v1/1200x800.jpg",
//     "publishedAt": "2023-09-07T10:45:01Z",
//     "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 6:45 AM ET, September 7, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo … [+71 chars]"
//   },
//   {
//     "source": { "id": "hacker-news", "name": "Hacker News" },
//     "author": null,
//     "title": "Ask HN: Why hasn't the cloud killed the mainframe?",
//     "description": "Comments",
//     "url": "https://news.ycombinator.com/item?id=37333837",
//     "urlToImage": null,
//     "publishedAt": "2023-08-31T07:52:42Z",
//     "content": "First of all, I find I kinda funny that you call banking, retail and insurance \"legacy industries\".I would rather be without Netflix and Google, than banking and food ... but each to their own..\r\nWhi… [+1011 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Hivemind.vc" },
//     "author": null,
//     "title": "Nostr: A Decentralized Messaging Protocol",
//     "description": "Why I’m Betting Big on Nostr Nostr – the simple, decentralized messaging protocol with the potential to replace (and even integrate with) centralized apps like Twitter and WhatsApp – is going mainstream. And fast.  I’ve never seen anything quite like it. From…",
//     "url": "https://hivemind.vc/nostr/",
//     "urlToImage": "https://hivemind.vc/wp-content/uploads/2023/01/nostrich-with-light.png?w=1024",
//     "publishedAt": "2023-09-01T15:00:30Z",
//     "content": "Image generated with DALLE via micropay.ai\r\nNostr – the simple, decentralized messaging protocol with the potential to replace (and even integrate with) centralized apps like Twitter and WhatsApp – i… [+17956 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Small Business Trends" },
//     "author": "Michael Guta",
//     "title": "How to Make Money on Cash App: 14 Strategies for Free Money",
//     "description": "Learn how to make money on Cash App through promotions, referrals, selling goods/services, as well as by investing in Bitcoin or stocks.",
//     "url": "https://smallbiztrends.com/2023/08/how-to-make-money-on-cash-app-14-strategies-for-free-money.html",
//     "urlToImage": "https://media.smallbiztrends.com/2023/08/how-to-make-money-on-cash-app-13.png",
//     "publishedAt": "2023-08-29T13:00:53Z",
//     "content": "Cash App has exploded in popularity in recent years as a digital wallet and payment app. Its simplicity and flexibility make it a favorite way for millions of users to send and receive money instantl… [+22475 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Wwwhatsnew.com" },
//     "author": "Juan Diego Polo",
//     "title": "Predicción del precio del bitcoin usando geometría fractal",
//     "description": "¿Es Bitcoin un activo predecible o simplemente un enigma financiero que se mueve al ritmo del caos? Un estudio reciente se sumerge en las profundidades de esta criptomoneda utilizando la geometría fractal, una rama de las matemáticas que podría ofrecer respue…",
//     "url": "https://wwwhatsnew.com/2023/09/05/prediccion-del-precio-del-bitcoin-usando-geometria-fractal/",
//     "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2021/04/captura16-2.jpg",
//     "publishedAt": "2023-09-05T13:00:06Z",
//     "content": "¿Es Bitcoin un activo predecible o simplemente un enigma financiero que se mueve al ritmo del caos? Un estudio reciente se sumerge en las profundidades de esta criptomoneda utilizando la geometría fr… [+4375 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Theregister.com" },
//     "author": "Jessica Lyons Hardcastle",
//     "title": "Guy who ran Bitcoins4Less tells Feds he had less than zero laundering protections",
//     "description": "What? Yogurt Monster isn't really a legitimate customer's name?!\nA California man has admitted he failed to bake anti-money laundering protections into his cryptocurrency exchange, thus allowing scammers and drug traffickers to launder millions of dollars thr…",
//     "url": "https://www.theregister.com/2023/09/06/bitcoin_exchange_guilty/",
//     "urlToImage": "https://regmedia.co.uk/2023/09/06/bitcoin_shutterstock.jpg",
//     "publishedAt": "2023-09-06T20:42:08Z",
//     "content": "A California man has admitted he failed to bake anti-money laundering protections into his cryptocurrency exchange, thus allowing scammers and drug traffickers to launder millions of dollars through … [+4526 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Xataka.com" },
//     "author": "Javier Marquez",
//     "title": "Binance acaba de perder a Mastercard como socio estratégico: las tarjetas emitidas serán pronto meros trozos de plástico",
//     "description": "“El futuro está aquí”. Con estas palabras celebraba Binance el inicio de una prometedora asociación con Mastercard para acortar la brecha entre las criptomonedas y los pagos en una amplia variedad de países. Un año después, todo parece indicar que estamos vol…",
//     "url": "https://www.xataka.com/criptomonedas/binance-acaba-perder-a-mastercard-como-socio-estrategico-tarjetas-emitidas-seran-pronto-meros-trozos-plastico",
//     "urlToImage": "https://i.blogs.es/bc0c13/binance-card-2/840_560.jpeg",
//     "publishedAt": "2023-08-24T20:00:06Z",
//     "content": "El futuro está aquí. Con estas palabras celebraba Binance el inicio de una prometedora asociación con Mastercard para acortar la brecha entre las criptomonedas y los pagos en una amplia variedad de p… [+2545 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Xataka.com" },
//     "author": "Enrique Pérez",
//     "title": "Un ciberataque paraliza el Ayuntamiento de Sevilla. Piden un rescate de cinco millones de euros para recuperarlo",
//     "description": "El Ayuntamiento de Sevilla se ha visto afectado por un ciberataque. Los \"servicios se han interrumpido como medida de precaución hasta conocer el alcance concreto\", explica el propio Ayuntamiento en breve comunicado en redes sociales. \n<!-- BREAK 1 -->\nHan pa…",
//     "url": "https://www.xataka.com/seguridad/ciberataque-paraliza-ayuntamiento-sevilla-piden-rescate-cinco-millones-euros-para-recuperarlo",
//     "urlToImage": "https://i.blogs.es/b00115/ciberataque-ayuntamiento-sevilla/840_560.jpeg",
//     "publishedAt": "2023-09-06T13:32:00Z",
//     "content": "El Ayuntamiento de Sevilla se ha visto afectado por un ciberataque. Los \"servicios se han interrumpido como medida de precaución hasta conocer el alcance concreto\", explica el propio Ayuntamiento en … [+2033 chars]"
//   },
//   {
//     "source": { "id": null, "name": "heise online" },
//     "author": "Tilman Wittenhorst, mit Material der dpa",
//     "title": "Prozess gegen Ex-FTX-Chef: Bankman-Fried aus Hausarrest in Haft verlegt",
//     "description": "Der FTX-Gründer Sam Bankman-Fried soll versucht haben, Zeugen einzuschüchtern. Deswegen hat ein Gericht seine Kaution widerrufen und er muss in Haft.",
//     "url": "https://www.heise.de/news/Prozess-gegen-Ex-FTX-Chef-Bankman-Fried-aus-Hausarrest-in-Haft-verlegt-9242475.html",
//     "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/8/5/2/5/1/shutterstock_2226341239-425329f7f071ecfa.jpg",
//     "publishedAt": "2023-08-12T10:53:00Z",
//     "content": "Der Gründer der zusammengebrochenen Kryptowährungsbörse FTX, Sam Bankman-Fried, muss seinen Hausarrest beenden und stattdessen ins Gefängnis. US-Bezirksrichter Richter Lewis Kaplan nahm am Freitag (O… [+1418 chars]"
//   },
//   {
//     "source": { "id": null, "name": "tagesschau.de" },
//     "author": "Jenny Barke, ARD-Studio Mexiko-Stadt",
//     "title": "Wie der Bitcoin als Landeswährung in El Salvador funktioniert",
//     "description": "El Salvador ist das kleinste Land Mittelamerikas, und es ist alles andere als reich. Trotzdem - oder gerade deshalb - führte der Präsident 2021 den Bitcoin als Landeswährung ein. Die bisherige Bilanz ist ernüchternd. Von Jenny Barke.",
//     "url": "https://www.tagesschau.de/wirtschaft/weltwirtschaft/bitcoin-el-salvador-zwei-jahre-bilanz-100.html",
//     "urlToImage": "https://images.tagesschau.de/image/a0c0d01d-7431-41df-8469-ca3ea584f890/AAABif5Ro3A/AAABibBxqrQ/16x9-1280/bitcoin-el-salvador-106.jpg",
//     "publishedAt": "2023-08-18T06:12:27Z",
//     "content": "Stand: 18.08.2023 08:12 Uhr\r\nEl Salvador ist das kleinste Land Mittelamerikas, und es ist alles andere als reich. Trotzdem - oder gerade deshalb - führte der Präsident 2021 den Bitcoin als Landeswähr… [+3128 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Matt-rickard.com" },
//     "author": "Matt Rickard",
//     "title": "De Facto Ports",
//     "description": "Most applications communicate over a TCP or UDP port. Ports 0-1023 are usually privileged and require administrator or superuser access to bind a network socket to an IP with the corresponding port. But anything over 1024 is up for grabs. IANA (Internet Assig…",
//     "url": "https://matt-rickard.com/de-facto-ports",
//     "urlToImage": "https://matt-rickard.com/api/og?title=De%20Facto%20Ports",
//     "publishedAt": "2023-08-20T13:45:50Z",
//     "content": "Most applications communicate over a TCP or UDP port. Ports 0-1023 are usually privileged and require administrator or superuser access to bind a network socket to an IP with the corresponding port. … [+1823 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "2023 Land Rover Defender Trophy Edition",
//     "description": "Land Rover is releasing its second run of Trophy Edition Defenders for 2023, this time based on the Defender 130 P400 SE. The Defender Trophy Edition is powered by a 3.0-liter turbo-6 with a mild-hybrid system for making 395 horsepower,...",
//     "url": "https://uncrate.com/2023-land-rover-defender-trophy-edition/",
//     "urlToImage": "https://uncrate.com/p/2023/08/defender-trophy-1.jpg",
//     "publishedAt": "2023-08-11T17:50:42Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "Artisans de Geneve x Adam Levine Neon Rolex Daytona",
//     "description": "The Swiss watch atelier unveils the Artisans de Geneve x Adam Levine Neon Rolex Daytona - a masterful reinterpretation of the iconic 116508 gold Daytona for the Maroon 5 frontman. Crafted with meticulous attention to detail, this horological marvel boasts...",
//     "url": "https://uncrate.com/artisans-de-geneve-x-adam-levine-neon-rolex-daytona/",
//     "urlToImage": "https://uncrate.com/p/2023/08/artisans-de-geneve-adam-levine-neon-rolex.jpg",
//     "publishedAt": "2023-08-11T16:35:18Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "Prince's Versace Medusa Watch",
//     "description": "Avid watch collector and founder of Connoisseur of Time Paul Hoyt is partnering with eBay to sell seven of his most cherished items. Of the pieces in the collection is Prince's Versace Medusa Watch. The vintage is presented with a...",
//     "url": "https://uncrate.com/princes-versace-medusa-watch/",
//     "urlToImage": "https://uncrate.com/p/2023/08/princes-versace-medusa-watch.jpg",
//     "publishedAt": "2023-08-11T22:22:56Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "Girard-Perregaux Laureato Absolute 8Tech Watch",
//     "description": "Girard-Perregaux adds to the Laureato Absolute family with the 8Tech. The stealthy chronograph features a 44mm case and an octagonal bezel. It gets its marble-like finish from a unique technique constructed from thin layers of carbon fibers combined with ligh…",
//     "url": "https://uncrate.com/girard-perregaux-laureato-absolute-8tech-watch/",
//     "urlToImage": "https://uncrate.com/p/2023/08/gp-laureato-absolute-8tech.jpg",
//     "publishedAt": "2023-08-29T22:50:58Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "Garb: Concrete Jungle",
//     "description": "Off-White Leather Sneakers / $475. Bottega Veneta Leather Backpack / $3,700. Norse Projects Cap / $89. Garrett Leight Brooks X Sunglasses / $420. Sunspel T-Shirt / $62. Concrete Jungle Book / $49. Imogene + Willie Military Trousers / $195....",
//     "url": "https://uncrate.com/garb-concrete-jungle/",
//     "urlToImage": "https://uncrate.com/p/2023/08/garb-concrete-jungle.jpg",
//     "publishedAt": "2023-08-23T20:54:00Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "AG1 Daily Nutrition",
//     "description": "The easiest way to get your daily nutrition on the go is AG1. It's a Foundational Nutrition supplement that supports your body's universal needs, like nutrient replenishment, gut optimization, stress management, and immune support. By giving your body nutrien…",
//     "url": "https://uncrate.com/ag1-daily-nutrition/",
//     "urlToImage": "https://uncrate.com/p/2023/02/ag1-package-pour-1.jpg",
//     "publishedAt": "2023-08-23T18:11:04Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "Ferrari Endurance",
//     "description": "Few automakers can match the cachet of Ferrari in endurance racing. Despite 50 years having passed since Maranello's last top-tier works entry at Le Mans, the allure of the French track is irresistible, and Ferrari will be returning to the...",
//     "url": "https://uncrate.com/ferrari-endurance/",
//     "urlToImage": "https://uncrate.com/p/2023/08/ferrari-endurance-1.jpg",
//     "publishedAt": "2023-08-24T16:00:00Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "1970 Range Rover Velar Prototype",
//     "description": "Before the Range Rover became a luxury icon, it was a utilitarian SUV. Two doors and a vinyl hose-out interior were as nice as it got - along with a huge dose of off-road capability. This Davos white Range Rover...",
//     "url": "https://uncrate.com/1970-range-rover-velar-prototype/",
//     "urlToImage": "https://uncrate.com/p/2023/08/range-rover-velar-1.jpg",
//     "publishedAt": "2023-08-21T23:35:06Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "Everyday Carry: Zebra",
//     "description": "Jacquemus Leather Cardholder / $165. Saint Laurent Rive Droite Lighter / $20. Tank Must De Cartier Watch / $3,050. Jacques Marie Mage + Jeff Goldblum Zebra Print Sunglasses / $950....",
//     "url": "https://uncrate.com/everyday-carry-zebra/",
//     "urlToImage": "https://uncrate.com/p/2023/08/edc-zebra.jpg",
//     "publishedAt": "2023-08-31T20:00:00Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "Centrostiledesign Flame Yacht Concept",
//     "description": "Fire and water -- that's the design influence behind Centrostiledesign's Flame superyacht concept. Measuring 230 feet, the Flame takes its name literally, with an outline from above mimicking the shape of a flame. The sharp, angular lines come to a...",
//     "url": "https://uncrate.com/centrostiledesign-flame-yacht-concept/",
//     "urlToImage": "https://uncrate.com/p/2023/09/flame-superyacht-1.jpg",
//     "publishedAt": "2023-09-07T23:20:54Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   },
//   {
//     "source": { "id": null, "name": "Uncrate.com" },
//     "author": "Uncrate",
//     "title": "2006 Fleer Buyback Michael Jordan Autographed Rookie Card",
//     "description": "Michael Jordan's 1986 Fleer rookie is arguably the most famous basketball card in existence. For its 20th anniversary, new company-owner Upper Deck acquired 23 well-preserved examples, had MJ sign them, and put redemption cards into the 06-07 Fleer set. With.…",
//     "url": "https://uncrate.com/2006-fleer-buyback-michael-jordan-autographed-rookie-card/",
//     "urlToImage": "https://uncrate.com/p/2023/08/jordan-fleer-buyback.jpg",
//     "publishedAt": "2023-08-11T15:00:01Z",
//     "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
//   }
// ]

  constructor(props){
    super(props);
    this.state= {
    //  articles: this.articles,
     articles: [],
     loading:true,
     page:1,
     totalResults:0
    }
    document.title = `NewsApp- ${this.capitalizaFirstLetter(this.props.category)}`;
  }

 
  async componentDidMount(){
    this.props.setProgress(10);
    // let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=37d0d25c22304fd0a0a26f293c57f9ea&page=1&pageSize=${this.props.pageSize}`
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults, 
      loading:false})
      this.props.setProgress(100);
  }

  handlePrevious=async ()=>{

    // let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=37d0d25c22304fd0a0a26f293c57f9ea&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
   
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
    page: this.state.page-1,
    articles: parsedData.articles,
    loading:false
  })
  }
  
  handleNext=async ()=>{
if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    // let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=37d0d25c22304fd0a0a26f293c57f9ea&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+ 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
    page: this.state.page+1,
    articles: parsedData.articles,
    loading:false
  })
  }}

  capitalizaFirstLetter=(string)=>{
return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetchMoreData = async() => {
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    //// eslint-disable-next-line 
    this.setState({page: this.state.page+1})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: this.state.articles.concat(parsedData.articles), 
      totalResults:parsedData.totalResults, 
      loading:false})
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>Top headlines from {this.capitalizaFirstLetter(this.props.category)}</h1>
       { this.state.loading && <Spinner/>}
        {/* <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
   <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,60):""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
            </div>
          })}
        </div> */}
 <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
<div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
   <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,60):""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
   {/* <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
    <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
   </div> */}
      </>
    )
  }
}

export default News
