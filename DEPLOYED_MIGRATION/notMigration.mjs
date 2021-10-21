// helpers//
function makeMap(array, keyName) {
	newArray = new Array();
	Object(array).map(function (o) {
		newArray.push(o[keyName]);
	});
	return newArray;
}
function removeDuplicates(a) {
	var prims = {'boolean': {}, 'number': {}, 'string': {}},
		objs = [];
	return a.filter(function (item) {
		var type = typeof item;
		if (type in prims) {
			return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
		} else {
			return objs.indexOf(item) >= 0 ? false : objs.push(item);
		}
	});
}
function splitArrayIntoChunksOfLen(arr, len) {
	var chunks = [],
		i = 0,
		n = arr.length;
	while (i < n) {
		chunks.push(arr.slice(i, (i += len)));
	}
	return chunks;
}
// helpers//

// requires dependancies
// copy/paste into the notsafemoon dashboard console to run
var chainId = 56;
web3 = (await _xChain(chainId)).speedyNodes.httpsArchive;

var NSM = {
	address: '0x337e35Ed5B38D5C7Ec9F8d7cF78fe7F43d7DEC6F',
	//prettier-ignore
	abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"burnAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferBurn","type":"event"},{"inputs":[],"name":"_burnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_rewardFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnFee","type":"uint256"}],"name":"setBurnFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rewardFee","type":"uint256"}],"name":"setRewardFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBurned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalHODLrRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
	pair: {
		address: '0x357f9cd8f2749A31119C3E32729965CA56f4cBd8',
		//prettier-ignore
		abi: [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],
	},
	priceUSD: [],
	NSMtokensPerBNB: [],
	rate: [],
};

NSM.instance = new web3.eth.Contract(NSM.abi, NSM.address);
var WBNB = {address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'};
var NotToolsBalancesV2 = {
	address: '0xaaaa1D1Ba4572B419584e2C30a357A890172B32C',
	//prettier-ignore
	abi: [{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"balances","outputs":[{"internalType":"uint256[]","name":"_balances","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf0002ea9"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"tokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x1049334f"}],
};
NotToolsBalancesV2.instance = new web3.eth.Contract(NotToolsBalancesV2.abi, NotToolsBalancesV2.address);

var holdersAtLatestBlock = (await scan.token.holders(NSM.address, '', chainId)).result;
var holdersAtLatestBlockAddresses = makeMap(holdersAtLatestBlock, 'TokenHolderAddress');
for (i = 0; i < holdersAtLatestBlockAddresses.length; i++) {
	holdersAtLatestBlockAddresses[i] = web3.utils.toChecksumAddress(holdersAtLatestBlockAddresses[i]);
}

var snapShotBlock = 11359742;
var blocksSinceSnapshot = (await web3.eth.getBlockNumber()) - snapShotBlock;
var delayBetweenQueries = 2000;
var blocksPerDataQuery = 2500;
var numberOfDataQueries = Math.ceil(blocksSinceSnapshot / blocksPerDataQuery);
var retries = [];
var txSinceSnapshot = [];

function start() {
	getTransactionsSinceSnapShot();
}
function getTransactionsSinceSnapShot() {
	for (i = 0; i < numberOfDataQueries; i++) {
		var fromBlock = snapShotBlock + blocksPerDataQuery * i;
		var toBlock = snapShotBlock + blocksPerDataQuery * (i + 1);
		delayThenGetPastLogs(fromBlock, toBlock, i);
	}
	setTimeout(() => {
		checkForRetries();
	}, (numberOfDataQueries + 3) * delayBetweenQueries);
}

function delayThenGetPastLogs(fromBlock, toBlock, i) {
	setTimeout(() => {
		_getPastLogs(fromBlock, toBlock);
	}, delayBetweenQueries * i);
}

async function _getPastLogs(fromBlock, toBlock) {
	try {
		let logs = await getPastLogs(fromBlock, toBlock, NSM.address, logTopic.transfer);
		if (typeof logs != 'undefined') {
			txSinceSnapshot.push(logs);
		}
	} catch {
		retries.push({fromBlock: fromBlock, toBlock: toBlock});
	}
}

var getPastLogs = async (fromBlock, toBlock, address, topics) => {
	let log = await web3.eth.getPastLogs({
		fromBlock: fromBlock,
		toBlock: toBlock,
		address: address,
		topics: [topics],
	});
	return log;
};

function checkForRetries() {
	if (retries.length > 0) {
		var tempRetries = retries;
		retries = [];
		processRetries(tempRetries);
	} else {
		processTransactionLogs();
	}
}

function processRetries(tempRetries) {
	for (i = 0; i < tempRetries.length; i++) {
		var fromBlock = tempRetries[i].fromBlock,
			toBlock = tempRetries[i].toBlock;
		delayThenGetPastLogs(fromBlock, toBlock, i);
	}
	setTimeout(() => {
		checkForRetries();
	}, (tempRetries.length + 3) * delayBetweenQueries);
}

var txList = [];
var txListAddresses = [];
var unFilteredTxAddressList = [];
var txListTopics;
function processTransactionLogs() {
	txSinceSnapshot.forEach((item) => {
		item.forEach((innerItem) => {
			txList.push(innerItem);
		});
	});
	txListTopics = makeMap(txList, 'topics');
	txListTopics.forEach((topic) => {
		txListAddresses.push(topic[1]);
		txListAddresses.push(topic[2]);
	});
	txListAddresses.forEach((address) => {
		unFilteredTxAddressList.push(web3.utils.toChecksumAddress('0x' + web3.utils.stripHexPrefix(address).slice(24, 64)));
	});
	unFilteredTxAddressList.sort();
	filterTxAddressList(unFilteredTxAddressList);
}

var uniqueAddressTxList;
var _addresses;
function filterTxAddressList(unFilteredTxAddressList) {
	unFilteredTxAddressList.forEach((item) => {
		if (holdersAtLatestBlockAddresses.includes(item)) {
			unFilteredTxAddressList.splice(unFilteredTxAddressList.indexOf(item), 1);
		}
	});
	unFilteredTxAddressList.sort();
	_addresses = holdersAtLatestBlockAddresses;
	uniqueAddressTxList = removeDuplicates(unFilteredTxAddressList);
	uniqueAddressTxList.forEach((address) => {
		_addresses.push(address);
	});
	buildSnapshotOfBalances(_addresses);
}

var snapshot = [];
var addressSubArrays = [];
var subListLength = 100;
function buildSnapshotOfBalances(addresses) {
	addressSubArrays = splitArrayIntoChunksOfLen(addresses, subListLength);
	for (i = 0; i < addressSubArrays.length; i++) {
		delayThenGetBalances(addressSubArrays[i], i);
	}
	setTimeout(() => {
		checkForGetBalancesRetries();
	}, (addressSubArrays.length + 3) * delayBetweenQueries);
}

function delayThenGetBalances(chunk, i) {
	setTimeout(() => {
		_getBalances(chunk);
	}, delayBetweenQueries * i);
}

var getBalancesRetries = [];
async function _getBalances(chunk) {
	try {
		let balances = await NotToolsBalancesV2.instance.methods.balances(chunk, [NSM.address]).call(snapShotBlock);
		for (i = 0; i < balances.length; i++) {
			snapshot.push({
				address: chunk[i],
				balance: balances[i],
			});
		}
	} catch {
		getBalancesRetries.push({chunk});
	}
}

function checkForGetBalancesRetries() {
	if (getBalancesRetries.length > 0) {
		var tempGetBalancesRetries = getBalancesRetries;
		getBalancesRetries = [];
		processGetBalancesRetries(tempGetBalancesRetries);
	} else {
		processSnapshot();
	}
}

function processGetBalancesRetries(tempGetBalancesRetries) {
	for (i = 0; i < tempGetBalancesRetries.length; i++) {
		let chunk = tempGetBalancesRetries[i];
		delayThenGetBalances(chunk, i);
	}
	setTimeout(() => {
		checkForGetBalancesRetries();
	}, (tempGetBalancesRetries.length + 3) * delayBetweenQueries);
}

function processSnapshot() {
	spotCheckBalanceAccuracy();
	console.log(snapshot);
}
var passedCount = 0;
function spotCheckBalanceAccuracy() {
	var spotChecks = 10;
	var spotCheckIncriment = Math.floor(snapshot.length / spotChecks);
	for (i = 0; i < spotChecks; i++) {
		spotCheckBalance(spotCheckIncriment * i);
	}
	setTimeout(() => {
		if (passedCount == spotChecks) {
			prepContractsForPriceRetrieval();
		}
	}, 10000);
}

async function spotCheckBalance(snapshotIndexToCheck) {
	var snapshotSpotCheck = await NSM.instance.methods.balanceOf(snapshot[snapshotIndexToCheck].address).call(snapShotBlock);
	console.log(snapshotSpotCheck);
	console.log(snapshot[snapshotIndexToCheck].balance);
	if (snapshotSpotCheck == snapshot[snapshotIndexToCheck].balance) {
		console.log(`SNAPSHOT SPOT CHECK #${snapshotIndexToCheck}: PASS!`);
		passedCount++;
	} else {
		console.log(`SNAPSHOT SPOT CHECK #${snapshotIndexToCheck}: FAIL!`);
	}
}
//////////////////////////// at this point the snapshot is completely built and spot check verified ////////////////////
//////////////////////////// at this point the snapshot is completely built and spot check verified ////////////////////
//////////////////////////// at this point the snapshot is completely built and spot check verified ////////////////////

// get the rate of NSM to the WBNB at the snapshot block
var NotToolsLivePriceV3 = {
	address: '0x4444434a5917ae1c00FE51705a8C9C4B36887cde',
	//prettier-ignore
	abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"chainIdUpdated","type":"event","signature":"0x8a99a1fe820334df0668b31903e9e6d241a55cab11a54892315f85698469383e"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"chainLinkAggregatorV3Address","type":"address"}],"name":"chainLinkAggregatorV3AddressUpdated","type":"event","signature":"0xefc77e8d64834a3c799d410e7bd8af7621e64028ed0a18630d7ab8c61e1e1d7f"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nativeCoinAddress","type":"address"}],"name":"nativeCoinUpdated","type":"event","signature":"0xe789fcf37132e96b23327f841e8533eedea281e71e0e6a3aa280ac92b311bad6"},{"inputs":[{"internalType":"uint256","name":"_newChainId","type":"uint256"}],"name":"setNewChainId","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5e485818"},{"inputs":[{"internalType":"address","name":"_chainLinkAggregatorV3Address","type":"address"}],"name":"setNewChainLinkAggregatorV3Address","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x215daf5d"},{"inputs":[{"internalType":"address","name":"_nativeCoin","type":"address"}],"name":"setNewNativeCoin","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3c55b335"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getAggregatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe8d6e0de"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3408e470"},{"inputs":[],"name":"getNativeCoin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x14cbfc09"},{"inputs":[],"name":"getNativeCoinPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb84cf6d6"},{"inputs":[{"internalType":"address","name":"factory","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"internalType":"uint256","name":"priceDecimals","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xac41865a"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function","constant":true,"signature":"0xad615dec"}],
};

var pancake = {
	factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
	//prettier-ignore
	//abi: [{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[],"name":"INIT_CODE_PAIR_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
};
//pancakeExchange.instance = new web3.eth.Contract(pancakeExchange.abi,pancakeExchange.address)

async function prepContractsForPriceRetrieval() {
	pancake.router = {address: '0x10ED43C718714eb63d5aA57B78B54704E256024E'};
	//prettier-ignore
	pancake.router.abi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
  pancake.router.instance = new web3.eth.Contract(pancake.router.abi,pancake.router.address);
	NotToolsLivePriceV3.instance = new web3.eth.Contract(NotToolsLivePriceV3.abi, NotToolsLivePriceV3.address);
	NSM.pair.instance = new web3.eth.Contract(NSM.pair.abi, NSM.pair.address);
	buildBatchRequest();
}

var snapshotReserves;

async function _getRate(block) {
	snapshotReserves = await NSM.pair.instance.methods.getReserves().call(block);
	NSM.pair.token0 = await NSM.pair.instance.methods.token0().call(block);
	NSM.pair.token1 = await NSM.pair.instance.methods.token1().call(block);
	if (NSM.address == NSM.pair.token0) {
		NSM.pair.NSM_reserves = await snapshotReserves._reserve0 /*//(10**9)*/;
		NSM.pair.BNB_reserves = await snapshotReserves._reserve1 /*//(10**18)*/;
		return NSM.pair.NSM_reserves / NSM.pair.BNB_reserves;
	} else if (NSM.address == NSM.pair.token1) {
		NSM.pair.NSM_reserves = await snapshotReserves._reserve1 /*/(10**9)*/;
		NSM.pair.BNB_reserves = await snapshotReserves._reserve0 /*/(10**18)*/;
		return NSM.pair.NSM_reserves / NSM.pair.BNB_reserves;
	}
}

async function _getNSMperBNB(block) {
	snapshotReserves = await NSM.pair.instance.methods.getReserves().call(block);
	NSM.pair.token0 = await NSM.pair.instance.methods.token0().call(block);
	NSM.pair.token1 = await NSM.pair.instance.methods.token1().call(block);
	if (NSM.address == NSM.pair.token0) {
		NSM.pair.NSM_reserves = await snapshotReserves._reserve0 /*//(10**9)*/;
		NSM.pair.BNB_reserves = await snapshotReserves._reserve1 /*//(10**18)*/;
		return applyDecimals(NSM.pair.NSM_reserves, 9) / applyDecimals(NSM.pair.BNB_reserves, 18);
	} else if (NSM.address == NSM.pair.token1) {
		NSM.pair.NSM_reserves = await snapshotReserves._reserve1 /*/(10**9)*/;
		NSM.pair.BNB_reserves = await snapshotReserves._reserve0 /*/(10**18)*/;
		return applyDecimals(NSM.pair.NSM_reserves, 9) / applyDecimals(NSM.pair.BNB_reserves, 18);
	}
}

async function getReserves(block) {
	snapshotReserves = await NSM.pair.instance.methods.getReserves().call(block);
	NSM.pair.token0 = await NSM.pair.instance.methods.token0().call(block);
	NSM.pair.token1 = await NSM.pair.instance.methods.token1().call(block);
	if (NSM.address == NSM.pair.token0) {
		NSM.pair.NSM_reserves = await snapshotReserves._reserve0 /*//(10**9)*/;
		NSM.pair.BNB_reserves = await snapshotReserves._reserve1 /*//(10**18)*/;
	} else if (NSM.address == NSM.pair.token1) {
		NSM.pair.NSM_reserves = await snapshotReserves._reserve1 /*/(10**9)*/;
		NSM.pair.BNB_reserves = await snapshotReserves._reserve0 /*/(10**18)*/;
	}
	console.log('NSM reserves: ' + applyDecimals(NSM.pair.NSM_reserves, 9));
	console.log('BNB reserves: ' + applyDecimals(NSM.pair.BNB_reserves, 18));
}

async function getUSDprice(block) {
	price = await NotToolsLivePriceV3.instance.methods.getPrice(pancake.factory, NSM.address).call(block);
	return (NSM.priceUSD[block] = applyDecimals(price.tokenPrice, 29));
}

async function getNSMperBNB(block) {
	return (NSM.NSMtokensPerBNB[block] = await _getNSMperBNB(block));
}
async function getRate(block) {
	return (NSM.rate[block] = await _getRate(block));
}

async function getAmountsOut(amountIn_NSM) {
	return await pancake.router.instance.methods.getAmountsOut(amountIn_NSM, [NSM.address, WBNB.address]).call(snapShotBlock);
}

////////////////////////// GET THE 'amountsOut' BNB VALUE OF A SIMULATED TOKEN SELL //////////////////////////////////
////////////////////////// GET THE 'amountsOut' BNB VALUE OF A SIMULATED TOKEN SELL //////////////////////////////////
////////////////////////// GET THE 'amountsOut' BNB VALUE OF A SIMULATED TOKEN SELL //////////////////////////////////
////////////////////////// GET THE 'amountsOut' BNB VALUE OF A SIMULATED TOKEN SELL //////////////////////////////////

var batchData = [];
var snapshotBatchRequestArrays;
var batchRequestDelay = 2000;
var batchRequestItems = 1000;
var batchRequestRetries = [];
var returnedBatchData = [];

function buildBatchRequest() {
	snapshotBatchRequestArrays = splitArrayIntoChunksOfLen(snapshot, batchRequestItems);

	for (i = 0; i < snapshotBatchRequestArrays.length; i++) {
		batchData[i] = new web3.BatchRequest();
		delayThenExecuteBatch(snapshotBatchRequestArrays[i], i);
	}
	setTimeout(() => {
		checkForBatchRequestRetries();
	}, (snapshotBatchRequestArrays.length + 3) * batchRequestDelay);
}

function delayThenExecuteBatch(chunk, i) {
	chunk.forEach((item) => {
		addHolderToBatch(item.balance, i);
	});
	setTimeout(() => {
		executeBatch(i);
	}, 500 + delayBetweenQueries * i);
}

function checkForBatchRequestRetries() {
	if (batchRequestRetries.length > 0) {
		var tempBatchRequestRetries = batchRequestRetries;
		batchRequestRetries = [];
		processGetBatchRetries(tempBatchRequestRetries);
	} else {
		processReturnedBatchData();
	}
}

function processGetBatchRetries(tempBatchRequestRetries) {
	for (i = 0; i < tempBatchRequestRetries.length; i++) {
		let batchRetry = tempBatchRequestRetries[i];
		delayThenExecuteBatch(batchRetry, i);
	}
	setTimeout(() => {
		checkForBatchRequestRetries();
	}, (tempBatchRequestRetries.length + 3) * batchRequestDelay);
}

function executeBatch(i) {
	try {
		batchData[i].execute();
	} catch {
		batchRequestRetries.push(batchData[i]);
	}
}

function pushData(result) {
	returnedBatchData.push({amountOutBNB: result});
}
function addHolderToBatch(amountIn_NSM, i) {
	batchData[i].add(
		pancake.router.instance.methods.getAmountsOut(amountIn_NSM, [NSM.address, WBNB.address]).call.request(snapShotBlock, function (error, result) {
			pushData(result);
      console.warn(error);
		})
	);
}

var batchDataCheckPassedCount = 0;
function processReturnedBatchData() {
	spotCheckBatchDataAccuracy();
}

function spotCheckBatchDataAccuracy() {
	var spotChecks = 10;
	var spotCheckIncriment = Math.floor(returnedBatchData.length / spotChecks);
	for (i = 0; i < spotChecks; i++) {
		spotCheckBatchData(spotCheckIncriment * i);
	}
	setTimeout(() => {
		if (batchDataCheckPassedCount == spotChecks) {
			storeBatchDataToSnapshot();
		}
	}, 10000);
}

async function spotCheckBatchData(snapshotIndexToCheck) {
	console.log(returnedBatchData[snapshotIndexToCheck].amountOutBNB[0]);
	console.log(snapshot[snapshotIndexToCheck].balance);
	if (snapshot[snapshotIndexToCheck].balance == returnedBatchData[snapshotIndexToCheck].amountOutBNB[0]) {
		console.log(`SNAPSHOT BATCH DATA SPOT CHECK #${snapshotIndexToCheck}: PASS!`);
		batchDataCheckPassedCount++;
	} else {
		console.log(`SNAPSHOT BATCH DATA SPOT CHECK #${snapshotIndexToCheck}: FAIL!`);
	}
}

function storeBatchDataToSnapshot() {
	for (i = 0; i < snapshot.length; i++) {
		snapshot[i] = {...snapshot[i], ...returnedBatchData[i]};
	}
	cleanUpZeroBalanceData();
	setTimeout(() => {
		setTimeout(() => {
			for (i = 0; i < snapshot.length; i++) {
				if (typeof snapshot[i].amountOutBNB != 'undefined') {
					snapshot[i].amountOutBNB = snapshot[i].amountOutBNB[1];
				}
			}
		}, 2000);
		setTimeout(() => {
			prepMigrationDataForUpload();
		}, 4000);
	}, 2000);
}

var zeroBalanceHolders = [];
function cleanUpZeroBalanceData() {
	for (i = 0; i < snapshot.length; i++) {
		if (snapshot[i].balance == 0) {
			zeroBalanceHolders.push(snapshot[i]);
		}
	}
	verifyTheSnapshotBalanceOfZeroBalanceAccounts(zeroBalanceHolders);
}

function verifyTheSnapshotBalanceOfZeroBalanceAccounts(zeroBalanceHolders) {
	for (i = 0; i < zeroBalanceHolders.length; i++) {
		if (isBalanceZero(zeroBalanceHolders[i].address, snapShotBlock)) {
			console.log(zeroBalanceHolders[i]);
			snapshot.splice(makeMap(snapshot, 'address').indexOf(zeroBalanceHolders[i].address), 1);
		}
	}
}

async function isBalanceZero(holder, block) {
	let holderBalance = await NSM.instance.methods.balanceOf(holder).call(block);
	if (holderBalance == '0') {
		return true;
	} else {
		return false;
	}
}

var migrationDataChunks = [];
var batchDataChunkSize = 100;
var migrationData = {
	addresses: [],
	balances: [],
	amountOutBNB: [],
	chunks: {
		addresses: [],
		balances: [],
		amountOutBNB: [],
	},
};

function prepMigrationDataForUpload() {
	migrationData.addresses = makeMap(snapshot, 'address');
	migrationData.balances = makeMap(snapshot, 'balance');
	migrationData.amountOutBNB = makeMap(snapshot, 'amountOutBNB');
	migrationData.chunks.addresses = splitArrayIntoChunksOfLen(migrationData.addresses, batchDataChunkSize);
	migrationData.chunks.balances = splitArrayIntoChunksOfLen(migrationData.balances, batchDataChunkSize);
	migrationData.chunks.amountOutBNB = splitArrayIntoChunksOfLen(migrationData.amountOutBNB, batchDataChunkSize);
	uploadDataToMigrationContract(migrationData);
}

var migrateNSM = {
	address: '0xddaAd340b0f1Ef65169Ae5E41A8b10776a75482d',
	//prettier-ignore
	abi:[{"inputs":[],"name":"FLV","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NSM","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptIceCreamMan_OPI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"uint256","name":"snapshotBalance_","type":"uint256"},{"internalType":"uint256","name":"snapshotAmountOutBNB_","type":"uint256"}],"name":"addholder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"holders","type":"address[]"},{"internalType":"uint256[]","name":"snapshotBalance_","type":"uint256[]"},{"internalType":"uint256[]","name":"snapshotAmountOutBNB_","type":"uint256[]"}],"name":"batchAddHolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimsEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositMAX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokensToDeposit_INTEGER","type":"uint256"}],"name":"depositSome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositsEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getHolderInfo","outputs":[{"internalType":"uint256","name":"snapshotBalance_","type":"uint256"},{"internalType":"uint256","name":"snapshotAmountOutBNB_","type":"uint256"},{"internalType":"uint256","name":"holderDeposits_","type":"uint256"},{"internalType":"uint256","name":"maxClaimableFLV","type":"uint256"},{"internalType":"uint256","name":"claimedFLV_","type":"uint256"},{"internalType":"uint256","name":"deposits_","type":"uint256"},{"internalType":"uint256","name":"remainingNSMdeposit_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInfo","outputs":[{"internalType":"uint256","name":"snapshot_block","type":"uint256"},{"internalType":"uint256","name":"snapshot_timestamp","type":"uint256"},{"internalType":"string","name":"snapshot_date","type":"string"},{"internalType":"uint256","name":"snapshot_reservesNSM_raw","type":"uint256"},{"internalType":"uint256","name":"snapshot_reservesBNB_raw","type":"uint256"},{"internalType":"uint256","name":"snapshot_reservesNSM","type":"uint256"},{"internalType":"uint256","name":"snapshot_reservesBNB","type":"uint256"},{"internalType":"uint256","name":"global_NSM_migrated_","type":"uint256"},{"internalType":"uint256","name":"rate_FLV_per_BNB_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"authorizedAddress","type":"address"}],"name":"grantAuthorization_OAD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"iceCreamMan","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"iceCreamMan_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pending_iceCreamMan","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"revokedAddress","type":"address"}],"name":"revokeAuthorization_OAD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"flavorsToken","type":"address"}],"name":"setAddressFLV","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"maxBatchLength_","type":"uint16"}],"name":"setMaxBatchLength","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate_FLV_per_BNB_","type":"uint256"}],"name":"setRateFLV","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleClaims","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleDeposits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_iceCreamMan","type":"address"}],"name":"transferICM_OICM","outputs":[],"stateMutability":"nonpayable","type":"function"}],
};

function uploadDataToMigrationContract(migrationData) {web3.eth;}
/*
  At this point we have the data stored in a variable called 'snapshot'
  The structure of the data is this:
  snapshot[i] = {
    "address":"0x002dadE21a587b1Ffc20053111eB96E4A8Bc4a03",
    "balance":"1281964714523351895",
    "amountOutBNB":[
      "1281964714523351895",
      "2582165011866913"
    ]}'
  }
  
  THE SECOND ITEM IN 'amountOutBNB' is the maximum amount of claimable BNB value
  This number was obtained by simulating a zero tax sell for all tokens
  held by the wallet at the snapshot block.

  WE ARE NOW READY TO SEND THE BATCH DATA TO THE MIGRATION CONTRACT
  WE ARE NOW READY TO SEND THE BATCH DATA TO THE MIGRATION CONTRACT
  WE ARE NOW READY TO SEND THE BATCH DATA TO THE MIGRATION CONTRACT
  WE ARE NOW READY TO SEND THE BATCH DATA TO THE MIGRATION CONTRACT
  WE ARE NOW READY TO SEND THE BATCH DATA TO THE MIGRATION CONTRACT
*/

start();
