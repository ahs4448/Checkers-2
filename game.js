var playerTurn = "p1";
var playerOnePieces = 12;
var playerTwoPieces = 12;
var num;
var arr = [];
var positionRow;
var positionNum;
var isKing = "";
var badMoveValsOdd = [4, 12, 20, 28]
var badMoveValsEven = [5, 13, 21, 29]
var badExtraskipsLeft = [1, 9, 17, 25, 5, 13, 21, 29]
var badExtraskipsRight = [4, 12, 20, 28, 8, 16, 24, 32]



let arrayy = [
    null, "P1", "P1", "P1", "P1",
    "P1", "P1", "P1", "P1",
    "P1", "P1", "P1", "P1",
    "S", "S", "S", "S",
    "S", "S", "S", "S",
    "P2", "P2", "P2", "P2",
    "P2", "P2", "P2", "P2",
    "P2", "P2", "P2", "P2",
]

function lightScoreboard(){

    if(playerTurn === "p1"){
        $(".playerOne").css("color","orange")
        $(".playerTwo").css("color","black");
    }else if(playerTurn === "p2"){
        $(".playerOne").css("color","black")
        $(".playerTwo").css("color","orange");
    }
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

function MoveUpleft(row) {
    $(arr[0]).animate({ left: "-=64", top: "-=64" });

    $(arr[0]).attr("data", row)

    $(arr[0]).attr("position", `${num}`)
    $(arr[0]).removeClass("selected")
    makeKing()
    arr = [];
}

function MoveUpRight(row) {
    $(arr[0]).animate({ left: "+=64", top: "-=64" });

    $(arr[0]).attr("data", row)

    $(arr[0]).attr("position", `${num}`)
    $(arr[0]).removeClass("selected")
    makeKing()
    arr = [];
}

function MoveDownRight(row) {
    $(arr[0]).animate({ left: "+=64", top: "+=64" });

    $(arr[0]).attr("data", row)

    $(arr[0]).attr("position", `${num}`)
    $(arr[0]).removeClass("selected")
    makeKing()
    arr = [];
}

function MoveDownLeft(row) {
    $(arr[0]).animate({ left: "-=64", top: "+=64" });

    $(arr[0]).attr("data", row)

    $(arr[0]).attr("position", `${num}`)
    $(arr[0]).removeClass("selected")
    makeKing()
    arr = [];
}

function SkipUpRight() {
    $(arr[0]).animate({ left: "+=128", top: "-=128" });
    $(arr[0]).attr("position", `${num}`)
}

function SkipUpleft() {
    $(arr[0]).animate({ left: "-=128", top: "-=128" });
    $(arr[0]).attr("position", `${num}`)
}

function SkipDownRight() {
    $(arr[0]).animate({ left: "+=128", top: "+=128" });
    $(arr[0]).attr("position", `${num}`)
}

function SkipDownLeft() {
    $(arr[0]).animate({ left: "-=128", top: "+=128" });
    $(arr[0]).attr("position", `${num}`)
}

// player ones movement
$(".valid2").click(function () {

    $(".valid").css("background-color", "black");
    $(".selected").removeClass("selected")
    $(this).toggleClass("selected")

    arr = []
    arr.push(this);

    isKing = arr[0].getAttribute("class")


    positionRow = arr[0].getAttribute("data");  //even or odd row
    positionNum = parseInt(arr[0].getAttribute("position"))  //the number on the board where the piece is located

    //odd moves
    if (arrayy[positionNum + 5] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == false) {
        $(`[value='${positionNum + 5}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum + 4] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == false) {
        $(`[value='${positionNum + 4}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum + 4] == "S" && badMoveValsOdd.includes(positionNum) == true) {
        $(`[value='${positionNum + 4}']`).css("background-color", "grey");
    }
    // odd move kings

    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 3] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == false) {
        $(`[value='${positionNum - 3}']`).css("background-color", "grey");
    }

    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 4] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == false) {
        $(`[value='${positionNum - 4}']`).css("background-color", "grey");
    }

    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 4] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == true) {
        $(`[value='${positionNum - 4}']`).css("background-color", "grey");
    }


    //odd skips
    if (arrayy[positionNum + 9] == "S" && positionRow == "odd-from-top" && arrayy[positionNum + 5] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
        $(`[value='${positionNum + 9}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum + 7] == "S" && positionRow == "odd-from-top" && arrayy[positionNum + 4] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
        $(`[value='${positionNum + 7}']`).css("background-color", "grey");
    }

    //odd skip kings
    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 9] == "S" && positionRow == "odd-from-top" && arrayy[positionNum - 4] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
        $(`[value='${positionNum - 9}']`).css("background-color", "grey");
    }
    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 7] == "S" && positionRow == "odd-from-top" && arrayy[positionNum - 3] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
        $(`[value='${positionNum - 7}']`).css("background-color", "grey");
    }

    //even moves
    if (arrayy[positionNum + 4] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == false) {
        $(`[value='${positionNum + 4}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum + 3] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == false) {
        $(`[value='${positionNum + 3}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum + 4] == "S" && badMoveValsEven.includes(positionNum) == true) {
        $(`[value='${positionNum + 4}']`).css("background-color", "grey");
    }

    //even move kings

    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 4] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == false) {
        $(`[value='${positionNum - 4}']`).css("background-color", "grey");
    }

    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 5] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == false) {
        $(`[value='${positionNum - 5}']`).css("background-color", "grey");
    }

    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 4] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == true) {
        $(`[value='${positionNum - 4}']`).css("background-color", "grey");
    }

    //even skips
    if (arrayy[positionNum + 9] == "S" && positionRow == "even-from-top" && arrayy[positionNum + 4] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
        $(`[value='${positionNum + 9}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum + 7] == "S" && positionRow == "even-from-top" && arrayy[positionNum + 3] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
        $(`[value='${positionNum + 7}']`).css("background-color", "grey");
    }

    //even skip kings
    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 9] == "S" && positionRow == "even-from-top" && arrayy[positionNum - 5] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
        $(`[value='${positionNum - 9}']`).css("background-color", "grey");
    }
    if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 7] == "S" && positionRow == "even-from-top" && arrayy[positionNum - 4] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
        $(`[value='${positionNum - 7}']`).css("background-color", "grey");
    }

});


//player twos movement
$(".valid3").click(function () {

    $(".valid").css("background-color", "black");
    $(".selected").removeClass("selected")
    $(this).toggleClass("selected")

    arr = []
    arr.push(this);

    isKing = arr[0].getAttribute("class")

    positionRow = arr[0].getAttribute("data");  //even or odd row
    positionNum = parseInt(arr[0].getAttribute("position"))  //the number on the board where the piece is located



    // arrayy[positionRow] = "P1S"
    //odd moves
    if (arrayy[positionNum - 4] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == false) {
        $(`[value='${positionNum - 4}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum - 3] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == false) {
        $(`[value='${positionNum - 3}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum - 4] == "S" && badMoveValsOdd.includes(positionNum) == true) {
        $(`[value='${positionNum - 4}']`).css("background-color", "grey");
    }

    // odd move kings
    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 5] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == false) {
        $(`[value='${positionNum + 5}']`).css("background-color", "grey");
    }
    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 4] == "S" && positionRow == "odd-from-top" && badMoveValsOdd.includes(positionNum) == false) {
        $(`[value='${positionNum + 4}']`).css("background-color", "grey");
    }
    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 4] == "S" && badMoveValsOdd.includes(positionNum) == true) {
        $(`[value='${positionNum + 4}']`).css("background-color", "grey");
    }


    //even moves
    if (arrayy[positionNum - 4] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == false) {
        $(`[value='${positionNum - 4}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum - 5] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == false) {
        $(`[value='${positionNum - 5}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum - 4] == "S" && badMoveValsEven.includes(positionNum) == true) {
        $(`[value='${positionNum - 4}']`).css("background-color", "grey");
    }

    //even move kings
    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 4] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == false) {
        $(`[value='${positionNum + 4}']`).css("background-color", "grey");
    }
    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 3] == "S" && positionRow == "even-from-top" && badMoveValsEven.includes(positionNum) == false) {
        $(`[value='${positionNum + 3}']`).css("background-color", "grey");
    }
    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 4] == "S" && badMoveValsEven.includes(positionNum) == true) {
        $(`[value='${positionNum + 4}']`).css("background-color", "grey");
    }



    // odd skips
    if (arrayy[positionNum - 9] == "S" && positionRow == "odd-from-top" && arrayy[positionNum - 4] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
        $(`[value='${positionNum - 9}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum - 7] == "S" && positionRow == "odd-from-top" && arrayy[positionNum - 3] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
        $(`[value='${positionNum - 7}']`).css("background-color", "grey");
    }
    //odd skip kings

    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 9] == "S" && positionRow == "odd-from-top" && arrayy[positionNum + 5] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
        $(`[value='${positionNum + 9}']`).css("background-color", "grey");
    }
    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 7] == "S" && positionRow == "odd-from-top" && arrayy[positionNum + 4] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
        $(`[value='${positionNum + 7}']`).css("background-color", "grey");
    }
    // even skips

    if (arrayy[positionNum - 9] == "S" && positionRow == "even-from-top" && arrayy[positionNum - 5] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
        $(`[value='${positionNum - 9}']`).css("background-color", "grey");
    }
    if (arrayy[positionNum - 7] == "S" && positionRow == "even-from-top" && arrayy[positionNum - 4] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
        $(`[value='${positionNum - 7}']`).css("background-color", "grey");
    }
    // even skip kings

    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 9] == "S" && positionRow == "even-from-top" && arrayy[positionNum + 4] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
        $(`[value='${positionNum + 9}']`).css("background-color", "grey");
    }
    if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 7] == "S" && positionRow == "even-from-top" && arrayy[positionNum + 3] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
        $(`[value='${positionNum + 7}']`).css("background-color", "grey");
    }

});




$(".valid").click(function () {



    if (this.style.backgroundColor == "black") {
        console.log("no move")
        return;
    }

    num = parseInt(this.getAttribute("value")) //the spot on the board where the piece will be move

    // if(playerTurn == "p1" &&){
    //     // arrayy[positionNum] = "S";
    //     // arrayy[num] = "P1";
    // }

    //moving odd p1
    if (playerTurn == "p1" && positionRow == "odd-from-top" && num == positionNum + 5) {
        MoveDownRight("even-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum + 5] = "P1";
        playerTurn = "p2"
        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
        lightScoreboard();
    }
    else if (playerTurn == "p1" && positionRow == "odd-from-top" && num == positionNum + 4) {
        MoveDownLeft("even-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum + 4] = "P1";
        playerTurn = "p2"
        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
        lightScoreboard();
    }
    //moving even p1
    else if (playerTurn == "p1" && positionRow == "even-from-top" && num == positionNum + 4) {
        MoveDownRight("odd-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum + 4] = "P1";
        playerTurn = "p2"
        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
        lightScoreboard();
    }
    else if (playerTurn == "p1" && positionRow == "even-from-top" && num == positionNum + 3) {
        MoveDownLeft("odd-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum + 3] = "P1";
        playerTurn = "p2"
        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
        lightScoreboard();
    }
    //

    //moving kings even p1
    else if (isKing == 'valid2 kingOne selected' && playerTurn == "p1" && positionRow == "even-from-top" && num == positionNum - 4) {
        MoveUpRight("odd-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum - 4] = "P1";
        playerTurn = "p2";
        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
        lightScoreboard();
    }
    else if (isKing == 'valid2 kingOne selected' && playerTurn == "p1" && positionRow == "even-from-top" && num == positionNum - 5) {
        MoveUpleft("odd-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum - 5] = "P1";
        playerTurn = "p2";
        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
        lightScoreboard();
    }
    // moving kings odd
    else if (isKing == 'valid2 kingOne selected' && playerTurn == "p1" && positionRow == "odd-from-top" && num == positionNum - 4) {
        MoveUpleft("even-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum - 4] = "P1";
        playerTurn = "p2";
        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
        lightScoreboard();
    }
    else if (isKing == 'valid2 kingOne selected' && playerTurn == "p1" && positionRow == "odd-from-top" && num == positionNum - 3) {
        MoveUpRight("even-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum - 3] = "P1";
        playerTurn = "p2";
        $(".valid2").css("pointer-events", "none")
        $(".valid3").css("pointer-events", "auto")
        lightScoreboard();
    }
    //skipping odd p1
    else if (playerTurn == "p1" && positionRow == "odd-from-top" && num == positionNum + 9) {
        SkipDownRight()
        $(".valid2").css("pointer-events", "none")
        $(`[position='${positionNum + 5}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum + 5] = "S";
        arrayy[positionNum + 9] = "P1";
        positionNum = num;
        if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;

        }
        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2") {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 7}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");
            return;


        }
        if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;


        }

        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p2"
                $(".valid2").css("pointer-events", "none")
                $(".valid3").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }
    else if (playerTurn == "p1" && positionRow == "odd-from-top" && num == positionNum + 7) {
        SkipDownLeft()
        $(".valid2").css("pointer-events", "none")
        $(`[position='${positionNum + 4}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum + 4] = "S";
        arrayy[positionNum + 7] = "P1";
        positionNum = num;

        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip .')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 7}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");
            return;
        }
        if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2") {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;
        }
        if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')

            $(`[value='${positionNum - 9}']`).css("background-color", "grey");


            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;
        }


        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p2"
                $(".valid2").css("pointer-events", "none")
                $(".valid3").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }
    //skipping odd kings p1

    else if (isKing == "valid2 kingOne selected" && playerTurn == "p1" && positionRow == "odd-from-top" && num == positionNum - 9) {
        SkipUpleft()
        $(".valid2").css("pointer-events", "none")
        $(`[position='${positionNum - 4}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum - 4] = "S";
        arrayy[positionNum - 9] = "P1";
        positionNum = num;
        if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum - 9}']`).css("background-color", "grey");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");


            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;
        }
        if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P2") {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum - 7}']`).css("background-color", "grey");


            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");

            return;

        }
        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 7}']`).css("background-color", "grey");


            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");


            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;
        }

        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p2"
                $(".valid2").css("pointer-events", "none")
                $(".valid3").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }
    else if (isKing == "valid2 kingOne selected" && playerTurn == "p1" && positionRow == "odd-from-top" && num == positionNum - 7) {
        SkipUpRight()
        $(".valid2").css("pointer-events", "none")
        $(`[position='${positionNum - 3}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum - 3] = "S";
        arrayy[positionNum - 7] = "P1";
        positionNum = num;
        if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum - 7}']`).css("background-color", "grey");


            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");


            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");
            return;

        }
        if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P2") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");


            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;


        } if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;

        }


        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p2"
                $(".valid2").css("pointer-events", "none")
                $(".valid3").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }



    //skipping even p1
    else if (playerTurn == "p1" && positionRow == "even-from-top" && num == positionNum + 9) {
        SkipDownRight()
        $(".valid2").css("pointer-events", "none")
        $(`[position='${positionNum + 4}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum + 4] = "S";
        arrayy[positionNum + 9] = "P1";
        positionNum = num;
        if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");


            $(`[value='${positionNum + 9}']`).css("background-color", "grey");


            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;
        }

        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 7}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");
            return;
        }
        if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;

        }


        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p2"
                $(".valid2").css("pointer-events", "none")
                $(".valid3").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }
    else if (playerTurn == "p1" && positionRow == "even-from-top" && num == positionNum + 7) {
        SkipDownLeft()
        $(".valid2").css("pointer-events", "none")
        $(`[position='${positionNum + 3}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum + 3] = "S";
        arrayy[positionNum + 7] = "P1";
        positionNum = num;
        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')


            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 7}']`).css("background-color", "grey");


            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            return;
        }

        if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P2") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;
        }
        if (isKing == "valid2 kingOne selected" && arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P2" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");

            return;
        }

        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p2"
                $(".valid2").css("pointer-events", "none")
                $(".valid3").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }

    //skipping even kings p1

    else if (isKing == "valid2 kingOne selected" && playerTurn == "p1" && positionRow == "even-from-top" && num == positionNum - 9) {
        SkipUpleft()
        $(".valid2").css("pointer-events", "none")
        $(`[position='${positionNum - 5}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum - 5] = "S";
        arrayy[positionNum - 9] = "P1";
        positionNum = num;
        if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')


            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2" && badExtraskipsLeft.includes(positionNum) == false ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;

        }
        if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P2") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P2" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2" && badExtraskipsLeft.includes(positionNum) == false ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;


        } if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 7}']`).css("background-color", "grey");


            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P2" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;

        }

        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p2"
                $(".valid2").css("pointer-events", "none")
                $(".valid3").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }
    else if (isKing == "valid2 kingOne selected" && playerTurn == "p1" && positionRow == "even-from-top" && num == positionNum - 7) {
        SkipUpRight()
        $(".valid2").css("pointer-events", "none")
        $(`[position='${positionNum - 4}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum - 4] = "S";
        arrayy[positionNum - 7] = "P1";
        positionNum = num;
        if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P2" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')


            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P2" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            return;

        }
        if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P2") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");




            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;


        } if (isKing == "valid2 kingOne selected" && arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P2" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P2" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");


            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;

        }

        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p2"
                $(".valid2").css("pointer-events", "none")
                $(".valid3").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }


    //p2 moving odd

    else if (playerTurn == "p2" && positionRow == "odd-from-top" && num == positionNum - 4) {
        MoveUpleft("even-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum - 4] = "P2";
        playerTurn = "p1"
        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
        lightScoreboard();
    } else if (playerTurn == "p2" && positionRow == "odd-from-top" && num == positionNum - 3) {
        MoveUpRight("even-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum - 3] = "P2";
        playerTurn = "p1"
        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
        lightScoreboard();
    }
    // p2 moving even
    else if (playerTurn == "p2" && positionRow == "even-from-top" && num == positionNum - 4) {
        MoveUpRight("odd-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum - 4] = "P2";
        playerTurn = "p1"
        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
        lightScoreboard();
    }
    else if (playerTurn == "p2" && positionRow == "even-from-top" && num == positionNum - 5) {
        MoveUpleft("odd-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum - 5] = "P2";
        playerTurn = "p1"
        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
        lightScoreboard();
    }

    //p2 king moving even

    else if (isKing == 'valid3 kingTwo selected' && playerTurn == "p2" && positionRow == "even-from-top" && num == positionNum + 4) {
        MoveDownRight("odd-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum + 4] = "P2";
        playerTurn = "p1";
        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
        lightScoreboard();
    }
    else if ('valid3 kingTwo selected' && playerTurn == "p2" && positionRow == "even-from-top" && num == positionNum + 3) {
        MoveDownLeft("odd-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum + 3] = "P2";
        playerTurn = "p1";
        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
        lightScoreboard();
    }
    //p2 moving kings odd
    else if ('valid3 kingTwo selected' && playerTurn == "p2" && positionRow == "odd-from-top" && num == positionNum + 5) {
        MoveDownRight("even-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum + 5] = "P2";
        playerTurn = "p1";
        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
        lightScoreboard();
    }
    else if ('valid3 kingTwo selected' && playerTurn == "p2" && positionRow == "odd-from-top" && num == positionNum + 4) {
        MoveDownLeft("even-from-top")
        arrayy[positionNum] = "S";
        arrayy[positionNum + 4] = "P2";
        playerTurn = "p1";
        $(".valid3").css("pointer-events", "none")
        $(".valid2").css("pointer-events", "auto")
        lightScoreboard();
    }


    // skipping p2 even

    else if (playerTurn == "p2" && positionRow == "even-from-top" && num == positionNum - 9) {
        SkipUpleft()
        $(`[position='${positionNum - 5}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum - 5] = "S";
        arrayy[positionNum - 9] = "P2";
        positionNum = num;
        if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 4}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P2" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;

        } if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P1") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 4}']`).css("background-color", "black");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P2" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            return;
        }

        if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P1" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;


        }


        else {
            $(arr[0]).removeClass("selected")
            makeKing()
            arr = []
            positionNum = 0;
            positionRow = "";
            playerTurn = "p1"
            $(".valid3").css("pointer-events", "none")
            $(".valid2").css("pointer-events", "auto")
            lightScoreboard();
        }
    }

    else if (playerTurn == "p2" && positionRow == "even-from-top" && num == positionNum - 7) {
        SkipUpRight()
        $(`[position='${positionNum - 4}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum - 4] = "S";
        arrayy[positionNum - 7] = "P2";
        positionNum = num;
        if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");

            return;
        }
        if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P1" ) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");


            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P1" && badExtraskipsRight.includes(positionNum) == false ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");

            return;
        }

        if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 7}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P1" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;


        }


        else {
            $(arr[0]).removeClass("selected")
            makeKing()
            arr = []
            positionNum = 0;
            positionRow = "";
            playerTurn = "p1"
            $(".valid3").css("pointer-events", "none")
            $(".valid2").css("pointer-events", "auto")
            lightScoreboard();
        }
    }
    // skipping odd p2
    else if (playerTurn == "p2" && positionRow == "odd-from-top" && num == positionNum - 9) {
        SkipUpleft()
        $(`[position='${positionNum - 4}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum - 4] = "S";
        arrayy[positionNum - 9] = "P2";
        positionNum = num;
        if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P1" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
            : $(`[value='${positionNum - 7}']`).css("background-color", "black");
        return;

           
        } if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P1") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            return
        } if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 7}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P1" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;


        }

        else {
            $(arr[0]).removeClass("selected")
            makeKing()
            arr = []
            positionNum = 0;
            positionRow = "";
            playerTurn = "p1"
            $(".valid3").css("pointer-events", "none")
            $(".valid2").css("pointer-events", "auto")
            lightScoreboard();
        }
    }

    else if (playerTurn == "p2" && positionRow == "odd-from-top" && num == positionNum - 7) {
        SkipUpRight()
        $(`[position='${positionNum - 3}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum - 3] = "S";
        arrayy[positionNum - 7] = "P2";
        positionNum = num;
        if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            return;
        } if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P1") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");

            return
        }
        if (isKing == "valid3 kingTwo selected" && arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P1" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;


        }

        else {
            $(arr[0]).removeClass("selected")
            makeKing()
            arr = []
            positionNum = 0;
            positionRow = "";
            playerTurn = "p1"
            $(".valid3").css("pointer-events", "none")
            $(".valid2").css("pointer-events", "auto")
            lightScoreboard();
        }
    }


    // skipping odd kings p2

    else if (isKing == "valid3 kingTwo selected" && playerTurn == "p2" && positionRow == "odd-from-top" && num == positionNum + 9) {
        SkipDownRight()
        $(`[position='${positionNum + 5}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum + 5] = "S";
        arrayy[positionNum + 9] = "P2";
        positionNum = num;
        if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");


            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P1" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;
        }
        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P1") {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 7}']`).css("background-color", "grey");


            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P1" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");

            return;

        }
        if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 3] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip king 3c')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum - 7}']`).css("background-color", "grey");


            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");


            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;
        }

        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p1"
                $(".valid3").css("pointer-events", "none")
                $(".valid2").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }
    else if (isKing == "valid3 kingTwo selected" && playerTurn == "p2" && positionRow == "odd-from-top" && num == positionNum + 7) {
        SkipDownLeft()
        $(`[position='${positionNum + 4}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum + 4] = "S";
        arrayy[positionNum + 7] = "P2";
        positionNum = num;
        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')
            $(".valid").css("background-color", "black");

            $(`[value='${positionNum + 7}']`).css("background-color", "grey");


            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");


            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");
            return;

        }
        if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P1") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 9}']`).css("background-color", "grey");


            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");
            return;
        }
        if (arrayy[positionNum - 9] == "S" && arrayy[positionNum - 4] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip 3 king condition')
            // king third condition
            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 5] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;

        }


        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p1"
                $(".valid3").css("pointer-events", "none")
                $(".valid2").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }
    // skipping even kings p2

    else if (isKing == "valid3 kingTwo selected" && playerTurn == "p2" && positionRow == "even-from-top" && num == positionNum + 9) {
        SkipDownRight()
        $(`[position='${positionNum + 4}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum + 4] = "S";
        arrayy[positionNum + 9] = "P2";
        positionNum = num;
        if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')


            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 9}']`).css("background-color", "grey");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;

        }
        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 7}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P1" ? $(`[value='${positionNum - 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 7}']`).css("background-color", "black");
            return;


        } if (arrayy[positionNum - 7] == "S" && arrayy[positionNum - 4] == "P1" && badExtraskipsRight.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");


            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;

        }

        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p1"
                $(".valid3").css("pointer-events", "none")
                $(".valid2").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }
    else if (isKing == "valid3 kingTwo selected" && playerTurn == "p2" && positionRow == "even-from-top" && num == positionNum + 7) {
        SkipDownLeft()
        $(`[position='${positionNum + 3}']`).css("visibility", "hidden");
        $(`[value='${positionNum}']`).css("background-color", "black");
        arrayy[positionNum] = "S";
        arrayy[positionNum + 3] = "S";
        arrayy[positionNum + 7] = "P2";
        positionNum = num;
        if (arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')


            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 7}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");

            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");

            return;

        }
        if (arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1") {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum + 9}']`).css("background-color", "grey");


            arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P1" ? $(`[value='${positionNum - 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum - 9}']`).css("background-color", "black");


            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;


        } if (isKing == "valid3 kingTwo selected" && arrayy[positionNum - 9] == "S" && arrayy[positionNum - 5] == "P1" && badExtraskipsLeft.includes(positionNum) == false) {
            alert('extra skip')

            $(".valid").css("background-color", "black");
            $(`[value='${positionNum - 9}']`).css("background-color", "grey");

            arrayy[positionNum + 9] == "S" && arrayy[positionNum + 4] == "P1" ? $(`[value='${positionNum + 9}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 9}']`).css("background-color", "black");


            arrayy[positionNum + 7] == "S" && arrayy[positionNum + 3] == "P1" ? $(`[value='${positionNum + 7}']`).css("background-color", "grey")
                : $(`[value='${positionNum + 7}']`).css("background-color", "black");
            return;

        }

        else {
            setTimeout(function () {
                $(arr[0]).removeClass("selected")
                makeKing()
                arr = []
                positionNum = 0;
                positionRow = "";
                playerTurn = "p1"
                $(".valid3").css("pointer-events", "none")
                $(".valid2").css("pointer-events", "auto")
                lightScoreboard();
            }, 800);
        }
    }

    $(".valid").css("background-color", "black");

});
