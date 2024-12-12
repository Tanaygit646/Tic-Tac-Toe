let currentPlayer="X";
        const boxes = document.querySelectorAll('.box');
        const resetButton = document.querySelector(".reset");
        
        const WinningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        boxes.forEach((box) =>{
            box.addEventListener("click",() =>{
                if(box.textContent){
                    return;
                }
                box.textContent = currentPlayer;
                if(checkWin()){
                    alert(`${currentPlayer} wins!`);
                    resetGame();
                }
                else if(Array.from(boxes).every(box => box.textContent)){
                    alert("its a draw");
                    resetGame();
                }
                else{
                        currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            });
        });
        
        resetButton.addEventListener("click" , resetGame);
        
        function checkWin(){
            return WinningConditions.some(conditions =>{
                const [a,b,c] = conditions;
                return boxes[a].textContent == currentPlayer &&
                 boxes[b].textContent == currentPlayer &&
                 boxes[c].textContent == currentPlayer 
            });
        }
        
        function resetGame(){
            boxes.forEach((box) =>{
                box.textContent = "";
            });
            currentPlayer = "X";
        }