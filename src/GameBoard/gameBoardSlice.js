import { createSlice, } from '@reduxjs/toolkit'

const colSize=5;
const rowSize=4;
//20 matches, 10 pokemon ids needed
var tilesAndIds=SetGameTiles()
var pokemonIds = tilesAndIds.pokemonIds
var tiles = tilesAndIds.tiles



const initialState = {
  isGameOver:false,
  tiles:tiles,
  activeTile:{
    "row":-1,
    "col":-1
  },
  rowSize:rowSize,
  colSize:colSize,
  pokemonIds:pokemonIds,
  turnCounter:1,
  matchedCount:0
}
function SetGameTiles(){
  var pokemonIds = [...Array(10)];
  var row = [...Array(colSize)].map((e,i)=>{return{[i]:''}});
  var tiles = [...Array(rowSize)].map((e,i)=>{return [...row]})
  for(var idIndex=0;idIndex<pokemonIds.length;idIndex++){
    var newId = Math.random()*500;
    while(pokemonIds.includes(newId)){
      //reroll id
      newId = Math.random()*500;
    }
    console.log();
    pokemonIds[idIndex]=Math.floor(newId);
  }
  const matchableArray = [...pokemonIds,...pokemonIds];
  const shuffledMatches = matchableArray.sort((a, b) => 0.5 - Math.random());
  var shuffleCount=0;
  for(var i=0;i<tiles.length;i++){
    var currentRow = tiles[i];
    for(var j=0;j<currentRow.length;j++){
      tiles[i][j]={
        "id":""+shuffledMatches[shuffleCount],
        "matched":false
      };
      shuffleCount++;
    }
  }
  return { tiles, pokemonIds }
}
export const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState,
  reducers: {
    resetGame: (state,action)=>{
      console.log("!!!!RS")
      var tilesAndIds=SetGameTiles()
      pokemonIds = tilesAndIds.pokemonIds
      tiles = tilesAndIds.tiles
      return {
        ...initialState, 
        pokemonIds:pokemonIds,
        tiles:tiles
      }
    },
    selectTile:(state,action)=>{
      const selectedRow = action.payload.rowId
      const selectedCol = action.payload.columnId
      const selectedId = state.tiles[selectedRow][selectedCol].id
      const isSelectedTileMatched = state.tiles[selectedRow][selectedCol].matched
      var activeRow = state.activeTile.row
      var activeCol = state.activeTile.col
      const wasTileSelected = activeRow!==-1
      var isSameTile = wasTileSelected?activeRow === selectedRow && activeCol===selectedCol:true
      if(!wasTileSelected&& !isSelectedTileMatched){
        activeRow=selectedRow;
        activeCol=selectedCol;
      }
      var activeId = state.tiles[activeRow][activeCol].id
      var isMatchingTile = wasTileSelected && !isSameTile&&activeId===selectedId
      var selectedRowData = {
        ...state.tiles[selectedRow],
            ...state.tiles[selectedRow],
            [selectedCol]:{
              ...state.tiles[selectedRow][selectedCol],
              matched:isMatchingTile
            }
      }
      var activeRowData={
        ...state.tiles[activeRow],
        [activeCol]:{
          ...state.tiles[activeRow][activeCol],
          matched:isMatchingTile
        }
      }
      var selectedAndActive = {}
      if(selectedRow===activeRow){
        selectedAndActive={
          [selectedRow]:{
            ...selectedRowData,
            [activeCol]:{
              ...state.tiles[activeRow][activeCol],
              matched:isMatchingTile
            }
          }
        }
      }else{
        selectedAndActive={
          [selectedRow]:selectedRowData,
          [activeRow]:activeRowData
        }
      }
      return{
        ...state,
        tiles:{
          ...state.tiles,
          ...selectedAndActive
        },
        activeTile:{
          row:!wasTileSelected && !isSelectedTileMatched?selectedRow:-1,
          col:!wasTileSelected && !isSelectedTileMatched?selectedCol:-1
        },
        turnCounter:state.turnCounter +1,
        matchedCount:isMatchingTile?state.matchedCount +1:state.matchedCount + 0  
      }
    }

  },
})


export const { resetGame, selectTile } = gameBoardSlice.actions
export default gameBoardSlice.reducer