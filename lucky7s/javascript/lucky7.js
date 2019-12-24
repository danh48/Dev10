function theGame() {
    /* 
    Clear console when consile logging
    console.clear();
    */
    var resultBlock = document.getElementById("results");
    var error = document.getElementById("noMoney");
    var blank = document.getElementById("noBet");
    var moneys = Number(document.getElementById("bet").value);
    var display = moneys.toFixed(2);
    var rolls = 0;
    var highRoll= 0;
    var highTotal= moneys;
    rollTotal= 0;
    if (moneys<0) {
        resultBlock.style.display = "none";
        blank.style.display = "none";
        error.style.display = "block";
    } else if (moneys==""){
        resultBlock.style.display = "none";
        error.style.display = "none";
        blank.style.display = "block";
    } else {
        error.style.display = "none";
        blank.style.display = "none";
        while (moneys > 0) {
            rollTotal= Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2;
            rolls ++;
            if (rollTotal==7) {
                moneys += 4;
            } else {
                moneys -= 4;
            }
            if (moneys > highTotal) {
                highTotal= moneys;
                highRoll= rolls;
            }
            /*
            Log rolls to verify
            console.log("Next Roll");
            console.log(rollTotal);
            console.log("rolls:" + rolls);
            console.log("money:" + moneys);
            console.log("high total:" + highTotal);
            console.log("high roll:" + highRoll);
            */
        }
        document.getElementById("startBet").innerHTML = display;
        document.getElementById("theRolls").innerHTML = rolls;
        document.getElementById("theWinnings").innerHTML = highTotal.toFixed(2);
        document.getElementById("winningsRoll").innerHTML = highRoll;
        resultBlock.style.display = "block";
    }
}