import useCardsShuffleAlgorithm from "../hooks/useCardsShuffleAlgorithm";

function Card(){
  const cardsData = useCardsShuffleAlgorithm();
  const ee = cardsData();
  console.log("...aaa ", ee);

  setTimeout(() => {
    cardsData();
  }, 2000);
  
    return (
        <div style={{position: 'absolute', top: '0px'}}>
          Hello Uno {ee.length}
        </div>
    )
}
export default Card;