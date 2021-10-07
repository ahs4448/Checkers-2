var playerOneTurn = true;
var playerTwoTurn = false;
var playerOnePieces = 12;
var playerTwoPieces = 12;
var num;
var arr = [];
var positionRow;
var positionNum;
var isKing = "";

let arrayy = [
    null, "P1", "P1", "P1", "P1",
          "P1", "P1", "P1", "P1",
          "P1", "P1", "P1", "P1",
           "S", "S",  "S",  "S",
           "S", "S",  "S",  "S",
          "P2", "P2", "P2", "P2",
          "P2", "P2", "P2", "P2",
          "P2", "P2", "P2", "P2",
]

$(".valid3").css("pointer-events", "none")

function lightScoreboard() {
    if(playerTwoPieces === 0){
        alert('player 1 wins')
    }
    if(playerOnePieces === 0){
        alert('player 2 wins')
    }


    if (playerOneTurn === true) {
        $(".playerOne").css("color", "orange")
        $(".playerTwo").css("color", "black")

        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
    } else if (playerTwoTurn === true) {
        $(".playerOne").css("color", "black")
        $(".playerTwo").css("color", "orange")

        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
    }
    $("#two").html(playerTwoPieces);
    $("#one").html(playerOnePieces);
}

function makeKing() {

    if ($(`[position='${29}']`).attr("class") == "valid2") {
        $(`[position='${29}']`).addClass("kingOne")
        alert('king me p1');
    }
    if ($(`[position='${30}']`).attr("class") == "valid2") {
        $(`[position='${30}']`).addClass("kingOne")
        alert('king me p1');
    }
    if ($(`[position='${31}']`).attr("class") == "valid2") {
        $(`[position='${31}']`).addClass("kingOne")
        alert('king me p1');
    }
    if ($(`[position='${32}']`).attr("class") == "valid2") {
        $(`[position='${32}']`).addClass("kingOne")
        alert('king me p1');
    }
    if ($(`[position='${1}']`).attr("class") == "valid3") {
        $(`[position='${1}']`).addClass("kingTwo")
        alert('king me p2');
    }
    if ($(`[position='${2}']`).attr("class") == "valid3") {
        $(`[position='${2}']`).addClass("kingTwo")
        alert('king me p2');
    }
    if ($(`[position='${3}']`).attr("class") == "valid3") {
        $(`[position='${3}']`).addClass("kingTwo")
        alert('king me p2');
    }
    if ($(`[position='${4}']`).attr("class") == "valid3") {
        $(`[position='${4}']`).addClass("kingTwo")
        alert('king me p2');
    }
}

function reset() {
    arr = [];
    positionRow = "";
    positionNum = 0;
    num = 0;
    isKing = "";
}

function Move(value, directionH, directionV, currentPlayer, cpClass) {

    if (positionRow == "odd-from-top" && num === positionNum + value) {

        $(currentPlayer).animate({ left: directionH, top: directionV });
        $(currentPlayer).attr("position", `${num}`)
        $(currentPlayer).attr("data", "even-from-top")
        $(currentPlayer).removeClass(cpClass);
        makeKing()
        reset()
        lightScoreboard()
    }
    if (positionRow == "odd-from-top" && num === positionNum + value) {

        $(currentPlayer).animate({ left: directionH, top: directionV });
        $(currentPlayer).attr("position", `${num}`)
        $(currentPlayer).attr("data", "even-from-top")
        $(currentPlayer).removeClass(cpClass);
        makeKing()
        reset()
        lightScoreboard()
    }

    if (positionRow == "even-from-top" && num === positionNum + value) {

        $(currentPlayer).animate({ left: directionH, top: directionV });
        $(currentPlayer).attr("position", `${num}`)
        $(currentPlayer).attr("data", "odd-from-top")
        $(currentPlayer).removeClass(cpClass);
        makeKing()
        reset()
        lightScoreboard()
    }
    if (positionRow == "even-from-top" && num === positionNum + value) {

        $(currentPlayer).animate({ left: directionH, top: directionV });
        $(currentPlayer).attr("position", `${num}`)
        $(currentPlayer).attr("data", "odd-from-top")
        $(currentPlayer).removeClass(cpClass);
        makeKing()
        reset()
        lightScoreboard()
    }
}

function skip(value, oppValue, valueTwo, oppValueTwo, directionH, directionV, currentPlayer, cpClass, opponent) {
    if (arrayy[positionNum + oppValue] == opponent ) {
        $(currentPlayer).animate({ left: directionH, top: directionV });
        $(currentPlayer).attr("position", `${num}`)

        $(`[position='${positionNum + oppValue}']`).css("visibility", "hidden");
        arrayy[positionNum + oppValue] = "S"
    }
    positionRow = arr[0].getAttribute("data");
    positionNum = parseInt(arr[0].getAttribute("position"))

    if (arrayy[num + oppValue] == opponent && arrayy[num + value] == "S") {
        if (num !== 4 && num !== 12 && num !== 20 && num !== 28
            && num !== 8 && num !== 16 && num !== 24 && num !== 32
            && num !== 1 && num !== 9 && num !== 17 && num !== 25
            && num !== 5 && num !== 13 && num !== 21 && num !== 29) {
               // alert('extra skip? condition 1');                  
        }else {
            $(currentPlayer).removeClass(cpClass);
            makeKing()
            reset()
            if (playerOneTurn === true && playerTwoTurn === false) {
                playerTwoTurn = true
                playerOneTurn = false
            } else if (playerTwoTurn === true && playerOneTurn === false) {
                playerOneTurn = true
                playerTwoTurn = false
            }
        }
    }
    else if (arrayy[num + oppValueTwo] == opponent && arrayy[num + valueTwo] == "S") {
       
               // alert('extra skip? condition 2');        
     
    }
    
    else {

        $(currentPlayer).removeClass(cpClass);

        makeKing()
        reset()
        if (playerOneTurn === true && playerTwoTurn === false) {
            playerTwoTurn = true
            playerOneTurn = false
        } else if (playerTwoTurn === true && playerOneTurn === false) {
            playerOneTurn = true
            playerTwoTurn = false
        }
    }
}

function skipKings(value, oppValue, valueTwo, oppValueTwo, valueThree, oppValueThree, directionH, directionV, currentPlayer, cpClass, opponent) {
    //debugger
    // setTimeout(function(){ 
    //num is the clicked spot where the piece will land
    //value is the number that indicates the distance from where the piece is and where it will land
    //oppValue is the spot where the opposing teams piece will be skipped
    //oppValueTwo is an alternative spot where an opposing teams piece can be skipped
    //oppValueThree is the final possible spot where an opposing teams piece can be skipped,only possible when kings are skipping
    if (arrayy[positionNum + oppValue] == opponent) {
        $(currentPlayer).animate({ left: directionH, top: directionV });
        $(currentPlayer).attr("position", `${num}`)

        $(`[position='${positionNum + oppValue}']`).css("visibility", "hidden");
        arrayy[positionNum + oppValue] = "S"
    }
    positionRow = arr[0].getAttribute("data");
    positionNum = parseInt(arr[0].getAttribute("position"))

    if (arrayy[num + oppValue] == opponent && arrayy[num + value] == "S") {

        if (num !== 4 && num !== 12 && num !== 20 && num !== 28
            && num !== 8 && num !== 16 && num !== 24 && num !== 32
            && num !== 1 && num !== 9 && num !== 17 && num !== 25
            && num !== 5 && num !== 13 && num !== 21 && num !== 29) {
            alert('extra skip')
            
        } 
    }

    else if (arrayy[num + oppValueTwo] == opponent && arrayy[num + valueTwo] == "S") {
        //alert('extra skip 2')
    }
    else if (arrayy[num + oppValueThree] == opponent && arrayy[num + valueThree] == "S") {
        if (num !== 4 && num !== 12 && num !== 20 && num !== 28
            && num !== 8 && num !== 16 && num !== 24 && num !== 32
            && num !== 1 && num !== 9 && num !== 17 && num !== 25
            && num !== 5 && num !== 13 && num !== 21 && num !== 29) {
           // alert('extra skip 3')
        } 
    }
    else {
        $(currentPlayer).removeClass(cpClass);
        makeKing()
        reset()
        if (playerOneTurn === true && playerTwoTurn === false) {
            playerTwoTurn = true
            playerOneTurn = false
        } else if (playerTwoTurn === true && playerOneTurn === false) {
            playerOneTurn = true
            playerTwoTurn = false
        }
    }
}
$(".valid2").click(function () {

    $(".valid3").css("pointer-events", "none")
    $(".selected").removeClass("selected")
    $(this).toggleClass("selected")
    
    arr = []
    arr.push(this);

    positionRow = arr[0].getAttribute("data");  //even or odd row
    positionNum = parseInt(arr[0].getAttribute("position"))  //the number on the board where the piece is located

    if (arr[0].getAttribute("class") === "valid2 kingOne selected") {

        isKing = "p1"
    }
});

//player 2
$(".valid3").click(function () {

    $(".valid2").css("pointer-events", "none")

    $(".selectedTwo").removeClass("selectedTwo")
    $(this).toggleClass("selectedTwo")

    arr = []
    arr.push(this);

    positionRow = arr[0].getAttribute("data");
    positionNum = parseInt(arr[0].getAttribute("position"))

    if (arr[0].getAttribute("class") === "valid3 kingTwo selectedTwo") {
        isKing = "p2"
    }
});

$(".valid").click(function () {
    num = parseInt(this.getAttribute("value")) //the spot on the board where the piece will be moved to

    if (playerOneTurn == true && isKing !== "p1") {
       
        if (num === positionNum + 5 && positionRow == "odd-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(5, "+=64", "+=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 4 && positionRow == "odd-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(4, "-=64", "+=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 4 && positionRow == "even-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(4, "+=64", "+=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;           
            lightScoreboard()
            return;
        }
        if (num === positionNum + 3 && positionRow == "even-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(3, "-=64", "+=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 9 && positionRow == "odd-from-top" && arrayy[positionNum + 5] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skip(9, 5, 7, 4, "+=128", "+=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 7 && positionRow == "odd-from-top" && arrayy[positionNum + 4] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skip(7, 4, 9, 5, "-=128", "+=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 9 && positionRow == "even-from-top" && arrayy[positionNum + 4] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skip(9, 4, 7, 3, "+=128", "+=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 7 && positionRow == "even-from-top" && arrayy[positionNum + 3] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skip(7, 3, 9, 4, "-=128", "+=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }else{
            alert("bad move")
        }
    }
    //king p1
    if (playerOneTurn == true && isKing === "p1") {

        if (num === positionNum + 5 && positionRow == "odd-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(5, "+=64", "+=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 4 && positionRow == "odd-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(4, "-=64", "+=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 4 && positionRow == "even-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(4, "+=64", "+=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 3 && positionRow == "even-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(3, "-=64", "+=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -3 && positionRow == "odd-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(-3, "+=64", "-=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -4 && positionRow == "odd-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(-4, "-=64", "-=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -4 && positionRow == "even-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(-4, "+=64", "-=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -5 && positionRow == "even-from-top") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            Move(-5, "-=64", "-=64", ".selected", "selected")
            playerTwoTurn = true;
            playerOneTurn = false;
            lightScoreboard()
            return;
        }
        // skipping
        if (num === positionNum + 9 && positionRow == "odd-from-top" && arrayy[positionNum + 5] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skipKings(9, 5, 7, 4, -7, -3, "+=128", "+=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 7 && positionRow == "odd-from-top" && arrayy[positionNum + 4] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skipKings(7, 4, 9, 5, -9, -4, "-=128", "+=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 9 && positionRow == "even-from-top" && arrayy[positionNum + 4] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skipKings(9, 4, 7, 3, -7, -4, "+=128", "+=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 7 && positionRow == "even-from-top" && arrayy[positionNum + 3] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skipKings(7, 3, 9, 4, -9, -5, "-=128", "+=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum - 7 && positionRow == "odd-from-top" && arrayy[positionNum - 3] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skipKings(-7, -3, -9, -4, 9, 5, "+=128", "-=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum - 9 && positionRow == "odd-from-top" && arrayy[positionNum - 4] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skipKings(-9, -4, -7, -3, 7, 4, "-=128", "-=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum - 7 && positionRow == "even-from-top" && arrayy[positionNum - 4] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skipKings(-7, -4, -9, -5, 9, 4, "+=128", "-=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum - 9 && positionRow == "even-from-top" && arrayy[positionNum - 5] == "P2") {
            arrayy[num] = "P1"
            arrayy[positionNum] = "S"
            skipKings(-9, -5, -7, -4, 7, 3, "-=128", "-=128", ".selected", "selected", "P2")
            playerTwoPieces--;
            lightScoreboard()
            return;
        }else{
            alert("bad move")
        }
    }
    /////////PLAYER 2 //////
    if (playerTwoTurn == true && isKing !== "p2") {
        
        if (num === positionNum + -3 && positionRow == "odd-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(-3, "+=64", "-=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -4 && positionRow == "odd-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(-4, "-=64", "-=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -4 && positionRow == "even-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(-4, "+=64", "-=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -5 && positionRow == "even-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(-5, "-=64", "-=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        //skip
        if (num === positionNum + -7 && positionRow == "odd-from-top" && arrayy[positionNum - 3] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skip(-7, -3, -9, -4, "+=128", "-=128", ".selectedTwo", "selectedTwo", "P1")
            playerOnePieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -9 && positionRow == "odd-from-top" && arrayy[positionNum - 4] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skip(-9, -4, -7, -3, "-=128", "-=128", ".selectedTwo", "selectedTwo", "P1")
            playerOnePieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -7 && positionRow == "even-from-top" && arrayy[positionNum - 4] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skip(-7, -4, -9, -5, "+=128", "-=128", ".selectedTwo", "selectedTwo", "P1")
            playerOnePieces--;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -9 && positionRow == "even-from-top" && arrayy[positionNum - 5] == "P1") {
            arrayy[num] = "P2";
            arrayy[positionNum] = "S";
            skip(-9, -5, -7, -4, "-=128", "-=128", ".selectedTwo", "selectedTwo", "P1");
            playerOnePieces--;
            lightScoreboard()
            return;
        }else{
            alert("bad move")
        }
    }

    if (playerTwoTurn == true && isKing === "p2") {
        if (num === positionNum + 5 && positionRow == "odd-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(5, "+=64", "+=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 4 && positionRow == "odd-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(4, "-=64", "+=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 4 && positionRow == "even-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(4, "+=64", "+=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + 3 && positionRow == "even-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(3, "-=64", "+=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }

        if (num === positionNum + -3 && positionRow == "odd-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(-3, "+=64", "-=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -4 && positionRow == "odd-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(-4, "-=64", "-=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -4 && positionRow == "even-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(-4, "+=64", "-=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
        if (num === positionNum + -5 && positionRow == "even-from-top") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            Move(-5, "-=64", "-=64", ".selectedTwo", "selectedTwo")
            playerTwoTurn = false;
            playerOneTurn = true;
            lightScoreboard()
            return;
        }
          // skipping
          if (num === positionNum + 9 && positionRow == "odd-from-top" && arrayy[positionNum + 5] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skipKings(9, 5, 7, 4, -7, -3, "+=128", "+=128", ".selectedTwo", "selectedTwo","P1")
            playerOnePieces--;
            lightScoreboard()
            return;
          }
          if (num === positionNum + 7 && positionRow == "odd-from-top" && arrayy[positionNum + 4] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skipKings(7, 4, 9, 5, -9, -4, "-=128", "+=128", ".selectedTwo", "selectedTwo","P1")
            playerOnePieces--;
            lightScoreboard()
            return;
          }
          if (num === positionNum + 9 && positionRow == "even-from-top" && arrayy[positionNum + 4] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skipKings(9, 4, 7, 3, -7, -4, "+=128", "+=128", ".selectedTwo", "selectedTwo","P1")
            playerOnePieces--;
            lightScoreboard()
            return;
          }
          if (num === positionNum + 7 && positionRow == "even-from-top" && arrayy[positionNum + 3] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skipKings(7, 3, 9, 4, -9, -5, "-=128", "+=128", ".selectedTwo", "selectedTwo","P1")
            playerOnePieces--;
            lightScoreboard()
            return;
          }
          if (num === positionNum - 7 && positionRow == "odd-from-top" && arrayy[positionNum - 3] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skipKings(-7, -3, -9, -4, 9, 5, "+=128", "-=128", ".selectedTwo", "selectedTwo","P1")
            playerOnePieces--;
            lightScoreboard()
            return;
          }
          if (num === positionNum - 9 && positionRow == "odd-from-top" && arrayy[positionNum - 4] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skipKings(-9, -4, -7, -3, 7, 4, "-=128", "-=128", ".selectedTwo", "selectedTwo","P1")
            playerOnePieces--;
            lightScoreboard()
            return;
          }

          if (num === positionNum - 7 && positionRow == "even-from-top" && arrayy[positionNum - 4] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skipKings(-7, -4, -9, -5, 9, 4, "+=128", "-=128", ".selectedTwo", "selectedTwo","P1")
            playerOnePieces--;
            lightScoreboard()
            return;
          }
          if (num === positionNum - 9 && positionRow == "even-from-top" && arrayy[positionNum - 5] == "P1") {
            arrayy[num] = "P2"
            arrayy[positionNum] = "S"
            skipKings(-9, -5, -7, -4, 7, 3, "-=128", "-=128", ".selectedTwo", "selectedTwo","P1")
            playerOnePieces--;
            lightScoreboard()
            return;
          }else{
              alert("bad move");              
          }
    }
});
