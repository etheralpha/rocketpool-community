---
layout: markdown
title: Xer0's Rocket Pool Investment Thesis
description: A Rocket Pool investment thesis covering supply and demand dynamics, RPL, rETH, tokenomics, and price predictions.
keywords: thesis, investment, rocket, pool, rpl, reth, staking
permalink: /thesis/Xer0/

header: The Rocket Pool Investment Thesis
subheader: A thesis by Xer0.eth
note: This is not financial advice and you should follow up with your own research.
---


<sup>(source: [Reddit - March 12, 2021](https://www.reddit.com/r/ethfinance/comments/m3pug8/the_rocket_pool_investment_thesis/))</sup>


| Table of Contents |
| ----------------- |
| [Supply and Demand Dynamics](#supply-and-demand-dynamics-commission-for-node-operatorsfees-for-reth-holders) |
| [rETH](#reth) |
| [The rETH Investment](#the-reth-investment) |
| [The RPL Investment](#the-rpl-investment) |
| [RPL Tokenomics](#rpl-tokenomics) |
| [RPL Price Prediction](#my-rpl-price-prediction-personal-speculation) |
| [Solo-staking vs. RP Node Operator](#solo-staking-vs-rp-node-operator) |
| [Risks](#risks) |
| [Conclusion](#my-conclusion) |

---

I wanted to show all of you why I am hyper bullish on Rocket Pool, the potential it has to make everyone reading this a lot of money, as well as clear up some possible questions a few of you guys might have about specific things about the protocol (like how the ETH-rETH ratio is determined).

**<u>Disclaimer: I AM NOT A FINANCIAL ADVISOR, so take this article with a grain of salt.</u>**

If you haven’t already please read the medium articles that have been coming out from the Rocket Pool team first before reading my post (it might make a lot more sense): [https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd]()

## Supply and Demand Dynamics (commission for node operators/fees for rETH holders)

To start we have the node operators and the stakers. When node operators first fund their minipool they’ll need 16 ETH and a minimum of 10% RPL insurance (if you deposit 16 ETH you’ll need 1.6 ETH worth of RPL) for them to be accepted as a node operator. If they do not have the RPL insurance they will not be able to participate in the Rocket Pool network. Once they are accepted they will determine a minimum commission that they will earn for the life of their validator (in other words until their validator exits).

**Example:** A node operator starts with 32 ETH (16 from the node operator and 16 from the rETH stakers) at a 10% commission rate. This validator generates 1 ETH and decides to exit.

**<u>Node operators receive:</u>**

*16 ETH (deposit) + .5 ETH (staking rewards) + 0.05 ETH (commission) = 16.55 ETH (Total)*

**<u>rETH holders receive:</u>**

*16 ETH (deposit) +.5 (staking rewards) - 0.05 ETH (commission) = 16.45 ETH (Total)*

The supply and demand dynamics of the commission rate are determined by how much ETH there is in the deposit pool. This graph shows the curve of the commission rate:

![](/assets/img/thesis/commission-rate-curve.png){:class="img-fluid mx-auto"}

{:class="text-center small pb-3"}
<https://www.desmos.com/calculator/mkbg05o7xz>

If the deposit pool supply is low it’ll only distribute ETH to node operators that will accept a commission at a rate equal to or below the then-current rate set by the protocol (5% is currently the lowest), and visa versa. If the deposit pool supply is near maximum then more node operators will be given a higher commission rate (20% is currently the maximum) to meet the demand.

__*Note:*__ *Node operators determine their minimum commission to accept (if your commission rate is low you’ll likely stake before everyone else in the queue).*

The likely question that rETH holders will have is, “What are the fees that I’m paying?” rETH holders will only see (and pay) the average of all the commissions as their fee.

**Example:** There are 5 minipools currently live running at 15%, 12%, 10%, 8%, and 14% commission. rETH holders will see the average of all those minipools, 11.8%.

This example + the graph shows that the commission rate will lean in the direction of 10%, so if you are making any guesses right now on what the fees for rETH holders will be. It’ll likely be around 10%.

## rETH

The rETH token needs to be understood a little bit better for people.

Simply, rETH = (ETH deposit) + (staking rewards)

There is no additional rETH that is airdropped to your wallet. When you swap directly with Rocket Pool you will see an ETH-rETH exchange rate.

**Example:** If the exchange rate is 1ETH:1 rETH then if you deposit 16 ETH you get 16 rETH.

**Example:** If the exchange rate is 1 ETH: 0.95 rETH then if you deposit 16 ETH you’ll get 15.2 rETH

Your rETH will just accrue the value of your staking rewards. Therefore, rETH > ETH.

Here is the math that will determine the rETH-ETH ratio as one big example (*credit to eracpp*):

Alice creates a minipool with 16 ETH:

- Supply-R: 0 rETH (rETH issued/minted)
- Pool-D: 0 ETH (Deposit Pool)
- Pool-S: 0 ETH (Staked)
- Pool-R: 0 ETH (Rewards)
- Pool-T: 0 ETH (Total: Pool-D + Pool-R)
- Staked-N: 16 ETH (+16)(Node Operator)
- Ratio: 1 ETH / rETH (Pool-T / Supply-R)

Bob stakes 16 ETH (receives 16 rETH):

- Supply-R: 16 rETH (+16)
- Pool-D: 16 ETH (+16)
- Pool-S: 0 ETH
- Pool-R: 0 ETH
- Pool-T: 16 ETH (+16)
- Staked-N: 16 ETH (+16)
- Ratio: 1 ETH / rETH

Alice's minipool is activated:

- Supply-R: 16 rETH
- Pool-D: 0 ETH (-16)
- Pool-S: 16 ETH (+16)
- Pool-R: 0 ETH
- Pool-T: 16 ETH
- Staked-N: 16 ETH
- Ratio: 1

Alice's minipool earns 0.010 ETH with 20% commission:

- Supply-R: 16.00000 rETH
- Pool-D: 0.00000 ETH
- Pool-S: 16.00000 ETH
- Pool-R: 0.00400 ETH (+0.004)
- Pool-T: 16.00400 ETH (+0.004)
- Staked-N: 16.00000 ETH
- Ratio: 1.00025 (+0.00025)

The new ratio is determined by (Pool-T / Supply-R):

*16.00400 / 16.00000 = 1.00025 ETH / 1 rETH*

This ratio is important because it keeps track of rewards for everyone based on when you swapped ETH for rETH. If someone were to exchange ETH for rETH they would have to trade at the new ratio. If the ratio was fixed then people would be able to steal other people’s rewards

The simple answer, if you don’t want to look at the math, is that the Oracle nodes calculate the exchange rate many times throughout the day, so you don’t have to worry about it.

## The rETH Investment

Rocket Pool is the most decentralized and trustless staking protocol that will soon be available. Rocket Pool provides you with a token that allows users to retain liquidity as well as gives the ability to yield farm (if desired).

We all know there are many different DeFi yield farming strategies and I believe that there will be many strategies for rETH. Since rETH should never be less in value against ETH and it’s coming from the Rocket Pool protocol, which follows the Ethereum ethos, I think that it’ll be accepted as collateral for many of the lending dapps on Ethereum. When this does happen rETH holders will be able to collateralize their rETH for ETH to deposit back on Rocket Pool. This will create a positive feedback loop where the first rETH holders to implement this strategy will yield probably around 20-40% on their ETH instead of the average 5-8% just from staking rewards. This could also indirectly increase the RPL price and commission rates for the Rocket Pool network since more ETH in the deposit pool incentivizes more node operators to stake on Rocket Pool.

Of course, there will be many more advanced yield farming strategies. This is just an example of a simple one that could be profitable for rETH holders as well as the protocol that accepts rETH as collateral.

## The RPL Investment

With an in-depth understanding of RPL, I believe that RPL will perform much better than many of the tokens on Ethereum. If you think that Rocket Pool will be able to capture even a minimal amount of the staking market, you should consider adding RPL to your portfolio.

**Reason 1:** With the tokenomics update and the ETH/RPL price model that a few of us developed. I’ve identified that there is a price ceiling where anyone buying below this specific price can almost guarantee a profit (this price continually goes higher as more ETH is staked on the network). As long as there is a continuous amount of ETH staked on the Rocket Pool network RPL will continue to go up in value against ETH.

**Reason 2:** I believe that there will still be people interested in staking even when we go into a bear market. When there is a demand for rETH, there will be a demand for node operators which can have a very good effect on the ETH/RPL price (ie. continue to raise the price floor, resulting in a higher minimum price).

**Reason 3:** Since Rocket Pool is the most decentralized and permissionless staking protocol there will be many interested parties since there are no minimums to deposits (as little as 0.01 ETH, with no upper limits).

## RPL Tokenomics

RPL has a few things that can affect its price, a few being insurance, governance, and speculation (I’m not gonna cover “Oh, but it could go to this price, but maybe not.” it’s a dumb conversation that goes nowhere and I ain’t talking about it).

I believe that the main driving factor of RPL is going to be insurance. Since all node operators will need at least 10% of their ETH stake in RPL to be able to participate on the network, this can lock up sizable amounts of RPL per minipool. This will also bridge RPL to Ethereum’s price, therefore ETH/RPL prices will replace USD/RPL prices. With the help of [u/boodle_noodle](https://www.reddit.com/u/boodle_noodle/), we’ve created a model that tracks the “Absolute Minimum” price of what RPL should be at with all the ETH currently staking.

![](/assets/img/thesis/minimum-rpl-ratio.png){:class="img-fluid mx-auto"}

{:class="text-center small pb-3"}
<https://imgur.com/a/EfMQKFR>

This model shows the average insurance among all minipool operators compared to the amount of ETH staked on the Rocket Pool network. This model is flawed in a way because it doesn’t factor in the inflation of RPL, but this can easily be fixed by creating a new model that fits the current token supply.

Something to note: For node operators, as long as your RPL collateral is above 10% during the biweekly checkpoints, you’ll receive staking rewards based on your collateral amount. If you fall below the 10% you’ll have enough time (about a week or so) to add more RPL to meet the threshold to still receive RPL inflation rewards.

Governance is a little bit speculative, so I guess just look at other protocols and say, “This could be right.” If you have any questions or want to know how the governance system works please read the 2nd article from the dev team: <https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-2-e0d346911fe1>

## My RPL Price Prediction (personal speculation)

At the time of writing, there is about a little bit over 3.4 million ETH currently staked. I believe that over the next few years there will be a massive amount of ETH staked that’ll bring the APY down from its current ~8% to around 4-5% (equating to around 10-15 Million ETH staked). Of the entire market, I think that Rocket Pool will take AT LEAST 20% of that pie (or 2-3 Million ETH staked on Rocket Pool).

For argument’s sake let’s plug the conservative numbers into the model we created. We need some assumptions:

- Amount of ETH staked on RP = 2.5 Million
- Average RPL Insurance Collateralization = 25% (this is a conservative number)

Comes out to approximately an **ETH/RPL price of 0.035** (this is the minimum value that RPL can be, it’ll likely be a lot higher than this number). Currently, RPL is priced at 0.0063, so this is easily more than a 5.55x against ETH. Easy investment? ¯\\_(ツ)_/¯

## Solo-staking vs. RP Node Operator

I am not a financial advisor, please take this with a grain of salt.

Earlier in this post, I talked about the potential for the RPL token because of its necessity to decentralize the security layer for Ethereum combined with its built-in tokenomics. Based on all my bullishness for RPL I think most of you guys can tell I value the RPL token very highly.

Looking from a profitability standpoint:

- Solostakers will get an APY on ETH that is currently around the average 8% APY on their 32 ETH.
- RP Node Operators will be able to get both ETH rewards at the average 8% APY + COMMISSION. They will also receive an APY on their RPL holdings.

Of course, all the benefits of using the RP network doesn’t come free.

## Risks

Some things that I’ve noticed on what “could” happen:

1. Smart contract risk
  - Audits are worth every penny. The Rocket Pool contracts have been audited by Sigma Prime, Consensys, and Trail of Bits.
1. Hacks/Deposit pool gets drained
  - The deposit pool is designed to hold funds that will directly go to the next minipool operator (ie. ETH shouldn’t be sitting in the deposit pool for very long). Meaning that there is only a limited amount of funds a hacker could steal.
1. A malicious Oracle Node DAO
  - This must be addressed: These nodes will be able to upgradable contracts that are built into Rocket Pool, BUT there are 3 contracts that cannot be upgraded or changed (ie. rETH token contract, and the contract that stores ETH by the network) in short they can’t steal users funds without the entire user base knowing.
  - At launch, there will be 15-20 Oracle Nodes, which means that 51% of them would need to act maliciously in order to attack the protocol.

## My Conclusion

All in all, I have many reasons to believe that as staking increases in popularity Rocket Pool will become a very big and successful project. Just some extra things to close this mini-paper on:

- If you are pricing RPL by US dollar value, then you are doing it wrong. This token should not be priced in USD since it is coupled to the value of ETH. Because of this coupling, it passes the attribute of moneyness from ETH to RPL.
- If you are looking for a “get rich quick” scheme by buying RPL then I think you should look elsewhere. If you’d like to “set it and forget it,” RPL could be a good option for that kind of strategy.
- If you do not mind the risks and believe that Rocket Pool will be massively adopted, then you should consider holding RPL or utilizing the protocol by swapping ETH for rETH when the project goes live (October 6, 2021).
- Rocket Pool doesn’t have any direct competitors since many of the other “staking as a service” companies are either centralized, or they are custodial.
- If you do not care if you are using a centralized or a custodial solution then that’s fine. There are many options out there for you, but if you are looking for a truly decentralized and non-custodial solution then Rocket Pool will probably be the only answer for you.

None of this is investment advice, I’m just putting some knowledge out here to give people a little bit more of an understanding of what is to come since the project had been rebuilt from scratch and has gone through 3 different tokenomic iterations.

Some updates on what’s been happening recently:

- Sigma Prime, Consensys, and Trail of Bits audits have been complete with all issues resolved.
- The testnet has been running smoothly with everything working as planned. If you are planning on running a validator please come and test it out. The team has made the entire set-up process ridiculously easy with well-made guides that show every step from start to finish, complete with special instructions for people that would like to run a validator on a Raspberry Pi.

The Rocket Pool community is here to help!

*(In dedication to Brad and 0xcc)*

P.s. you still owe me 20 RPL Brad…

**Edit 9/19/2021:** This post has become an NFT and has been fractionalized. If you'd like to own a piece of this Thesis buy a token or a fraction of a token on Uniswap.
  - RPIT Token address: [0x21d722c340839751d23a4fb5b6d5e593f8cc82eb](https://etherscan.io/address/0x21d722c340839751d23a4fb5b6d5e593f8cc82eb)

**Edit:** This post has been modified from the [original source](https://www.reddit.com/r/ethfinance/comments/m3pug8/the_rocket_pool_investment_thesis/) to bring certain info/comments up-to-date with the latest developments (such as completion of audits).
