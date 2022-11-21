---
layout: default
title: Revenue Estimator
description: 
keywords: revenue, node, rpl, rocket, pool
permalink: /revenue/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Revenue Estimator</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A speculative tool to help estimate Rocket Pool node operator rewards.
    </p>
    <p>
      <small><em>This is not financial advice and you should follow up with your own research.</em></small>
    </p>
    <a href="https://docs.rocketpool.net/guides/node/responsibilities.html#rocket-pool-node-operators" class="btn btn-dark btn-lg px-4 m-1">Stake Now</a>
  </div>
</header>


<!-- Preface -->
<section class="container py-4 d-flex justify-content-evenly">
  <div class="h-100 p-4 pb-3 bg-light border rounded-3 d-inline-flex">
    <small>
      <ul>
        <li>Node Requirement: 16 ETH + minimum collateral of 1.6 ETH worth of RPL (10%)</li>
        <li>Max collateral is 24 ETH worth of RPL per node (150%)</li>
        <li>More RPL collateral results in higher RPL staking rewards</li>
        <li>Revenue: 
          <ul>
            <li>ETH staking rewards on your 16 ETH</li>
            <li>ETH commission (5% minimum) on the 16 ETH staking pool</li>
            <li>RPL staking rewards on your RPL collateral</li>
          </ul>
        </li>
        <li>Staking pool commission is variable (5-20%) set by the protocol</li>
      </ul>
    </small>
  </div>
</section>


<!-- Revenue -->
<section class="container py-4">
  <!-- Form -->
  <div class="row align-items-md-stretch py-3">
    <div class="col-12 col-md-6">
      <form id="revenue">
        <div class="mb-2">
          <label for="percentStaking" class="form-label">
            <span id="percentStakingLabel">% of Total ETH Supply Staking</span>
            <small> (<span id="ethAmountStaking">9.2</span>M ETH)</small>
            <svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-animation="false" title="The percent of ETH supply that is staking - (total ETH supply staking)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
          </label>
          <input type="number" step="0.01" class="form-control" id="percentStaking" value="7.77" 
            onchange="updatedPercentStaking()" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();">
        </div>
        <div class="mb-2">
          <label for="networkPoolCount" class="form-label">
            <span id="networkPercentPoolsLabel"># of Total Rocket Pool Minipools</span>
            <small> (<span id="networkPercentPools">1</span>% of Staking Validators)</small>
            <svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-animation="false" title="The total numer of minipools on the Rocket Pool network - (percent of Ethereum validators that are Rocket Pool nodes)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
          </label>
          <input type="number" class="form-control" id="networkPoolCount" value="1500" 
            onchange="updatedNetworkPoolCount()" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();">
        </div>
        <div class="mb-2">
          <label for="userNodeCount" class="form-label">
            <span id="userNodeCountLabel"># of Minipools You Operate</span>
            <small> (<span id="userEthTotal">32</span> ETH Total)</small>
            <svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-animation="false" title="The number of Rocket Pool minipools you operate - (total ETH you are staking)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
          </label>
          <input type="number" class="form-control" id="userNodeCount" value="2" 
            onchange="updatedUserNodeCount()" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();">
        </div>
        <div class="mb-2">
          <label for="networkCollateralPercent" class="form-label mb-1">
            <span id="networkCollateralPercentLabel">Average Minipool RPL Collateral %</span>
            <small> (Min 10%, Max 150%)</small>
            <svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-animation="false" title="The average rate of RPL collateral for all minipools on the network" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
          </label>
          <input type="number" step="0.01" class="form-control" id="networkCollateralPercent" value="80"
            onchange="updatedNetworkCollateralPercent()" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();">
        </div>
        <div class="mb-2">
          <label for="userCollateralPercent" class="form-label mb-1">
            <span id="userCollateralPercentLabel">Your RPL Collateral % Per Minipool</span>
            <small> (<span id="userRplTotal">4145</span> RPL Total)</small>
            <svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-animation="false" title="The rate of RPL collateral for your Rocket Pool node (160 RPL at 0.01 ETH/RPL ratio would be 10%)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
          </label>
          <input type="number" step="0.01" class="form-control" id="userCollateralPercent" value="150"
            onchange="updatedUserCollateralPercent()" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();">
        </div>
        <div class="mb-2">
          <label for="ethPrice" class="form-label">
            <span id="ethPriceLabel">ETH USD Price</span>
            <svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-animation="false" title="The USD price of ETH" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
          </label>
          <input type="number" step="0.01" class="form-control" id="ethPrice" value="4300"
            onchange="updatedEthPrice()" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();">
        </div>
        <div class="mb-2">
          <label for="rplPrice" class="form-label">
            <span id="rplPriceLabel">RPL USD Price</span>
            <small> (<span id="rplEthRatio">0.0115</span> ETH Ratio)</small>
            <svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-animation="false" title="The USD price of RPL (RPL/ETH ratio)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
          </label>
          <input type="number" step="0.01" class="form-control" id="rplPrice" value="49.45"
            onchange="updatedRplPrice()" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();">
        </div>
        <div class="d-grid gap-2 my-3">
          <input type="button" class="btn btn-dark" value="Calculate" onclick="calculateRevenue(true)">
        </div>
      </form>
    </div>
    <!-- Results -->
    <div class="col-12 col-md-6">
      <hr class="d-md-none">
      <h2 class="h5 text-capitalize">Results</h2>
      <p id="revenueResults" class="pb-5"></p>
    </div>
  </div>
</section>