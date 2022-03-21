import TileRow from '../Tiles/TileRow';
import React from 'react'
import { useSelector } from 'react-redux'
import ControlBoard from '../ControlBoard/ControlBoard';
export function GameBoard(props){
    const rowCount = useSelector((state) => state.gameBoard.rowSize);
    const tileRows = [...Array(rowCount)].map((rowVal,index) =>
        <TileRow rowId={index} key={index}></TileRow>
    );
    return(
        <div className="game-board">
            <ControlBoard></ControlBoard>
            <div className="flex-container">
                {tileRows}
            </div>
        </div>
    );
}
export default GameBoard;