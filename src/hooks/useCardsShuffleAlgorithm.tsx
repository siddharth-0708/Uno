import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function useCardsShuffleAlgorithm() {
    const cardsArray = useRef<string[]>([]);
    const [state, setState] = useState(0);
    const tm = useRef<NodeJS.Timeout | 0>(0);

    useEffect(()=>{
        tm.current = setInterval(() => {
            setState((data)=> data+1);// game state that triggers shuffle
        }, 5000);
    },[]);

    useEffect(()=>{
        if(state > 3){
            console.log("CLEARINGGGGGG");
            
            clearInterval(tm.current);
        }
    },[state])

    const generateUnoDeck = useCallback(()=>{
        const colors = ['R', 'G', 'B', 'Y'];
        const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const actionCards = ['Skip', 'Reverse', 'Draw2'];
      
        let deck = [];
      
        // For each color
        for (const color of colors) {
          // One zero per color
          deck.push('0' + color);
      
          // Two of each 1-9
          for (let i = 1; i <= 9; i++) {
            deck.push(i + color);
            deck.push(i + color);
          }
      
          // Two of each action card
          for (const action of actionCards) {
            deck.push(action + color);
            deck.push(action + color);
          }
        }
      
        // 4 Wild cards and 4 Wild Draw Four cards
        for (let i = 0; i < 4; i++) {
          deck.push('W');
          deck.push('WD4');
        }
      
        return deck;
    }, []);

    const shuffledCards = useMemo(()=>{
        if(cardsArray.current.length === 0){
            cardsArray.current = generateUnoDeck();
        }
        console.log("......................");
        
        console.log("Initial deck of cards is ", [...cardsArray.current]);

        const cards = cardsArray.current;

        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap elements
        }
        console.log("shuffled deck of cards is ", [...cardsArray.current]);
        return cards;
    },[state]);

    return shuffledCards;
}
