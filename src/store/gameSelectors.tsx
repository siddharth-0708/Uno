import { useSelector } from "react-redux";
import { gameStateTypeProps } from "./gameSlices";
import { RootState } from "./gameStore";

const gameSelectors = {
    getCardsData: (): gameStateTypeProps['cardsData']=>{
        return useSelector(({gameState}: RootState)=> gameState.cardsData);
    },
    getPlayerCardsData: (): gameStateTypeProps['playerCardsData']=>{
        return useSelector(({gameState}: RootState)=> gameState.playerCardsData);
    }
}
export default gameSelectors;