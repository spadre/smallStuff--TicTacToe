const gameBoard = {
     ticTacBoard: [],
     rows:3,
     columns:3,


     makeBoard: function (){
          
          for(i=0;i < this.rows;i++){
               this.ticTacBoard[i] = [];
               for(j=0;j < this.columns;j++){
                    this.ticTacBoard[i].push("[]");
               }
          }
          console.log(this.ticTacBoard)
         
          
     },

     fdwsasd: function(){
          this.ticTacBoard = updateBoard.insertBlock;
     }//



}

const updateBoard = {
     askPlayerRow:0,
     askPlayerColumn:1,

     insertBlock: function(){
          let newBoard = gameBoard.ticTacBoard.map(()=>{this.askPlayer(this.askPlayerRow,this.askPlayerColumn)});

          
          
          
          return newBoard;
     },
     askPlayer: function(row,column,marker){
          let newBoard = gameBoard.ticTacBoard;
          row--;
          column--;
          
          return newBoard[row].splice(column,1,marker);
     }

}

const player1= {
     name:"player 1",
     mark: "x"
}
const player2= {
     name:"player 2",
     mark: "o"
}
//gameBoard.makeBoard();


/*
function insertBlock(){

     let newBoard = gameBoard.ticTacBoard.map(()=>{askPlayer(1,1)});

          for(i=0;i<5;i++){}
     
     
          return newBoard;

}*/
/*
function askPlayer(row,column){
          let newBoard = gameBoard.ticTacBoard;
          console.log(newBoard);
          return newBoard[row].splice(column,1,player1.mark);

}
*/
const gameManager={
     gameOn:true,
     playerTurn:1,
     row:0,
     column:0,

     startGame:function(){
          gameBoard.makeBoard();
          while(this.gameOn){

               switch(this.playerTurn){
                    case 1: 
                         console.table(gameBoard.ticTacBoard)
                          row = prompt("Player 1 give number 1-3 for row: ");
                          column = prompt("Player 1 give number 1-3 for column: ");
                          updateBoard.askPlayer(row,column,player1.mark);
                          this.playerTurn = 2;
                          if((row <= 0 || row >= 4) || (column <= 0 || column >= 4)){this.playerTurn = 0}
                         break;
                    case 2: 
                         row = prompt("Player 2 give number 1-3 for row: ");
                         column = prompt("Player 2 give number 1-3 for column: ");
                         updateBoard.askPlayer(row,column,player2.mark);
                         this.playerTurn = 1;
                         if((row <= 0 || row >= 4) || (column <= 0 || column >= 4)){this.playerTurn = 0}
                         break;
                    default:
                         alert("Quitting game");
                         this.gameOn = false;
                         break;
               }

               
          }
     }


}

gameManager.startGame();



//console.log(insertBlock());