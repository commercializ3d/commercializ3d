var abi = '[{ "constant": true, "inputs": [ ], "name": "roundTimeRemaining", "outputs": [ { "name": "", "type": "uint256"}],"payable": false,"stateMutability": "view", "type": "function"}]'
abi = JSON.parse(abi);
if (window.web3) {
    var web3 = window.web3;
    var contract = web3.eth.contract(abi).at("0x330DA5956e15547144d3a8d40F799cD8Bc1179B8");
    contract.roundTimeRemaining.call(function (error, result) {
        if (error) {
            console.error(error);
        } else {
            var bn = new BigNumber(result);
            var seconds = bn.toNumber();
            startTimer(seconds)
        }
    });
}

var timer = setInterval(countDown, 1000);
var seconds;

function countDown() {
    seconds = seconds - 1;
    updateTimer(secondsToTime(seconds));

    if (seconds === 0) {
        clearInterval(timer);
    }
}

function updateTimer(newTime) {
    if (newTime.h && newTime.m && newTime.s) {
        document.getElementById("timer").innerHTML = newTime.h + ":" + newTime.m + ":" + newTime.s + " remaining"
    }
}

function startTimer(timeRemaining) {
    seconds = timeRemaining;
    timer = setInterval(countDown, 1000);
}

function secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));
    if (hours < 10) {
        hours = "0" + hours;
    }
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
}
