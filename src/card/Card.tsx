import { useEffect } from "react";
import gameSelectors from "../store/gameSelectors";
import { useDispatch } from "react-redux";
import { unoActions } from "../store/gameSlices";
import PlayerCards from "./PlayerCards";
let i = 0;
function Card(){
  const cardsData = gameSelectors.getCardsData();
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("card shuffle data ISSS ", cardsData);

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        dispatch(unoActions.setPlayerCards({playerId: "player1", newCard: cardsData[i]}));        
      }, 200);
    }
    // if(i > 4){
    //   return;
    // }
    // setTimeout(() => {
    //   i++;
    //   dispatch(unoActions.setShuffleCards(cardsData));
    // }, 1000);
  },[cardsData]);  
  return (
      <div>
        {["player1","player2","player3","player4"].map((id)=>(
          <PlayerCards key={id} playerId = {id}></PlayerCards>
        ))}
      </div>
    )
}
export default Card;