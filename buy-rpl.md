---
layout: markdown
title: RPL Buy Guide
description: A guide on how to buy RPL from A to Z.
keywords: rpl, buy, guide, rocket, pool
permalink: /buy-rpl/

header: How to Buy RPL
subheader: 
buttons: 
---


While RPL can be bought on a CEX like [Kraken](https://www.kraken.com/prices/rocket-pool?quote=usd) and [MEXC](https://www.mexc.com/tokens/RPL), we like to encourage users to be self-sovereign and buy through a DEX. This guide will show you the best ways to go about purchasing RPL on a DEX while getting the best price.



## How to Use Your Wallet with DeFi

- [Metamask](https://metamask.io/index.html)
  - [Metamask w/ Trezor](https://wiki.trezor.io/Apps:MetaMask)
  - [Metamask w/ Ledger](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask)
  - [Metamask w/ Lattice1](https://docs.gridplus.io/lattice1/gridplus-metamask-extension)
- [Frame](https://frame.sh/)
- [WalletConnect (for mobile wallets)](https://walletconnect.org/)
  - [WalletConnect w/ Argent](https://www.argent.xyz/blog/argent-walletconnect-ethereum-dapps/)
  - [WalletConnect w/ Rainbow](https://rainbow.me/faq)
  - [WalletConnect w/ Gnosis](https://help.gnosis-safe.io/en/articles/4356253-walletconnect-safe-app)

Currently, RPL is only available on the Ethereum Mainnet, so be sure to connect your wallet to that network!



## Compare Aggregator Rates

<details markdown="1">
<summary><strong>What is an aggregator and why use it?</strong></summary>

---

An aggregator looks at many different sources of liquidity in order to get you the best deal possible, even splitting up your transaction if needed. By default, they also allow hops between different pairs that don’t have liquidity, for example, LINK to RPL.

</details>


<details markdown="1">
<summary><strong>Which aggregator should you use?</strong></summary>

---

While all pretty similar, you may find better deals from different sources, so it could be worth checking between them. The main 3 you should consider are: 

- **Matcha:** Safe and often used, it is one of the cheapest sources that utilizes the 0x system to find liquidity from 50 sources. Matcha places no limit on positive slippage and manages gas well.
- **1inch:** Safe and often used, it is the aggregator with the largest source of liquidity pulling from over 65 sources. 1inch does not allow for positive slippage but this is rare to non-existent for RPL trades due to low trade volume.
  - *__Note:__ 1inch is currently restricting access to US users.*
- **Paraswap:** The smallest of the three, ParaSwap is another trusted aggregator option with 34 sources and it’s own routing  system which is occasionally more efficient. It retains 50% of any positive slippage.

*__Note:__ While Metamask has a built-in swap, it can charge up to 0.875% in fees and sources the same information as the other sites suggested so we recommend not to use it.*

</details>


1. Check Matcha, 1inch, and ParaSwap to see which one will give you the best price:
  - [Matcha](https://matcha.xyz/markets/1/0xb4efd85c19999d84251304bda99e90b92300bd93/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee)
  - [1inch](https://app.1inch.io/#/1/swap/ETH/RPL)
  - [Paraswap](https://paraswap.io/#/?network=ethereum)
1. Select the aggregator that you trust and will give you the best rate then proceed to the next step for making the exchange.

![](/assets/img/buy-rpl/compare.png){:class="img-fluid"}


## Making the Exchange

Jump to section:

- [Using Matcha](#matcha)
- [Using 1inch](#1inch)
- [Using Paraswap](#paraswap)



{:id="matcha"}
#### Using Matcha


1. Go to the [Matcha dApp](https://matcha.xyz/markets/1/0xb4efd85c19999d84251304bda99e90b92300bd93)
1. Connect your wallet
  - Click the menu on the top-right then click “Connect Wallet”
    ![](/assets/img/buy-rpl/matcha-connect-wallet.png){:class="img-fluid"}
  - Connect using the correct option for your wallet
    ![](/assets/img/buy-rpl/matcha-connect-options.png){:class="img-fluid"}
1. Go to the [RPL token page](https://matcha.xyz/markets/1/0xb4efd85c19999d84251304bda99e90b92300bd93)
  ![](/assets/img/buy-rpl/matcha-rpl-page.png){:class="img-fluid"}
1. Choose your trading pair and amount
  - Select the payment token under “You Pay”
  - Fill in the amount desired to trade for RPL
  - *__Note:__ If you want to sell RPL instead (or RPL is the top token), click the ![](/assets/img/buy-rpl/matcha-toggle-trade.png){:class="img-fluid d-inline"} icon to toggle the trade direction*
  - *__Note:__ Putting a specific receipt amount of the “You Receive” token costs more gas for the transaction, so it’s beneficial to always set the “You Pay” amount instead)*
  ![](/assets/img/buy-rpl/matcha-trade-window.png){:class="img-fluid"}
1. Matcha will generate a quote from its list of liquidity sources
  - To check the routing it suggests, hover over the ![](/assets/img/buy-rpl/matcha-route-icon.png){:class="img-fluid d-inline"} next to “1 RPL = 0.xxxx ETH”
  ![](/assets/img/buy-rpl/matcha-route-info.png){:class="img-fluid"}
1. **WAIT!** Before finalizing the order, we want to adjust some of settings to save costs
  - Click the slider icon on the top right of the trade window ![](/assets/img/buy-rpl/matcha-settings.png){:class="img-fluid d-inline"}
  - This is the setting page, we will want to review “Max Slippage” and “Gas Price”
    <details markdown="1">
    <summary><strong>Information on Slippage</strong></summary>

    ---

    Max Slippage defines how much your purchase price can vary from the quoted price; it sets an upper limit on the purchase/sell price.

    - When liquidity is low, sandwich bots can more easily raise and lower the RPL price around your transaction, causing you to pay at a higher price than quoted
    - Setting a low slippage would mean your transaction would fail if they moved price too much and thus their attack would fail, so they won’t even try it
    - If liquidity is high or RPL is not frequently traded, it is not likely that the price will change much during the time of your transaction from natural demand so setting a low slippage is unlikely to cause a trade to fail while still protecting against sandwich attacks
    - A good source for liquidity and frequency for the RPL/ETH pair is [Uniswap V3 info page](https://info.uniswap.org/#/pools/0x632e675672f2657f227da8d9bb3fe9177838e726)
    - Generally, >1k RPL/tick or >50 ETH/tick is good liquidity and a trade every 10 minutes or longer is low frequency

    </details>
1. Set slippage to at least 0.5%  and down to 0.1% if RPL volume is still low (see the expandable info above for determining this)
  - Click “Save”
  - *__Note:__ 0.5% slippage is the safest option for your transaction to succeed but at a higher risk of being sandwich attacked, while 0.1% is the safest option for avoiding a sandwich but at a risk of the transaction failing if you are unlucky enough for another high-priced buy/sell to occur before yours.*
  ![](/assets/img/buy-rpl/matcha-settings-slippage.png){:class="img-fluid"}
1. Matcha will often overestimate gas prices, so if you want to try and save some on gas, use a source like [](https://www.blocknative.com/gas-estimator) to see a reasonable gas limit and use that for “Custom” 
  - If you don’t want to worry about that, simply select “Fast”
  - Click “Save”
  ![](/assets/img/buy-rpl/matcha-settings-gas.png){:class="img-fluid"}
1. Leave the settings by clicking the “x” at the top right
1. Click “Review Order” and if satisfied, click “Place Order”
  - *__Note:__ If you are selling RPL or using a different ERC-20 token to swap to, you will need to approve Matcha to transfer it; instead of “Place Order” you will see “Approve Token”*
  ![](/assets/img/buy-rpl/matcha-review-place.png){:class="img-fluid"}
1. Review the transaction request from your chosen wallet and sign it if all seems good again



{:id="1inch"}
#### Using 1inch

*__Note:__ 1inch is currently restricting access to US users.*

1. Go to the [1inch dApp](https://app.1inch.io/#/1/swap/ETH/RPL)
1. Connect your wallet
  - Click “Connect Wallet” on the top-right
  ![](/assets/img/buy-rpl/1inch-connect-wallet.png){:class="img-fluid"}
  - Check acceptance of the terms, choose the “Ethereum” network, and connect using the correct option for your wallet
  ![](/assets/img/buy-rpl/1inch-connect-options.png){:class="img-fluid"}
1. Go to the [RPL token page](https://app.1inch.io/#/1/swap/ETH/RPL)
  ![](/assets/img/buy-rpl/1inch-rpl-page.png){:class="img-fluid"}
1. Choose your trading pair and amount
  - Select the payment token under “From”
  - Fill in the amount desired to trade for RPL
  - *__Note:__ If you want to sell RPL instead (or RPL is the top token), click the ![](/assets/img/buy-rpl/1inch-toggle-trade.png){:class="img-fluid d-inline"} icon to toggle the trade direction*
  - *__Note:__ Putting a specific receipt amount of the “To (estimated)” token costs more gas for the transaction, so it’s beneficial to always set the “From” amount instead)*
  ![](/assets/img/buy-rpl/1inch-trade-window.png){:class="img-fluid"}
1. 1inch will generate a quote from its list of liquidity sources
  - See the bottom of the trade panel for routing info
1. **WAIT!** Before finalizing the order, we want to adjust some of settings to save costs
  - Click the slider icon on the top right of the trade window ![](/assets/img/buy-rpl/1inch-settings.png){:class="img-fluid d-inline"}
  - This is the setting page, we will want to review “Max Slippage” and “Gas Price”
    
      <details markdown="1">
      <summary><strong>Information on Slippage</strong></summary>

      ---

      Max Slippage defines how much your purchase price can vary from the quoted price; it sets an upper limit on the purchase/sell price.

      - When liquidity is low, sandwich bots can more easily raise and lower the RPL price around your transaction, causing you to pay at a higher price than quoted
      - Setting a low slippage would mean your transaction would fail if they moved price too much and thus their attack would fail, so they won’t even try it
      - If liquidity is high or RPL is not frequently traded, it is not likely that the price will change much during the time of your transaction from natural demand so setting a low slippage is unlikely to cause a trade to fail while still protecting against sandwich attacks
      - A good source for liquidity and frequency for the RPL/ETH pair is [Uniswap V3 info page](https://info.uniswap.org/#/pools/0x632e675672f2657f227da8d9bb3fe9177838e726)
      - Generally, >1k RPL/tick or >50 ETH/tick is good liquidity and a trade every 10 minutes or longer is low frequency

      </details>
    - The other settings can be left as default
1. 1inch can overestimate gas prices, so if you want to try and save some on gas, use a source like [](https://www.blocknative.com/gas-estimator) to see a reasonable gas limit and use that for “Custom” 
  - If you don’t want to worry about that, simply select Medium
  - If setting custom gas in 1559 format, it is generally suggested to use the estimated “Max priority fee” and adjust the “Max fee” value to limit expenditure
1. Set slippage to at least 0.5%  and down to 0.1% if RPL volume is still low (see the expandable info above for determining this)
  - *__Note:__ 0.5% slippage is the safest option for your transaction to succeed but at a higher risk of being sandwich attacked, while 0.1% is the safest option for avoiding a sandwich but at a risk of the transaction failing if you are unlucky enough for another high-priced buy/sell to occur before yours.*
  ![](/assets/img/buy-rpl/1inch-settings-slippage.png){:class="img-fluid"}
  ![](/assets/img/buy-rpl/1inch-settings-gas-adv.png){:class="img-fluid"}
1. Leave the settings by clicking the “<” at the top-left
1. Click “Swap” and if satisfied, click “Confirm Swap”
  - *__Note:__ If you are selling RPL or using a different ERC-20 token to swap to, you will need to approve 1inch to transfer it; instead of “Swap” you will see “Give permission to swap <Token>”*

  ![](/assets/img/buy-rpl/1inch-review-place.png){:class="img-fluid"}
1. Review the transaction request from your chosen wallet and sign it if all seems good again



{:id="paraswap"}
#### Using Paraswap

1. Go to the [Paraswap dApp](https://paraswap.io/#/?network=ethereum )
1. Connect your wallet
  - Click “Connect Wallet” on the top-right
  ![](/assets/img/buy-rpl/paraswap-connet-wallet.png){:class="img-fluid"}
  - Choose the “Ethereum” network, and connect using the correct option for your wallet
  ![](/assets/img/buy-rpl/paraswap-connect-options.png){:class="img-fluid"}
1. Search for the RPL token page
  - Click on the default token under “Receive” (USDT in the image below)
  - Search for the official RPL token address which is currently: 0xb4efd85c19999d84251304bda99e90b92300bd93
  - Import and select by clicking on “RPL”
  ![](/assets/img/buy-rpl/paraswap-address-rpl.png){:class="img-fluid"}
  ![](/assets/img/buy-rpl/paraswap-rpl-page.png){:class="img-fluid"}
1. Choose your trading pair and amount
  - Select the payment token under “Pay”
  - Fill in the amount desired to trade for RPL
  - *__Note:__ If you want to sell RPL instead (or RPL is the top token), click the ![](/assets/img/buy-rpl/paraswap-toggle-trade.png){:class="img-fluid d-inline"} icon to toggle the trade direction*
  - *__Note:__ Putting a specific receipt amount of the “Receive” token costs more gas for the transaction, so it’s beneficial to always set the “Pay” amount instead)*
  ![](/assets/img/buy-rpl/paraswap-trade-window.png){:class="img-fluid"}
1. ParaSwap will generate a quote from its list of liquidity sources
  - Check the Order Routing info on the right-side of the page
  ![](/assets/img/buy-rpl/paraswap-route-info.png){:class="img-fluid"}
1. **WAIT!** Before finalizing the order, we want to adjust some of settings to save costs
  - Click the slider icon on the top-right of the site ![](/assets/img/buy-rpl/paraswap-settings.png){:class="img-fluid d-inline"}
  - This is the setting page, we will want to review “Max Slippage” and “Gas Price”

    <details markdown="1">
    <summary><strong>Information on Slippage</strong></summary>

    ---

    Max Slippage defines how much your purchase price can vary from the quoted price; it sets an upper limit on the purchase/sell price.

    - When liquidity is low, sandwich bots can more easily raise and lower the RPL price around your transaction, causing you to pay at a higher price than quoted
    - Setting a low slippage would mean your transaction would fail if they moved price too much and thus their attack would fail, so they won’t even try it
    - If liquidity is high or RPL is not frequently traded, it is not likely that the price will change much during the time of your transaction from natural demand so setting a low slippage is unlikely to cause a trade to fail while still protecting against sandwich attacks
    - A good source for liquidity and frequency for the RPL/ETH pair is [Uniswap V3 info page](https://info.uniswap.org/#/pools/0x632e675672f2657f227da8d9bb3fe9177838e726)
    - Generally, >1k RPL/tick or >50 ETH/tick is good liquidity and a trade every 10 minutes or longer is low frequency

    </details>
    - The other settings can be left as default

1. Set slippage to at least 0.5%  and down to 0.1% if RPL volume is still low (see the expandable info above for determining this)
  - *__Note:__ 0.5% slippage is the safest option for your transaction to succeed but at a higher risk of being sandwich attacked, while 0.1% is the safest option for avoiding a sandwich but at a risk of the transaction failing if you are unlucky enough for another high-priced buy/sell to occur before yours.*
1. ParaSwap has limited gas options, so select either “Fast” or “Normal”
  - If using a wallet that supports EIP1559, then turn-on “Enable EIP1559 Compatibility"
  ![](/assets/img/buy-rpl/paraswap-settings-slippage.png){:class="img-fluid"}
1. Leave the settings by clicking the “x” at the top-right
1. Click “Swap” and if satisfied, click “Confirm Swap”
  - *__Note:__ If you are selling RPL or using a different ERC-20 token to swap to, you will need to approve ParaSwap to transfer it; instead of “Swap” you will see “Unlock <Token>”*
    ![](/assets/img/buy-rpl/paraswap-review-place.png){:class="img-fluid"}
1. Review the transaction request from your chosen wallet and sign it if all seems good again