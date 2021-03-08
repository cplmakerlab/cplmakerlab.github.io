---
title: 'Intro to Bitcoin, Blockchains, and Cryptocurrency'
categories:
  - Coding
tags:
  - Cryptography
  - Cypherpunk
  - Coding
example_image:
difficulty:
time_required: 7 minute read
file_attachment_path:
---

In this short introductory guide, we'll talk briefly about what Bitcoin is and how it works. We'll also talk about blockchain technology and other cryptocurrencies.

### What is Bitcoin?

> "Bitcoin is pretty much like cash for the Internet."
>
>
> \- [https://bitcoin.org/en/faq](https://bitcoin.org/en/faq){: target="_blank" rel="noopener"}

Bitcoin is a peer-to-peer digital cash network and payment system created in 2009 by an anonymous person (or group) named Satoshi Nakomoto. One of the founding principles of bitcoin is that it is decentralized, meaning there is no central authority that controls the network. This is often contrasted with traditional paper money such as the US dollar which is minted and issued by a central bank (The Federal Reserve).

The underlying technology that powers bitcoin is called the "blockchain." This is a shared public ledger that records every payment or transaction. When one person sends bitcoin to another person, that exchange is verified and permanently recorded to the blockchain using encrypted digital signatures. Bitcoins are issued to "miners" in exchange for working to verify a transaction, a reward system that keeps the network going. Unlike traditional currency, the total number of bitcoins that can ever be created is restricted to 21 million. This restriction makes it scarce and drives comparisons to other scarce commodities like gold. This has attracted wild price speculation.

If you are interested in learning the technical details of how bitcoin works, a popular Youtube video ["But how does bitcoin actually work?"](https://www.youtube.com/watch?v=bBC-nXj3Ng4){: target="_blank" rel="noopener"} provides a great overview, and [Khan Academy offers a free Bitcoin course](https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-what-is-it){: target="_blank" rel="noopener"}. You can also read the [original bitcoin whitepaper written by Satoshi Nakamoto](https://bitcoin.org/en/bitcoin-paper){: target="_blank" rel="noopener"}, which outlines *exactly* how the network works.

### ![](/uploads/intro-to-bitcoin-blockchains-and-cryptocurrency/btc-2.png){: width="100" height="100"}

### Why was Bitcoin created?

The idea of digital currencies can be traced back to the cypherpunk activist movement of the late 1980s. Cypherpunk is derived from the word "cipher" and "cyberpunk". Cypherpunks believed that privacy-enhancing technologies such as cryptography could help individuals bypass censorship and authoritarianism to make society more free. Several of the people involved in the cypherpunk movement would later become important contributors and supporters of the Bitcoin project.

Bitcoin itself was launched on January 3, 2009 shortly after the 2008 financial crash. A message was embedded in the first block of the bitcoin blockchain: *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"* referring to a headline published in The Times newspaper. This message is often interpreted as a criticism of government response to the global financial crisis.

### What is Ethereum?

A few years after bitcoin launched, a community of software developers saw potential in the underlying technology of the blockchain. They wondered if blockchain technology could be expanded to support more use cases beyond a single digital currency, such as local currencies and smart contracts. However, early experiments proved that this was quite difficult to do with the bitcoin blockchain.

In 2015 a programmer named Vitalik Buterin launched a platform called Ethereum, which he described as [A Next-Generation Smart Contract and Decentralized Application Platform.](https://ethereum.org/en/whitepaper/){: target="_blank" rel="noopener"} This platform was a [programming language](https://soliditylang.org/){: target="_blank" rel="noopener"} combined with a new blockchain, making it possible for developers to build custom applications not controlled by a central authority.&nbsp;

With Ethereum, anyone can create their own currency, as well as create smart contracts and build decentralized applications. Developers build on the network by creating or using tokens. There are different token standards that can be used, the two most common are ERC-20 and ERC-721 tokens.

**[ERC-20 token](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/){: target="_blank" rel="noopener"}\:** This is the most popular token standard. Many (but not all) of the alternative digital currencies (a.k.a. altcoins) are built on the Ethereum blockchain using ERC-20 tokens.

**[ERC-721 tokens (NFT or non-fungible tokens)](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/){: target="_blank" rel="noopener"}\:** These tokens are used to uniquely identify and track the ownership of digital assets, akin to DIY [DRM](https://en.wikipedia.org/wiki/Digital_rights_management){: target="_blank" rel="noopener"}. Normally it is impossible to verify that a digital asset is an original because digital copies are exact duplicates. NFTs change this by making it possible to uniquely identify and track which digital asset is the original. Because of this, some digital artists have been able to use NFTs to sell original digital art on [CryptoArt marketplaces](https://mymodernmet.com/crypto-art-blockchain/){: target="_blank" rel="noopener"} for [millions of dollars](https://www.nytimes.com/2021/02/24/arts/design/christies-beeple-auction-blockchain-art.html){: target="_blank" rel="noopener"}. The idea that a piece of digital artwork is an original creates artificial scarcity and drives up the price, even though it costs nothing to own a digital copy. Outside of the art collector world, NFTs can be used to track the sale and ownership of digital assets purchased in video games.

### What is cryptocurrency?

Cryptocurrency is a portmanteau of "cryptography" and "currency". Cryptocurrency has become a general catch-all term to describe digital currencies that rely on encrypted signatures for authenticity. There are two categories of cryptocurrency: coins and tokens.

A **coin** refers to a cryptocurrency that has its own blockchain network. For example, Bitcoin (BTC) runs on its own blockchain, while Ether (ETH) runs on the Ethereum blockchain.

A **token** refers to a cryptocurrency that runs on top of an existing blockchain. Most tokens are built using the ERC-20 token standard and rely on the Ethereum blockchain. Confusingly, tokens are also sometimes called altcoins. In short, if a cryptocurrency has its own blockchain it is a coin – if not then it is a token.

### How do you get cryptocurrency?

You can obtain cryptocurrencies either by mining them, buying them, or having someone send them to you. Bitcoin mining today requires vast amounts of computational power and electricity, making it an impractical option for most people. Cryptocurrency exchanges allow one to use traditional currency to purchase cryptocurrency. Lastly, you can obtain cryptocurrency by creating a cryptocurrency "wallet" and then having someone send cryptocurrency to that wallet.

*"[Not your keys, not your coins](https://www.youtube.com/watch?v=dnC5mFaIW3Q){: target="_blank" rel="noopener"}"* is a phrase used to warn people about the dangers of leaving cryptocurrency on an exchange instead of transferring it to your own wallet. When you leave or store cryptocurrency on an exchange, you don't actually have access to the keys that control the underlying digital asset. If the exchange is hacked and the keys are stolen, you are simply out of luck as now the thief can transfer the coins directly to their own wallet. On the other hand, having your own wallet and being your own bank comes with its own headaches and risks too as you must figure out a way to keep the wallet and keys safe and protected.

### Risks & Criticisms

#### **Pump-and-dump schemes**

The cryptocurrency market is unregulated, volatile, and highly speculative. Consumers should be wary of pump-and-dump schemes, a form of price manipulation where the price of a cryptocurrency is artificially inflated ("pumped") through positive social media posts by those who bought at a low price, only to be sold ("dumped") once the price reaches a new all time high, causing a sudden crash. People who bought during the meteoric rise may lose all of their investment.

[Kenan Institute of Private Enterprise. "Should Cryptocurrency “Pump-and-Dump” Schemes be Regulated?" December 2020.](https://kenaninstitute.unc.edu/kenan-insight/should-cryptocurrency-pump-and-dump-schemes-be-regulated/){: target="_blank" rel="noopener"}

#### **Environmental impact**

> "Depending on the energy source, researchers estimate that crypto-mining can produce 3-15 million tons of global carbon emissions."
>
>
> [Samford, Heidi, Lovely-Frances Domingo. "The Political Geography and Environmental Impacts of Cryptocurrency Mining." July 10, 2019.](https://jsis.washington.edu/news/the-political-geography-and-environmental-impacts-of-cryptocurrency-mining/){: target="_blank" rel="noopener"}

> "It turns out my release of 6 CryptoArt works consumed in 10 seconds more electricity than the entire studio over the past 2 years."
>
>
> [Mercier, Joane. "The Problem of CryptoArt." February 17, 2021.](https://joanielemercier.com/the-problem-of-cryptoart/https://joanielemercier.com/the-problem-of-cryptoart/){: target="_blank" rel="noopener"}

### Summary

In summary, there are three ways you can think about digital currencies:

* digital cash (or digital gold)
* a technology (blockchain and tokens)
* an ideology (decentralized finance)

Hopefully this guide has helped introduce you to the main concepts behind bitcoin, blockchains and cryptocurrencies. Further resources and links can be found below.

---

#### Price charts

* [Coinmarketcap](https://coinmarketcap.com/){: target="_blank" rel="noopener"}
* [Coinbase Charts](https://pro.coinbase.com/trade/BTC-USD){: target="_blank" rel="noopener"}

#### Exchanges

* [Coinbase](http://coinbase.com/){: target="_blank" rel="noopener"}
* [Kraken](https://www.kraken.com/){: target="_blank" rel="noopener"}
* [Binance](https://www.binance.us){: target="_blank" rel="noopener"}

#### Wallets

* Software wallets
  * [Electrum](https://electrum.org){: target="_blank" rel="noopener"}
* Hardware wallets
  * [Trezor](https://trezor.io/){: target="_blank" rel="noopener"}
  * [Ledger](https://www.ledger.com/){: target="_blank" rel="noopener"}

#### Mining

* [CoinWarz](https://www.coinwarz.com/){: target="_blank" rel="noopener"}

#### Taxes

Cryptocurrency transactions are subject to federal and state tax regulations.&nbsp; Visit IRS.gov to [learn more about how virtual currencies are taxed](https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies){: target="_blank" rel="noopener"}.

#### Discussion forums

* [bitcointalk.org](http://bitcointalk.org){: target="_blank" rel="noopener"}
* [reddit.com/r/CryptoCurrency](https://www.reddit.com/r/CryptoCurrency/){: target="_blank" rel="noopener"}
* [reddit.com/r/bitcoin](https://www.reddit.com/r/CryptoCurrency/){: target="_blank" rel="noopener"}

#### Books

* [Barsk, Conrad. "Bitcoin for the Befuddled." No Starch Press, Inc. 2015.](https://chipublib.bibliocommons.com/item/show/1639508126){: target="_blank" rel="noopener"}
* [Antonopoulos, Andreas M. "Mastering Bitcoin: Unlocking Digital Cryptocurrencies." O'Reilly Media, Inc. 2015.](https://chipublib.bibliocommons.com/item/show/1896041126){: target="_blank" rel="noopener"}

#### Addiction Resources

Trading cryptocurrencies is a highly speculative activity. For some, it can be addictive. If you need help, you can find helpful resources here: [https://www.ncpgambling.org/state/illinois/](https://www.ncpgambling.org/state/illinois/){: target="_blank" rel="noopener"}
