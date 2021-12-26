'use strict';

$(document).ready(() => {
    let game_boxes = document.getElementsByClassName('game_val');

    // Click event listener for all boxes of the grid
    for (let i = 0; i < game_boxes.length; i++) {
        game_boxes[i].addEventListener('click', putData);
    }

    let counter = 1;
    // Function for populating the grid boxes with the values of 'X' or 'O'.
    function putData() {
        if (counter <= 9) {
            if (counter % 2 != 0) {
                if(this.innerText == ""){
                    this.innerText = 'X';
                    counter++;
                }
                // Checking for the winner
                winner();
            }
            else {
                if(this.innerText == ""){
                    this.innerText = 'O';
                    counter++;
                }
                // Checking for the winner
                winner();
            }

            // Display "Match is draw" if all the grid boxes are filled & NO one is winner
            drawGame();
        }
    }

    // Function for returning requested div element.
    function getData(div) {
        return document.getElementById(div).innerHTML;
    }

    // Checking for winner
    function winner() {
        // Row wise Checking
        rowWise();
        // Column wise checking
        columnWise();
        // Cross Checking
        crossChecking();
    }

    // Function for Row wise checking
    function rowWise() {
        if (getData('div1') != "" && getData('div2') != "" && getData('div3') != "" && getData('div1') == getData('div2') && getData('div2') == getData('div3')) {
            displayWinner(div1);
        }
        else if (getData('div4') != "" && getData('div5') != "" && getData('div6') != "" && getData('div4') == getData('div5') && getData('div5') == getData('div6')) {
            displayWinner(div4);
        }
        else if (getData('div7') != "" && getData('div8') != "" && getData('div9') != "" && getData('div7') == getData('div8') && getData('div8') == getData('div9')) {
            displayWinner(div7);
        }
    }

    // Function for Column wise checking
    function columnWise() {
        if (getData('div1') != "" && getData('div4') != "" && getData('div7') != "" && getData('div1') == getData('div4') && getData('div4') == getData('div7')) {
            displayWinner(div1);
        }
        else if (getData('div2') != "" && getData('div5') != "" && getData('div8') != "" && getData('div2') == getData('div5') && getData('div5') == getData('div8')) {
            displayWinner(div2);
        }
        else if (getData('div3') != "" && getData('div6') != "" && getData('div9') != "" && getData('div3') == getData('div6') && getData('div6') == getData('div9')) {
            displayWinner(div3);
        }
    }

    // Function for Cross checking
    function crossChecking() {
        if (getData('div1') != "" && getData('div5') != "" && getData('div9') != "" && getData('div1') == getData('div5') && getData('div5') == getData('div9')) {
            displayWinner(div1);
        }
        else if (getData('div3') != "" && getData('div5') != "" && getData('div7') != "" && getData('div3') == getData('div5') && getData('div5') == getData('div7')) {
            displayWinner(div3);
        }
    }

    // Function for displaying winner
    function displayWinner(div) {
        $('#game_details').html(`<h3>Winner is : <span id="winner">${div.innerText}</span></h3>
        <button id="play_again">Play Again</button> <img src="Win.gif" height="120px" width="150px" alt="win_emoji">`);
        $('#game_details').css('visibility', 'visible');
        playAgain();
    }

    // Function for displaying the Draw of game.
    function drawGame() {
        // Display "Match is draw" if all the grid boxes are filled & NO one is winner
        if (getData('div1') != "" && getData('div2') != "" && getData('div3') != "" && getData('div4') != "" && getData('div5') != "" && getData('div6') != "" && getData('div7') != "" && getData('div8') != "" && getData('div9') != "") {
            $('#game_details').html(`<h3>Match is Draw</h3><button id="play_again">Play Again</button>`);
            $('#game_details').css('visibility', 'visible');

            // Playagain Function for resetting the grid box values.
            playAgain();
        }
    }

    // Playagain button event listener
    function playAgain() {
        // Defining the CSS animation on "Play_Again" button
        $('#play_again').css({'animation-name':'animate', 'animation-duration':'1s','animation-timing-function':'ease-in-out', 'animation-iteration-count':'infinite'});

        // Click event listener on "Play_Again" button
        $('#play_again').click(() => {
            $('#game_details').fadeOut(1000,()=>{
                 location.reload();
            });
        });
    }
});