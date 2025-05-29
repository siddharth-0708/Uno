import { useMemo } from "react";
import gameSelectors from "../store/gameSelectors";

export default function usePlayerChangedCard(playerId: string) {
    const playerCardsData = gameSelectors.getPlayerCardsData();

    return useMemo(()=>{
        return playerCardsData[playerId];
    }, [playerCardsData[playerId].length])
}
