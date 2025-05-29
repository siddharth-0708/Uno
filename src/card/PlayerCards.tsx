import { useEffect } from "react";
import usePlayerChangedCard from "../hooks/usePlayerChangedCard";

function PlayerCards({playerId}: {playerId: string}) {
  const playerCardsData = usePlayerChangedCard(playerId);
  console.log("... player ID DOM is ", playerId);
  
  useEffect(()=>{
    console.log("player cards changed for player ", playerId, " with cards ", playerCardsData);
  },[playerCardsData])
 
  return (
        <div>
          {playerCardsData}
        </div>
    )
}
export default PlayerCards;