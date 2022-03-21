import Tile from './Tile';
import { useSelector } from 'react-redux'
export function TileRow(props){
    const colCount = useSelector((state) => state.gameBoard.colSize);
    const tileRows = [...Array(colCount)].map((colVal,index) =>
        <Tile rowId = {props.rowId} colId={index} key={index}></Tile>
    );
    // <Tile rowId = {props.rowId} colId={0}></Tile>
    //         <Tile rowId = {props.rowId} colId={1}></Tile>
    //         <Tile rowId = {props.rowId} colId={2}></Tile>
    return(
        <div className="flex-row">
            {tileRows}
        </div>
    );
}
export default TileRow;