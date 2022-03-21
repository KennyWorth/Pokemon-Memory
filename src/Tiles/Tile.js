import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectTile } from '../GameBoard/gameBoardSlice'
export function Tile(props){
    const tileText = useSelector((state) => state.gameBoard.tiles[props.rowId][props.colId].id);
    const isMatched = useSelector((state) => state.gameBoard.tiles[props.rowId][props.colId].matched);
    const activeTile = useSelector((state) => state.gameBoard.activeTile);
    const isActiveTile = activeTile.row === props.rowId && activeTile.col === props.colId;

    const dispatch = useDispatch()
    let [pokemonImage, setPokemonImage] = useState(null)
    let [showImage, setShowImage] = useState(false)
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/"+tileText)
        .then(response => response.json())
            // 4. Setting *pokemonImage* to the image url that we received from the response above
        .then(data => setPokemonImage(data.sprites.front_default))
      },)
    return(
        <div className={`
                game-tile
                    ${tileText !==''
                        ?` ${tileText.toLowerCase()}-tile 
                    ${isMatched}-tile 
                    ${isActiveTile && !isMatched
                        ?'active-tile':''}
                    ${showImage && !isMatched && !isActiveTile
                        ?'selected-tile':''}
                    `:''}
                `} 
            style={{
                backgroundImage: `${showImage || isActiveTile||isMatched?`url(${pokemonImage?pokemonImage:''})`:"none"}`,
                backgroundSize: "80% 65%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}
            onClick={() => {
                setShowImage(true)
                setTimeout(() => setShowImage(false), 1000)
                if(!isMatched && !isActiveTile){
                    dispatch(selectTile({
                        rowId:props.rowId,
                        columnId:props.colId,
                    }))
                }
            }}

        >
        </div>
    );
}
export default Tile;