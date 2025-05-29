import { createSlice } from "@reduxjs/toolkit";
import { generateUnoDeck, shuffledCards } from "./utils";

export interface gameStateTypeProps {
    cardsData: string[],
    playerCardsData: {[key: string] : string[]},
}

const initialState: gameStateTypeProps = {
    cardsData: [],
    playerCardsData: {player1: [], player2: [], player3: [], player4: []},
};

const unoSlice = createSlice(
    {
        name: "uno",
        initialState: initialState,
        reducers: {
            setInitCardsData(state){
                state.cardsData = generateUnoDeck();
            },
            setShuffleCards(state, actions){
                state.cardsData = shuffledCards(actions.payload);
            },
            setPlayerCards(state, actions){
                const pd = {...state.playerCardsData};
                pd[actions.payload.playerId].push(actions.payload.newCard);

                state.playerCardsData = pd;
            }
        },
    }
);
export const unoActions = unoSlice.actions;
export const unoReducers = unoSlice.reducer;