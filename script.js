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