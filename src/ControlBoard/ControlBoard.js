import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../GameBoard/gameBoardSlice';
export function ControlBoard(props){
    const isGameOver = useSelector((state) => state.gameBoard.isGameOver);
    const dispatch = useDispatch()
    const turnCount = useSelector((state) => (state.gameBoard.turnCounter))
    const matchedCount = useSelector((state) => (state.gameBoard.matchedCount))
    console.log(turnCount)
    var displayTurnCount = Math.floor((turnCount +1) /2)
    return(
        <div className="control-board">
            <div className="control-row">
                <div 
                    className={`game-tile control-tile`}>
                        <div className="small-text">Current&nbsp;Turn:</div>
                        <div className="medium-text">{displayTurnCount}</div>
                </div>
                <div className="transparent-button game-tile"></div>
                <div 
                    className="game-tile control-tile">
                        <div className="small-text">&nbsp;Matches:</div>
                        <div className="medium-text">{matchedCount}</div>
                </div>
                <div className="transparent-button game-tile"></div>
                <div className="small-text game-tile reset-button-tile control-tile" onClick={() => dispatch(resetGame())}>
                    <div className="small-text">Reset Game</div>

                </div>
            </div>
        </div>
    );
}
export default ControlBoard;