const gameBoard = (function(){
    //private
    let Board = Array(9).fill("");

    //public
    const getBoard = ()=> Board;
    const setMark = (position,marker)=>{
        if(Board[position]===""){
            Board[position]= marker;
            return true;
        }
        else return false;
    }
    const resetBoard =()=> Board = Board.fill("");

    return{getBoard,setMark,resetBoard};

})();
function createPlayer(name,marker){
    return{name,marker};
}
const gameController =(function(){
    let p1;
    let p2;
    let xisplay = true;

    const start=(name1,name2)=>{
        p1 = createPlayer(name1,"X");
        p2= createPlayer(name2,"O");
        xisplay= true;
        gameBoard.resetBoard();
        console.log(`Game started! ${p1.name} (X) vs ${p2.name} (O)`);
    };

    const printBoard = () => {
        const board = gameBoard.getBoard();
        console.log(`
         ${board[0] || 0} | ${board[1] || 1} | ${board[2] || 2}
        ---+---+---
         ${board[3] || 3} | ${board[4] || 4} | ${board[5] || 5}
        ---+---+---
         ${board[6] || 6} | ${board[7] || 7} | ${board[8] || 8}
        `);
    };
    const ifWinner = (marker) => {
        let correct = [
            [0,1,2],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [3,4,5],
            [6,7,8],
            [2,4,6]
        ];
    
        for (let i of correct) {
            const board = gameBoard.getBoard();
            if (
                board[i[0]] === board[i[1]] &&
                board[i[1]] === board[i[2]] &&
                board[i[0]] !== ""
            ) {
                return true;
            }
        }
    
        return false; // Only if no winning line is found
    };
    
    const isTie=()=>{
        let board = gameBoard.getBoard();
        for(let i of board){
            if(i!=="")return false;
        }
        return true;
    }
    const handleMove=(position)=>{
        //marker is given by if teh xisplay is true or not
        const currentPlayer = xisplay?p1:p2;
        const success= gameBoard.setMark(position,currentPlayer.marker);

        if(!success){
            console.log("invalid move try another tile");
        }
        printBoard();

        if(ifWinner(currentPlayer.marker)){
            console.log(`winner is the ${currentPlayer.name}`);
            gameBoard.resetBoard();
            
            return;
        }
        if (isTie()) {
            console.log("It's a tie!");
            return;
        }
        xisplay = !xisplay;

        s
    }

    return {start, handleMove};
})();