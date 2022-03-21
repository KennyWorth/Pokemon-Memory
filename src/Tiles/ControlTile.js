import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTile } from '../GameBoard/gameBoardSlice'
export function Tile(props){
    const tileText = useSelector((state) => state.gameBoard.tiles[props.rowId][props.colId]);
    const dispatch = useDispatch()
    return(
        <div 
            className={`game-tile${tileText !==''?` ${tileText.toLowerCase()}-tile`:''}`} 
            onClick={() => dispatch(setTile({
                row:props.rowId,
                column:props.colId
            }))}
        >
            {tileText}
        </div>
    );
}
export default Tile;