export const generateUnoDeck = ()=>{
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
    
    //shuffle and create Init cards
    return shuffledCards(deck);
};
export const shuffledCards = (cardsArray: string[])=>{
    const cards = [...cardsArray];
    for (let i = 0; i < cards.length; i++) {
        const j = Math.floor(Math.random() * (cards.length - i)) + i;
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
};