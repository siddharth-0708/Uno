import { useCallback } from "react";
import useCardsCreate from "./useCardsCreate";

export default function useCardsShuffleAlgorithm() {
    const unoDeck = useCardsCreate();
    const cards = unoDeck();

    function fisherYatesShuffle(cards:string[]) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap elements
        }
        console.log("...shuffled cards is ", [...cards]);
        return cards;
    }
    return useCallback(()=>{
        console.log("...cards is ", [...cards]);
        
        return fisherYatesShuffle(cards);
    },[cards]);
}
