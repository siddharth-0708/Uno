import { useEffect } from "react";
import useCardsShuffleAlgorithm from "../hooks/useCardsShuffleAlgorithm";

function Card(){
  const cardsData = useCardsShuffleAlgorithm();

  useEffect(()=>{
    console.log("card shuffle data ISSS ", cardsData);
    
  },[cardsData]);  
  return (
        <div style={{position: 'absolute', top: '0px'}}>
          Hello Uno {cardsData.length}
        </div>
    )
}
export default Card;