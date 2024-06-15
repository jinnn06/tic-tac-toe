var turn = 0;
var downtextE = document.getElementById('downtext');
var gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(function(item) {
    item.addEventListener('click', function() {

        if (item.textContent != "O" && item.textContent != "X" && turn % 2 == 0) {
            item.textContent = 'O';
            downtextE.textContent = "X's turn";
            turn++;
        } else if (item.textContent !== "O" && item.textContent !== "X" && turn % 2 == 1) {
            item.textContent = 'X';
            downtextE.textContent = "O's turn";
            turn++;
        }
        
        if (
            a1.textContent == a2.textContent && a2.textContent == a3.textContent ||
            b1.textContent == b2.textContent && b2.textContent == b3.textContent ||
            c1.textContent == c2.textContent && c2.textContent == c3.textContent ||
            a1.textContent == b1.textContent && b1.textContent == c1.textContent ||
            a2.textContent == b2.textContent && b2.textContent == c2.textContent ||
            a3.textContent == b3.textContent && b3.textContent == c3.textContent ||
            a1.textContent == b2.textContent && b2.textContent == c3.textContent ||
            a3.textContent == b2.textContent && b2.textContent == c1.textContent
        ) {
            if (turn % 2 == 1) {
                downtextE.textContent = "O WIN";
                setTimeout(function() {
                    window.alert("Play Again?");
                    location.reload();
                }, 100);
            } else if (turn % 2 == 0) {
                downtextE.textContent = "X WIN";
                setTimeout(function() {
                    window.alert("Play Again?");
                    location.reload();
                }, 100);
            }
        }
        
        else if(turn == 9 || gameOver == false ) { 
            downtextE.textContent = "D r a w";
            setTimeout(function() {
                window.alert("Play Again?");
                location.reload();
            }, 100);
        }
    });
});
