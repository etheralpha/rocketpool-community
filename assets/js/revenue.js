var ethSupply = 120510000;
var rplSupply = 18900000;
// window.onload = checkNotification();
window.onload = getData().then(load);


async function getData() {
  const [ethResponse, rplResponse, statsResponse] = await Promise.all([
    fetch("https://api.coingecko.com/api/v3/coins/ethereum"),
    fetch("https://api.coingecko.com/api/v3/coins/rocket-pool"),
    fetch("https://api.rocketpooldata.com/v1/node/stats")
  ]);
  const ethJson = await ethResponse.json();
  const rplJson = await rplResponse.json();
  const statsJson = await statsResponse.json();
  const ethPrice = ethJson["market_data"]["current_price"]["usd"];
  ethSupply = ethJson["market_data"]["circulating_supply"];
  const rplPrice = rplJson["market_data"]["current_price"]["usd"];
  rplSupply = rplJson["market_data"]["circulating_supply"];
  const totalMinipools = statsJson["stakingMinipools"];
  const rplStaked = statsJson["rplStaked"];
  const rplPriceInEth = statsJson["rplPriceInEth"];
  const aveCollateral = Math.round( rplStaked/totalMinipools*rplPriceInEth/1e36/16*10000 )/100;
  document.getElementById("ethPrice").value = ethPrice;
  document.getElementById("rplPrice").value = rplPrice;
  document.getElementById("networkPoolCount").value = totalMinipools;
  document.getElementById("networkCollateralPercent").value = aveCollateral;
  updateRplEthRatio();
  updateUserRplTotal();
  updatedNetworkPoolCount();
  updatedNetworkCollateralPercent();
}
function load() {
  // checkNotification();
  calculateRevenue(false);
  // updateLinkTargets();
}

// Checks & Updates
function updatedPercentStaking() {
  let percentStaking = document.getElementById("percentStaking").value;
  // if (percentStaking < 0.01) { 
    // percentStaking = 0.01;
  if (percentStaking < 0) { 
    percentStaking = 0;
    document.getElementById("percentStaking").value = percentStaking;
  } else if (percentStaking > 100) { 
    percentStaking = 100;
    document.getElementById("percentStaking").value = percentStaking;
  }
  updateEthAmountStaking();
}
function updatedNetworkPoolCount() {
  const percentStaking = document.getElementById("percentStaking").value;
  const ethAmountStaking = (percentStaking/100)*ethSupply;
  const networkValidatorCount = Math.round( ethAmountStaking/32 );
  const networkPoolCount = document.getElementById("networkPoolCount").value;
  // if (networkPoolCount < 1) {
    // networkPoolCount = 1;
  if (networkPoolCount < 0) {
    networkPoolCount = 0;
  }
  document.getElementById("networkPoolCount").value = Math.round( networkPoolCount );
  updateNetworkPercentPools();
}
function updatedUserNodeCount() {
  let userNodeCount = document.getElementById("userNodeCount").value;
  // if (userNodeCount < 1) {
    // userNodeCount = 1;
  if (userNodeCount < 0) {
    userNodeCount = 0;
  }
  document.getElementById("userNodeCount").value = Math.round( userNodeCount );
  updateUserEthTotal();
  updateUserRplTotal();
}
function updatedNetworkCollateralPercent() {
  let networkCollateralPercent = document.getElementById("networkCollateralPercent").value;
  // if (networkCollateralPercent < 10) {
    // networkCollateralPercent = 10;
  if (networkCollateralPercent < 0) {
    networkCollateralPercent = 0;
    document.getElementById("networkCollateralPercent").value = networkCollateralPercent;
  // } else if (networkCollateralPercent < 10) {
    // alert("The minimum \"Rocket Pool Average RPL Collateral %\" is 10");
  } else if (networkCollateralPercent > 150) {
    networkCollateralPercent = 150;
    document.getElementById("networkCollateralPercent").value = networkCollateralPercent;
  }
}
function updatedUserCollateralPercent() {
  // const userNodeCount = document.getElementById("userNodeCount").value;
  const userEthTotal = document.getElementById("userEthTotal").innerHTML;
  const rplEthRatio = document.getElementById("rplEthRatio").innerHTML;
  let userCollateralPercent = document.getElementById("userCollateralPercent").value;
  // if (userCollateralPercent < 10) {
    // userCollateralPercent = 10;
  if (userCollateralPercent < 0) {
    userCollateralPercent = 0;
    document.getElementById("userCollateralPercent").value = userCollateralPercent;
  } else if (userCollateralPercent > 150) {
    userCollateralPercent = 150;
    document.getElementById("userCollateralPercent").value = userCollateralPercent;
  }
  updateUserRplTotal();
}
function updatedEthPrice() {
  let ethPrice = document.getElementById("ethPrice").value;
  // if (ethPrice < 0.01) {
    // ethPrice = 0.01
  if (ethPrice < 0) {
    ethPrice = 0
    document.getElementById("ethPrice").value = ethPrice;
  }
  updateRplEthRatio();
  updateUserRplTotal();
}
function updatedRplPrice() {
  const ethPrice = document.getElementById("ethPrice").value;
  let rplPrice = document.getElementById("rplPrice").value;
  // if (rplPrice < 0.01) {
    // rplPrice = 0.01;
  if (rplPrice < 0) {
    rplPrice = 0;
    document.getElementById("rplPrice").value = rplPrice;
  }
  updateRplEthRatio();
  updateUserRplTotal();
}

// Updaters
function updateEthAmountStaking() {
  const percentStaking = document.getElementById("percentStaking").value;
  const ethAmountStaking = Math.round( (percentStaking/100)*ethSupply/100000 )/10;
  document.getElementById("ethAmountStaking").innerHTML = ethAmountStaking;
}
function updateNetworkPercentPools() {
  const percentStaking = document.getElementById("percentStaking").value;
  const ethAmountStaking = (percentStaking/100)*ethSupply;
  const networkValidatorCount = Math.round( ethAmountStaking/32 );
  const networkPoolCount = document.getElementById("networkPoolCount").value;
  const networkPercentPools = Math.round( networkPoolCount/networkValidatorCount*100 );
  document.getElementById("networkPercentPools").innerHTML = networkPercentPools;
}
function updateUserEthTotal() {
  const userNodeCount = document.getElementById("userNodeCount").value;
  const userEthTotal = userNodeCount*16;
  document.getElementById("userEthTotal").innerHTML = userEthTotal;
}
function updateUserRplTotal() {
  const userEthTotal = document.getElementById("userEthTotal").innerHTML;
  const userCollateralPercent = document.getElementById("userCollateralPercent").value;
  const ethPrice = document.getElementById("ethPrice").value;
  const rplPrice = document.getElementById("rplPrice").value;
  const userRplTotal = Math.round( userEthTotal*(userCollateralPercent/100)/(rplPrice/ethPrice) );
  document.getElementById("userRplTotal").innerHTML = userRplTotal;
}
function updateRplEthRatio() {
  const ethPrice = document.getElementById("ethPrice").value;
  const rplPrice = document.getElementById("rplPrice").value;
  const rplEthRatio = Math.round( (rplPrice/ethPrice)*10000 )/10000;
  document.getElementById("rplEthRatio").innerHTML = rplEthRatio;
}

// Calculate
function calculateRevenue(scrollToResult) {
  const ethAmountStaking = document.getElementById("ethAmountStaking").innerHTML;
  const percentStaking = document.getElementById("percentStaking").value; // 3.5
  const networkPercentPools = document.getElementById("networkPercentPools").innerHTML;
  const networkPoolCount = document.getElementById("networkPoolCount").value; // 6250
  const userEthTotal = document.getElementById("userEthTotal").innerHTML;
  const userNodeCount = document.getElementById("userNodeCount").value; // 1
  const networkCollateralPercent = document.getElementById("networkCollateralPercent").value; // 20
  const userRplTotal = document.getElementById("userRplTotal").innerHTML;
  const userCollateralPercent = document.getElementById("userCollateralPercent").value; // 20
  const ethPrice = document.getElementById("ethPrice").value;
  const rplEthRatio = document.getElementById("rplEthRatio").innerHTML;
  const rplPrice = document.getElementById("rplPrice").value;

  if (percentStaking == 0) {
    const label = document.getElementById("percentStakingLabel").innerHTML;
    return alert("The \"" + label + "\" value can not be 0")
  }
  if (networkPoolCount < 1) {
    const label = document.getElementById("networkPercentPoolsLabel").innerHTML;
    return alert("The minimum \"" + label + "\" value is 1")
  }
  if (userNodeCount < 1) {
    const label = document.getElementById("userNodeCountLabel").innerHTML;
    return alert("The minimum \"" + label + "\" value is 1")
  }
  if (networkCollateralPercent < 10) {
    const label = document.getElementById("networkCollateralPercentLabel").innerHTML;
    return alert("The minimum \"" + label + "\" value is 10");
  }
  if (userCollateralPercent < 10) {
    const label = document.getElementById("userCollateralPercentLabel").innerHTML;
    return alert("The minimum \"" + label + "\" value is 10");
  }
  if (ethPrice == 0) {
    const label = document.getElementById("ethPriceLabel").innerHTML;
    return alert("The \"" + label + "\" value can not be 0")
  }
  if (rplPrice == 0) {
    const label = document.getElementById("rplPriceLabel").innerHTML;
    return alert("The \"" + label + "\" value can not be 0")
  }

  
  const rplLockupAmount = Math.round( networkPoolCount*16*(networkCollateralPercent/100)*ethPrice/rplPrice );
  const rplLockupPercent = Math.round( rplLockupAmount/rplSupply*100 );
  const ethTvl = networkPoolCount*32*ethPrice;
  const rplTvl = rplLockupAmount*rplPrice
  const totalTlv = ethTvl + rplTvl;
  const ethNetworkApr = 16632/Math.sqrt( percentStaking/100*ethSupply )/100;
  const ethStakingReward = Math.round( ethNetworkApr*userEthTotal*10000 )/10000;
  const ethSoloStakingReward = ethStakingReward;
  const usdSoloStakingReward = Math.round( ethSoloStakingReward*ethPrice );
  const usdSoloPrinciple = userEthTotal*ethPrice;

  const validator = userEthTotal >= 32;
  const commission5Percent = Math.round( ethNetworkApr*userEthTotal*0.05*10000 )/10000;
  const commission20Percent = Math.round( ethNetworkApr*userEthTotal*0.2*10000 )/10000;
  const rplInflation = 0.05;
  const rplStakingDistributionPercentage = 0.70; // what % of the network inflation is distributed as staking rewards
  const totalNetworkRplStaked = networkPoolCount*16*(networkCollateralPercent/100)/rplEthRatio;
  const rplNetworkStakingRewards = rplSupply*rplInflation*rplStakingDistributionPercentage;
  const rplRewards = Math.round( userRplTotal/totalNetworkRplStaked*rplNetworkStakingRewards*100 )/100;
  const rplRewardsUSD = Math.round( rplRewards*rplPrice*100 )/100;
  const usdUserPrinciple = (userEthTotal*ethPrice) + (userRplTotal*rplPrice);

  const totalRevenueLower = Math.round( ethPrice*(ethStakingReward+commission5Percent) + rplPrice*rplRewards);
  const totalRevenueUpper = Math.round( ethPrice*(ethStakingReward+commission20Percent) + rplPrice*rplRewards);
  const roiSolo = Math.round( usdSoloStakingReward/usdSoloPrinciple*1000 )/10;
  const roiPoolLower = Math.round( totalRevenueLower/usdUserPrinciple*1000 )/10;
  const roiPoolUpper = Math.round( totalRevenueUpper/usdUserPrinciple*1000 )/10;
  const percentDiffLower = Math.round( (totalRevenueLower-usdSoloStakingReward)/usdSoloStakingReward*100 );
  const percentDiffUpper = Math.round( (totalRevenueUpper-usdSoloStakingReward)/usdSoloStakingReward*100 );

  const results = `
  A Rocket Pool minipool will earn you <strong>${validator ? percentDiffLower : '&#8734;'}%-${validator ? percentDiffUpper : '&#8734;'}% more revenue</strong> than solo staking under these conditions!<br>
  <br>
  <strong>Normal Node Operator Revenue (1 Year)</strong><br>
  Validators: ${validator ? (userEthTotal/32) : 0} (${userEthTotal} ETH)<br>
  ETH Staking Rewards: ${validator ? ethSoloStakingReward : 0} ETH<br>
  Total Revenue USD: $${validator ? addCommas(usdSoloStakingReward) : 0}<br>
  ROI: ${validator ? roiSolo : 0}%<br>
  <br>
  <strong>Rocket Pool Node Operator Revenue (1 Year)</strong><br>
  Your Minipool Count: ${userNodeCount} (${userEthTotal} ETH)<br>
  Total Minipools: ${networkPoolCount}<br>
  Your Collateral: ${userCollateralPercent}%<br>
  Network Average Collateral: ${networkCollateralPercent}%<br>
  ETH Staking Rewards: ${ethStakingReward} ETH<br>
  ETH Commission @5% (minimum): ${commission5Percent} ETH<br>
  ETH Commission @20%: ${commission20Percent} ETH<br>
  RPL Staking Rewards: ${rplRewards} RPL ($${addCommas(rplRewardsUSD)})<br>
  Total Revenue USD: $${addCommas(totalRevenueLower)} - $${addCommas(totalRevenueUpper)}<br>
  ROI: ${roiPoolLower}%-${roiPoolUpper}%`;
  const revenueResults = document.getElementById("revenueResults");
  revenueResults.innerHTML = results;

  if (scrollToResult) {
    scrollToDiv('revenueResults');
  }
}

// Utilities
function scrollToDiv(id) {
  const div = document.getElementById(id);
  const yOffset = div.getBoundingClientRect().top + window.pageYOffset - 40;
  window.scrollTo({top: yOffset, behavior: 'smooth'});
}
function enableElements() {
  const elements = document.getElementsByClassName('wait4load');
  for (let element in elements) {
    elements[element].disabled = false;
  }
}
function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

